function theBeatlesPlay(musicians, instruments){
  var beatleIDs = [];
  for (let i = 0; i<musicians.length; i++){
    beatleIDs[i] = musicians[i] + " plays " + instruments[i];
  }
  console.log(beatleIDs);
  return beatleIDs;
}

function johnLennonFacts(facts){
  var loudFacts = [];
  var i = 0;
  while (i < facts.length){
    loudFacts[i] = facts[i] + "!!!";
    console.log(loudFacts); 
    i++;
  }
  return loudFacts;
}

function iLoveTheBeatles(){
  return
}