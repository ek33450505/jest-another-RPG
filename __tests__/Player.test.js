const Potion = require('../lib/Potion');

jest.mock('../lib/Potion.js');

console.log(new Potion());

const Player = require('../lib/PLayer');

test('creates a player object', () => {
    const player = new Player('Dave');
  
    expect(player.name).toBe('Dave');
    expect(player.health).toEqual(expect.any(Number));
    expect(player.strength).toEqual(expect.any(Number));
    expect(player.agility).toEqual(expect.any(Number));
    expect(player.inventory).toEqual(
        expect.arrayContaining([expect.any(Object)])
      );
  });

  test("gets player's stats as an object", () => {
    const player = new Player('Dave');
  
    expect(player.getStats()).toHaveProperty('potions');
    expect(player.getStats()).toHaveProperty('health');
    expect(player.getStats()).toHaveProperty('strength');
    expect(player.getStats()).toHaveProperty('agility');
  });

  test('get inventorty from player or returns false', () => {
      const player = new Player('Dave');

      expect(player.getInventory()).toEqual(expect.any(Array));

      player.inventory = [];

      expect(player.getInventory()).toEqual(false);
  });

  test("gets player's health value", () => {
    const player = new Player('Dave');

    // The expect.stringContaining() method is an expect method that we can use to make sure our string includes our player's health
    expect(player.getHealth()).toEqual(expect.stringContaining(player.health.toString()));
  });

  test("subtracts from player's health", () => {
    const player = new Player('Dave');
    const oldHealth = player.health;
  
    player.reduceHealth(5);
  
    expect(player.health).toBe(oldHealth - 5);
  
    player.reduceHealth(99999);
  
    expect(player.health).toBe(0);
  });