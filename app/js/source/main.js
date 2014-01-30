(function(){

  'use strict';

  $(document).ready(initialize);

  var cont;

  function initialize(){
    $('#go').click(getCont);
    //setInterval(getCont, 2000);
  }

  function getCont(){
    cont = $('#cont').text();
    cont = cont.split(',').join('');
    cont = cont.split('.').join('');
    cont = cont.split(' ');
    var randWord = cont[rand()];
    evenOdd(randWord);
  }

  function rand(){
    return Math.floor(Math.random() * cont.length);
  }

  function evenOdd(word){
    var org = word;
    if (word.length % 2 === 0){
      word = pigMe(word);
      var $evenWordDiv = $('<div class="even">');
      var $evenLengthDiv = $('<a class="evenSearch" href="http://www.google.com/search?q='+org+'">').text(sum(word));
      $evenWordDiv.text(word.toLowerCase()).append($evenLengthDiv);
      $('#even').append($evenWordDiv);
    }else{
      console.log(word);
      var $oddLengthDiv = $('<a class="oddSearch" href="http://www.google.com/search?q='+org+'">').text(multiply(word));
      var $oddWordDiv = $('<div class="odd">');
      var newWord = noVowels(word);
      $oddWordDiv.text(newWord.toUpperCase()).append($oddLengthDiv);
      $('#odd').append($oddWordDiv);
    }
  }

  function pigMe(word){
    var a = 'a';
    var ltr = word.slice(0,1);
    word = word.slice(1,word.length);
    word += ltr;
    word = word.concat(a);
    return word;
  }

  function noVowels(word){
    return word.replace(/[AEIOUY]/gi, '');
  }

  function sum (word){
    var total = 0;
    for(var i = 0; i < word.length; i++){
      total += i;
    }
    return total;
  }

  function multiply(word){
    var total2 =1;
    for(var i = 1; i < word.length; i++){
      total2 *= i;
    }
    return total2;
  }

})();

