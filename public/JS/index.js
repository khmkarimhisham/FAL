var modal1 = document.getElementById('signupForm');
var modal2 = document.getElementById('signinForm');
window.onclick = function (event) {

    if (event.target == modal1) {
        modal1.style.display = "none";
    } else if (event.target == modal2) {
        modal2.style.display = "none";
    }
}
