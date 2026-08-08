import { StatusMage } from "./status";
import { Staff } from "./weapons";


class Mage {
  private readonly className: string = "Mage";
  private status: StatusMage = new StatusMage();
  private weapon: Staff = new Staff();


  showStatus(): string{
    return this.formmatingShowStatus();
  }

  levelUp(): void {
    this.status.levelup();
  }

  private formmatingShowStatus(): string{
    return `\n
    | --------------------------- |
    |             ${this.className}            |
    | ---------- Status --------- |
    | Level: ${this.status.level}
    | Life: ${this.status.life}
    | Mana: ${this.status.mana}
    | Physical Damage: ${this.status.damage.physicalDamage}
    | Magic Damage: ${this.status.damage.magicDamage}
    | Physical Defense: ${this.status.defense.physicalDefense}
    | Magic Defense: ${this.status.defense.magicDefense}
    | --------------------------- |\n`
  }
}

const mage = new Mage();

console.log(mage.showStatus());
mage.levelUp()
console.log(mage.showStatus());
mage.levelUp();
console.log(mage.showStatus());
