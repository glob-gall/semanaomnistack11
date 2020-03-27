const generateUniqueId = require('../../src/utils/generateUniqueId')

describe('Generate Unique ID',()=>{
    it('shold generate as unique id',()=>{
        const id = generateUniqueId()
        expect(id).toHaveLength(8)
    })
})