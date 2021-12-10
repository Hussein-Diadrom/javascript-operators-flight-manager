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

function checkAircraftRevision(distanceLimit,distancesArray){
    let sum = 0; 
    for (let index = 0; index < distancesArray.length; index++) {
        sum +=distancesArray[index];
    }

    if( sum<=(distanceLimit/2)){
        return  "The revision needs to be done within the next 3 months";
    }else if(sum<=(distanceLimit/1.25)){
        return "The revision needs to be done within the next 2 months";
    }else if(sum===distanceLimit||(sum>distanceLimit/1.25)){
        return  "The revision needs to be done within the next month";
    }else{
        throw new Error("this not working ");
    }

}
return{calculateNumberOfFlights,checkAircraftRevision};
}

module.exports = Flights();