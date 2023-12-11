const ATTACK_VALUE = 20;
const MONSTER_ATTACK_VALUE = 21;

let chosenMaxLife = 100;
let currentMonsterLife = chosenMaxLife;
let currentPlayerLife = chosenMaxLife;

adjustHealthBars(chosenMaxLife);

function attackHandle() {
  const monsterDamage = dealMonsterDamage(ATTACK_VALUE);
  currentMonsterLife -= monsterDamage;

  const playerDamage = dealPlayerDamage(MONSTER_ATTACK_VALUE);
  currentPlayerLife -= playerDamage;

  if (currentMonsterLife <= 0) {
    return alert("monster lost this game");
  } else if (currentPlayerLife <= 0) {
    return alert("You are loser");
  }
}

attackBtn.addEventListener("click", attackHandle);
