//Daft Punk project

//our buttons and a folder for our sounds
const soundMap = {
  q: "work_it",
  w: "make_it",
  e: "do_it",
  r: "makes_us",
  t: "harder",
  y: "better",
  u: "faster",
  i: "stronger",
  o: "more_than",
  p: "hour",
  a: "our",
  s: "never",
  d: "ever",
  f: "after",
  g: "work_is",
  h: "over",
};

const soundContainer = document.querySelector("#sound-container");

//lager div med lydknapper
for (let key in soundMap) {
  const soundElement = document.createElement("div");
  soundElement.classList.add("sound-button");

  const textElement = document.createElement("p");
  textElement.textContent = `${key}: ${
    soundMap[key].replace("_", " ").toUpperCase() +
    " (" +
    key.toUpperCase() +
    ")"
  }`;
  soundElement.append(textElement);
  //leggjer til click
  soundElement.addEventListener("click", () => {
    playSound(soundMap[key]);
  });

  soundContainer.append(soundElement);
}
//skal spele lyd frå mappa
const playSound = (sound) => {
  const audio = new Audio(`./sounds/${sound}.wav`); //class i javascript, Audio er ein class
  //camelCase, PascalCase (classer i JS MÅ ALLTID skrivast i PascaLCase!)
  audio.volume = 0.1;
  audio.play();
};
//tast = spel lyd
document.addEventListener("keydown", (e) => {
  const sound = soundMap[e.key];
  if (sound) {
    playSound(sound);
  }
});

//Bonus

//blueprint
class Sword {
    constructor(name, atk) {
        this.name = name;
        this.atk = atk;
    }
}

//kan vere player, mob etc
class Entity {
    //constructor setter opp info til kven entity er
  constructor (name, hp, atk, weapon = null) { //weapon er no optional pga null
    this.name = name;
    this.hp = hp;
    this.atk = atk;

  }
 
  fight(entity) {
let damage = this.atk
if (this.weapon) {
    damage += this.weapon.atk
}

entity.hp -= damage
console.log(`${this.name} fights ${entity.name} and deals ${this.atk} damage`)
  }
}

const sword = new Sword("Mammas steikepanne", 500)

const player = new Entity ("Beinharde Bob", 100, 25, sword)
console.log(player)
const monster = new Entity ("Skumle Kåre", 40, 5)
console.log(monster)


player.fight(monster);
monster.fight(player);


console.log(player, monster)

