describe('Feature Extractor', () => {
    const extractor = require('../feature-extractor')
    test('Extracts features from .feature file', () => {
        //given
        const fs = require('fs'); 
        const inputFile = 'test/test-data/features/some-features/test1.feature'
        const file = fs.readFileSync(inputFile).toString()
        //when
        const feature = extractor.extract(file)
        //then
        expect(feature.name).toEqual('Testing Feature')
        expect(feature.scenarios.length).toEqual(5)
        expect(feature.scenarios[0].name).toEqual('Wilson posts to his own blog')
    })

    test('Returns empty feature upon empty file', () => {
        //given
        const file = ''
        //when
        const feature = extractor.extract(file)
        //then
        expect(feature.name).toEqual(null)
        expect(feature.scenarios.length).toEqual(0)
    })
})