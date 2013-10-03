var crypto = require('crypto');

module.exports = function(password, options, cb) {
  if (typeof options !== 'object') {
    return cb(new Error('options object is required!'));
  }

  if (!options.salt) {
    return cb(new Error('salt option is required!'));
  }

  var iterations = options.iterations || 1000;
  var keylen = options.keylen || 64;

  crypto.pbkdf2(password, options.salt, iterations, keylen, function(err, result){
    if (err) return cb(err);
    cb(null, result.toString('hex'));
  });

};
