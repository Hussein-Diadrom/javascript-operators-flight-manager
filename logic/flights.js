function Flights() {
function calculateNumberOfFlights(NumPassengers,flightCap){
    let n  ;

    if(NumPassengers%flightCap===0){
        n = NumPassengers/flightCap;
    }else{
        n=(NumPassengers/flightCap)+1;
    }
    return n ; 
}
return{calculateNumberOfFlights};
}

