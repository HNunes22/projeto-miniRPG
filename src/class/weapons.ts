import { Damage } from './status';

//Interface

interface Weapon {
  weaponName: string;
  weaponDamage: Damage;
}

// -----------------------------------------------

// Custumizer Type for all weapons

export type allWeapons = Staff | Bow | Shield | Dagger | Sword;

// -----------------------------------------------

// Weapons

// Staff
export class Staff implements Weapon {
  weaponName: string = 'Staff';
  weaponDamage: Damage = new Damage(0, 75);
}

// Bow
export class Bow implements Weapon {
  weaponName: string = 'Bow';
  weaponDamage: Damage = new Damage(75, 0);
}

// Shield

export class Shield implements Weapon {
  weaponName: string = 'Shield';
  weaponDamage: Damage = new Damage(10, 0);
}

// Dagger

export class Dagger implements Weapon {
  weaponName: string = 'Dagger';
  weaponDamage: Damage = new Damage(90, 0);
}

// Sword

export class Sword implements Weapon {
  weaponName: string = 'Sword';
  weaponDamage: Damage = new Damage(45, 0);
}
// ------------------------------------------------
