import apolloServer from 'apollo-server'
const { gql } = apolloServer

export const typeDefs = gql`
    type Note {
        title: String!
        content: String!
        dateCreated: String!
    }

    type Reminder {
        text: String!
        remind: String!
        completed: Boolean!
        completed_at: String!
        dateCreated: String!
    }

    type Query {
        notes: [Note]
        reminders: [Reminder]
    }

    type Mutation {
        addNote(title: String!, content: String!, dateCreated: Int!): Note!
        addReminder(text: String!, remind: String!, completed: Boolean!, completed_at: String!, dateCreated: String!): Reminder!
    }
    
`