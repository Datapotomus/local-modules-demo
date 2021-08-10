let stats = {
  min: function (array) {
    // assume the 1st number is the smallest
    let smallest = array[0];
    // look at the other numbers to see if they are less than smallest
    for (let i = 1; i < array.length; i++) {
      if (array[i] < smallest) {
        smallest = array[i];  // if so, that's now the new smallest
      }
    }
    // return whatever is in smallest
    return smallest;
  },
     // function that finds the max value in an array
  max: function (array) {
      let largest = array[0];

      for (let i = 1; i < array.length; i++) {
        if (array[i] > largest) {
          largest = array[i];  // if so, that's now the new smallest
        }
      }

      return largest;
  },
   // function that finds the sum of the values in an array
  sumOfValues: function (array) {
      let total = 0;
      for (let i = 0; i < array.length; i++) {
        total += array[i];
      }
      return total;
  },
   // function that finds the mean (average) of the values in an array
  mean: function (array) {
      average = this.sumOfValues(array) / array.length
      // TODO: you will need to write logic here

      return average;
  }
};

module.exports = stats;