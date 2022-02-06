function checkSignInfo() {
    let namString = document.getElementById("fnInput").value;
    let namString2 = document.getElementById("lnInput").value;
    let emString = document.getElementById("emInput").value;

    let pattern = /[0-9]/
    let result = namString.match(pattern)
    let result2 = namString2.match(pattern)

    let emilPat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    let result3 = emString.match(emilPat)

    let noInfo = document.forms["enForm"]["fName"].value;
    let noInfo2 = document.forms["enForm"]["lName"].value;
    let noInfo3 = document.forms["enForm"]["eMail"].value;


    if (noInfo=== "" || noInfo2 === "" || noInfo3 === "") {
        alert("Populate all fields!");
    } else if (result || result2) {
        alert("First and Last name cannot contain numbers!")
    } else if (!result3) {
        alert("Invalid email!")
        return false
    } else {
        alert("All fields populated, Welcome in!")
    }
}

function clearForm() {
    document.getElementById("unDo").reset();
}