////Free Code Camp Advanced Algorithms////

//// Inventory Update ////

function updateInventory(arr1, arr2) {
    // All inventory must be accounted for or you're fired!
  
    //loop through the second array
    arr2.forEach (function(newItem) {
      var itemNotFound = 0; //to check if item exists
      
      //check if arr2[item][1] exists in arr1
      arr1.forEach (function(curItem) {
        if (curItem.indexOf(newItem[1]) > 0) {
          //if it does, add new item amount (item[0]) to current item amount
          curItem[0] += newItem[0];
        } else {
          //if it doesn't increase count on itemNotFound
          itemNotFound++;
        }
      });
      
      //if itemNotFound = arr1.length, meaning it wasn't found in any sub-array, add entire item to arr1
      if (itemNotFound === arr1.length) {
        arr1.push(newItem);
      }
    
    });
  
    //then sort array in alphabetical order
    arr1.sort(function(a,b) {
      var itemA = a[1];
      var itemB = b[1];
      
      if (itemA < itemB) {
        return -1;
      }
      if (itemA > itemB) {
        return 1;
      }
    });
    
    return arr1;
}

// Example inventory lists
var curInv = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
];

var newInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
];

updateInventory(curInv, newInv);









