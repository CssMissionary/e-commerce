const pro1 = document.querySelector('.pro1');
const mad1 = document.querySelector('.mad1');
const one = document.querySelector('.one');

const pro2 = document.querySelector('.pro2');
const mad2 = document.querySelector('.mad2');
const two = document.querySelector('.two');

const pro3 = document.querySelector('.pro3');
const mad3 = document.querySelector('.mad3');
const three = document.querySelector('.three');

const pro4 = document.querySelector('.pro4');
const mad4 = document.querySelector('.mad4');
const four = document.querySelector('.four');


mad1.addEventListener('click', () => {
    mad1.classList.add('active')
    mad2.classList.remove('active')
    mad3.classList.remove('active')
    mad4.classList.remove('active')

    one.classList.remove('none')
    two.classList.add('none')
    three.classList.add('none')
    four.classList.add('none')

    pro1.classList.remove('none')
    pro2.classList.add('none')
    pro3.classList.add('none')
    pro4.classList.add('none')
})

mad2.addEventListener('click', () => {
    mad1.classList.remove('active')
    mad2.classList.add('active')
    mad3.classList.remove('active')
    mad4.classList.remove('active')

    one.classList.add('none')
    two.classList.remove('none')
    three.classList.add('none')
    four.classList.add('none')

    pro1.classList.add('none')
    pro2.classList.remove('none')
    pro3.classList.add('none')
    pro4.classList.add('none')
})
mad3.addEventListener('click', () => {
    mad1.classList.remove('active')
    mad2.classList.remove('active')
    mad3.classList.add('active')
    mad4.classList.remove('active')

    one.classList.add('none')
    two.classList.add('none')
    three.classList.remove('none')
    four.classList.add('none')

    pro1.classList.add('none')
    pro2.classList.add('none')
    pro3.classList.remove('none')
    pro4.classList.add('none')
})
mad4.addEventListener('click', () => {
    mad1.classList.remove('active')
    mad2.classList.remove('active')
    mad3.classList.remove('active')
    mad4.classList.add('active')

    one.classList.add('none')
    two.classList.add('none')
    three.classList.add('none')
    four.classList.remove('none')

    pro1.classList.add('none')
    pro2.classList.add('none')
    pro3.classList.add('none')
    pro4.classList.remove('none')
})

const minus = document.querySelector('.minus');
const plus = document.querySelector('.plus');
const pieces = document.querySelector('.pieces');

let i = 0 ;

plus.addEventListener('click', () =>{
     i++; pieces.value = i;
})
minus.addEventListener('click', () =>{
    if(i > 0) {
        i--; 
        pieces.value = Number(i);
    }
})

const deleteItem = document.querySelector('.trash');
const cartButton = document.querySelector('.cart-button');
const cartItems = document.querySelector('.cart-items');
const alertEmpty = document.querySelector('.alert');
const amountTaken = document.querySelector('.amount');
const sumOf = document.querySelector('.sum');
const tag = document.querySelector('.tag');
const shop = document.querySelector('.shop');
const emptyCart = document.querySelector('.empty-cart')
const notification = document.querySelector('.noti')

shop.addEventListener('click', () => {
     emptyCart.classList.toggle('none')
})
deleteItem.addEventListener('click', () => {
    cartItems.classList.add('none')
    alertEmpty.classList.remove('none')
    notification.classList.add('none')
})
cartButton.addEventListener('click', () => {
    if (pieces.value > 0){
        cartItems.classList.remove('none')
        alertEmpty.classList.add('none')
        notification.classList.remove('none')
    }
    sumOf.innerHTML = Number(tag.innerHTML) * Number(pieces.value)
    amountTaken.innerHTML = pieces.value
})

// Mobile view picture scroll buttons

const previous = document.querySelector('.previous');
const next = document.querySelector('.next');


next.addEventListener('click', () => {
        if(!pro1.classList.contains('none')){
            pro1.classList.add('none')
            pro2.classList.remove('none')
            return
        }
        if(!pro2.classList.contains('none')){
            pro2.classList.add('none')
            pro3.classList.remove('none')
            return
        }
        if(!pro3.classList.contains('none')){
            pro3.classList.add('none')
            pro4.classList.remove('none')
            return
        }
})
previous.addEventListener('click', () => {
    if (!pro4.classList.contains('none')){
        pro4.classList.add('none')
        pro3.classList.remove('none')
        return
    }
    if (!pro3.classList.contains('none')){
        pro3.classList.add('none')
        pro2.classList.remove('none')
        return
    }
    if (!pro2.classList.contains('none')){
        pro2.classList.add('none')
        pro1.classList.remove('none')
    }
})

// Modal Menu Exit and Entry

hamburger = document.querySelector('.hamburger');
shut = document.querySelector('.shut');
modalContainer = document.querySelector('.modal-container');

hamburger.addEventListener('click', () =>{
    modalContainer.classList.remove('none')
})
shut.addEventListener('click', () =>{
    modalContainer.classList.add('none')
})