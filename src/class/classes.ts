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

// ------------------------------------------------------- //

