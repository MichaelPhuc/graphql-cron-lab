import { Note } from './Notes.js'

export const resolvers = {
    Query: {
        upcomingnotes: () => Note.find()   
    },

    Mutation: {
        addNote: async ( _, {title, content, dateCreated, reminder } ) => {
            const note = new Note({title, content, dateCreated, reminder })
            await note.save()
            return note
        }
    }
}