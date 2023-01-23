const body = document.body;
const div = document.createElement("div");
body.append("hai world");
body.appendChild(document.createElement("div")).innerHTML = "hai";

const strong = document.createElement("strong");
strong.innerHTML = "this is element - strong";
div.append(strong);
const prijith = document.querySelector("#prijith");
prijith.remove();

const data = document.getElementById("data");

console.log(data.dataset.hai);

prijith.classList.toggle("okda");
console.log(prijith.classList);

data.style.backgroundColor="red";


