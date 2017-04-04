var assert = require('assert');
var Dinosaur = require('../dinosaur.js');
var Park = require('../park.js');

describe('park', function(){

  park = new Park();

  it('has enclosure', function(){
    // assert false on park enclosure because an empty array is falsey but no array would be null or undefined? 
    assert.equal(false, park.enclosure);
  })


})