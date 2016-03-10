var wordCounter = function(sentence){
  var words = sentence.split(" ");
  var sortedWords = words.sort();
  var count = 0;
  var results =[]

  for (var i = 0; i <= words.length; i++) {
    if (sortedWords[i] === sortedWords[i + 1]) {
      count += 1
    }
  }
  return count
}


  // var shifted = sortedWords.shift();
