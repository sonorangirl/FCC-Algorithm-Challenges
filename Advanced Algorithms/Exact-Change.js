////Free Code Camp Advanced Algorithms////

/// Exact Change ///

function checkCashRegister(price, cash, cid) {
  // Here is your change, ma'am.
  
  var change = Math.round((cash - price) * 100) / 100; //.50
  
  //create an array of objects with individual units of each currency as key/value pairs
  var currencyValue = [
    { type: "PENNY", value: 0.01 },
    { type: "NICKEL", value: 0.05 },
    { type: "DIME", value: 0.10 },
    { type: "QUARTER", value: 0.25 },
    { type: "ONE", value: 1.00 },
    { type: "FIVE", value: 5.00 },
    { type: "TEN", value: 10.00 },
    { type: "TWENTY", value: 20.00 },
    { type: "ONE HUNDRED", value: 100.00 }
  ];
  
  //figure out which units of currency are currently in the drawer and how many, as well as the total amount of the cash in drawer
  var total = 0;
  var availableFunds = [];
  function findMoney(arr) {
    total += arr[1];
    //loop through currency array until a match is found
    for (var i = 0; i < currencyValue.length; i++) {
        if (arr[0] === currencyValue[i].type) {
            var newDenomination = {};
            newDenomination.type = arr[0];
            //figure out the amount by dividing the total value by the unit value
            newDenomination.amount = Math.round((arr[1] / currencyValue[i].value) * 100) / 100;
            availableFunds.push(newDenomination);
        }
    }
  }
  
  cid.filter(findMoney);

  //availableFunds = [
    // { type: "PENNY", amount: 101 },
    // { type: "NICKEL", amount: 50 },
    // { type: "DIME", amount: 31 },
    // { type: "QUARTER", amount: 17 },
    // { type: "ONE", amount: 90 },
    // { type: "FIVE", amount: 11 },
    // { type: "TEN", amount: 2 },
    // { type: "TWENTY", amount: 3 },
    // { type: "ONE HUNDRED", amount: 3 }
  //]
  total = Math.round(total * 100) / 100;
  console.log(total);
  
  //if total is equal to the change needed
  if (total === change) {
    return "Closed";
  }
  
  //If there isn't enough cash available for change
  if (total < change) {
    return "Insufficient Funds";
  }
  
  //loop through the availableFunds array backwards, if the total currency amount is less than or equal to the change needed, and the current amount is not 0, add to the changeProvided array.
  var changeProvided = [];
  for (var j = availableFunds.length-1; j >= 0; j--) {
    
    while (availableFunds[j].amount > 0) {
      //calculate currency amount by multiplying the amount available by the value of the currency
      var currencyAmount = availableFunds[j].amount * currencyValue[j].value;
      if (currencyAmount <= change) {
          changeProvided.push([availableFunds[j].type, currencyAmount ]);
          //stop adding this denomination
          availableFunds[j].amount = 0;
          //reduce change by amount added to changeProvided array
          change -= currencyAmount;
          change = Math.round(change * 100) / 100;
          console.log(change);
      } else {
        availableFunds[j].amount -= 1;
      }
    }
  }

  //If there aren't small enough denominations available to provide change
  if (change > 0) {
    return "Insufficient Funds";
  }
  
  console.log(changeProvided);
  return changeProvided;
}

// Example cash-in-drawer array:
// [["PENNY", 1.01],
// ["NICKEL", 2.05],
// ["DIME", 3.10],
// ["QUARTER", 4.25],
// ["ONE", 90.00],
// ["FIVE", 55.00],
// ["TEN", 20.00],
// ["TWENTY", 60.00],
// ["ONE HUNDRED", 100.00]]

checkCashRegister(19.50, 20.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]]);







