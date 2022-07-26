const prevEl=document.querySelector('.prev');
const nextEl=document.querySelector('.next');
const currentEl=document.querySelector('.current');
const cardContainerEl=document.querySelector('.card-container');
let cardData=[];
let currentActive=0
const textos=[
    'hola',
    'mundo',
    'como',
    'estas',
    'hermoso'
]
function createCard(text){
    const card=document.createElement('div');
    card.innerHTML=`
    <div class="carta">
        agregue la palabra: ${text}
    </div>
    `;
    cardContainerEl.appendChild(card);
    cardData.push(card);
    currentEl.innerHTML=`
        ${currentActive+1}/${textos.length}
    `;
}
const createCard0=createCard(textos[0]);
const createCard1=createCard(textos[1]);
const createCard2=createCard(textos[2]);
const createCard3=createCard(textos[3]);
const createCard4=createCard(textos[4]);
prevEl.addEventListener('click',()=>{
    cardData[currentActive].style.transform='translateX(-100px)'
    currentActive++;
})