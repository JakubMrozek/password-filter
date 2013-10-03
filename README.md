# password-filter

Create PBKDF2 hash of the password in plain text

## Installation

    $ npm install password-filter

## Example

```js
var options = {
  salt: 'abcdef',
  iterations: 1000,
  keylen: 16
};

var plainTextPassword = 12345;

filter(plainTextPassword, options, function(err, password){
  //password is 9fb04a7fce25c7f8652135820dddb814
})

```

## License

MIT

