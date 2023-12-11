const ATTACK_VALUE = 20;
const STRONG_ATTACK_VALUE = 25;
const MONSTER_ATTACK_VALUE = 20;

let chosenMaxLife = 100;
let currentMonsterLife = chosenMaxLife;
let currentPlayerLife = chosenMaxLife;

adjustHealthBars(chosenMaxLife);

function attackMonster(mode) {
  let maxDamage;
  if (mode === "ATTACK") {
    maxDamage = ATTACK_VALUE;
  } else if (mode === "STRONG_ATTACK") {
    maxDamage === STRONG_ATTACK_VALUE;
  }
  const monsterDamage = dealMonsterDamage(ATTACK_VALUE);
  currentMonsterLife -= monsterDamage;
  const playerDamage = dealPlayerDamage(MONSTER_ATTACK_VALUE);
  currentPlayerLife -= playerDamage;
  if (currentMonsterLife <= 0 && currentPlayerLife > 0) {
    return alert("monster lost this game");
  } else if (currentPlayerLife <= 0 && currentMonsterLife > 0) {
    return alert("You are loser");
  } else if (currentMonsterLife <= 0 && currentPlayerLife <= 0) {
    return alert("draw");
  }
}

function attackHandle() {
  attackMonster("ATTACK");
}

function strongAttackHandle() {
  attackMonster("STRONG_ATTACK");
}

attackBtn.addEventListener("click", attackHandle);
strongAttackBtn.addEventListener("click", strongAttackHandle);
