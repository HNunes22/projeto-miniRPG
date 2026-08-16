// Primarys Class

class Defense {
  constructor(
    public physicalDefense: number,
    public magicDefense: number,
  ) {}
}

export class Damage {
  constructor(
    public physicalDamage: number,
    public magicDamage: number,
  ) {}
}
// ------------------------------------------------

// Interface

interface Status {
  className: string;
  level: number;
  life: number;
  mana: number;
  damage: Damage;
  defense: Defense;
}

// ------------------------------------------------

// Custumizer Type for all status class

export type allClasses =
  StatusWizard | StatusArcher | StatusTank | StatusAssassin | StatusWarrior;

// ------------------------------------------------

// Status by Class

// Wizard

export class StatusWizard implements Status {
  className = 'Wizard';
  level = 1;
  life = 200;
  mana = 50;
  damage = new Damage(0, 30);
  defense = new Defense(3, 3);
}

//Archer

export class StatusArcher implements Status {
  className = 'Archer';
  level = 1;
  life = 200;
  mana = 15;
  damage = new Damage(75, 0);
  defense = new Defense(10, 5);
}

// Tank

export class StatusTank implements Status {
  className = 'Tank';
  level = 1;
  life = 700;
  mana = 7;
  damage = new Damage(15, 0);
  defense = new Defense(70, 80);
}

// Assassin

export class StatusAssassin implements Status {
  className = 'Assassin';
  level = 1;
  life = 250;
  mana = 20;
  damage = new Damage(100, 0);
  defense = new Defense(20, 15);
}

// Warrior

export class StatusWarrior implements Status {
  className = 'Warrior';
  level = 1;
  life = 400;
  mana = 30;
  damage = new Damage(60, 0);
  defense = new Defense(50, 30);
}
