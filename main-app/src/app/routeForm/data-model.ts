


export class Address {
   constructor (
   public street: string,
   public city: string,
   public state: string,
   public zipCode: number,
   public zipExt?: number,
   public apt?: string,
   ) {}
}
export const Options = [
   'Plane',
   'Car',
   'Train',
   'Boat',
   'RV',
   'Uber',
   'Lyft',
   'Bus'
]

export class Trip {
   id: number;
   name: string;
   addresses: Address[];
   // transportationTypes: string[]; // change this when travel types have been created.
}
export const trips: Trip[] = [
  {
    id: 1,
    name: 'First Trip',
    addresses: [
      {street: '123 Main',  city: 'Anywhere', state: this.states[8],  zip: '94801'},
      {street: '456 Maple', city: 'Somewhere', state: this.states[25], zip: '23226'},
    ]
  },
  {
    id: 2,
    name: 'Second Trip',
    addresses: [
      {street: '789 Elm',  city: 'Smallville', state: this.states[16],  zip: '04501'},
    ]
  },
  {
    id: 3,
    name: 'Third Trip',
    addresses: [ ]
  },
];


export const states = [
   'Alabama',
   'Alaska',
   'Arizona',
   'Arkansas',
   'California',
   'Colorado',
   'Connecticut',
   'Delaware',
   'Florida',
   'Georgia',
   'Hawaii',
   'Idaho',
   'Illinois',
   'Indiana',
   'Iowa',
   'Kansas',
   'Kentucky',
   'Louisiana',
   'Maine',
   'Maryland',
   'Massachusetts',
   'Michigan',
   'Minnesota',
   'Mississippi',
   'Missouri',
   'Montana',
   'Nebraska',
   'Nevada',
   'New Hampshire',
   'New Jersey',
   'New Mexico',
   'New York',
   'North Carolina',
   'North Dakota',
   'Ohio',
   'Oklahoma',
   'Oregon',
   'Pennsylvania',
   'Rhode Island',
   'South Carolina',
   'South Dakota',
   'Tennessee',
   'Texas',
   'Utah',
   'Vermont',
   'Virginia',
   'Washington',
   'West Virginia',
   'Wisconsin',
   'Wyoming'
   ]
