// Task 2: Patient Appointment and Priority Decision

function determineAppointmentPriority(params) {
    // 1. Accept input parameters using variables
    let page = params?.page ?? 65;
    let ptemp = params?.ptemp ?? 38.5;
    let psev = (params?.psev ?? "Moderate").toLowerCase();
    let pemergency = params?.pemergency ?? false;
    
    // Normalize emergency status boolean or string ("Yes" / "No")
    let isEmergency = (pemergency === true || String(pemergency).trim().toLowerCase() === "yes");

    let recommendation = "";

    // 2. Multi-condition decision logic using if-else-if
    if (isEmergency) {
        recommendation = "Emergency Consultation Required";
    } else if (ptemp >= 39.0 || psev === "severe") {
        recommendation = "High Priority Consultation";
    } else if (page >= 60 && psev === "moderate") {
        recommendation = "Priority Consultation";
    } else {
        recommendation = "Regular Consultation";
    }

    // 3. Display decision recommendation
    console.log("=== TASK 2: APPOINTMENT PRIORITY DECISION ===");
    console.log(`Patient Age: ${page}`);
    console.log(`Temperature: ${ptemp}°C`);
    console.log(`Severity Level: ${psev}`);
    console.log(`Emergency Status: ${isEmergency ? "Yes" : "No"}`);
    console.log(`Recommendation: ${recommendation}`);
    console.log("==============================================\n");

    if (typeof window !== 'undefined') {
        alert(`Priority Decision Result: ${recommendation}`);
    }

    return {
        page,
        ptemp,
        psev,
        isEmergency,
        recommendation
    };
}

// Execute Task 2 with sample inputs
determineAppointmentPriority({ page: 62, ptemp: 38.2, psev: "Moderate", pemergency: "No" });

if (typeof module !== 'undefined') {
    module.exports = { determineAppointmentPriority };
}
