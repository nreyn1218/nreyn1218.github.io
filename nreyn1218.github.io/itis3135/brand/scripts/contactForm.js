function getGender() {
    return document.querySelector('input[name="gender"]:checked')
}
var fields = {};
document.addEventListener("DOMContentLoaded", function() {
    fields.firstName = document.getElementById('firstName');
    fields.lastName = document.getElementById('lastName');
    fields.email = document.getElementById('email');
    fields.question = document.getElementById('question');
})

function submitContact() {
    fields.gender = getGender();
    var x = fields.firstName.value;
    var y = fields.lastName.value;
    var z = fields.question.value;
    alert("First name:" + x + "     " + "Last name:" + y + "     " + "Gender:" + fields.gender.value + "     " + "Question:" +z);
}
