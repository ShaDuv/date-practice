export class Player {
  constructor(name, age, race, charClass) {
    this.name = name;
    this.age = age;
    this.race = race;
    this.charClass = charClass;
    this.attr = {
      wis: 8,
      con: 8,
      int: 8,
      cha: 8,
      str: 8,
      dex: 8
    };
    this.hp = 0;
    this.inventory = [];
  };

  addRaceAttr() {
    if (this.race === "Orc") {
      this.attr.str += 2;
      this.attr.int -= 2;
    } else if (this.race === "Elf") {
      this.attr.int += 2;
      this.attr.cha -= 2;
    } else if (this.race === "Halfling") {
      this.attr.dex += 2;
      this.attr.con -= 2;
    } else if (this.race === "Dwarf") {
      this.attr.str += 2;
      this.attr.cha -= 2;
    } else if (this.race === "Humanoid") {
      this.attr.wis += 2;
      this.attr.str -= 2;
    };

    this.hp = (this.attr.con * 2);

  };

    addClassAttr() {
      if (this.charClass === "Tank") {
        this.attr.str += 2;
        this.attr.con += 2;
        this.inventory.push('sword','shield');
      } else if (this.charClass === "Healer") {
        this.attr.wis += 2;
        this.attr.in += 2;
        this.inventory.push('staff','potion pouch');
      } else if (this.charClass === "Rouge") {
        this.attr.dex += 2;
        this.attr.cha += 2;
        this.inventory.push('cloak','dagger');
      } else if (this.charClass === "Range") {
        this.attr.dex += 2;
        this.attr.int += 2;
        this.inventory.push('bow and arrows','dagger');
      } else if (this.charClass === "Melee") {
        this.attr.dex += 2;
        this.attr.str += 2;
        this.inventory.push('two-handed sword');
      };

      this.hp = (this.attr.con * 2);
  };
};
