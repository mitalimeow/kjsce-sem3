// Task 3: JavaScript Object for Patient Registration

let patient = {
    patientName: "Rahul Sharma",
    patientId: "PAT-1001",
    age: 62,
    gender: "Male",
    bloodGroup: "B+",
    mobile: "9876543210",
    department: "Cardiology",
    appointmentType: "Consultation",
    registrationStatus: "Confirmed",

    // Method 1: Display complete patient information using `this`
    displayPatient: function () {
        console.log("=== TASK 3: PATIENT OBJECT - PATIENT DETAILS ===");
        console.log(`Patient Name: ${this.patientName}`);
        console.log(`Patient ID: ${this.patientId}`);
        console.log(`Age: ${this.age}`);
        console.log(`Gender: ${this.gender}`);
        console.log(`Blood Group: ${this.bloodGroup}`);
        console.log(`Mobile: ${this.mobile}`);
        console.log(`Registration Status: ${this.registrationStatus}`);
        console.log("=================================================");
    },

    // Method 2: Display appointment information using `this`
    displayAppointment: function () {
        console.log("=== APPOINTMENT INFORMATION ===");
        console.log(`Patient ID: ${this.patientId}`);
        console.log(`Department: ${this.department}`);
        console.log(`Appointment Type: ${this.appointmentType}`);
        console.log(`Status: ${this.registrationStatus}`);
        console.log("================================");
    },

    // Method 3: Determine whether adult or senior citizen
    checkAgeCategory: function () {
        let category = "";
        if (this.age >= 60) {
            category = "Senior Citizen";
        } else if (this.age >= 18) {
            category = "Adult";
        } else {
            category = "Minor / Below 18";
        }
        console.log(`Age Category for ${this.patientName} (Age: ${this.age}): ${category}`);
        return category;
    }
};

// Execute Task 3 methods
patient.displayPatient();
patient.displayAppointment();
patient.checkAgeCategory();

if (typeof module !== 'undefined') {
    module.exports = { patient };
}
