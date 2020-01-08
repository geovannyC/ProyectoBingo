//POST DATA IN DATABASE
const http = new XMLHttpRequest();

const API_URL = "http://localhost:8001/server/bingo"

postDataPersona = () => {
  http.open('POST', API_URL+"?tabla=persona", true);
  http.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

  http.onreadystatechange = function() {
    if(http.readyState == 4 && http.status == 200) {
      console.log(http.responseText);
    }
  }

  let persona_nombre = document.getElementById('persona_nombre').value

  let data = (`persona_nombre=${persona_nombre}`)

  http.send(data)
}

//GET DATA IN DATABASE
getDataPersona = () => {
  http.open('GET', API_URL, true )

  http.onreadystatechange = function() {
    if(http.readyState == 4 && http.status == 200) {
      alert(http.responseText);
    }
  }

  http.send()
  alert(http.responseText);

}







// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}