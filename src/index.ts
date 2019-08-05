const { ApolloServer } = require("apollo-server-express");
const swaggerUi = require("swagger-ui-express");
const express = require("express");
import { InMemoryCache } from "apollo-cache-inmemory";
import { ApolloClient } from "apollo-client";
import { createHttpLink } from "apollo-link-http";
import fetch from "node-fetch";

import {
  convertNodeHttpToRequest,
  HttpQueryError,
  runHttpQuery
} from "apollo-server-core";

import { resolve } from "path";
import { OpenAPI, useSofa } from "sofa-api";
import getDataSources from "./data-sources";
import schema from "./schema";

import winston from "winston";
winston.level = "debug";
winston.add(new winston.transports.Console());

const app = express();
const options = {
  dataSources: getDataSources,
  schema
};
const server = new ApolloServer(options);
server.applyMiddleware({ app });

const openApi = OpenAPI({
  schema,
  info: {
    title: "Example API",
    version: "3.0.0"
  }
});
app.use(
  useSofa({
    schema,
    onRoute(info: any) {
      openApi.addRoute(info, {
        basePath: ""
      });
    }
  })
);
app.use("/", swaggerUi.serve, swaggerUi.setup(openApi.get()));

app.listen(4000, () => {
  const url = `http://localhost:${4000}`;
  console.log(url);
});
