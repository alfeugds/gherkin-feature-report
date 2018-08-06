(async () =>{
    const featureReport = require('./feature-report')
    const inputFile = process.argv[2]
    const csv = await featureReport.getCsv(inputFile)
    console.log(csv)
})()