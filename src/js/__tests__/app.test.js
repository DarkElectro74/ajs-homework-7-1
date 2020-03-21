import Boweman from '../Boweman';
import Swordsman from '../Swordsman';
import Magician from '../Magician';
import Undead from '../Undead';
import Zombie from '../Zombie';
import Deamon from '../Deamon';

test('Boweman', () => {
  const character = new Boweman('Hawkeye');
  const expected = {
    name: 'Hawkeye',
    level: 1,
    health: 100,
    type: 'Boweman',
    attack: 25,
    defence: 25,
  };

  expect(character).toEqual(expected);
});

test('Swordsman', () => {
  const character = new Swordsman('Сир Э́ртур Дейн');
  const expected = {
    name: 'Сир Э́ртур Дейн',
    level: 1,
    health: 100,
    type: 'Swordsman',
    attack: 40,
    defence: 10,
  };

  expect(character).toEqual(expected);
});

test('Magician', () => {
  const character = new Magician('Harry Potter');
  const expected = {
    name: 'Harry Potter',
    level: 1,
    health: 100,
    type: 'Magician',
    attack: 10,
    defence: 40,
  };

  expect(character).toEqual(expected);
});

test('Undead', () => {
  const character = new Undead('Skeleton');
  const expected = {
    name: 'Skeleton',
    level: 1,
    health: 100,
    type: 'Undead',
    attack: 25,
    defence: 25,
  };

  expect(character).toEqual(expected);
});

test('Zombie', () => {
  const character = new Zombie('Wolking Dead');
  const expected = {
    name: 'Wolking Dead',
    level: 1,
    health: 100,
    type: 'Zombie',
    attack: 40,
    defence: 10,
  };

  expect(character).toEqual(expected);
});

test('Deamon', () => {
  const character = new Deamon('Шайтан');
  const expected = {
    name: 'Шайтан',
    level: 1,
    health: 100,
    type: 'Deamon',
    attack: 10,
    defence: 40,
  };

  expect(character).toEqual(expected);
});
