// Task 1: Patient Registration Amount & Senior Citizen Discount Calculation

function calculateRegistrationAmount(patientDetails) {
    // 1. Declare variables
    let pname = patientDetails?.pname || "Rahul Sharma";
    let pid = patientDetails?.pid || "PAT-1001";
    let page = patientDetails?.page || 65;
    let cons_fee = patientDetails?.cons_fee || 500;
    let reg_fee = patientDetails?.reg_fee || 100;
    let reg_status = patientDetails?.reg_status ?? true;

    // 2. Perform Arithmetic Operations & Expressions
    let gross_total = cons_fee + reg_fee;
    
    // Basic if statement for Senior-Citizen Discount (age >= 60)
    let discount_eligibility = false;
    let discount = 0;
    
    if (page >= 60) {
        discount_eligibility = true;
        discount = cons_fee * 0.20; // 20% discount on consultation fee for senior citizens
    }

    let net_total = gross_total - discount;

    // 3. Output results using console.log()
    console.log("=== TASK 1: REGISTRATION AMOUNT & DISCOUNT ===");
    console.log("Patient Name: " + pname);
    console.log("Patient ID: " + pid);
    console.log("Patient Age: " + page);
    console.log("Consultation Fee: $" + cons_fee);
    console.log("Registration Fee: $" + reg_fee);
    console.log("Gross Total: $" + gross_total);
    console.log("Senior Citizen Discount Eligible: " + (discount_eligibility ? "Yes (20% off)" : "No"));
    console.log("Discount Amount: $" + discount);
    console.log("Net Payable Amount: $" + net_total);
    console.log("Registration Status: " + (reg_status ? "Registered / Confirmed" : "Not Registered"));
    console.log("================================================\n");

    // Output using alert() and document.write() if running in browser environment
    if (typeof window !== 'undefined') {
        const message = `Patient: ${pname} (${pid})\nAge: ${page}\nTotal Amount: $${net_total}\nStatus: ${reg_status ? "Registered" : "Not Registered"}`;
        alert(message);
    }

    if (typeof document !== 'undefined' && document.write) {
        const htmlOutput = `
            <div style="border: 1px solid #0056b3; padding: 15px; border-radius: 6px; margin-bottom: 15px; background-color: #f0f4f8;">
                <h3>Task 1: Registration Payment Summary</h3>
                <p><strong>Patient Name:</strong> ${pname}</p>
                <p><strong>Patient ID:</strong> ${pid}</p>
                <p><strong>Age:</strong> ${page} (${discount_eligibility ? "Senior Citizen Discount Applied" : "Regular"})</p>
                <p><strong>Consultation Fee:</strong> ₹${cons_fee}</p>
                <p><strong>Registration Fee:</strong> ₹${reg_fee}</p>
                <p><strong>Discount:</strong> ₹${discount}</p>
                <p><strong>Total Payable Amount:</strong> ₹${net_total}</p>
                <p><strong>Registration Status:</strong> ${reg_status ? "Registered" : "Not Registered"}</p>
            </div>
        `;
        // document.write(htmlOutput); // Can be invoked if direct document output is required
    }

    return {
        pname,
        pid,
        page,
        cons_fee,
        reg_fee,
        gross_total,
        discount,
        net_total,
        discount_eligibility,
        reg_status
    };
}

// Execute Task 1
calculateRegistrationAmount();

if (typeof module !== 'undefined') {
    module.exports = { calculateRegistrationAmount };
}
