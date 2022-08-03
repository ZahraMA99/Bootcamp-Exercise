// ex1

const StringFormatter = function () {
  const capitalizeFirst = function (text) {
    return text.toUpperCase().charAt(0).concat(text.slice(1));
  };

  const skewerCase = function (text) {
    return text.replace(" ", "-");
  };

  return {
    capitalizeFirst: capitalizeFirst,
    skewerCase: skewerCase,
  };
};

const formatter = StringFormatter();

console.log(formatter.capitalizeFirst("dorothy")); //should print Dorothy
console.log(formatter.skewerCase("blue box")); //should print blue-box
