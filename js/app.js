let catData = [
{
  name: 'Coder Kitty',
  img: 'coderkitty.png',
  meow: 'tomcat.wav'
}, {
  name: 'Social Kitty',
  img: 'socialkitty.png',
  meow: 'Meow.wav'

},{
  name: 'Inception Kitty',
  img: 'inceptionkitty.png',
  meow: 'purring.wav'
},{
  name: 'Trader Kitty',
  img: 'traderkitty.png',
  meow: 'Meow.wav'
},{
  name: 'Shopper Kitty',
  img: 'shopperkitty.png',
  meow: 'Meow.wav'
}, 
];


// Let's loop over the numbers in our array
for (var i = 0; i < catData.length; i++) {

    // This is the number we're on...
    var cat = catData[i];

    // We're creating a DOM element for the number
    var menuItem = document.createElement('li');
    menuItem.textContent = cat.name;


    //... and when we click, alert the value of `cat`
    menuItem.addEventListener('click', (function(catCopy) {
      return function() {

        let count = 0;

        document.querySelector('.counter').innerText = count + " meow!!"; 
        document.querySelector('.name').innerText = `${catCopy.name}`
        document.querySelector('.kitty-pic').setAttribute('src', `images/${catCopy.img}`);
        let audio = document.querySelector('audio');
        audio.setAttribute('src', `audio/${catCopy.meow}`);

        let currentPic = document.querySelector('.kitty-pic');


        currentPic.addEventListener('click', function(){
          
          count++;

          document.querySelector('.counter').innerText = count + " meow!!"; 

          if(document.querySelector('.counter').innerText == "5 meow!!") {
            document.querySelector('.kitty-pic').setAttribute('src', 'images/madkitty1.png');
          }

          if(document.querySelector('.counter').innerText == "10 meow!!") {
            document.querySelector('.kitty-pic').setAttribute('src', 'images/madkitty2.png');
          }

          if (audio.paused) {
            audio.play();
          }else{
            audio.currentTime = 0
          }

        });

      };


    })(cat));


    document.querySelector('.cat-menu').appendChild(menuItem);
  };


// let meow = function() {
// const catOne = document.querySelector('.cat-one');
// const catTwo = document.querySelector('.cat-two');

// var countOne = 0;
// var countTwo = 0;

// catOne.addEventListener('click', function(){
//   countOne++;
//   document.querySelector('.counter-one').innerText = countOne + " meow!!"; 
//   document.getElementById('name-one').innerText = catData[0].name; 
// }, false);

// catTwo.addEventListener('click', function(){
//   countTwo++;
//   document.querySelector('.counter-two').innerText = countTwo + " meow!!"; 
//   document.getElementById('name-two').innerText = catData[1].name;  
// }, false);

// }();
