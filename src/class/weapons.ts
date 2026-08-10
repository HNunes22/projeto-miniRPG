import { Damage } from './status';

//Interface

interface Weapon {
  weaponName: string;
  weaponDamage: Damage;
  showWeapon(): string;
}

// Weapons

// Staff
// -----------------------------------------------
export class Staff implements Weapon {
  weaponName: string = 'Staff';
  weaponDamage: Damage = new Damage(0, 75);

  showWeapon(): string {
    return`| ---------- Weapon --------- |
    | Weapon Name: ${this.weaponName}
    | Physical Damage: ${this.weaponDamage.physicalDamage}
    | Magic Damage: ${this.weaponDamage.magicDamage}
    | --------------------------- |\n`
  }
}
// ------------------------------------------------
