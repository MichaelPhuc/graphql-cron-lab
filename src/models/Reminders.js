import mongoose from 'mongoose'

export const Reminder = mongoose.model("Reminder", 
    {name: String, 
    date: String, 
    time: String})