function printTicketPrice(visitorAge, isStudent) {
    if (visitorAge <= 6) {
        console.log("Ieeja ir bez maksas.");
    }
    else {
        if (isStudent == true) {
            console.log("Biļetes cena ir 5 EUR.");
        } else {
            console.log("Biļetes cena ir 10 EUR");
        }
    };
};


printTicketPrice(12, true);
printTicketPrice(35, false);