// 1
function fozzieBear(a) {
    console.log(a);
};

fozzieBear(`Wocka Wocka`);

// 2
function beaker(speak) {
    console.log(speak);
    console.log(speak);
    console.log(speak);
    console.log(speak);
  }
  
  beaker(`Meep`);

// 3
function muppetShow(a, b){
    if (a === 'Muppet' && b === "Show"){
        console.log("It's time to play the music. It's time to light the lights");
    }
};
muppetShow('Muppet', 'Show');

console.log(a);

// 4
function kermit(){
    return 'Kermit the Frog';
};
kermit();

console.log(a);

// 5
function muppetShowSeasons(seasons){
    if (seasons === 5){
        return true;
    } else {
        return false;
    }
};

// 6
const manOrMuppet = function(){
    return 'Am I am man or am I a muppet';
};

manOrMuppet();
console.log(manOrMuppet);
console.log(a);

// 7
rainbowConnection = () => "Someday we'll find it. The Rainbow Connection. The lovers, the dreamers and me";
console.log(rainbowConnection());

// 8
// NO

// 9
// YES

// 10a
const newMuppetMovies = [
    "The Muppets",
    "Muppets Most Wanted"
]

// 10b
const upperMovies = newMuppetMovies.map(function(movie){
    return movie.toUpperCase();
});

// BONUS
// 11a
const oldMuppetMovies = [
    "The Muppet Movie",
    "The Muppets Take Manhattan", 
    "The Great Muppet Caper", 
    "The Muppet Christmas Carol", 
    "Muppet Treasure Island", 
    "Muppets From Space"
]

// 11b
const twoMovies = oldMuppetMovies.filter(movie => movie === "The Great Muppet Caper" || movie === "Muppet Treasure Island" );

// 12a
const characterOne = ['Statler', 'Waldorf']

// 12b
const charactersTwo = ['The Swedish Chef', 'Animal', 'Rowlf'];

// 12c
randomMuppet = (characters) => {
    console.log(characters[Math.floor(Math.random()*characters.lenth)]);
};

// OR
// const randomMuppet = (characters) => {
//     const randNum = Math.floor(Math.random() * characters.length); 
//     console.log(characters[randNum]);
// }

// 12d
randomMuppet(characterOne);
randomMuppet(charactersTwo);

// 13
const caps = string => {
    let newString = '';
    for (i=0; i < string.lenth; i++){
        if (i % 2 === 1){
            newString += string[i].toUpperCase();
        } else if (string[i] === ' ') {
            newString += ' ';
        } else { 
            newString += string[i].toLowerCase();
        }
    }
    console.log(newString);
};

caps('Hello')