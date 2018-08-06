module.exports = {
    extract: featureText => {
        const result = {
            scenarios: []
        }

        scenariosRegex = /((?:@[^\s]+\s?)+)?\n\s*Scenario(?: Outline)?:\s*(.+)/gm
        featureRegex = /Feature:\s*(.+)/gm

        let fm = featureRegex.exec(featureText)
        result.name = fm && fm[1]

        let m = scenariosRegex.exec(featureText)
        while (m != null){
            let scenario = {
                name: m[2],
                tags: []
            }
            if(m[1])
                scenario.tags = m[1].split(' ').map(t => t.replace('\r',''))

            result.scenarios.push(scenario)

            m = scenariosRegex.exec(featureText)
        }
        return result
    }
}