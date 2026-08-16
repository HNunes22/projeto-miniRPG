import { allClasses } from './status';
import { allWeapons } from './weapons';

// Class Methods for Status
class Methods_status {
  levelup(objStatus: allClasses): void {
    if (objStatus.level !== 99) {
      objStatus.level++;
    }
  }

  showInfos(objStatus: allClasses, objWeapon: allWeapons): string {
    return `${this.showStatus(objStatus)}
    ${this.showWeapon(objWeapon)}`;
  }
  private showStatus(objStatus: allClasses): string {
    return `    | ---------- Status --------- |
    | Class Name: ${objStatus.className}
    | Level: ${objStatus.level}
    | Life: ${objStatus.life}
    | Mana: ${objStatus.mana}
    | Physical Damage: ${objStatus.damage.physicalDamage}
    | Magic Damage: ${objStatus.damage.magicDamage}
    | Physical Defense: ${objStatus.defense.physicalDefense}
    | Magic Defense: ${objStatus.defense.magicDefense}
    | --------------------------- |\n`;
  }

  private showWeapon(objWeapon: allWeapons): string {
    return `| ---------- Weapon --------- |
    | Weapon Name: ${objWeapon.weaponName}
    | Physical Damage: ${objWeapon.weaponDamage.physicalDamage}
    | Magic Damage: ${objWeapon.weaponDamage.magicDamage}
    | --------------------------- |\n`;
  }
}

export const motorMethods = new Methods_status();
