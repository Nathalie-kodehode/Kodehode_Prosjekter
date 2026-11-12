//sanders notater
class Sword {
    constructor(name, atk) {
        this.name = name
        this.atk = atk
    }
}

/* Blueprint */
class Entity {
    constructor (name, hp, atk, weapon = null) {
        this.name = name
        this.hp = hp
        this.atk = atk
        this.weapon = weapon
    }

    fight(entity) {
        let damage = this.atk
        if (this.weapon) {
            damage += this.weapon.atk
        }

        entity.hp -= damage
        console.log(`${this.name} fights ${entity.name} and deal ${this.atk}`)
    }
}

const sword = new Sword('Ashbringer', 500)
const swordOfKarma = new Sword('Sword of Karma', 999999999999999)

const player = new Entity('Per', 100, 25);
const monster = new Entity('Skumle Kåre', 40, 5, swordOfKarma);

player.fight(monster);
monster.fight(player);

console.log(player, monster)