let header1Clicked = false;
let header2Clicked = false;

let home = document.createElement("h1");
home.setAttribute("id", "home");
home.innerHTML = "Home";
document.body.appendChild(home); 

for (let i=1; i <3; i++) {
let div = document.createElement("div");
div.setAttribute("id", `div${i}`);
document.body.appendChild(div);

let header = document.createElement("h1");
header.innerHTML = `Header${i}`;
header.setAttribute("id", `header${i}`);

div.appendChild(header);

let parag = document.createElement("p");
parag.setAttribute("id", `parag${i}`);
div.appendChild(parag);
}

let parag1 =  document.querySelector(`#parag${1}`);
parag1.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
parag1.style.display = "none";

let parag2 =  document.querySelector(`#parag${2}`);
parag2.innerHTML = "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
parag2.style.display = "none";

document.querySelector(`#header${1}`).addEventListener("click", showParag1);
document.querySelector(`#header${2}`).addEventListener("click", showParag2);
home.addEventListener("click", goHome);

function showParag1() {  
  header1Clicked = true;
  header2Clicked = false;  
  if(header1Clicked == true) {
    parag1.style.display = "block";
    parag2.style.display = "none";
    let page1 = { casestudy: "header1" };
    history.pushState(page1, "Page 1", "lorem-ipsum-dolor");

  }
}

function showParag2() {  
  header2Clicked = true;
  header1Clicked = false;  
  if(header2Clicked == true) {
    parag2.style.display = "block";
    parag1.style.display = "none";
    let page2 = { casestudy: "header2" };
    history.pushState(page2, "Page 2", "ut-enim-ad-minim");
  }
}

function goHome() {
  header1Clicked = false;
  header2Clicked = false;
  parag1.style.display = "none";
  parag2.style.display = "none";
  let home = { casestudy: "home.html" };
    history.pushState(home, "Home", "home.html");
}



