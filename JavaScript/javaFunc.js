function checkSignInfo() {
    let namString = document.getElementById("myInput").value;
    let pattern = /[0-9]/
    let result = namString.match(pattern)
    let empty = " "
    if ((result) || empty) {
        text = "Input is not valid!";
    } else {
        text = "Input is valid!";
    }
    document.getElementById("check2").innerHTML = text;

}