// object destructuring

const band = {
    bandName: "led zepplin",
    famousSong:"stairway to heaven",
    year: 1968,
    anotherFamous: "kashmir",
};

const{bandName,famousSong,...rest}= band
console.log(bandName)
