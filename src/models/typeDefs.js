import apolloServer from 'apollo-server'
const { gql } = apolloServer

export const typeDefs = gql`
    type Note {
        title: String!
        content: String!
        dateCreated: String!
    }

    type Reminder {
        name: String!
        date: String!
        time: String!
    }

    type Query {
        notes: [Note]
        reminders :[Reminder]
    }

    type Mutation {
        addNote(title: String!, content: String!, dateCreated: String!): Note!
        addReminder(name: String!, date: String!, time: String!): Reminder!
    }
    
`