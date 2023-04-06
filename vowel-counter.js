function countVowels() {
  // Get input value and convert to lowercase
  var word = document.getElementById("input").value.toLowerCase();

  // Count the number of vowels in the word
  var vowelCount = 0;
  for (var i = 0; i < word.length; i++) {
    if (
      word[i] == "a" ||
      word[i] == "e" ||
      word[i] == "i" ||
      word[i] == "o" ||
      word[i] == "u"
    ) {
      vowelCount++;
    }
  }

  // Update the result element with the vowel count
  var result = document.getElementById("result");
  result.innerHTML =
    "The word " + word + " contains " + vowelCount + " vowels.";
}
