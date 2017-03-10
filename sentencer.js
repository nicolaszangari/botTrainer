var Sentencer = require('sentencer');

var WordNet = require("node-wordnet");
var wordnet = new WordNet();


console.log(Sentencer.make("This sentence has {{ a_noun }} and {{ an_adjective }} {{ noun }} in it."));
// returns something like "This sentence has a bat and a finless cinema in it." 
Sentencer.configure({
  // the list of nouns to use. Sentencer provides its own if you don't have one! 
  nounList: [],
 
  // the list of adjectives to use. Again, Sentencer comes with one! 
  adjectiveList: [],
 
  // additional actions for the template engine to use. 
  // you can also redefine the preset actions here if you need to. 
  // See the "Add your own actions" section below. 
  actions: {
    my_action: function(){
      return "something";
    }
  }
});
