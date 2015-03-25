var assert = chai.assert;
var should = chai.should();
var expect = chai.expect;

var server = {
	property: 'a string'
};

describe('the ribbit server', function() {
  describe('the ribbit server parameters', function(){
    it('should have all the necessary methods', function(){
      assert.typeOf(server, 'object');
      expect(server).to.have.property('property');
    });
  });
});





