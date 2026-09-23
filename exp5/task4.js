// Task 4: Patient Age and Appointment Data Using Arrays

function analyzePatientAges(agesArray) {
    let patientAges = agesArray || [22, 35, 67, 45, 29, 72, 56, 18, 64, 40];

    console.log("=== TASK 4: PATIENT AGE ARRAY OPERATIONS ===");

    // 1. Display all patient ages
    console.log("1. All Patient Ages:", patientAges.join(", "));

    // 2. Find minimum patient age
    let minAge = Math.min(...patientAges);
    console.log("2. Minimum Patient Age:", minAge);

    // 3. Find maximum patient age
    let maxAge = Math.max(...patientAges);
    console.log("3. Maximum Patient Age:", maxAge);

    // 4. Calculate average patient age
    let totalSum = patientAges.reduce((sum, age) => sum + age, 0);
    let avgAge = totalSum / patientAges.length;
    console.log(`4. Average Patient Age: ${avgAge.toFixed(2)} years`);

    // 5. Count senior-citizen patients (age >= 60)
    let seniorCount = patientAges.filter(age => age >= 60).length;
    console.log("5. Count of Senior-Citizen Patients (>= 60):", seniorCount);

    // 6. Count patients below 18 years (age < 18)
    let minorCount = patientAges.filter(age => age < 18).length;
    console.log("6. Count of Patients Below 18 Years:", minorCount);

    // 7. Display patients whose age is greater than 60 (age > 60)
    let seniorsAbove60 = patientAges.filter(age => age > 60);
    console.log("7. Patient Ages Greater Than 60:", seniorsAbove60.join(", "));
    console.log("=============================================\n");

    return {
        allAges: patientAges,
        minAge,
        maxAge,
        avgAge,
        seniorCount,
        minorCount,
        seniorsAbove60
    };
}

// Execute Task 4
analyzePatientAges();

if (typeof module !== 'undefined') {
    module.exports = { analyzePatientAges };
}
