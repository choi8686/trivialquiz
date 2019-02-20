  var body = document.getElementsByClassName('body')[0];
  var input = document.getElementsByClassName('input-test')[0];
  var answer = document.getElementsByClassName('answer')[0];
  var question = document.getElementsByClassName('question')[0];
  var span = document.getElementsByClassName('spanking')[0];
  var result = document.getElementsByClassName('result')[0];
  var score = document.getElementsByClassName('score')[0];
  var button = document.getElementsByClassName('boton')[0];
  var pass = document.getElementsByClassName('pasa')[0];
  var jumsu = 0;

pass.style.display = "none"
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



function startAndHide(){
  getQuestion();
  setTimeout(function(){
    button.style.display = 'none'
    pass.style.display = 'block'
  }, 300);

}

function pasaPalabra(){
  setTimeout(function(){
    result.innerText = "";
  }, 200);
  getQuestion();

}

function handleSubmit(){
      input.addEventListener('keyup',function(e){
    	if (e.keyCode === 13) {
        if(input.value === ""){
          return false;
        }
        if(input.value === currentQuestion){
          result.innerText = "Correct"
          jumsu += punto;
          score.innerText = jumsu;
        } else{
          result.innerText = "Incorrect!" + "\n" + "Correct : " + currentQuestion
          jumsu -= 100;
          score.innerText = jumsu;
          gameOver();
        }
        input.value = "";
      }
    });
  }
handleSubmit();

function gameOver(){
  if(jumsu < 0){
    result.innerText = "";
    score.innerText = "";
    question.innerText = "";
    input.style.display = "none";
    answer.innerText = "";
    pass.style.display = "none";
    setTimeout(function(){
      body.innerHTML = '<img src=\'haha/haha.jpg\'>'
    }, 2000);


}
}
