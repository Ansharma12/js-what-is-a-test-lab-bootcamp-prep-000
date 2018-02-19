// write your code below!
var name = "Susan"
var height = 35
var message = ` is name ,${height} inches tall`
module.exports = {name, height}

describe('height', () => {
  it('is less than 40', () => {
    expect(index.height).toBeLessThan(40)
  })
  describe('Message', () => {
    it('gives the name and height', () => {
      expect(index.message).toInclude(index.name)
      expect(index.message).toInclude(index.height)
    })
