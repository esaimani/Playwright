function optionalParam(fName: string, lName: string, email: string, age?: number, phoneNumber: number = 9790002594) {
    console.log(`User details ${fName},${lName},${email},${age},${phoneNumber}`);

}

optionalParam('Esaimani', 'Navamani', 'esaimani@gmail.com', 35);
optionalParam('Esaimani', 'Navamani', 'esaimani@gmail.com', 35, 876543219);
