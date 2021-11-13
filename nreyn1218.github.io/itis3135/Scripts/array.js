let person = ["Nico Reynoso", "D.I. von Briesen", "Ricky P", "Ash F"];
let salaries = [50000, 55000, 60000, 65000];

function displayEmployees(){
    let employees = document.getElementById("employees");
    employees.innerHTML = "";
    for (var i = 0; i < person.length; i++){
        employees.innerHTML += "<option>" + person[i] + "</option>";
    }      
}

function displayResults(){
    var average = 0, highest = 0;
    for (var i = 0; i < salaries.length; i++){
        average += salaries[i];
        if (salaries[i] > highest){
            highest = salaries[i];
        }
    }
    average = average/(salaries.length-1);
    let result = document.getElementById("results");
    result.innerHTML = "<h2>Highest Salary</h2>";
    result.innerHTML += "<p>" + highest + "</p>";
    result.innerHTML += "<h2>Average Salary</h2>";
    result.innerHTML += "<p>" + average + "</p>"
}

function displaySalary(){
    let table = document.getElementById("result_table");
    table.innerHTML = "<tr><th>Name</th><th>Salary</th></tr>";
    for (var i = 0; i < person.length; i++){
        table.innerHTML += "<tr><td>" + person[i] + "</td><td>" + salaries[i] + "</td></tr>";
    }
}

function addSalary(){
    let name = document.getElementById("name").value;
    let salary = document.getElementById("salary").value;
    //Checking for any input errors     
    if (name == ""){
        document.getElementsByClassName("nameerror").innerHTML = "Please enter a valid name";
        alert("Please enter a valid name!");
    }
    if (salary == ""){
        document.getElementsByClassName("salaryerror").innerHTML = "Please enter a valid salary";
        alert("Please enter a valid salary!");
    }
    if (name != "" && salary!= ""){
        person.push(name);
        salaries.push(salary);
        alert("Employee added!");
    }     
}