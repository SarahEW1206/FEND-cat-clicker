let catData = [
    {
        name: 'Queen Spooky',
        img: 'spooky.jpg'
    }, {
        name: 'Princess Spooky',
        img: 'spooky.jpg'
    }, 
];


let meow = function() {
const catOne = document.querySelector('.cat-one');
const catTwo = document.querySelector('.cat-two');

var countOne = 0;
var countTwo = 0;

catOne.addEventListener('click', function(){
  countOne++;
  document.querySelector('.counter-one').innerText = countOne + " meow!!"; 
  document.getElementById('name-one').innerText = catData[0].name; 
}, false);

catTwo.addEventListener('click', function(){
  countTwo++;
  document.querySelector('.counter-two').innerText = countTwo + " meow!!"; 
  document.getElementById('name-two').innerText = catData[1].name;  
}, false);

}();
