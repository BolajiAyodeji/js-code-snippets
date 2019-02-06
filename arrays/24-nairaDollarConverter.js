const dollars = [50, 150, 250];
const naira = [1000, 500, 200];

const toNaira = dollars.map(eachAmount => '₦' + eachAmount * 361.50);
const toDollar = naira.map(eachAmount => '$' + eachAmount *18.99);

//361.50 was the exchange rate on google on 5th Feb 2019
//18.99 was the exchange rate on google on 5th Feb 2019

  console.log(toNaira);
  console.log(toDollar);
