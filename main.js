let messSpan = document.querySelectorAll('span');
let messP = document.querySelectorAll('p');
let firstDino = document.querySelector('#triceratops');
let feathered = document.querySelector('#feathers');
let togglethis = document.querySelector('#toggle')
let big = document.querySelector('#biggify');
let clickCount = 0;

messSpan[1].addEventListener('click', orangeFont);
firstDino.addEventListener('click', redBorder);
feathered.addEventListener('click', transparent);
togglethis.addEventListener('click', rowColor);
big.addEventListener('mouseover', bigImage);
big.addEventListener('mouseout', smallImage);

messSpan[1].style.fontSize = '48px';
messP[1].style.backgroundColor = 'green';
document.querySelector('#hide-me').style.display = 'none';
firstDino.style.width = '324px';


function orangeFont(){
    messSpan[1].style.color = 'orange';
}

function redBorder(){
    firstDino.style.border = '2px solid red';
}

function transparent(){
    feathered.style.opacity = .5;
}

function rowColor(){
    clickCount++;
    if(clickCount % 2 !== 0){
    document.querySelector('#row').style.backgroundColor = 'purple';
    }else{
    document.querySelector('#row').style.backgroundColor = 'white';
    }
}

function bigImage(){
    big.style.width = '200px';
}

function smallImage(){
    big.style.width = '162px';
}