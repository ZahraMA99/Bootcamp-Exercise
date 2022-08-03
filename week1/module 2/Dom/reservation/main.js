// Reservation System

const input = document.getElementById("input");
const btn = document.getElementById("btn");

const reservations = {
  Bob: {
    claimed: false,
  },
  Ted: {
    claimed: true,
  },
};

btn.onclick = function () {
  let name = input.value;
  checkReservation(name);
};

const checkReservation = function (name) {
  let isExists = false;
  let isClaimed = false;

  for (let key of Object.keys(reservations)) {
    if (key.toUpperCase() == name.toUpperCase()) {
      isExists = true;
      isClaimed = reservations[key].claimed;
    }
  }

  if (isExists && !isClaimed) {
    console.log("Welcome, " + name);
  } else {
    if (isExists && isClaimed) {
      console.log("Hmm, someone already claimed this reservation");
    } else {
      console.log("You have no reservation");
    }
  }
};
