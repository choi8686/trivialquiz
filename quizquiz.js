  var input = document.getElementsByClassName('input-test')[0];
  var answer = document.getElementsByClassName('answer')[0];
  var question = document.getElementsByClassName('question')[0];
  var span = document.getElementsByClassName('spanking')[0];
  var result = document.getElementsByClassName('result')[0];
  var score = document.getElementsByClassName('score')[0];
  var button = document.getElementsByClassName('boton')[0];
  var count = 0;
  //question : recieve API

var currentQuestion;

function getQuestion(){
  fetch(`http://jservice.io/api/random`)
  .then(function(response){
    return response.json();
  })
  .then(function(json){
    var ask = json[0].question;
    currentQuestion = json[0].answer;
    span.innerText = ask;
  });
}


    /*result : division correct or not.
    if correct -> correct!
    if incrrect -> incorrect! and correct-answer
    */


    //answer : input text and enter.

    function handleSubmit(){
      input.addEventListener('keyup',function(e){
    	if (e.keyCode === 13) {
        if(input.value === currentQuestion){
          result.innerText = "Correct"
          count++;
          score.innerText = count;
          getQuestion()
        } else{
          result.innerText = "Incorrect"
          count--;
          score.innerText = count;
        }
        input.value = "";
      }
    });

  }



    //score : if correct -> 10 point ++, if incorrect -> 5 point --


  function init(){

    handleSubmit();

  }

  init();
