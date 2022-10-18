import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Necromancer extends Archetype {
  private readonly damageType: EnergyType;
  constructor(name: string) {
    super(name);
    this.damageType = 'mana';
    Necromancer.couter += 1;
  }

  static couter = 0; 

  get energyType(): EnergyType {
    return this.damageType;
  }

  static createdArchetypeInstances(): number {
    return this.couter;
  }
}

export default Necromancer;