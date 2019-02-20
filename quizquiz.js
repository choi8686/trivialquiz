  var input = document.getElementsByClassName('input-test')[0];
  var answer = document.getElementsByClassName('answer')[0];
  var question = document.getElementsByClassName('question')[0];
  var span = document.getElementsByClassName('spanking')[0];
  //question : recieve API

var currentQuestion;

function getQuestion(){
  fetch(`http://jservice.io/api/random`)
  .then(function(response){
    return response.json();
  })
  .then(function(json){
    var ask = json[0].question;
    var ans = json[0].answer;
    span.innerText = ask;
    currentQuestion = ans;
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
          console.log("correct");
        } else{
          console.log("incorrect");
        }
        input.value = "";
      }

    });
  }


  function countScore(){

  }
    //score : if correct -> 10 point ++, if incorrect -> 5 point --


  function init(){
    getQuestion();
    handleSubmit();

  }

  init();
