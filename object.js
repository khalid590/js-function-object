// var student = {
//   name: "Khalid",
//   id: 192 - 35 - 2860,
//   class: 16,
//   marks: 95,
// };

// console.log(mobile);
// mobile.ram = '8gb';
// console.log(mobile)

var mobile = {
    name: "Pixel 6A",
    price: 35000,
    brand: 'Google',
    ram: '6gb',
    performance: "Outstanding",
    camera: 8.5,
  };

  var proparties = Object.keys(mobile);
  var propartyValues = Object.values(mobile);

  console.log(proparties);

  console.log(propartyValues);

  for(i = 0; i < proparties.length; i++){
    var propartyName = proparties[i];
    var propartyValue = mobile[propartyName];

    console.log(propartyName, propartyValue)
  }