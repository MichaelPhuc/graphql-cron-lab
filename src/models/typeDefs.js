import apolloServer from 'apollo-server'
const { gql } = apolloServer

export const typeDefs = gql`
    type Note {
        title: String!
        content: String!
        dateCreated: String!
        reminder: String!
    }

    type Query {
        upcomingnotes: [Note]
    }

    type Mutation {
        addNote(title: String!, content: String!, dateCreated: String!, reminder: String!): Note!
    }
    
`