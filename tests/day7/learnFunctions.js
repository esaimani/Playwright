function optionalParam(fName, lName, email, age, phoneNumber) {
    if (phoneNumber === void 0) { phoneNumber = 9790002594; }
    console.log("User details ".concat(fName, ",").concat(lName, ",").concat(email, ",").concat(age, ",").concat(phoneNumber));
}
optionalParam('Esaimani', 'Navamani', 'esaimani@gmail.com', 35);
optionalParam('Esaimani', 'Navamani', 'esaimani@gmail.com', 35, 876543219);
