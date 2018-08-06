function escapeToCsv(text){
    return `"${text.replace(/"/g, '""')}"`
}

function getCsvFromFeature(inputFile){
    const extractor = require('./feature-extractor')
    const fs = require('fs'); 
    const file = fs.readFileSync(inputFile).toString()
    const feature = extractor.extract(file)
    let result = ''
    feature.scenarios.forEach(scenario => {
        result += `${escapeToCsv(inputFile)}, ${escapeToCsv(feature.name)}, ${escapeToCsv(scenario.name)}, ${escapeToCsv(scenario.tags && scenario.tags.join(' '))}`
        result += '\n'
    })
    return result
}

async function getCsv(dir){
    const extractor = require('./feature-extractor')
    const glob = require("glob")
    const fs = require('fs')
    const CSV_HEADER = '"Path", "Feature", "Scenario", "Tags"'
    let result = `${CSV_HEADER}\n`

    const globPromise = new Promise((resolve, reject) => {
        glob(`${dir}/**/*.feature`, (er, files) => {
            files.forEach( inputFile => {
                result += getCsvFromFeature(inputFile)
            })
            resolve(result)
        })

    })

    return globPromise
}

module.exports = {
    getCsvFromFeature: getCsvFromFeature,
    getCsv: getCsv
}