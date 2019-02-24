// add solution here
const musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
const instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];

function theBeatlesPlay(musicians,instruments) {
  const array = [ ];
  for (let i=0, l=musicians.length; i < l; i++) {
  array.push("{musicians[i]} plays {instruments[i]}")
  }
  return array;
}

