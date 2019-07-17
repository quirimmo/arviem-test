export enum Continent {
  EUROPE = 'EUROPE',
  ASIA = 'ASIA',
  AFRICA = 'AFRICA',
  ANTARCTICA = 'ANTARCTICA',
  NORTH_AMERICA = 'NORTH_AMERICA',
  SOUTH_AMERICA = 'SOUTH_AMERICA',
  OCEANIA = 'OCEANIA'
}

export interface CountryRawData {
  flag: string;
  alpha2Code: string;
  name: string;
  region: string;
  subregion: string;
}

export const getContinentByRegion = (region: string, subregion: string): Continent => {
  switch (region.toUpperCase()) {
    case 'OCEANIA':
      return Continent.OCEANIA;
    case 'EUROPE':
      return Continent.EUROPE;
    case 'ASIA':
      return Continent.ASIA;
    case 'AFRICA':
      return Continent.AFRICA;
    case 'AMERICAS':
      return subregion.toUpperCase() === 'SOUTH AMERICA' ? Continent.SOUTH_AMERICA : Continent.NORTH_AMERICA;
    default:
      return Continent.ANTARCTICA;
  }
};

export class Country {
  constructor(
    public id: number,
    public name: string,
    public code: string,
    public continent: Continent,
    public flag: string,
  ) {}

  public static buildInstanceFromRaw(
    {
      flag, alpha2Code, name, region, subregion,
    }: CountryRawData,
    ind: number,
  ): Country {
    return new Country(
      ind,
      name,
      alpha2Code,
      getContinentByRegion(region, subregion),
      flag,
    );
  }
}
