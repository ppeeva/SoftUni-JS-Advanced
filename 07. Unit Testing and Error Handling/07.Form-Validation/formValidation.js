function validate() {
    const company = document.getElementById('company');    
    company.addEventListener('change', toggleCompanyInfo);
    
    function toggleCompanyInfo() {
        const companyInfo = document.getElementById('companyInfo');
        if (company.checked == false) {
            companyInfo.style.display = 'none';
        }
        else {
            companyInfo.style.display = 'block';
        }
    }

    document.getElementById('submit').addEventListener('click', onSubmit);

    function onSubmit(e) {
        e.preventDefault();

        const validDiv = document.getElementById('valid');
        const invalidFields = [];
        const validFields = [];

        const userName = document.getElementById('username');
        const userNamePattern = /^[A-Za-z0-9]{3,20}$/;
        if(!userNamePattern.test(userName.value)){
            invalidFields.push(userName);
        }
        else{
            validFields.push(userName);
        }

        const email = document.getElementById('email');        
        const emailPattern = /^[^@.]*@[^@\.]*\.[^@\.]*$/; // /^[a-z]+@[a-z]+\.[a-z]+/;
        if(!emailPattern.test(email.value)){
            invalidFields.push(email);
        }
        else{
            validFields.push(email);
        }

        const pass = document.getElementById('password');
        const confirmPass = document.getElementById('confirm-password');
        const passPattern = /^[\w]{5,15}$/;
        if(!passPattern.test(pass.value) || pass.value !== confirmPass.value){
            invalidFields.push(pass);
            invalidFields.push(confirmPass);
        }
        else{
            validFields.push(pass);
            validFields.push(confirmPass);
        }

        if(company.checked){
            const companyNumber = document.getElementById('companyNumber');
            const companyPattern = /^[1-9]{1}[0-9]{3}$/;

            if(!companyPattern.test(companyNumber.value)){
                invalidFields.push(companyNumber);
            }
            else{
                validFields.push(companyNumber);
            }
        }

        validFields.forEach(field => field.style.border = 'none');
        invalidFields.forEach(field => field.style.borderColor = 'red');

        invalidFields.length > 0 ? validDiv.style.display = 'none' : validDiv.style.display = 'block'
    }
}



//const emailPattern = /^[^@.]+@[^@\.]*\.[^@]+$/;