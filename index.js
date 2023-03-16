// Code your solution in this file!
let pickUp;
let dropOff;

function distanceFromHqInBlocks(pickUp){
    if (pickUp>42){
        return (pickUp-42)
    }
    else{
        return (42-pickUp);
    }
    /*return Math.floor(Math.sqrt(Math.pow(dropOff.x - pickUp.x, 2) + Math.pow(dropOff.y - pickUp.y, 2)));*/
    distance=pickUp-dropOff;
    return distance;
}
function distanceFromHqInFeet(pickUp) {
    let distance = distanceFromHqInBlocks(pickUp)*264;
    return distance; 
}

function distanceTravelledInFeet(pickUp,dropOff){
    return(Math.abs(dropOff-pickUp)*264)
}

function calculatesFarePrice(start, destination){
    let trip = distanceTravelledInFeet(start,destination);
    if (trip<=400){
        return 0;
    }
    else if(trip>=400 && trip<=2000){
        return (trip-400)*0.02;
    }
    else if(trip>=2000 && trip <=2500){
        return 25
    }
    else if (trip>2500){
        return "cannot travel that far";
    }
}

