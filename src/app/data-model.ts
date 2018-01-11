export class Data {
  id = 0;
  name = '';
  addresses: Address[];
}

export class Address {
  street = '';
  city   = '';
  state  = '';
}

export const data: Data[] = [
  {
    id: 1,
    name: 'Testitest',
    addresses: [
      {street: 'Teststr.',  city: 'Anywhere', state: 'CA'},
    ]
  },
  {
    id: 2,
    name: 'Testitest Nr. 2',
    addresses: [
      {street: 'Teststr.',  city: 'Anywhere', state: 'CA'},
    ]
  }
];

export const states = ['state1', 'state2', 'state3', 'state4'];
