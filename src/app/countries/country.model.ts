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

export interface Country {
  id: number;
  name: string;
  code: string;
  continent: Continent;
  flag: string;
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
      return subregion.toUpperCase() === 'SOUTH AMERICA'
        ? Continent.SOUTH_AMERICA
        : Continent.NORTH_AMERICA;
    default:
      return Continent.ANTARCTICA;
  }
};

export const buildCountryFromRaw = (
  {
    flag, alpha2Code, name, region, subregion,
  }: CountryRawData,
  ind: number,
): Country => ({
  id: ind,
  name,
  code: alpha2Code,
  continent: getContinentByRegion(region, subregion),
  flag,
});
