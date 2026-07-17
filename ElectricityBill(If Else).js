console.log("Electricity Bill Generator");
const customerName ="Eishal";
let unitsConsumed = 180;
let electricityCharges = 0;

if (unitsConsumed>0 &&  unitsConsumed <=100){
    console.log("Rate per unit: Rs. 15");
    electricityCharges = unitsConsumed*15;
}
else if (unitsConsumed>100 &&  unitsConsumed <=200){
    console.log("Rate per unit: Rs. 18");
    electricityCharges = unitsConsumed*18;
}
else if (unitsConsumed>200 &&  unitsConsumed <=300){
    console.log("Rate per unit: Rs. 22");
    electricityCharges = unitsConsumed*22;
}
else if (unitsConsumed>300){
    console.log("Rate per unit: Rs. 30");
    electricityCharges = unitsConsumed*30;
}
let gst = electricityCharges*0.17;
let serviceCharges = 500;
const finalBill = electricityCharges+gst+serviceCharges;
console.log("---------------------");
console.log("Customer Name: ", customerName);
console.log("Unit's Consumed: ", unitsConsumed);
console.log("Electricity Charges: Rs.", electricityCharges);
console.log("GST: Rs.", gst);
console.log("Service Charges: Rs.", serviceCharges);
console.log("Final Bill: Rs.", finalBill);
