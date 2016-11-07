////Free Code Camp Advanced Algorithms////

//// Friendly Date Ranges ////

function makeFriendlyDates(arr) {
  //make an array with calander months
  var months = [0, 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  
  //make an array for ordinal values
  var ordinalDates = ['st', 'nd', 'rd', 'th'];
  
  //check if range is 0 days (same day)
  var sameDay = false;
  if (arr[0] === arr[1]) {
    sameDay = true;
  }
  
  //split each sub-array into the year, month, and day
  var dateValues = [];
  arr.forEach(function(date) {
    dateValues.push(date.split('-'));
    //turn strings into numbers
    dateValues.forEach(function(arr) {
      arr.forEach(function(val) {
        var index = arr.indexOf(val);
        arr[index] = parseInt(val, 10);
      });
    });
  });
  
  //if date range is less than a year, do not display year
  //if date range is less than a month, do not display month
  var displayYear = true;
  var displayMonth = true;
  
  //check if years are the same
  if (dateValues[1][0] - dateValues[0][0] === 0) {
    displayYear = false;
    //check if months are the same
    if (dateValues[1][1] - dateValues[0][1] === 0) {
      displayMonth = false;
    }
  //check if dates are less than 1 year apart  
  } else if (dateValues[1][0] - dateValues[0][0] === 1) {
    if (dateValues[1][1] - dateValues[0][1] < 0) {
      displayYear = false;
    //if months are the same, but one year apart, check day
    } else if (dateValues[1][1] - dateValues[0][1] === 0) {
      if (dateValues[1][2] - dateValues[0][2] < 0) {
        displayYear = false;
      }
    }
  }
  
  //make months calander months and days ordinal
  var calanderDates = [];
  dateValues.forEach(function(arr) {
    var year = arr[0].toString();
    var month = months[arr[1]];
    var day;
    
    if (/^(1|21|31)$/.test(arr[2])) {
      day = arr[2].toString() + ordinalDates[0];
    } else if (/^(2|22)$/.test(arr[2])) {
      day = arr[2].toString() + ordinalDates[1];
    } else if (/^(3|23)$/.test(arr[2])) {
      day = arr[2].toString() + ordinalDates[2];
    } else {
      day = arr[2].toString() + ordinalDates[3];
    }
    
    calanderDates.push(year, month, day);
    
  });
  
  //display corrected dates
  var correctedDates = [];
  var currentYear = new Date().getFullYear().toString();
  
  //output the full date if range is same day
  if (sameDay) {
    correctedDates.push(calanderDates[1] + " " + calanderDates[2] + ", " + calanderDates[0]);
  
  //if range is less than a year, and in current year
  } else if (!displayYear && currentYear === calanderDates[0]) {
    
    //if range is also less than a month
    if (!displayMonth) {
      correctedDates.push(calanderDates[1] + " " + calanderDates[2]);
      correctedDates.push(calanderDates[5]);
    } else {
      correctedDates.push(calanderDates[1] + " " + calanderDates[2]);
      correctedDates.push(calanderDates[4] + " " + calanderDates[5]);
    }
  
  //else if its not in the current year, but still less than a year
  } else if (!displayYear) {
    
    //if range is also less than a month
    if (!displayMonth) {
      correctedDates.push(calanderDates[1] + " " + calanderDates[2] + ", " + calanderDates[0]);
      correctedDates.push(calanderDates[5]);
    } else {
      correctedDates.push(calanderDates[1] + " " + calanderDates[2] + ", " + calanderDates[0]);
      correctedDates.push(calanderDates[4] + " " + calanderDates[5]);
    }
  
  //otherwise date range is not less than a year  
  } else {
    correctedDates.push(calanderDates[1] + " " + calanderDates[2] + ", " + calanderDates[0]);
    correctedDates.push(calanderDates[4] + " " + calanderDates[5] + ", " + calanderDates[3]);
  }
  
  return correctedDates;
}

makeFriendlyDates(['2016-07-01', '2016-07-04']);










