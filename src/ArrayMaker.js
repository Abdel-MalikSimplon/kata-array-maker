function arrayMaker(max) {
  if(isNaN(max)) {
    return null;
  } else if(max === 0) {
    return [];
  }
  function arrayMaker(max) {
    var i;
    while (i < max) {
        var tableau = [i];
        return tableau;
        i+=1;
    }
}

console.log(arrayMaker(10));

}
