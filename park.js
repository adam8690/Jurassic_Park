var Dinosaur = require('./dinosaur.js')

Park = function(){
  this.enclosure = [];
}

Park.prototype = {
  addDinosaur: function(dinosaur){
    this.enclosure.push(dinosaur);
  },
  removeType: function(type){
    for(i = 0; i < this.enclosure.length; i++){
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
  },
  advanceYears: function(noOfYears){
    initialEnclosureLength = this.enclosure.length;
    for (var year = 0; year < noOfYears; year++){
      for (i=0; i < initialEnclosureLength; i++){
        for(var births = 1; births <= this.enclosure[i].offSpringRate; births++){
          var dino = new Dinosaur(this.enclosure[i].type, this.enclosure[i].offSpringRate);
          this.addDinosaur(dino);
        }
      }
    }
  }
}

module.exports = Park;