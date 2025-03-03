//SOLO page shuffle animation on MsDwn
const tableTop = document.querySelector('.tableTop');
const cardImg = document.querySelectorAll('.cardImg');
const soloCard1 = document.querySelector('#soloCard1');
const soloCard2 = document.querySelector('#soloCard2');
const soloCard3 = document.querySelector('#soloCard3');
const soloCard4 = document.querySelector('#soloCard4');
const soloCard5 = document.querySelector('#soloCard5');
const card = document.querySelector('.card');
const cardSlotSolo = document.querySelector('#cardSlot');

const cardDescArray = [
    'aegis',
    'angel',
    'artifice',
    'concavity',
    'fount',
    'haunt',
    'heritage',
    'opulence',
    'order',
    'pestilence',
    'ribbons',
    'solipsism',
    'tyranny',
    'valor'
];


const frontArray = [
    'assets/images/cards/aegis.png',
    'assets/images/cards/angel.png',
    'assets/images/cards/artifice.png',
    'assets/images/cards/concavity.png',
    'assets/images/cards/fount.png',
    'assets/images/cards/haunt.png ',
    'assets/images/cards/heritage.png',
    'assets/images/cards/opulence.png ',
    'assets/images/cards/order.png',
    'assets/images/cards/pestilence.png',
    'assets/images/cards/ribbons.png',
    'assets/images/cards/solipsism.png',
    'assets/images/cards/tyranny.png',
    'assets/images/cards/valor.png'

];


tableTop.addEventListener('click', () => {
    if (soloCard4.classList.contains('shuffDone')) {
        soloCard1.classList.add('cardFirst');
        soloCard2.classList.add('cardSecond');
        soloCard3.classList.add('cardThird');
        soloCard4.classList.add('cardFourth');
        soloCard5.classList.add('cardFifth');


        for (var i = 0; i < cardImg.length; i++) {
            cardImg[i].classList.add('fanned');
        }

    }
    else {
        soloCard4.classList.add('shuffleL', 'shuffDone');
        soloCard5.classList.add('shuffleR', 'shuffDone');
    }
})
function getCardFront() {
    const randomIndex = Math.floor(Math.random() * frontArray.length);
    var cardFront = frontArray[randomIndex];
    var cardDesc = cardDescArray[randomIndex];

}
