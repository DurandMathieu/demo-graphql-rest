import gql from "graphql-tag";

export default gql`
  type PpvProduct {
    productCode: String!
    make: String!
    model: String!
    year: Int!
    status: String!
    policy: Policy
    storages: [Storage]
  }

  type Policy {
    id: String!
    effectiveDate: String!
    expiryDate: String
    renewal: PolicyRenewal
  }

  type PolicyRenewal {
    effectiveDate: String!
  }

  type Role {
    type: String!
    person: Person
    attributes: [Attribute!]
  }

  type Person {
    id: String!
    firstName: String!
    lastName: String!
  }

  type Attribute {
    key: String!
    value: String!
  }

  type Storage {
    effectiveDate: String!
    expiryDate: String
  }

  type Query {
    ppvProduct(id: String!): PpvProduct!
  }

  schema {
    query: Query
  }
`;
