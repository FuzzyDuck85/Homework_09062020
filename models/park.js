const Park = function (name, ticketPrice) {
  this.name = name;
  this.ticketPrice = ticketPrice;
  this.dinosaurs = [];
}
Park.prototype.addDinosaur = function(dinosaur){
  this.dinosaurs.push(dinosaur);
};

Park.prototype.removeDinosaur = function(dinosaur){
  const indexOfDinosaur = this.dinosaurs.indexOf(dinosaur);
  this.dinosaurs.splice(indexOfDinosaur, 1);
}

Park.prototype.dingyDinosaur = function(dinosaur){
  this.dinosaurs.shift(dinosaur);
}


Park.prototype.mostVisitors = function(){
  let most_popular = 0;
  for(let i = 0; i < this.dinosaurs.length; i++){
    if (this.dinosaurs[i].guestsAttractedPerDay > this.dinosaurs[most_popular].guestsAttractedPerDay){
      most_popular = i
    }
  }
  return this.dinosaurs[most_popular];
};

Park.prototype.findMostAttractiveDinosaur = function () {
  let mostAttractiveDino = this.dinosaurs[0];

  for (const dino of this.dinosaurs) {
    if (dino.guestsAttractedPerDay > mostAttractiveDino.guestsAttractedPerDay) {
      mostAttractiveDino = dino;
    }
  }

  return mostAttractiveDino;
}

Park.prototype.findDinosaurBySpecies = function(species){
  let found = [];
  for(let dinosaur of this.dinosaurs){
    if(dinosaur.species === species){
      found.push(dinosaur);
    }
  }
  return found;
};

Park.prototype.guestsPerDay = function(){
  total_guests_day = 0;
  for(let dinosaur of this.dinosaurs){
    total_guests_day += dinosaur.guestsAttractedPerDay;
  }
  return total_guests_day;
};

Park.prototype.guestsPerYear = function(){
  return this.guestsPerDay() * 365;
};

Park.prototype.totalAnnualRevenue = function(){
  return this.guestsPerYear() * this.ticketPrice;
};

Park.prototype.removeSpecies = function(species){
  let newDinos = [];
  for(dino of this.dinosaurs){
    if(dino.species != species){
      newDinos.push(dino)
    };
  };
  this.dinosaurs = newDinos;
};

Park.prototype.numberOfDiets = function(){
  let dietObject = {};
  for(dino of this.dinosaurs){
    if(!Object.keys(dietObject).includes(dino.diet)){
      dietObject[dino.diet] = 1;
    }else{
      dietObject[dino.diet] += 1;
    }
  }
  return dietObject;
}


module.exports = Park;
