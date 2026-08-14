import { StatusWizard, StatusArcher, StatusTank, StatusAssassin, StatusWarrior } from './status';
import { Staff, Bow, Shield, Dagger, Sword } from './weapons';
import { motorMethods } from "./methods"

// Wizard
// ------------------------------------------------------
class Wizard {
  private readonly className = 'Wizard';
  private status = new StatusWizard();
  private weapon = new Staff();

  showInfos(): string {
    return motorMethods.showInfos(this.status, this.weapon);
  }

  levelUp(): void {
    motorMethods.levelup(this.status);
  }
}

// Archer

class Archer {
  private readonly className: string = 'Archer';
  private status = new StatusArcher();
  private weapon = new Bow();

  showInfos(): string {
    return motorMethods.showInfos(this.status, this.weapon);
  }

  levelUp(): void {
    motorMethods.levelup(this.status);
  }
}

// Tank

class Tank {
  private readonly className: string = 'Tank';
  private status = new StatusTank();
  private weapon = new Shield();

  showInfos(): string {
    return motorMethods.showInfos(this.status, this.weapon);
  }

  levelUp(): void {
    motorMethods.levelup(this.status);
  }
}

// Assassin

class Assassin {
  private readonly className: string = 'Assassin';
  private status = new StatusAssassin();
  private weapon = new Dagger();

  showInfos(): string {
    return motorMethods.showInfos(this.status, this.weapon);
  }

  levelUp(): void {
    motorMethods.levelup(this.status);
  }
}

// Warrior

class Warrior {
  private readonly className: string = 'Warrior';
  private status = new StatusWarrior();
  private weapon = new Sword();

  showInfos(): string {
    return motorMethods.showInfos(this.status, this.weapon);
  }

  levelUp(): void {
    motorMethods.levelup(this.status);
  }
}
// ------------------------------------------------------- //


