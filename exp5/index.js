let pname;
let pid;
let page;
let cons_fee;
let reg_fee;

let amt = cons_fee + reg_fee;

let discount_eligibility = false;
if(page>60){
    discount_eligibility = true;

}

let reg_status = false;

console.log("Patient name: "+pname);
console.log("Patient ID: "+pid);
console.log("Total amount : "+amt);

if(reg_status==true){
console.log("Registration status: "+"registered");
}
else{
console.log("Registration status: "+"not registered");
}

page = document.getElementById('page');
ptemp=document.getElementById('temp');
psev=document.getElementById('sev');
pemergency=document.getElementById('emergency');
presult=document.getElementById('result');

if(pemergency==checked){
    presult = 'Emergency consultation required';
}
else if(ptemp>=39 || psev == 'severe'){
    presult = "High priority consultation";
}
else if(page>=60 && psev=='moderate'){
    presult = "Priority consultation";
}
else{
    presult = "Regular consultation";
}