const ATTACK_VALUE = 20;

let chosenMaxLife = 100;
let currentMonsterLife = chosenMaxLife;
let currentPlayerLife = chosenMaxLife;

adjustHealthBars(chosenMaxLife);

function attackHandle() {
  const damage = dealMonsterDamage(ATTACK_VALUE);
  currentMonsterLife -= damage;

  damage;

  if (currentMonsterLife <= 0) {
    return alert("monster lost this game");
  }
}

attackBtn.addEventListener("click", attackHandle);
