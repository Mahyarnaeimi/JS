class Item {
	constructor (name, description, damage = 0) {
		this.name = name;
		this.description = description;
		this.damage = damage
	}
}

class Character {
	constructor (name, playerName, hitPoints, charLevel = 1) {
		this.campaign = "The Pirate Campaign"
		this.name = name;
		this["player name"] = playerName;
		this.hp = hitPoints;
		this.maxHp = hitPoints;
		this.level = charLevel;
		this.hpPerLevel = 6;
		this.inventory = [];
	}
	levelUp () {
		this.level += 1;
		this.hp += this.hpPerLevel;
		this.maxHp += this.hpPerLevel;
	}
	addItemToInventory (itemToAdd) {
		if (itemToAdd instanceof Item === false) {
			console.log("Error - addItemToInventory must receive an Item")
		} else {
			this.inventory.push(itemToAdd)
		}
	}
	takeDamage (damage = 0) {
		this.hp = Math.max(0, (this.hp - damage))
	}
}

class Cleric extends Character {
	constructor(name, playerName, hitPoints, charLevel) {
    super(name, playerName, hitPoints, charLevel);
		this.class = "Cleric";
		this.hpPerLevel = 8;
  }
	heal(target) {
		if (target instanceof Character === false) {
			return console.log("target to heal must be a Character")
		}
		const random = Math.random();
		const oneToSix = Math.ceil(random*6);
		const healValue = this.level * oneToSix;
		target.hp += healValue;
		target.hp = Math.min(target.hp, target.maxHp);
		console.log(`${this.name} heals ${target.name} for up to ${healValue} life.`)
	}
}

const drud = new Character("Drud", "Bobba", 70, 5);
const eep = new Character("Eep", "Scott", 15);
const marlin = new Cleric("Marlin", "Matt", 27, 3);

console.log(drud, eep, marlin);

console.log("drud goes up a level, picks up a sword and takes 50 damage");

drud.addItemToInventory(new Item("Sword", "A long one-handed sword", 8))
drud.levelUp();
drud.takeDamage(50)

console.log(drud)

marlin.heal(drud)

console.log(drud)