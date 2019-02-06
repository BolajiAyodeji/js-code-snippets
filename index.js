const dollars = [50, 150, 250];
const naira = [18075, 54225, 90375];

const toNaira = dollars.map(eachAmount => '₦' + eachAmount * 361.50);
const toDollar = naira.map(eachAmount => '$' + eachAmount *0.0028);

//361.50 was the exchange rate on google on 5th Feb 2019
//0.0028 was the exchange rate on google on 5th Feb 2019

  console.log(toNaira);
  console.log(toDollar);
