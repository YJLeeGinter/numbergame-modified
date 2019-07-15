
var body = document.body;

var numberExample;
var numberArr;

function pickNumber(){
    numberExample = [1,2,3,4,5,6,7,8,9];
    numberArr = [];
   
   for(var i =0; i <4; i +=1){
      var pickValue = numberExample.splice(Math.floor(Math.random()*(9-i)), 1)[0];
      numberArr.push(pickValue);
   }
}

pickNumber();
console.log(numberArr); 

var countShow = document.createElement('h2');
countShow.classList.add('align');
body.append(countShow);

var result = document.createElement('h2');
result.classList.add('align');
body.append(result);

var coloredAnswer = document.createElement('div');
coloredAnswer.classList.add('align');
body.append(coloredAnswer);

var form = document.createElement('form');
form.classList.add('align');
body.append(form);

var input = document.createElement('input');
input.classList.add('align');
input.maxLength = 4;
form.append(input);

var button = document.createElement('button');
button.classList.add('align');
button.textContent = 'Assign';
form.append(button);


var count = 0; // 틀린 횟수

form.addEventListener('submit', function callBack(event) { // a user hit the enter
    event.preventDefault();   

    var answer = input.value;

    function emptyInput(){
        input.value = '';
        input.focus();
    }       

    function colorNumber(num, coloredAnswer){
        var ball = document.createElement('div');
        ball.textContent = num;
        ball.style.display = 'inline-block';
        ball.style.border = '1px solid black';
        ball.style.borderRadius = '10px';
        ball.style.width = '20px';
        ball.style.hiehgt = '20px';
        ball.style.textAlign = 'center';
        ball.style.backgroundColor = 'yellow';
        ball.style.margin = '10px';        
        ball.className = 'ballID' + num;
        coloredAnswer.appendChild(ball);
    }
    
    function showAnswer(){
        var tempNum = [];

        for(var i =0; i <4 ; i++){
              function show(j){
                tempNum[j] = numberArr[j];
                setTimeout(()=>{
                    colorNumber(tempNum[j], coloredAnswer);
                }, 1000*j); // milli secs                 
                }
                show(i);
              }  
              
           
    
    }
    
  if(answer === numberArr.join('')){ // when the answer is correct
    result.textContent = 'Home Run!';
    showAnswer();
    console.log(numberArr);
    pickNumber();
    console.log(numberArr);
    emptyInput();
    count = 0;

  } else{ // When the answer is incorrect
      var tempAnswer = answer.split('');
      var strike = 0;
      var ball = 0;    
        count +=1;

    if(count > 10){
        result.textContent = 'more than 10 times! The answer is :' + numberArr;
        showAnswer();
        emptyInput();
        pickNumber();
        count = 0;
    
    }
    else{
        console.log('When the answer is not correct!', tempAnswer)
        for(var i = 0; i < 4; i +=1){
            if(numberArr[i] === Number(tempAnswer[i])){ // same place
                strike = strike + 1;
    
            } else if(numberArr.indexOf(Number(tempAnswer[i])) > -1){ // not the same place but includes the digit
                ball = ball + 1;
            }      
        }
        countShow.textContent = 'the number of try : '+ count ;
        result.textContent =  strike + ' strikes, ' + ball + ' balls';
        emptyInput();
        
    }

    
}

}); // callback function
    

