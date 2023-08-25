
const loginBtn = document.getElementById("login-link");
const modal = document.getElementById("login-modal");


loginBtn.onclick = function () {
    modal.style.display = "flex"; 
}


const closeBtn = document.getElementsByClassName("close")[0];
closeBtn.onclick = function() {
	modal.style.display = "none";
}



window.onclick = function(event) {
    if (event.target == modal) {
    modal.style.display = "none";
    }
    }

    