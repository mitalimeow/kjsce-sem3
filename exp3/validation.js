// Patient Registration Form Validation - Exp 3

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('registration-form') || document.getElementById('reg-form');
    if (!form) return;

    // Helper functions for displaying errors and highlighting fields
    function showError(inputElement, errorSpanId, message) {
        if (!inputElement) return;
        inputElement.classList.add('error-field');
        
        let errorSpan = document.getElementById(errorSpanId);
        if (!errorSpan) {
            errorSpan = inputElement.parentElement.querySelector('.error-message');
        }
        if (errorSpan) {
            errorSpan.textContent = message;
        }
    }

    function clearError(inputElement, errorSpanId) {
        if (!inputElement) return;
        inputElement.classList.remove('error-field');
        
        let errorSpan = document.getElementById(errorSpanId);
        if (!errorSpan) {
            errorSpan = inputElement.parentElement.querySelector('.error-message');
        }
        if (errorSpan) {
            errorSpan.textContent = '';
        }
    }

    function clearAllErrors() {
        const errorFields = form.querySelectorAll('.error-field');
        errorFields.forEach(field => field.classList.remove('error-field'));

        const errorSpans = form.querySelectorAll('.error-message');
        errorSpans.forEach(span => span.textContent = '');

        const successBanner = document.getElementById('success-banner');
        if (successBanner) {
            successBanner.style.display = 'none';
        }
    }

    // Attach real-time input/change listeners to clear errors on user interaction
    const inputs = form.querySelectorAll('input, select, textarea');
    inputs.forEach(input => {
        input.addEventListener('input', () => {
            clearError(input, `error-${input.id}`);
        });
        input.addEventListener('change', () => {
            clearError(input, `error-${input.id}`);
        });
    });

    // Reset button handler
    form.addEventListener('reset', () => {
        clearAllErrors();
    });

    // Form Submit Event Handler
    form.addEventListener('submit', (event) => {
        // Clear previous error messages
        clearAllErrors();
        let isValid = true;
        let firstInvalidField = null;

        // Get elements (supporting both primary and alternate IDs)
        const nameInput = document.getElementById('patient_name') || document.getElementById('name');
        const mobileInput = document.getElementById('mobile');
        const emailInput = document.getElementById('email');
        const dobInput = document.getElementById('dob') || document.getElementById('date_of_birth');
        const genderSelect = document.getElementById('gender');
        const addressInput = document.getElementById('address');
        const bloodGroupSelect = document.getElementById('blood_group') || document.getElementById('bloodgroup');
        const deptSelect = document.getElementById('department') || document.getElementById('appointment_type');
        const regDateInput = document.getElementById('registration_date') || document.getElementById('reg_date');

        // Normalize Today's date to midnight for comparison
        const today = new Date();
        today.setHours(0, 0, 0, 0);

        // --- Task 2: Validate Required Text Fields ---
        
        // 1. Patient Name Validation
        if (nameInput) {
            const nameVal = nameInput.value.trim();
            const nameRegex = /^[A-Za-z\s]+$/;
            
            if (nameVal === '') {
                showError(nameInput, 'error-patient_name', 'Patient Name is required.');
                isValid = false;
                if (!firstInvalidField) firstInvalidField = nameInput;
            } else if (!nameRegex.test(nameVal)) {
                showError(nameInput, 'error-patient_name', 'Patient Name must contain alphabetic characters and spaces only.');
                isValid = false;
                if (!firstInvalidField) firstInvalidField = nameInput;
            }
        }

        // 2. Address Validation
        if (addressInput) {
            const addressVal = addressInput.value.trim();
            if (addressVal === '') {
                showError(addressInput, 'error-address', 'Address is required.');
                isValid = false;
                if (!firstInvalidField) firstInvalidField = addressInput;
            }
        }

        // --- Task 3: Validate Mobile Number and Email ---
        
        // 3. Mobile Number Validation (10-digit Indian Mobile Number)
        if (mobileInput) {
            const mobileVal = mobileInput.value.trim();
            const mobileRegex = /^[6-9]\d{9}$/;
            
            if (mobileVal === '') {
                showError(mobileInput, 'error-mobile', 'Mobile Number is required.');
                isValid = false;
                if (!firstInvalidField) firstInvalidField = mobileInput;
            } else if (!mobileRegex.test(mobileVal)) {
                showError(mobileInput, 'error-mobile', 'Please enter a valid 10-digit Indian mobile number (e.g. 9876543210).');
                isValid = false;
                if (!firstInvalidField) firstInvalidField = mobileInput;
            }
        }

        // 4. Email Address Validation
        if (emailInput) {
            const emailVal = emailInput.value.trim();
            const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
            
            if (emailVal === '') {
                showError(emailInput, 'error-email', 'Email Address is required.');
                isValid = false;
                if (!firstInvalidField) firstInvalidField = emailInput;
            } else if (!emailRegex.test(emailVal)) {
                showError(emailInput, 'error-email', 'Please enter a valid email address (e.g. patient@example.com).');
                isValid = false;
                if (!firstInvalidField) firstInvalidField = emailInput;
            }
        }

        // --- Task 4: Validate Selection and Date Fields ---

        // 5. Gender Selection Validation
        if (genderSelect) {
            if (genderSelect.value === '') {
                showError(genderSelect, 'error-gender', 'Please select a Gender.');
                isValid = false;
                if (!firstInvalidField) firstInvalidField = genderSelect;
            }
        }

        // 6. Blood Group Selection Validation
        if (bloodGroupSelect) {
            if (bloodGroupSelect.value === '') {
                showError(bloodGroupSelect, 'error-blood_group', 'Please select a Blood Group.');
                isValid = false;
                if (!firstInvalidField) firstInvalidField = bloodGroupSelect;
            }
        }

        // 7. Department / Appointment Type Selection Validation
        if (deptSelect) {
            if (deptSelect.value === '') {
                showError(deptSelect, 'error-department', 'Please select a Department / Appointment Type.');
                isValid = false;
                if (!firstInvalidField) firstInvalidField = deptSelect;
            }
        }

        // 8. Date of Birth Validation
        if (dobInput) {
            const dobVal = dobInput.value;
            if (!dobVal) {
                showError(dobInput, 'error-dob', 'Date of Birth is required.');
                isValid = false;
                if (!firstInvalidField) firstInvalidField = dobInput;
            } else {
                const dobDate = new Date(dobVal);
                if (dobDate > today) {
                    showError(dobInput, 'error-dob', 'Date of Birth cannot be in the future.');
                    isValid = false;
                    if (!firstInvalidField) firstInvalidField = dobInput;
                }
            }
        }

        // 9. Registration Date Validation
        if (regDateInput) {
            const regDateVal = regDateInput.value;
            if (!regDateVal) {
                showError(regDateInput, 'error-registration_date', 'Registration Date is required.');
                isValid = false;
                if (!firstInvalidField) firstInvalidField = regDateInput;
            } else {
                const regDate = new Date(regDateVal);
                if (regDate > today) {
                    showError(regDateInput, 'error-registration_date', 'Registration Date cannot be in the future.');
                    isValid = false;
                    if (!firstInvalidField) firstInvalidField = regDateInput;
                }
            }
        }

        // If any validation failed, block form submission
        if (!isValid) {
            event.preventDefault();
            if (firstInvalidField) {
                firstInvalidField.focus();
            }
        } else {
            event.preventDefault();
            const successBanner = document.getElementById('success-banner');
            if (successBanner) {
                successBanner.textContent = 'Patient registration form submitted successfully!';
                successBanner.style.display = 'block';
                window.scrollTo({ top: 0, behavior: 'smooth' });
            } else {
                alert('Patient registration form submitted successfully!');
            }
        }
    });
});
