//SOLO page functionality

//VARIABLES
const tableTop = document.querySelector('.tableTop');
const cardImg = document.querySelectorAll('.cardImg');
const soloCard1 = document.querySelector('#soloCard1');
const soloCard2 = document.querySelector('#soloCard2');
const soloCard3 = document.querySelector('#soloCard3');
const soloCard4 = document.querySelector('#soloCard4');
const soloCard5 = document.querySelector('#soloCard5');
const card = document.querySelectorAll('.card');
const cardSlotSolo = document.querySelector('#cardSlotSolo');
const frontDivs = document.querySelectorAll('.front');
const backImg = document.querySelectorAll('.back');

//ARRAYS

//List of active cards
const cardList = [
    soloCard1,
    soloCard2,
    soloCard3,
    soloCard4,
    soloCard5
]

//List of descriptions
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

//Cards front imagery
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

//Event state variables

let cardShuffled = false;
let cardSpread = false;
let chosenCard = false;



//Card selection randomizer
var randomIndex = Math.floor(Math.random() * frontArray.length);

//Card ID get
function clickId() {
    let cardID = (e.target.id);
}

// var cardFront = frontArray[randomIndex];
// var cardDesc = cardDescArray[randomIndex];


tableTop.addEventListener('click', () => {
    if (cardSpread === true) {
        for (var i = 0; i < card.length; i++) {
            card[i].cardIndex = i;
            card[i].addEventListener('click', function () {

                console.log(this.cardIndex);
                cardSlotSolo.innerHTML = cardDescArray[randomIndex];

                frontDivs[this.cardIndex].innerHTML = '<img src="' + frontArray[randomIndex] + '">'
                frontDivs[this.cardIndex].classList.remove('hidden');
                backImg[this.cardIndex].classList.add('selected');


            })
        }


    }
    else if (cardShuffled === true) {
        card[0].classList.add('card1');
        card[1].classList.add('card2');
        card[2].classList.add('card3');
        card[3].classList.add('card4');
        card[4].classList.add('card5');

        cardSpread = true
        for (var i = 0; i < cardImg.length; i++) {
            cardImg[i].classList.add('fanned');

        }

    }
    else {
        card[3].classList.add('shuffleL', 'shuffDone');
        card[4].classList.add('shuffleR', 'shuffDone');
        cardShuffled = true;

    }
})




// for (var i = 0; i < cardList.length; i++) {
//     (function (index) {
//         cardList[index].addEventListener('click', function () {

//         })
//     })
// }
