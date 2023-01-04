function flatArr(arr) {
  return arr.reduce((acc, item) => {
    if (Array.isArray(item)) {
      acc = acc.concat(flatArr(item));
    } else {
      acc.push(item);
    }

    return acc;
  }, []);
}

console.log(flatArr([12, [3, 4, [5, 6], [7, 8]]]));
