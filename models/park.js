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


Park.prototype.mostVisitors = function(){
  let most_popular = 0;
  for(let i = 0; i < this.dinosaurs.length; i++){
    if (this.dinosaurs[i].guestsAttractedPerDay > this.dinosaurs[most_popular].guestsAttractedPerDay){
      most_popular = i
    }
  }
  return this.dinosaurs[most_popular];
};

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

module.exports = Park;
