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
  }
];
