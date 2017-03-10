var natural = require('natural'),
  tokenizer = new natural.WordTokenizer();
var WordNet = require("node-wordnet"), 
wordnet = new WordNet();
var pos = require('pos');

var sentence = ("Am I cover if my car hurt a deer?");

var sentenceTagged = [];
//V4
var words = new pos.Lexer().lex(sentence);
var synonymsArray = [];

wordsTagged = lookForPos(words);

//console.log("WT",wordsTagged);

for(var i = 0;i < wordsTagged.length; ++i) {
    var e = wordsTagged[i];
    //console.log("input words array ",wordsTagged[i]);
   lookForSynonyms(wordsTagged[i], i); 
}


function lookForPos(words){
    var tagger = new pos.Tagger();
    var taggedWords = tagger.tag(words);
    return taggedWords;
// console.log(taggedWords);
//    for (i in taggedWords) {
//        var taggedWord = taggedWords[i];
//        var word = taggedWord[0];
//        var tag = taggedWord[1];
//        sentenceTagged = sentenceTagged.concat(word,tag);
//        return sentenceTagged;
//    }   
}


function lookForSynonyms(word, index) {
    //console.log(word);
    var pos = word[1].toLowerCase()[0];
    wordnet.lookup(word[0],function(results) {
        var synonymsList = [];
        for (var i = 0;i < results.length; ++i) {
            //console.log(synonymsList);
            //console.log(results[i])
            if (results[i].pos == pos) {
                synonymsList = synonymsList.concat(results[i].synonyms);
            }
        }
        synonymsArray[index] = synonymsList;
        done();
    })
}

var synonymsRetrived = 0;
function done() {
   // console.log('done', wordsTagged);
    synonymsRetrived++;
    if (synonymsRetrived != wordsTagged.length) {
        return;
    }
    //console.log(synonymsArray, sentenceTokenized);
    generateAllSentences(synonymsArray, wordsTagged);
}


function generateAllSentences(synonymsArray, words){    
     for (var i = 0;i < words.length; ++i) {
        //console.log(words[i]);
        for(var j = 0;j < synonymsArray[i].length; ++j) {
            console.log(sentence.replace(words[i][0], synonymsArray[i][j].replace('_', ' ')));              
        }   
      }   
}





