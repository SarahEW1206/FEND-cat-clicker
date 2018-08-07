$(function(){ 

  var model = {

   catData: [
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
  } ],

};//model


var octopus =  {

  //Get all the cats from the model so that we can pass them to the view.
  getAllCats: function() {
    return model.catData;
  }, //getAllCats

  // Initialize the menu portion of the view
  init: function() {
    listView.init();
  },

  //Loop through the menu items and add a listener that will display the selected cat.
  addMenuListener: function(){
    let allMenuItems = listView.getMenuItems();

    for (var i = 0; i < allMenuItems.length; i++) {

      let catFromList = allMenuItems[i];
      let kittyInfo = model.catData[i];
      
      // Listens to the list and sets the cat image along with the image's listener.
      catFromList.addEventListener('click', (function(catCopy) {
        return function() {
          catView.setCat(catCopy);
          catView.setMeow(catCopy);

          octopus.addCatClickListener();
        };
      })(kittyInfo));

    }

  },

  addCatClickListener: function() {

    let currentPic = catView.getPic();
    let currentCount = catView.getCount();
    let meow = catView.getMeow();
    console.log(meow);

    currentPic.addEventListener('click', function(){  
      currentCount++;
      catView.setCount(currentCount);      
      catView.playSound(meow);

    });

  }


}; //octopus

var listView =  {

  renderMenu: function() {

    var catsForMenu = octopus.getAllCats();

    for (var i = 0; i < catsForMenu.length; i++) {

      // This is the number we're on...
      var cat = catsForMenu[i];

      // We're creating a DOM element for the number
      var menuItem = document.createElement('li');
      menuItem.classList.add('menu-item');
      menuItem.textContent = cat.name;

      document.querySelector('.cat-menu').appendChild(menuItem);

    }; 

    octopus.addMenuListener();

  },

  getMenuItems: function() {
    let menuItems = document.querySelectorAll('.menu-item');
    let menuArray = Array.from(menuItems);
    return menuArray;
  },

  init: function() {
    listView.renderMenu();
  },

};

var catView = {

  setCat: function(kitty) {
    document.querySelector('.counter').innerText = 0 + " meow!!"; 
    document.querySelector('.name').innerText = `${kitty.name}`
    document.querySelector('.kitty-pic').setAttribute('src', `images/${kitty.img}`);
  },


  setCount: function(num){
    document.querySelector('.counter').innerText = num + " meow!!";
  },

  getCount: function() {
    let countString =  document.querySelector('.counter').innerText;
    return parseInt(countString);
  },

  getPic: function() {
    return document.querySelector('.kitty-pic');
  },

  setMeow: function(kitty) {
    let audio = document.querySelector('audio');
    audio.setAttribute('src', `audio/${kitty.meow}`);
  },

  getMeow: function() {
    let catsMeow = document.querySelector('audio');
    return catsMeow;
  },


  playSound: function(sound) {
    if (sound.paused) {
      sound.play();
    }else{
      sound.currentTime = 0
    }
  },

}

octopus.init();

});




