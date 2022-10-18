import Race from './Race';

class Dwarf extends Race {
  private _maxLifePoints;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 80;
    Dwarf.couter += 1; 
  }

  static couter = 0;

  static createdRacesInstances(): number {
    return Dwarf.couter;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}

export default Dwarf;