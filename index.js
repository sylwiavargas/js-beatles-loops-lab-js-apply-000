// add solution here
// source: https://www.w3schools.com/js/js_loop_while.asp - do + while
const musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
const instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];

function theBeatlesPlay(musicians,instruments) {
  const array = [ ];
  for (let i=0, l=musicians.length; i < l; i++) {
  array.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return array;
}

const theFacts = ["He was the last Beatle to learn to drive",
        "He was never a vegetarian",
        "He was a choir boy and boy scout",
        "He hated the sound of his own voice"];
        
function johnLennonFacts(theFacts) {
  const EmptyArrayforJLF = [ ];
  let i=0; 
  while(i < theFacts.length) {
    EmptyArrayforJLF.push(`${theFacts[i]}!!!`);
    i++;
  }
  return EmptyArrayforJLF;
}

function iLoveTheBeatles (num) {
  const EmptyArrayforILTB = [ ];
  count = 7;
  do{
    count++;
    console.log(`I love the Beatles!`);}
    while (count < 8);
}