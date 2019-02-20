  var input = document.getElementsByClassName('input-test')[0];
  var answer = document.getElementsByClassName('answer')[0];
  var question = document.getElementsByClassName('question')[0];
  var span = document.getElementsByClassName('spanking')[0];
  var result = document.getElementsByClassName('result')[0];
  var score = document.getElementsByClassName('score')[0];
  var button = document.getElementsByClassName('boton')[0];
  var jumsu = 0;


var currentQuestion;
var punto;

function getQuestion(){
  fetch(`http://jservice.io/api/random`)
  .then(function(response){
    return response.json();
  })
  .then(function(json){
    var ask = json[0].question;
    span.innerText = ask;
    currentQuestion = json[0].answer;
    punto = json[0].value;
  });
}

function pasaPalabra(){
  setTimeout(function(){
    result.innerText = "";
  }, 200);
  getQuestion();
}

function startAndHide(){
  getQuestion();
  setTimeout(function(){
    button.style.display = 'none'
  }, 300);

}

function handleSubmit(){
      input.addEventListener('keyup',function(e){
    	if (e.keyCode === 13) {
        if(input.value === currentQuestion){
          result.innerText = "Correct"
          jumsu += punto;
          score.innerText = jumsu;
        } else{
          result.innerText = "Incorrect"
          jumsu -= 100;
          score.innerText = jumsu;
        }
        input.value = "";
      }
    });
  }

handleSubmit();
