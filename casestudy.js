//click control to switch between two headers
let header1Clicked = false;
let header2Clicked = false;
let numOfHeaders = 2;

// creating 'Home' in the menu
let home = document.createElement("h1");
home.setAttribute("id", "home");
home.innerHTML = "Home";
document.body.appendChild(home); 

//creating other divs. The number can be easily changed by changing the 'numOfHeaders'
for (let i= 1; i < numOfHeaders +1; i++) {
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

//hiding paragraphs in the default view
let parag1 =  document.querySelector(`#parag${1}`);
parag1.style.display = "none";

let parag2 =  document.querySelector(`#parag${2}`);
parag2.style.display = "none";

//adding 'click' event listeners
document.querySelector(`#header${1}`).addEventListener("click", showParag1);
document.querySelector(`#header${2}`).addEventListener("click", showParag2);
home.addEventListener("click", goHome);

function showParag1() {  
  header1Clicked = true;
  header2Clicked = false;  
  // ajax call to trigger data from data.json
  $.get("data.json", function(data) {
    console.log(data.parag2); 
    parag1.innerHTML = data.parag1;
  });

  //hiding the other paragraph when the other one is active
  if(header1Clicked == true) {
    parag1.style.display = "block";
    parag2.style.display = "none";
  //modifing the url
    let page1 = { casestudy: "header1" };
    history.pushState(page1, "Page 1", "lorem-ipsum-dolor");
  }
}

function showParag2() {  
  header2Clicked = true;
  header1Clicked = false;  
  // ajax call to trigger data from data.json
  $.get("data.json", function(data) {
    console.log(data.parag2);
    parag2.innerHTML = data.parag2;    
  });
  //hiding the other paragraph when the other one is active
  if(header2Clicked == true) {
    parag2.style.display = "block";    
    parag1.style.display = "none"; 
  //modifing the url
    let page2 = { casestudy: "header2" };
    history.pushState(page2, "Page 2", "ut-enim-ad-minim");
  }
}
//function to be called, when user click on 'Home' and wants to get back to default view
function goHome() {
  header1Clicked = false;
  header2Clicked = false;
//hiding the paragraphs
  parag1.style.display = "none";
  parag2.style.display = "none";
//modifing the url
  let home = { casestudy: "home.html" };
    history.pushState(home, "Home", "home.html");
}



