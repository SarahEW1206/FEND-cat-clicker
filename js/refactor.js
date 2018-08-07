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

};

var octopus =  {

  //Get all the cats from the model so that we can pass them to the view.
  getAllCats: function() {
    return model.catData;
  }, //getAllCats

  // Initialize the menu portion of the view
  init: function() {
    listView.init();
  },


}; //octopus

var listView =  {

  render: function() {

    var catsForMenu = octopus.getAllCats();

    for (var i = 0; i < catsForMenu.length; i++) {

    // This is the number we're on...
    var cat = catsForMenu[i];

    // We're creating a DOM element for the number
    var menuItem = document.createElement('li');
    menuItem.textContent = cat.name;

    document.querySelector('.cat-menu').appendChild(menuItem);

    } //for loop

  },

  init: function() {
    listView.render();
  },

};

octopus.init();

});




