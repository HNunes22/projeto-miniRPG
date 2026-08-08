import {Damage} from "./status";

//Interface

interface Weapon {
  weaponName: string,
  weaponDamage: Damage;
}

// Weapons

                    // Staff
// ----------------------------------------------- //
export class Staff implements Weapon {
  weaponName: string = "Staff";
  weaponDamage: Damage = new Damage(0, 75);
}
// ----------------------------------------------- //
