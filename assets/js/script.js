/* Author: 

*/
//form inputs and other required elements and variables initialized
const form = document.querySelector('form[name=sign-up]');
const error = document.querySelectorAll('.err');
let validInput;

//evenlistener on form and cancel button
form.addEventListener('submit', validation);


//function to call all validation methods
function validators(fields) {
    let name = ["First name", "Last Name","Position"];
    let select  = ["company type","country"];
    validInput = true;
    nameValidator(fields[0], error[0], name[0]);
    nameValidator(fields[1], error[1], name[1]);
   nameValidator(fields[2], error[2],name[2]);
   companyValidator(fields[3], error[3]);
   selectValidator(fields[4],error[4],select[0]);
   selectValidator(fields[5],error[5],select[1]);
   emailValidator(fields[6],error[6]);
    checkValidator(fields[7],error[7]);
}

function nameValidator(name, err, title) {
    let re = /^[A-Za-z]+$/;
    try {
        if (name == "") {
            validInput = false;
            throw title + " is empty";
        } else if (name.length > 15) {
            validInput = false;
            throw title + " length can't be more than 15";
        } else if (name.length < 3) {
            validInput = false;
            throw title + "  length can't be less than 3";
        } else if (re.test(name) == false) {
            validInput = false;
            throw title + "  can't have numbers";
        }
        else {
            err.style.display = "none";
        }
    } catch (e) {
        err.innerHTML = e;
        err.style.display = "block";
    }
}

function companyValidator(name, err) {
    try {
        if (name == "") {
            validInput = false;
            throw "please enter position";
        }
        else if (name.length > 20) {
            validInput = false;
            throw "compnay name  length can't be more than 15";
        } else if (name.length < 3) {
            validInput = false;
            throw " comapny name length can't be less than 3";
        } 
        else {
            err.style.display = "none";
        }
    } 
    catch (e) {
        err.innerHTML = e;
        err.style.display = "block";
    }
}

function selectValidator(selected, err,name) {
    try {
        if (selected =="false") {
            validInput = false;
            throw "please select"+ " "+name;
        }
        else {
            err.style.display = "none";
        }
    } catch (e) {
        err.innerHTML = e;
        err.style.display = "block";
    }
}


function emailValidator(email,err){
    let re = /^[a-zA-Z0-9]+@[a-zA-Z]+\.[a-zA-Z]{2,3}$/;
    try {
        if (email==" ") {
            validInput = false;
            throw "please enter email";
        }else if(re.test(email) == false){
            validInput = false;
            throw "please enter valid email";
        }
        else {
            err.style.display = "none";
        }
    } catch (e) {
        err.innerHTML = e;
        err.style.display = "block";
    }
}
function checkValidator(check,err) {
    if (check[0].checked === false && check[1].checked == false) {
        validInput = false;
        err.innerHTML = "please select one option";
        err.style.display = "block";
    }
    else if(check[0].checked && check[1].checked){
        validInput = false;
        err.innerHTML = "please select only one option";
        err.style.display = "block";
    }
    else {
        err.style.display = "none";
    }
}

//validation function to initialize form values
function validation(e) {
    let fname = document.forms['sign-up']['first-name'].value;
    let lname = document.forms['sign-up']['last-name'].value;
    let post = document.forms['sign-up']['post'].value;
    let company = document.forms['sign-up']['company'].value;
    const check = document.forms['sign-up']['consent'];
    let email = document.forms['sign-up']['email'].value;
    let country = document.forms['sign-up']['country'].value;
    let companyType = document.forms['sign-up']['company-type'].value;
    let fields = [fname, lname, post,company,companyType,country,email, check];
    validators(fields);
    if (validInput) {
       alert("thanks"+" "+fname);
    }
    e.preventDefault();
}




















