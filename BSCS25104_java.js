
function sendMessage() {
  var userInput = document.getElementById("userInput").value.toLowerCase();
  var chatbox = document.getElementById("chatbox");
  var botResponse = "";

  if (userInput.includes("hello") || userInput.includes("hi")) {
    botResponse = "How can I help you?";
  } else if (userInput.includes("welcome")) {
    botResponse = "Welcome to this web";
  } else if (userInput.includes("products")) {
    botResponse = "We have many products. What do you want to know?";
  } else if (userInput.includes("price")) {
    botResponse = "Prices are affordable. Which product?";
  } else if (userInput.includes("contact")) {
    botResponse = "Contact us at abc@example.com";
  } else {
    botResponse = "Sorry, I didn't get that.";
  }

  chatbox.innerHTML += "<p><strong>You:</strong> " + userInput + "</p>";
  chatbox.innerHTML += "<p><strong>Bot:</strong> " + botResponse + "</p>";

  document.getElementById("userInput").value = "";
  chatbox.scrollTop = chatbox.scrollHeight;
}

function clearChat() {
  document.getElementById("chatbox").innerHTML = "";
}
