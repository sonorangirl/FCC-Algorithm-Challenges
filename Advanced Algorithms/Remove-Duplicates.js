////Free Code Camp Advanced Algorithms////

/// Remove Duplicates ///
//filters an array to remove any duplicate values

function removeDuplicates(array) {
    var uniqueValues = array.filter(function(val, index, arr) {
        //if the index of the value in the array is itself, it's a new unique value, thus stays in the array (true)
        //if the index of the value isn't itself, the same value was found earlier in the array, thus it's a duplicate and removed (false)
        return index === arr.indexOf(val);
    });

    return uniqueValues;
}




