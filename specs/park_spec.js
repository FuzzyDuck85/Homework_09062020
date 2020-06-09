const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

  let dinosaur1;
  let dinosaur2;
  let dinosaur3;
  let dinosaur4;
  let dinosaur5;
  let dinosaur6;
  let dinosaur7;

  let park;

  beforeEach(function () {
    dinosaur1 = new Dinosaur('Tyrannosaurus','carnivore', 50)
    dinosaur2 = new Dinosaur('Brachiosaurus','herbivore', 35)
    dinosaur3 = new Dinosaur('Dilophosaurus','carnivore', 42)
    dinosaur4 = new Dinosaur('Gallimimus','omnivore', 10)
    dinosaur5 = new Dinosaur('Parasaurolophus','herbivore', 14)
    dinosaur6 = new Dinosaur('Triceratops','herbivore', 38)
    dinosaur7 = new Dinosaur('Velociraptor','carnivore', 51)

    park = new Park('Jurassic Park', 125);
  })

  it('should have a name', function(){
    const actual = park.name;
    assert.strictEqual(actual, 'Jurassic Park');
  });

  it('should have a ticket price', function(){
    const actual = park.ticketPrice;
    assert.strictEqual(actual, 125);
  });

  it('should have a collection of dinosaurs', function(){
    const expected = [];
    assert.deepStrictEqual(park.dinosaurs, expected)
  });

  it('should be able to add a dinosaur to its collection', function(){
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur2);
    park.addDinosaur(dinosaur3);
    park.addDinosaur(dinosaur4);
    park.addDinosaur(dinosaur5);
    park.addDinosaur(dinosaur6);
    park.addDinosaur(dinosaur7);
    const expected = [dinosaur1, dinosaur2, dinosaur3, dinosaur4, dinosaur5, dinosaur6, dinosaur7];
    assert.deepStrictEqual(park.dinosaurs, expected);
  });

  it('should be able to remove a dinosaur from its collection', function(){
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur2);
    park.removeDinosaur(dinosaur1);
    const actual = park.dinosaurs.includes(dinosaur1);
    assert.strictEqual(actual, false);
  });

  it('should be able to find the dinosaur that attracts the most visitors');

  it('should be able to find all dinosaurs of a particular species');

  it('should be able to calculate the total number of visitors per day');

  it('should be able to calculate the total number of visitors per year');

  it('should be able to calculate total revenue for one year');

});
