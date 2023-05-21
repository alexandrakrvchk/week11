let price1 = document.querySelector('#price1');
price1 = Number(1999);

let price2 = document.querySelector('#price2');
price2 = Number(3999);

let price3 = document.querySelector('#price3');
price3 = Number(1999);

let price4 = document.querySelector('#price4');
price4 = Number(4999);

let sum = price1 + price2 + price3 + price4;
sum = Number(12996);

let sumprice = document.querySelector('.summ');
sumprice.textContent = sum;

function countdiscount() {
    let discountPrice = sum * 0.8;
    let pricediscount = document.querySelector('.summ');
    pricediscount.textContent = discountPrice;
}









