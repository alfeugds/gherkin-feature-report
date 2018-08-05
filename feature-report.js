function getCsvFromFeature(inputFile){
    const extractor = require('./feature-extractor')
    const fs = require('fs'); 
    const file = fs.readFileSync(inputFile).toString()
    const feature = extractor.extract(file)
    let result = ''
    feature.scenarios.forEach(scenario => {
        result += `${inputFile}, ${feature.name}, ${scenario.name}, ${scenario.tags && scenario.tags.join(' ')}`
        result += '\n'
    })
    return result
}

module.exports = {
    getCsvFromFeature: getCsvFromFeature,
    getCsv: dir => {
        const extractor = require('./feature-extractor')
        const glob = require("glob")
        const fs = require('fs'); 
        // options is optional
        glob("test/test-data/**/*.feature", (er, files) => {
            //console.log(files)
            files.forEach( inputFile => {

                //when
                const file = fs.readFileSync(inputFile).toString()
                //when
                const feature = extractor.extract(file)
                //then
            })
        })
        return 'test'
    }
}