var assert = require('assert');
var Dinosaur = require('../dinosaur.js');
var Park = require('../park.js');

describe('park', function(){

  park = new Park();
  var dinosaur = new Dinosaur('T-Rex', 1);
  var barney = new Dinosaur('purple', 0);
  var raptor = new Dinosaur('Velociraptor', 5);

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

  it('can return all dinos with >2 offspringrate', function(){
    park.addDinosaur(dinosaur);
    park.addDinosaur(dinosaur);
    park.addDinosaur(barney);
    park.addDinosaur(barney);
    park.addDinosaur(raptor);
    park.addDinosaur(raptor);
    park.addDinosaur(raptor);
    var highBirthers = park.getHighBirthRateDinos();
    assert.strictEqual(3, highBirthers.length);
    assert.strictEqual('Velociraptor', highBirthers[0].type);
  })

  it('Velociraptors after one year should be 6', function(){
    park.enclosure = [];
    park.addDinosaur(raptor);
    park.advanceYears(1);
    assert.strictEqual(6, park.enclosure.length);
  })

  it('Velociraptors after two years should be 36', function(){
    park.enclosure = [];
    park.addDinosaur(raptor);
    park.advanceYears(2);
    // breaks if more than 9 years go by!!
    assert.strictEqual(36, park.enclosure.length);
  })

  it('add 2 of each dino and should have correc number after 1 year', function(){
    park.enclosure = [];
    park.addDinosaur(raptor);
    park.addDinosaur(raptor);
    park.addDinosaur(dinosaur);
    park.addDinosaur(dinosaur);
    park.advanceYears(2);
    assert.strictEqual(80, park.enclosure.length);
  })


})