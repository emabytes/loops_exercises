// lev 1_1
let hello = "Hello World";

for (let i = 0; i <= 10; i++) {
  console.log(hello + " " + i);
}
// output:
// Hello World 0
// Hello World 1
// ...

//lev 1_2
let numArray = [];
for (let i = 0; i <= 10; i++) {
  numArray.push(i);
}
console.log(numArray);
//[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

//lev 1_4
let names = ["Christian", "Anass", "Mika", "Sam", "Shapour", "Kim", "Sergio"];

for (let i = 0; i < names.length; i++) {
  console.log(names[i]);
}
//Christian
//Anass
// ...

// level 1_6
let retArray = [];
let img = "image_1.jpg";

for (let i = 1; i <= 100; i++) {
  retArray.push(img.replace("1", i));
}
console.log(retArray);
// [img_1.jpg, img_2.jpg, img_3.jpg.......]

retArray.forEach((element) => {
  console.log(element);
});
// img_1.jpg
//img_2.jpg
//img_3.jp


//level 2_2 & 3_3

let userInput = document.getElementById("input");

function loopMe() {
    console.log("working")
    let letterO = [];
    for (let i = 0; i < userInput.value; i++) {
  if (i % 2 == 0) { //even numbers
      letterO[i] = "o";
  } else if (i % 2 == 1) { //odd numbers
       letterO[i] = "0"
        }
    }
  document.getElementById("output").innerHTML = "L" + letterO.join("") + "p";
}

//input 6
//Loooooop
//input 5
//LoOoOop
