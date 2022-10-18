import Race from './Race';

class Halfling extends Race {
  private _maxLifePoints;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 60;
    Halfling.couter += 1; 
  }
    
  static couter = 0;
    
  static createdRacesInstances(): number {
    return Halfling.couter;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}

export default Halfling;