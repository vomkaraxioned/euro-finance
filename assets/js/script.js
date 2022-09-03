/* Author: 

*/
//form inputs and other required elements and variables initialized
const form = document.querySelector('.sign-up');
const error = document.querySelectorAll('.err');
let fname, lname, gender, address;
let validInput;

//evenlistener on form and cancel button
form.addEventListener('submit', validation);


//function to call all validation methods
function validators(fields) {
    validInput = true;
    let name = ["First name", "Last Name"]
    nameValidator(fields[0], error[0], name[0]);
    nameValidator(fields[1], error[1], name[1]);
    genderValidator(fields[2], error[2]);
    addressValidator(fields[3], error[3]);
    checkValidator(fields[4]);
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

function genderValidator(radio, err) {
    try {
        if (radio == "") {
            validInput = false;
            throw "please select gender";
        }
        else {
            err.style.display = "none";
        }
    } catch (e) {
        err.innerHTML = e;
        err.style.display = "block";
    }
}

function addressValidator(addr, err) {
    try {
        if (addr == "") {
            validInput = false;
            throw "please fill address field";
        } else if (addr.length < 10) {
            validInput = false;
            throw "please fill valid address";
        }
        else {
            err.style.display = "none";
        }
    } catch (e) {
        err.innerHTML = e;
        err.style.display = "block";
    }
}

function checkValidator(check) {
    if (check === false) {
        validInput = false;
        error[error.length - 1].innerHTML = "please agree conditions";
        error[error.length - 1].style.display = "block";
    }
    else {
        error[error.length - 1].style.display = "none";
    }
}

//validation function to initialize form values
function validation(e) {
    let fname = document.forms['form']['first-name'].value;
    let lname = document.forms['form']['last-name'].value;
    let gender = document.forms['form']['gender'].value;
    let address = document.forms['form']['address'].value;
    const check = document.forms['form']['t&c'].checked;
    let fields = [fname, lname, gender, address, check];
    validators(fields);
    if (validInput) {
        addData(fields);
    }
    updateButtons();
    e.preventDefault();
}




















