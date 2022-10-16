function validate() {
    const inputElement = document.getElementById('email');
    const emailPattern = /^[a-z]+@[a-z]+\.[a-z]+/;

    inputElement.addEventListener('change', validate);

    function validate(){
        if(emailPattern.test(inputElement.value)){
            inputElement.classList.remove('error');
        }
        else {
            inputElement.classList.add('error');
        }
    }
}

/*
email will be in format: <name>@<domain>.<extension>
Only lowercase Latin characters are allowed for any of the parts of the email.
*/