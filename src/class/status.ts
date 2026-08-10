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

// Interface

interface Status {
  level: number;
  life: number;
  mana: number;
  damage: Damage;
  defense: Defense;
  levelup(): void;
  showStatus(): string;
}

// Status by Class

// Wizard
//-----------------------------------------------
export class StatusWizard implements Status {
  level: number = 1;
  life: number = 20;
  mana: number = 100;
  damage: Damage = new Damage(0, 150);
  defense: Defense = new Defense(12, 15);

  levelup(): void {
    if (this.level !== 99) {
      this.level++;
      this.life += 20;
      this.mana += 17;
      this.defense.magicDefense += 7;
      this.defense.physicalDefense += 4;
      this.damage.magicDamage += 18;
    }
  }

  showStatus(): string {
    return `| ---------- Status --------- |
    | Level: ${this.level}
    | Life: ${this.life}
    | Mana: ${this.mana}
    | Physical Damage: ${this.damage.physicalDamage}
    | Magic Damage: ${this.damage.magicDamage}
    | Physical Defense: ${this.defense.physicalDefense}
    | Magic Defense: ${this.defense.magicDefense}
    | --------------------------- |\n`;
  }
}
//-----------------------------------------------
