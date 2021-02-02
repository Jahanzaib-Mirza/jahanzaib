var arrQual = [];
function getInfo() {
    var fullName = document.getElementById("name").value;
    var DOB = document.getElementById("dob").value;
    var email = document.getElementById("email").value;
    var contactNo = document.getElementById("contactNo").value;
    var address = document.getElementById("address").value;
    var joindate = document.getElementById("joindate").value;
    var leavedate = document.getElementById("leavedate").value;
    var designation = document.getElementById("desig").value;
    var genderMale = document.getElementById("male").value;
    var genderFemale = document.getElementById("female").value;
    localStorage.setItem("fullName", fullName)
    console.log(fullName);
    localStorage.setItem("DOB", DOB);
    localStorage.setItem("email", email);
    localStorage.setItem("contactNo", contactNo);
    localStorage.setItem("address", address);
    localStorage.setItem("joindate", joindate);
    localStorage.setItem("leavedate", leavedate);
    localStorage.setItem("designation", designation);
    alert('working');
    // qual();
    // preview();
    var checks = document.getElementsByClassName("chks")
    var qarr = [];
    for (i = 0; i < 3; i++) {
        if (checks[i].checked === true) {
            qarr += checks[i].value + ", ";
        }

    }
    localStorage.setItem("qualifications", qarr);
    console.log(qarr);
    var checkskill = document.getElementsByClassName("chkskill")
    var sarr = [];
    for (i = 0; i < 5; i++) {
        if (checkskill[i].checked === true) {
            sarr += checkskill[i].value + ", ";
        }
    }
    localStorage.setItem("qualifications", qarr);
    localStorage.setItem("skills", sarr);

}





// function qual() {
//     if (document.getElementById("matric").checked) {
//         arrQual.push(document.getElementById("matric").value);
//     }
//     else if (document.getElementById("inter").checked) {
//         arrQual.push(document.getElementById("inter").value);
//     }
//     else if (document.getElementById("graduation").checked) {
//         arrQual.push(document.getElementById("graduation").value);
//     }
//     console.log(arrQual);
// }
// // qual();
// function preview(){
// for (i = 0; i < localStorage.length; i++) {
//     var key = localStorage.key(i);
//     var item = localStorage.getItem(key);
//     // document.getElementById("preview").innerHTML += item + "<br>";
//     document.write(item);
//     console.log(item);
// }
// }
