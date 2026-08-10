import { StatusWizard } from './status';
import { Staff } from './weapons';


// Wizard
// ------------------------------------------------------
class Wizard {
  private readonly className: string = 'Wizard';
  private status: StatusWizard = new StatusWizard();
  private weapon: Staff = new Staff();

  showInfos(): string {
    return `\n
    | --------------------------- |
    |            ${this.className}           |
    ${this.status.showStatus()}
    ${this.weapon.showWeapon()}`
  }

  levelUp(): void {
    this.status.levelup();
  }
}

// -------------------------------------------------------

// Testes
const wizard = new Wizard();

console.log(wizard.showInfos());
wizard.levelUp();
console.log(wizard.showInfos());
wizard.levelUp();
console.log(wizard.showInfos());
