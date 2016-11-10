////Free Code Camp Advanced Algorithms////

//// Map the Debris ////

function orbitalPeriod(arr) {
  var GM = 398600.4418;
  var earthRadius = 6367.4447;
  
  //Find Orbital Period for each Object
  arr.forEach( function(orbitingObject) {
    //find semi-major axis
    var a = earthRadius + orbitingObject.avgAlt;
    //divide semi-major axis^3 by GM
    var distOverStGrav = (Math.pow(a, 3)) / GM;
    //find orbital period
    var orbitalPeriod = 2 * Math.PI * Math.sqrt(distOverStGrav);
    delete orbitingObject.avgAlt;
    orbitingObject.orbitalPeriod = Math.round(orbitalPeriod);
  });
  
  return arr;
  
}

orbitalPeriod([{name: "iss", avgAlt: 413.6}, {name: "hubble", avgAlt: 556.7}, {name: "moon", avgAlt: 378632.553}]);








