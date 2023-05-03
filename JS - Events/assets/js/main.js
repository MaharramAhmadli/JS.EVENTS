function getinnerText() {
    let text = document.getElementById("header").innerText;
    document.getElementById("determind").innerText
}

function getinnerHTML() {
    let text = document.getElementById("header").innerHTML;
    document.getElemenyById("determind").innerText;
}

function gettextContent() {
    let text = document.getElementById("header").textContent;
    document.getElementById("determind").innerText = text;
}


function openCity(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    // for (i = 0; i < tabcontent.length; i ++) {
    //     tablinks[i].style.display = "none";
    // }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
  }