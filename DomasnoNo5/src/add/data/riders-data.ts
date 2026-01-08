export interface Rider {
  id: number;
  name: string;
  image: string;
  team: string;
  points: number;
}

export const RIDERS: Rider[] = [
  {
    id: 1,
    name: 'Johann Zarco',
    image: 'johann2.webp',
    team: 'Castrol Honda LCR',
    points: 148
  },
  {
    id: 2,
    name: 'Toprak Razgatlioglu',
    image: 'toprak2.webp',
    team: 'Prima Pramac Yamaha MotoGP',
    points: 616
  },
    {
    id: 3,
    name: 'Luca Marini',
    image: 'luca2.webp',
    team: 'Honda HRC Castrol',
    points: 142
  },
 {
    id: 4,
    name: 'Diogo Moreira',
    image: 'diogo.webp',
    team: 'Honda LCR',
    points: 287
  },
  {
    id: 5,
    name: 'Joan Mir',
    image: 'joan.webp',
    team: 'Honda HRC Castrol',
    points: 96
  },
  {
    id: 6,
    name: 'Maverick Vinales',
    image: 'maverick.webp',
    team: 'Red Bull KTM Tech3',
    points: 72
  }
];
