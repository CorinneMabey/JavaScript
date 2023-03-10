// operators.js
let shipHealth = 3;
let shipAmmo = 3;
let targetHealth = 3;

function fireShip() {
  if (shipCanFire()) {
    shipAmmo--;
    if (isHit()) {
      targetHealth--;
      console.log("hit - targetHealth:", targetHealth);
    } else {
      console.log("miss");
    }
  } else {
    reloadShip();
    console.log("reloading, shipHealth:", shipHealth);
  }
}

function encounter() {
  console.log("You see a target");
  if (!isDestroyed(targetHealth) && !isDestroyed(shipHealth)) {
    fireShip();
    if (isDestroyed(targetHealth)) {
      console.log("Target eliminated");
    }
    if (isDestroyed(shipHealth)) {
      console.log("ship destroyed");
    }
  }
}

function isHit() {
    if (Math.random() >= .5) {
        return true
    } else {
        return false
    }
}

function reloadShip() {
    shipHealth -= 1
    shipAmmo +=3
}

function shipCanFire() {
    if (shipAmmo > 0 && shipHealth > 0) {
        return true
    } else {
        return false
    }
}

function isDestroyed() {
    if (shipHealth === 0) {
        return true
    } else {
        return false
    }
}

