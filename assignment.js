//

// Problem 1 
function kilometerToMeter(kilometer){
    if(kilometer < 0){
        console.log('Sorry, You Entered Wrong Number')
    }
    else if(kilometer > 0){
        var meter = kilometer * 1000 ;
        return meter;
    }
}
var isMeter = kilometerToMeter(27.66)
console.log(isMeter);


// Problem 2
function budgetCalculator(watch,phone,laptop){
    var watchPrice = 50;
    var phonePrice = 100;
    var laptopPrice = 500;
    var calc = watch*watchPrice + phone*phonePrice + laptop*laptopPrice;
    return calc;
}
var totalBudget = budgetCalculator(2,1,3)
console.log(totalBudget);


// Problem 3
var tenDaysCost = 1000;
var twentyDaysCost = 800;

function hotelCost(howManyDay){
    if(howManyDay < 0){
        console.log("Sorry Maybe You Entered Wrong Number , You can't stay Negative Days")
    }
    else if(howManyDay > 0 && howManyDay <= 10 ){
        var totalcost = howManyDay *100;
    }
    else if(howManyDay > 10 && howManyDay <= 20 ){
        var totalcost = (howManyDay-10) * 80 + tenDaysCost;
    }
    else if(howManyDay > 20){
        totalcost = (howManyDay-20) * 50 + tenDaysCost + twentyDaysCost;
    }
    return totalcost;
}
var totalHotelCost = hotelCost(22)
console.log(totalHotelCost);


// Problem 4
function megaFriend(friendsArray){
    if(friendsArray.length == 0){
        console.log('Sorry, You Entered An Empty Array');
    }
    else{
        var size = 0;
        for(var i = 0 ; i < friendsArray.length ; i ++){
            if(friendsArray[i].length > size ){
                size = friendsArray[i].length;
                var theName = friendsArray[i];
            }
    }
    return theName;
    }
}
realMegaFriend = megaFriend(['Jamil','Abdullah','Rahim','Saad','Najmul','Golam Rabbi','Jhankar Mahbub']);
console.log(realMegaFriend);


