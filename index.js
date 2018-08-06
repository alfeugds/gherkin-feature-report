(async () =>{
    const featureReport = require('./feature-report')
    const fs = require('fs')
    const outputDir = 'output'
    const outputCsvFilePath = `${outputDir}/features.csv`
    const inputFolder = process.argv[2]

    const csv = await featureReport.getCsv(inputFolder)

    if (!fs.existsSync(outputDir)){
        fs.mkdirSync(outputDir);
    }
    fs.writeFileSync(outputCsvFilePath, csv)

    console.log(`Done. File ${outputCsvFilePath} created.`)
})()