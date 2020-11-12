const cron = require('node-cron')
const moment = require('moment')

const fakeData = [
    { name: "michael", date: "2020-11-05", time: "9:30" },
    { name: "mile", date: "2020-12-05", time: "10:00" }
]



cron.schedule('0 * * * *', () => {
    let time = moment()
    const result = fakeData.filter( calEvent => calEvent.date == time.format("YYYY-MM-DD") )
    if ( result.length != 0 ) {
        console.log(result)
    }
    console.log(time)
})