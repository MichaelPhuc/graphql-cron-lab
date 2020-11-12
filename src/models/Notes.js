import mongoose from 'mongoose'

export const Note = mongoose.model("Note", 
    {title: String, 
    content: String, 
    dateCreated: String,
    reminder: String
})