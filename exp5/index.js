// Experiment 5 - Main Index JS Entry Point

const { calculateRegistrationAmount } = require('./task1');
const { determineAppointmentPriority } = require('./task2');
const { patient } = require('./task3');
const { analyzePatientAges } = require('./task4');
const { validateRegistrationForm } = require('./task5');

console.log("**************************************************");
console.log("      KJSCE SEM 3 - EXPERIMENT 5 LAB RESULTS     ");
console.log("**************************************************\n");

// Task 1
console.log(">>> RUNNING TASK 1: REGISTRATION AMOUNT & DISCOUNT <<<");
calculateRegistrationAmount({
    pname: "Rahul Sharma",
    pid: "PAT-1001",
    page: 65,
    cons_fee: 500,
    reg_fee: 100,
    reg_status: true
});

// Task 2
console.log(">>> RUNNING TASK 2: APPOINTMENT PRIORITY DECISION <<<");
determineAppointmentPriority({
    page: 62,
    ptemp: 39.2,
    psev: "Moderate",
    pemergency: "No"
});

// Task 3
console.log(">>> RUNNING TASK 3: PATIENT OBJECT & METHODS <<<");
patient.displayPatient();
patient.displayAppointment();
patient.checkAgeCategory();
console.log("\n");

// Task 4
console.log(">>> RUNNING TASK 4: PATIENT AGE ARRAY CALCULATIONS <<<");
analyzePatientAges([22, 35, 67, 45, 29, 72, 56, 18, 64, 40]);

// Task 5
console.log(">>> RUNNING TASK 5: REGEX VALIDATION <<<");
validateRegistrationForm({
    pname: "Rahul Sharma",
    pid: "PAT-1234",
    mobile: "9876543210",
    email: "rahul@gmail.com"
});

console.log("**************************************************");
console.log("      ALL EXPERIMENT 5 TASKS EXECUTED CLEANLY     ");
console.log("**************************************************");