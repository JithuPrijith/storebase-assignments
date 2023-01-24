function sendMessage(user) {
  console.log(user);
  let userDiv = document.querySelectorAll(".chat-holder");
  let userChat = document.querySelectorAll("input");
  let chatDiv = document.createElement("p");
  let senderDiv = document.createElement("p");

  if (user == "user1" && userChat[0].value != "") {
    userDiv[1].appendChild(chatDiv).innerHTML = userChat[0].value;
    userDiv[0].appendChild(senderDiv).innerHTML = userChat[0].value;
    senderDiv.classList.add(
      "d-flex",
      "justify-content-end",
      "bg-primary",
      "w-100"
    );
  } else if (user == "user2" && userChat[1].value != "") {
    userDiv[0].appendChild(chatDiv).innerHTML = userChat[1].value;
    userDiv[1].appendChild(senderDiv).innerHTML = userChat[1].value;
    senderDiv.classList.add(
      "d-flex",
      "justify-content-end",
      "bg-primary",
      "w-100"
    );
  }
  document.querySelectorAll("input").forEach((val) => val.value ="");
}

