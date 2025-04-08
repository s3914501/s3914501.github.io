let a = 10;
let b = 20;
let c = a + b;

function add(a, b) {
  let c = a + b;
  // console.log(c);
  return c;
}

let total = add(2, 4);
console.log(total);
total = add(a, b);
console.log(total);

function subtract(a, b) {
  let res = a - b;
  // console.log(c);
  return res;
}

function whatismygrade(marks) {
  if (marks > 80) {
    // console.log("I got an HD");
  } else if (marks < 40) {
    // console.log("Sorry I failed");
    return "Fail";
  } else {
    return "Pass";
  }
}

let marks = 56;
let grade = whatismygrade;
console.log(grade);
let total = add(a, b);
console.log(total);
total = add(a, b);

let result = subtract(12, 4);

const topHeading = document.querySelector("h1");
console.log(topHeading);

const mysubheading = document.querySelector("p");
console.log(mysubheading);

//console.log(blogposts);
const gridContainer = document.querySelector("#grid-container");
//console.log(gridContainer);

for (let i = 0; i < blogposts.length; i++) {
  console.log(blogposts[i].title);
  formattedcontent += (
    <section id="box${i+1}">
      <h1>${blogposts[i].title} </h1>
      <p>$blogposts[I].content</p>;
    </section>
  );
}
console.log(formattedcontent);
gridContainer.innerHTML += formattedcontent;
