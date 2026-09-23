// Task 5: Validate Patient Registration Details Using Regular Expressions

// Individual Validation Functions
function validatePatientName(name) {
    const regex = /^[A-Za-z\s]+$/;
    if (!name || name.trim() === '') {
        return { isValid: false, message: "Patient Name is required." };
    }
    if (!regex.test(name.trim())) {
        return { isValid: false, message: "Patient Name must contain only alphabets and spaces." };
    }
    return { isValid: true, message: "" };
}

function validateMobileNumber(mobile) {
    const regex = /^[6-9]\d{9}$/;
    if (!mobile || mobile.trim() === '') {
        return { isValid: false, message: "Mobile Number is required." };
    }
    if (!regex.test(mobile.trim())) {
        return { isValid: false, message: "Mobile Number must be exactly 10 digits starting with 6-9." };
    }
    return { isValid: true, message: "" };
}

function validatePatientId(pid) {
    const regex = /^PAT-\d{4}$/;
    if (!pid || pid.trim() === '') {
        return { isValid: false, message: "Patient ID is required." };
    }
    if (!regex.test(pid.trim())) {
        return { isValid: false, message: "Patient ID must be in format PAT-1234." };
    }
    return { isValid: true, message: "" };
}

function validateEmailAddress(email) {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!email || email.trim() === '') {
        return { isValid: false, message: "Email Address is required." };
    }
    if (!regex.test(email.trim())) {
        return { isValid: false, message: "Invalid email address format (e.g. rahul@gmail.com)." };
    }
    return { isValid: true, message: "" };
}

// Master Validation Function
function validateRegistrationForm(details) {
    console.log("=== TASK 5: REGEX PATIENT VALIDATION ===");
    
    const nameRes = validatePatientName(details.pname);
    const mobileRes = validateMobileNumber(details.mobile);
    const pidRes = validatePatientId(details.pid);
    const emailRes = validateEmailAddress(details.email);

    let isAllValid = nameRes.isValid && mobileRes.isValid && pidRes.isValid && emailRes.isValid;

    if (isAllValid) {
        console.log("Validation Result: SUCCESS! All registration details are valid.");
        console.log(`- Patient Name: ${details.pname}`);
        console.log(`- Patient ID: ${details.pid}`);
        console.log(`- Mobile Number: ${details.mobile}`);
        console.log(`- Email Address: ${details.email}`);
    } else {
        console.log("Validation Result: FAILED! Invalid registration details detected.");
        if (!nameRes.isValid) console.log(`- Name Error: ${nameRes.message}`);
        if (!pidRes.isValid) console.log(`- ID Error: ${pidRes.message}`);
        if (!mobileRes.isValid) console.log(`- Mobile Error: ${mobileRes.message}`);
        if (!emailRes.isValid) console.log(`- Email Error: ${emailRes.message}`);
    }
    console.log("=========================================\n");

    return {
        isAllValid,
        nameRes,
        mobileRes,
        pidRes,
        emailRes
    };
}

// DOM Form Submit Integration (Runs in browser environment)
if (typeof document !== 'undefined') {
    document.addEventListener('DOMContentLoaded', () => {
        const exp5Form = document.getElementById('exp5-registration-form') || document.getElementById('reg-form');
        if (!exp5Form) return;

        exp5Form.addEventListener('submit', (event) => {
            const nameField = document.getElementById('pname') || document.getElementById('name');
            const pidField = document.getElementById('pid');
            const mobileField = document.getElementById('mobile');
            const emailField = document.getElementById('email');

            const details = {
                pname: nameField ? nameField.value : '',
                pid: pidField ? pidField.value : '',
                mobile: mobileField ? mobileField.value : '',
                email: emailField ? emailField.value : ''
            };

            const result = validateRegistrationForm(details);

            if (!result.isAllValid) {
                event.preventDefault(); // Prevent form submission
                
                // Display individual error messages beside fields
                if (nameField) renderFieldError(nameField, result.nameRes.message);
                if (pidField) renderFieldError(pidField, result.pidRes.message);
                if (mobileField) renderFieldError(mobileField, result.mobileRes.message);
                if (emailField) renderFieldError(emailField, result.emailRes.message);

                alert("Registration failed! Please fix validation errors.");
            } else {
                event.preventDefault(); // For demo display
                alert("Registration Successful! All details are valid.");
            }
        });
    });

    function renderFieldError(inputElement, msg) {
        if (!inputElement) return;
        inputElement.classList.add('error-field');
        let errSpan = inputElement.parentElement.querySelector('.error-message');
        if (!errSpan) {
            errSpan = document.createElement('span');
            errSpan.className = 'error-message';
            errSpan.style.color = 'red';
            inputElement.parentElement.appendChild(errSpan);
        }
        errSpan.textContent = msg;
    }
}

// Execute sample validation run
validateRegistrationForm({
    pname: "Rahul Sharma",
    pid: "PAT-1234",
    mobile: "9876543210",
    email: "rahul@gmail.com"
});

if (typeof module !== 'undefined') {
    module.exports = {
        validatePatientName,
        validateMobileNumber,
        validatePatientId,
        validateEmailAddress,
        validateRegistrationForm
    };
}
