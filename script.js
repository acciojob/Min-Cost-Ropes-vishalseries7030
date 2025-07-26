function mincost(arr) {
  let totalCost = 0;

  // Repeat until only one rope remains
  while (arr.length > 1) {
    // Sort the array to get the two smallest ropes at the start
    arr.sort((a, b) => a - b);

    // Pick the two smallest ropes
    let first = arr.shift();
    let second = arr.shift();

    // Cost of connecting them
    let cost = first + second;
    totalCost += cost;

    // Push the combined rope back into the array
    arr.push(cost);
  }

  return totalCost;
}

module.exports = mincost;
