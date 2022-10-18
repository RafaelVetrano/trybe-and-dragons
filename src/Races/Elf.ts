import Race from './Race';

class Elf extends Race {
  private _maxLifePoints;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 99;
    Elf.couter += 1; 
  }
  
  static couter = 0;
  
  static createdRacesInstances(): number {
    return Elf.couter;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}

export default Elf;