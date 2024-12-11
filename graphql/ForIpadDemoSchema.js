import { gql } from 'apollo-server';

const typeDefs = `
  type To_Do {
    id: ID!
    Ticket_Type: String!
    Due_Today_: Int!
    Past_Due_: Int!
    Future_: Int!
  }

  input To_DoInput {
    id: ID!
    Ticket_Type: String!
    Due_Today_: Int!
    Past_Due_: Int!
    Future_: Int!
  }

  type Query {
    getToDoList: [To_Do]!
    getToDoById(id: ID!): To_Do
  }

  type Mutation {
    addToDo(input: To_DoInput!): To_Do
    updateToDoById(id: ID!, input: To_DoInput!): To_Do
    deleteToDoById(id: ID!): To_Do
  }
`;

export default typeDefs;