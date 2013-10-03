var filter = require('../');
var assert = require('assert')

describe('#filter()', function(){

  var options = {
    salt: 'abcdef',
    iterations: 1000,
    keylen: 16
  };

  var expected = '9fb04a7fce25c7f8652135820dddb814';

  it('should generate PBKDF2 hash', function(done){
    filter('12345', options, function(err, password){
      assert.equal(expected, password);
      done();
    })
  })


})
