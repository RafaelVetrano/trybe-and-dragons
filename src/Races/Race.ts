abstract class Race {
  private readonly _name: string; 
  private readonly _dexterity: number; 

  constructor(name: string, dexterity: number) {
    this._name = name;
    this._dexterity = dexterity;
  }

  static createdRacesInstances(): number {
    throw Error('Not implemented');
  }

  abstract get maxLifePoints(): number;

  get dexterity(): number {
    return this._dexterity;
  }
  
  get name(): string {
    return this._name;
  }
}

export default Race;