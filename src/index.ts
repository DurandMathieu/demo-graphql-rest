const { ApolloServer } = require("apollo-server-express");
const swaggerUi = require("swagger-ui-express");
const express = require("express");

import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import fetch from 'node-fetch';
import { HttpLink } from 'apollo-link-http';
import gql from "graphql-tag";
import schema from "./schema";
import { POINT_CONVERSION_COMPRESSED } from 'constants';

const cache = new InMemoryCache();
const link = new HttpLink({
  uri: 'http://localhost:4000/graphql',
  fetch
})
const client = new ApolloClient({
  cache,
  link,
  defaultOptions: {
    watchQuery: {
      fetchPolicy: 'no-cache',
      errorPolicy: 'ignore',
    },
    query: {
      fetchPolicy: 'no-cache',
      errorPolicy: 'all',
    },
  }
})

const app = express();
const options = {
  schema
};
const server = new ApolloServer(options);
server.applyMiddleware({ app });


app.get("/products/ppv/:id/policy", (req: any, res: any) => {
  console.log('ppv policy');
  client
  .query({
    query: gql`
      query GetPpvProductPolicy {
        ppvProduct(id:"423432") {
          productCode,
          status,
          policy {
            expiryDate,
            effectiveDate,
            renewal {
              effectiveDate
            }
          }
        }
      }
    `
  })
  .then(result => {
    console.log(result.data);
    res.send(result.data.ppvProduct.policy);
  });
});

app.get("/products/ppv/:id", (req: any, res: any) => {
  console.log('ppv product');
  client
  .query({
    query: gql`
      query GetPpvProduct {
        ppvProduct(id:"423432") {
          productCode,
          status,
          make,
          year,
          model
        }
      }
    `
  })
  .then(result => {
    console.log(result.data);
    res.send(result.data.ppvProduct);
  });
});


// const openApi = OpenAPI({
//   schema,
//   info: {
//     title: "Facade GEN API",
//     version: "1.0.0"
//   }
// });
// app.use(
//   useSofa({
//     schema,
//     onRoute(info) {
//       openApi.addRoute(info, {
//         basePath: ""
//       });
//     }
//   })
// );
// app.use("/", swaggerUi.serve, swaggerUi.setup(openApi.get()));

app.listen(4000, () => {
  const url = `http://localhost:${4000}`;
  console.log(url);
});