var natural = require('natural'),
    tokenizer = new natural.WordTokenizer();
var WordNet = require("node-wordnet"), 
    wordnet = new WordNet();

var pos = require('pos');
var sentenceTagged = [];
var synonymsArray = [];
var words;
var sentence;
var synonymsRetrived = 0;

process.stdin.setEncoding('utf8');
    var synonymsArray = [];
    process.stdin.on('readable', () => {
    console.log('Give me a sentence, I will make others for you.')
    sentence = process.stdin.read();
    if (sentence !== null) {
        process.stdout.write(`data: ${sentence}`);
        action(sentence);
    }
});

function action(sentence){
    process.stdin.on('end', () => {
        process.stdout.write('end');
    });
    words = new pos.Lexer().lex(sentence);
    wordsTagged = lookForPos(words);
    for(var i = 0;i < wordsTagged.length; ++i) {
        var e = wordsTagged[i];
        //console.log("input words array ",wordsTagged[i]);
       lookForSynonyms(wordsTagged[i], i); 
    }    
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
    var pos = word[1].toLowerCase()[0];
    wordnet.lookup(word[0],function(results) {
        var synonymsList = [];
        for (var i = 0;i < results.length; ++i) {
            if (results[i].pos == pos) {
                synonymsList = synonymsList.concat(results[i].synonyms);
            }
        }
        synonymsArray[index] = synonymsList;
        done();
    })
}

function done() {
    synonymsRetrived++;
    if (synonymsRetrived != wordsTagged.length) {
        return;
    }
    generateAllSentences(synonymsArray, wordsTagged);
}

function generateAllSentences(synonymsArray, words){    
 for (var i = 0;i < words.length; ++i) {
    for(var j = 0;j < synonymsArray[i].length; ++j) {
        if (words[i][0] != synonymsArray[i][j]){
            console.log(sentence.replace(words[i][0], synonymsArray[i][j].replace('_', ' ')));   
       }           
    }   
  }   
}
