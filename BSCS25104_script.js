

window.onload = function() {
    alert("Welcome! This is our website.");
    var year = new Date().getFullYear();
    document.getElementById("footerYear").textContent = year;
}


function CheckStock(productId) {
  const stock = {
    badmintonRackets: 3,
    cyclingShoes: 1,
    tracksuit: 5,
    helmet: 0,
    kitBag: 0
  };
  let status = stock[productId] > 0 ? "In stock" : " Out of Stock" ;
  alert(productId + " : " + status);
}

function validateForm() {
  var name = document.getElementById("name").value.trim();
  var email = document.getElementById("email").value.trim();
  var message = document.getElementById("formMessage");
  
  var errors = [];

  if (name === "") {
    errors.push("Please enter your name");
  }

  if (email === "") {
    errors.push("Please enter your email");
  } else {
    if (email.indexOf("@") === -1 || email.indexOf(".") === -1) {
      errors.push("Please enter a valid email");
    }
  }

  if (errors.length > 0) {
    message.innerHTML = errors.join("<br>");
    return false;
  } else {
    return true;
  }
}
