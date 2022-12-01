function mouseOver() {
    document.getElementById("email").style.color = "#b5daa6";
}
//näidatud javascriptiga, kuidas elemendi värvi muuta
function mouseOut() {
    document.getElementById("email").style.color = "#0f4940";
}

function sendEmail() 
{
    window.location = "mailto:tudengiretseptid@gmail.com";
}
//meili saatmise funktsiooniks kasutatud allikat: https://stackoverflow.com/questions/19639900/use-div-as-a-button-and-trigger-a-mailto-when-it-is-clicked