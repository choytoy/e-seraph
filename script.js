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
    "Upright, Aegis the divine shield represents protection against the influence of others, hard-headedness, and stubbornness. When drawing Aegis upright, one should be careful not to shut themselves off from valuable connections.",
    "Upright, the Angel card represents servitude. Drawing this card, one should reflect on their duties and responsibilities. Perceive any gaps in your service to causes and others, and focus your energies on how to promote generativity and wholesomeness in your community.",
    "Upright, Artifice represents the constructed world. This includes the creation of art and productivity. Drawing this card calls your attention to projects and the forces that interact with them.",
    "Upright, Concavity is one’s tolerance for suffering. The concave person revels and identifies as their suffering. From these experiences, one may draw strength, creativity, or comfort. Concavity is a double-edged sword, two extremes: a gift and a burden all at once.",
    "Upright, Fount is the basis from which all things flow. This card represents abundance and limitless opportunity. With an abundance of water comes the possibility of drowning. The one who draws this card should proceed cautiously and demonstrate restraint.",
    "Upright, Haunt symbolises our past, and the experiences which continue to impact our present and future. The Haunt card suggests we examine the influence that our memories and trauma have in shaping who we are and the decisions we make.",
    "Upright, Heritage is that which has been passed down, the core of one’s nature, and one’s explicit talent. It represents one’s childhood, body, ability, family, and capacity at the most basic level. It is your starting line.",
    "Upright, the Opulence card symbolises the aesthetic world. Drawing it therefore draws our attention to the physical appearance, the material, and the appealing. Opulence considers our preferences and desires for material wealth. It also symbolises fame and infamy.",
    "Upright, Order symbolises the status quo. At once, Order stands for both safety and banality. At times, drawing this card can bring a sense of comfort, as it brings with it a focus on things which fall into their rightful places. Other times, this card is uninspiring.",
    "Upright, Pestilence represents complete destruction. This can be positive or negative in nature, but generally represents the total symbolic loss of an object or idea we’ve grown accustomed to. Be cautious to hold prized possessions, health, and loved ones close by after drawing this card.",
    "Upright, the Ribbons of Fate represent providence, luck and ease. Drawing this card, one might reflect on the resources at one’s disposal and make use of these in addressing their question.",
    "Upright, Solipsism represents a sense of zen, and contentedness with the outcome of conflicts. When drawing this card, one may focus on their reactions to events, instead of the outcomes themselves. Solipsism allows one to draw peace from absence as well as presence.",
    "Upright, Tyranny represents strength, force of will, and determination. The one who wields this card exerts their dominance over their profession and relationships. One should ensure this dominance is not aggressive in nature, and instead compelled by the cooperation and encouragement of others.",
    "Upright, Valor represents unyielding courage in the face of challenges and adversity. Drawing this card calls to your capacity for bravery. The one who draws Valor upright should commend themselves on their spirit, and similarly brace themselves for future challenges."
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
