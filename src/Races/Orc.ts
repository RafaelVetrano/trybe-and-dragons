import Race from './Race';

class Orc extends Race {
  private _maxLifePoints;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 74;
    Orc.couter += 1; 
  }
      
  static couter = 0;
      
  static createdRacesInstances(): number {
    return Orc.couter;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}

export default Orc;