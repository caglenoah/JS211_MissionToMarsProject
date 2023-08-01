/** CURRENT OBJECTIVE
 * //I DO NOT UNDERSTAND HOW TO ALLOW CREWMEMBERS TO ENTER A SHIP, NOR HOW TO ASSIGN A SHIP TO A CREW MEMBER. SEEK HELP. 
// I need to re-initialize the repository. Not connecting. 
 */

'use strict';
const assert = require('assert');


//crewMembers need to ba able to be assigned(enter) to ships

// const enterShip = () => {
//   crewMember.Ship('crewmember has entered '(Ship));
// };



// This is an object that has types of jobs and the values each provide.
const jobTypes = {
  pilot: 'MAV',
  mechanic: 'Repair Ship',
  commander: 'Main Ship',
  programmer: 'Any Ship!'
};

// Your code will go here
// need a crew member class that has a: name, job, specialSkill and a ship upon instantiation.
//  -will need to build a ship class that has a : name, type, ability and crew.




// Classes/constructors
class crewMember {
  constructor(name, job, specialSkill, ship) {
    this.name = name;
    this.specialSkill = specialSkill;
    this.job = job;
    this.ship = ship;
  }
};

class Ship {
  //should habe a name, type and ability
  constructor(name, type, ability, crew) {
    this.name = name;
    this.type = type;
    this.ability = ability;
    this.crewMember = crewMember;
  }
};

//people
const crewMember1 = new crewMember('Rick Marinez', 'pilot', 'chemistry', 'null');
const crewMember2 = new crewMember('Commander Lewis', 'commander', 'geology', 'null');

//ships
let hermes = new Ship('Hermes', 'Main Ship', 'Interplanetary Space Travel', 'crewMember');
let mav = new Ship('Mars Ascent Vehicle', 'MAV', 'Ascend into low orbit', 'crewMember');


console.log(crewMember1)
console.log(crewMember2)
console.log(mav)
console.log(hermes)

console.log(enterShip(crewMember1, hermes))



// Begin by reading the tests and building a function that will full each one.
// As you build, you might not have to build them in order, maybe you do...
// These are the tests
if (typeof describe === 'function'){
  describe('CrewMember', function(){
    it('should have a name, a job, a specialSkill and ship upon instantiation', function(){
      // this creates a CrewMember and passes the following arguments into its constructor:
      // 'Rick Martinez', 'pilot', 'chemistry'
      const crewMember1 = new crewMember('Rick Martinez', 'pilot', 'chemistry');
      assert.equal(crewMember1.name, 'Rick Martinez');
      assert.equal(crewMember1.job, 'pilot');
      assert.equal(crewMember1.specialSkill, 'chemistry');
      assert.equal(crewMember1.ship, null);
    });
    
    it('can enter a ship', function(){
      // this creates a new Ship. Can you build a class that can be called so that this Ship can be built?
      let mav = new Ship('Mars Ascent Vehicle', 'MAV', 'Ascend into low orbit');
      const crewMember1 = new crewMember('Rick Martinez', 'pilot', 'chemistry');
      crewMember1.enterShip(mav);
      assert.equal(crewMember1.ship, mav);
      assert.equal(mav.crew.length, 1);
      assert.equal(mav.crew[0], crewMember1);
    });
  });
  
  describe('Ship', function(){
    it('should have a name, a type, an ability and an empty crew upon instantiation', function(){
      let mav = new Ship('Mars Ascent Vehicle', 'MAV', 'Ascend into low orbit');
      assert.equal(mav.name, 'Mars Ascent Vehicle');
      assert.equal(mav.type, 'MAV');
      assert.equal(mav.ability, 'Ascend into low orbit');
      assert.equal(mav.crew.length, 0);
    });
    
    it('can return a mission statement correctly', function(){
      let mav = new Ship('Mars Ascent Vehicle', 'MAV', 'Ascend into low orbit');
      const crewMember1 = new crewMember('Rick Martinez', 'pilot', 'chemistry');
      let hermes = new Ship('Hermes', 'Main Ship', 'Interplanetary Space Travel');
      const crewMember2 = new crewMember('Commander Lewis', 'commander', 'geology');
      assert.equal(mav.missionStatement(), "Can't perform a mission yet.");
      assert.equal(hermes.missionStatement(), "Can't perform a mission yet.");
      
      crewMember1.enterShip(mav);
      assert.equal(mav.missionStatement(), "Ascend into low orbit");
      
      crewMember2.enterShip(hermes);
      assert.equal(hermes.missionStatement(), "Interplanetary Space Travel");
    });
  });
  



  /****TODO 
   * 1. work through the read me file
    creMember
    -needs an empty ship upon instantiation??
    ship
    -needs an empty crew upon instantiation
   * 2. I need a function to allow a crow member to enter a ship!!!
  */
  
  /****COMPLETED
   ** need to build a constructor object for the crew member class CrewMember 
   */
  
  

}  