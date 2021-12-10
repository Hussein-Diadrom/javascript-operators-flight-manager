function Flights() {
function calculateNumberOfFlights(NumPassengers,flightCap){
    let n  ;
    if(NumPassengers<0 || !Number.isInteger(Number(NumPassengers))){
        throw new Error("The number of passengers must be a positive integer value");
    }
    if( flightCap<0 || !Number.isInteger(Number(flightCap))){
        throw new Error("The capacity of the flight must be a positive integer value");
    }
    if(NumPassengers%flightCap===0){
        n = NumPassengers/flightCap;
    }else{
        n= Math.floor(NumPassengers/flightCap)+1;
    }
    return n ; 
}
return{calculateNumberOfFlights};
}

module.exports = Flights();