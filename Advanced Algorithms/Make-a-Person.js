////Free Code Camp Advanced Algorithms////

//// Make a Person ////

var Person = function(firstAndLast) {
  var name = firstAndLast.split(" ");
  
  this.getFirstName = function() {
    return name[0];
  };
  
  this.getLastName = function() {
    return name[1];
  };
  
  this.getFullName = function() {
    return name[0] + " " + name[1];
  };
  
  this.setFirstName = function(first) {
    name[0] = first;
  };
  
  this.setLastName = function(last) {
    name[1] = last;
  };
  
  this.setFullName = function(firstAndLast) {
    name[0] = firstAndLast.split(" ")[0];
    name[1] = firstAndLast.split(" ")[1];
  };
  
};

var bob = new Person('Bob Ross');
bob.getFullName();








