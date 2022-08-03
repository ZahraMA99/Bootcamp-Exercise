// ex5

const findNameLength = function (name) {
  let count = 0;
  let nameArr = name.split("");
  for (let letter of name) {
    count += 1;
  }

  return count;
};

function increaseByNameLength(money, name) {
  return findNameLength(name) * money;
}

function makeRegal(name) {
    return "His Royal Highness, " + name;
}

const turnToKing = function (name, money) {
  name = name.toUpperCase();
  money = increaseByNameLength(money, name);
  name = makeRegal(name);

  console.log(name + " has " + money + " gold coins");
};

turnToKing("martin luther", 100);
