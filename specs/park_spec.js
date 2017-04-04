var assert = require('assert');
var Dinosaur = require('../dinosaur.js');
var Park = require('../park.js');

describe('park', function(){

  park = new Park();
  var dinosaur = new Dinosaur('T-Rex', 1);
  var barney = new Dinosaur('purple', 0);
  console.log(dinosaur);

  it('has enclosure', function(){
    // assert false on park enclosure because an empty array is falsey but no array would be null or undefined? 
    assert.equal(false, park.enclosure);
    assert.strictEqual(0, park.enclosure.length);
  })

  it('can add dinosaur to enclosure', function(){
    park.addDinosaur(dinosaur);
    assert.strictEqual(1, park.enclosure.length);
  })

  it('can remove all dinos of type', function(){
    park.addDinosaur(dinosaur);
    park.addDinosaur(barney);
    park.removeType('purple');
    assert.strictEqual(dinosaur, park.enclosure[0]);
  })


})