function myfunct() {
    var x = document.getElementById('ul');
    y = document.getElementsByClassName("photo");
    if (x.style.display == "block") {
        x.style.display = "none";
    }
    else {
        x.style.display = "block";
    }
}