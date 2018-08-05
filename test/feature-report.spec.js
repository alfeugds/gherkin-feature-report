describe('Feature Report', () => {
    test.skip('Generates csv report for a feature folder structure', (done) => {
        //given
        const featureReport = require('../feature-report')
        const dir = 'test/test-data'
        //when
        const csv = featureReport.getCsv()

        //then
        const expectedCsv = 
`Feature Test, Scenario Test, @manual
Feature Test, Scenario Test, @manual`
        expect(csv).toEqual(expectedCsv)
        done()
        
    })

    test('Returns a csv from a feature', () => {
        //given
        const featureReport = require('../feature-report')
        const inputFile = 'test/test-data/features/some-features/test1.feature'
        //when
        const csv = featureReport.getCsvFromFeature(inputFile)

        //then
        const expectedCsv = 
`test/test-data/features/some-features/test1.feature, Testing Feature, Wilson posts to his own blog, @manual @author
test/test-data/features/some-features/test1.feature, Testing Feature, Wilson fails to post to somebody else's blog, @manual
test/test-data/features/some-features/test1.feature, Testing Feature, Greg posts to a client's blog, @component-behavior
test/test-data/features/some-features/test1.feature, Testing Feature, Greg posts to a client's blog 2, undefined
test/test-data/features/some-features/test1.feature, Testing Feature, Greg posts to a client's blog 2 outline test, @manual
`
        expect(csv).toEqual(expectedCsv)
    })
})