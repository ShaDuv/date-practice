import { Player } from './../src/chargen.js';

describe('Player', function() {

  it('should Display user input as character name', function() {
    const testName = new Player('Bill');
    expect(testName.name).toEqual('Bill');
  });
  it('should display user input as character age', function() {
    const testAge = new Player('Bill', 27);
    expect(testAge.age).toEqual(27);
  });
  it('should display race based on user selection', function() {
    const testRace = new Player('Bill', 27, 'Orc');
    expect(testRace.race).toEqual('Orc');
  });
  it('should display class based on user selection', function() {
    const testCharClass = new Player('Bill', 27, 'Orc', 'Tank');
    expect(testCharClass.charClass).toEqual('Tank');
  });
  it('should display attributes based on character race and class', function() {
    const testAttr = new Player('Bill', 27, 'Orc', 'Tank');
    testAttr.addRaceAttr();
    testAttr.addClassAttr();
    expect(testAttr.attr.str).toEqual(12);
    expect(testAttr.attr.con).toEqual(10);
    expect(testAttr.attr.int).toEqual(6);
  });
  it('should display character base HP based on Constitution * 2', function() {
    const testHp = new Player('Bill', 27, 'Orc', 'Tank');
    testHp.addRaceAttr();
    testHp.addClassAttr();
    expect(testHp.hp).toEqual(20);
  });
  it('should display character starting inventory based on class inventory', function() {
    const testInventory = new Player('Bill', 27, 'Orc', 'Tank');
    testInventory.addClassAttr();
    expect(testInventory.inventory).toEqual(['sword','shield']);
  });
});
