function arrayMaker(max) {
  var tableau = [];
  if(isNaN(max)) {
    return null;
  } else if(max === 0) {
    return [];
  }else {
    for (var i = 0; i < max; i++) {
      tableau.push(i);
    }
    return tableau;
  }
}

alert(arrayMaker(10));
