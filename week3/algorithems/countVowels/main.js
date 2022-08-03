// Count Vowels

let count = 0;
function findVowels(vowels) {
  for (let vowel of vowels) {
    if (
      vowel == "a" ||
      vowel == "e" ||
      vowel == "o" ||
      vowel == "i" ||
      vowel == "u"
    ) {
      count++;
    }
  }
}

const vowels = "aabcde";
findVowels(vowels);
console.log("count = " + count);
