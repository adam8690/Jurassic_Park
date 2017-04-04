var Dinosaur = require('./dinosaur.js')

Park = function(){
  this.enclosure = [];
}

Park.prototype = {
  addDinosaur: function(dinosaur){
    this.enclosure.push(dinosaur);
  },
  removeType: function(type){
    for(i = 0; this.enclosure[i]; i++){
      if(this.enclosure[i].type === type){
        this.enclosure.splice(i, 1);
      }
    }
  },
  getHighBirthRateDinos: function(){
    var highBirthers = [];
    for(i=0; this.enclosure[i]; i++){
      if(this.enclosure[i].offSpringRate > 2){
        highBirthers.push(this.enclosure[i]);
      }
    }
    return highBirthers;
  }
}

module.exports = Park;