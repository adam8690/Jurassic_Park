var assert = require('assert')
var Dinosaur = require('../dinosaur.js');

describe('Dinosaur', function(){

var dinosaur = new Dinosaur('T-Rex', 1);

  it('dinosaur has a type', function(){
    assert.strictEqual('T-Rex', dinosaur.type);
  })

  it('dinosaur has a offSpringRate', function(){
    assert.strictEqual(1, dinosaur.offSpringRate);
  })







})

