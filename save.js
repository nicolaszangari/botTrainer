//var synonymsArray = new Array();

//V3
/*
for (var i = 0; i < sentenceTokenized.length; i++) {
    var currentWord = sentenceTokenized[i];
    //var lookupCurrentWord = wordnet.lookup(currentWord);
    //var synonymsArray = lookupCurrentWord.synonyms;
    wordnet.lookup(currentWord, function(results) {
        for (var k = 0; k < results.length; k++){
            synonymsArray[k] = results[k].synonyms;
            console.log("synonymsArray : ",k,synonymsArray[k]);
        }
    });
            //console.log(currentWord.join(" ").toLowerCase().replace(currentWord, synonymsArray[i]));
//        results.forEach(function(result) {
//            synonymsArray.push(result.synonyms);
//            console.log("synonymsArray",synonymsArray);
//        });  
//  
//    for(var j = 0; j < synonymsArray.length; ++j){
//        console.log(currentWord, synonymsArray[j]);
//        console.log(j);
//        console.log("---------------------------");
//    }
    //console.log(currentWord, synonymsArray[j]);
    
    
    } */
            //Parcours le tableau de synonyms
//        for(var j = 0; j < synonymsArray.length; ++j){
//            console.log(currentWord, synonymsArray[j]);
//            console.log("---------------------------");
//            //console.log("synonym : ", results.synonyms);
//            // console.log(currentWord, result.synonyms[j]);
//            //console.log("current word : ", currentWord, " current synonym : "+ result.synonyms[j]);
//            //   console.log(sentenceTokenized.join(" ").toLowerCase().replace(currentWord, result.synonyms[j]));
//        }	


// function replaceWordBySynonym(var word){
//     
// }
// console.log(currentWord, result.synonyms[j]);
         //console.log("current word : ", currentWord, " current synonym : "+ result.synonyms[j]);
     //   console.log(sentenceTokenized.join(" ").toLowerCase().replace(currentWord, result.synonyms[j]));
      //  console.log("---------------------------");


//V2


//for (var i = 0; i < sentenceTokenized.length; i++) {
//    var currentWord = sentenceTokenized[i];
//    	wordnet.lookup(currentWord) function(results) {
//    	results.forEach(function(result) {
//           //var tab = result.synonyms;
//            for(var j = 0; j < result.synonyms.length; ++j){
//                
//                console.log(currentWord, result.synonyms[j]);
//                console.log("---------------------------");
//            }
//            //console.log("synonym : ", results.synonyms);
//            for (var j = 0; j < result.synonyms.length; ++j) {
//               // console.log(currentWord, result.synonyms[j]);
//             //console.log("current word : ", currentWord, " current synonym : "+ result.synonyms[j]);
//         //   console.log(sentenceTokenized.join(" ").toLowerCase().replace(currentWord, result.synonyms[j]));
//          //  console.log("---------------------------");
//            }
//    	});    			
//	});
//}