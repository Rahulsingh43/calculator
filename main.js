let smallResult = document.querySelector('#smallResult');
let bigResult = document.querySelector('#bigResult');
let firstValue = false;
let secondValue = false;
 let operatorSelected = false;
 let total = 0;
 let cal_done = false;
 let count = 0;
 let countSecond = 0;

 let inputSize;


function num(enteredValue){
    enteredValue = enteredValue.toString();
    if (cal_done)
  cls(); 

    if (!operatorSelected) {
        
        if (!firstValue) firstValue = "";
  
          (enteredValue === '.') ? count++ : count;

           (count === 1 && enteredValue == '.') ? firstValue = firstValue + '.': (enteredValue !== '.') ?  firstValue = firstValue + enteredValue : firstValue;
            
          
          
       
        firstValue = limitLength(firstValue);

        bigResult.innerHTML = firstValue;
        smallResult.innerHTML = firstValue;
    }

    if (operatorSelected) {
        
        if (!secondValue) secondValue = "";

        (enteredValue === '.') ? countSecond++ : countSecond;

           (countSecond === 1 && enteredValue == '.') ? secondValue = secondValue + '.': (enteredValue !== '.') ?  secondValue = secondValue + enteredValue : secondValue;
        
       secondValue = limitLength(secondValue);

        bigResult.innerHTML = secondValue;
        // smallResult.innerHTML = firstValue + operate + secondValue;
        smallResult.innerHTML = `${firstValue}${operate}${secondValue}`;
    }
}

function operator(sign) {
   if (firstValue && secondValue) {
    operatorSelected = true;
   result();
    operate = sign
   }

   if (cal_done) {
		var x = (firstValue = total);
		cls();
		firstValue = x;
        firstValue = limitLength(firstValue);
        // limiting to 12
		bigResult.innerHTML = sign; // display which operator is selected
		var a = smallResult.innerHTML.toString();
		// smallResult.innerHTML = +x + sign;
		smallResult.innerHTML = `${x} ${sign}`;
		operate = sign;
		operatorSelected = true;
	}

   if (!firstValue || operatorSelected) {
    return false;
   }

   if (firstValue && !secondValue) {
    bigResult.innerHTML = sign;
    var a = smallResult.innerHTML.toString();
    // smallResult.innerHTML = a + sign;
    smallResult.innerHTML = `${a} ${sign}`;
    operate = sign;
    operatorSelected = true;
   }
}

function result() {
    if (!firstValue) return false;

    if (!secondValue && operatorSelected) {
        total = calculate(firstValue, firstValue, operate);
        total = limitLength(total);
    }

    if (firstValue && secondValue) {
        total = calculate(firstValue, secondValue, operate);
        total = limitLength(total);
    }

    total = total.toString();
    var decimal = total.indexOf('.') == -1;
    if (!decimal) total = parseFloat(total).toFixed(3);

    bigResult.innerHTML = total;      
    
}


function calculate(a, b, c) {
    switch (c) {
        case '+':
            total = +a + +b; 
            cal_done = true;          
            break;

        case '-':
                total = +a - +b;  
            cal_done = true;          
             break;
        case '*':
            total = +a * +b; 
            cal_done = true;          
                break;
         case '/':
                total = +a / +b;
            cal_done = true;          
               break;
               case '%':
                total = +a/100 * +b;
            cal_done = true;          
               break;
        default:
            return "Invalid!";
    }
    return total;
}

function reverse() {
 bigResult.innerHTML = bigResult.innerHTML * -1;
  // smallResult.innerHTML = smallResult.innerHTML * -1;
}



function cls() {
	smallResult.innerHTML = '';
	bigResult.innerHTML = '0';
	firstValue = false;
	secondValue = false;
	operate = '+';
	total = 0;
  count = 0;
  countSecond = 0;
	cal_done = false;
	operatorSelected = false;
}

function clearSingle() {
  if (cal_done) {
    cls();
  }
  if (firstValue && !secondValue && !operatorSelected) {
  (smallResult.innerHTML.length == 1) ? smallResult.innerHTML = '0' : smallResult.innerHTML = smallResult.innerHTML.substring(0, smallResult.innerHTML.length -1);
    (bigResult.innerHTML.length == 1) ? bigResult.innerHTML = '0' : bigResult.innerHTML = bigResult.innerHTML.substring(0, bigResult.innerHTML.length -1);
      (firstValue.length == 1) ? firstValue = '0' : firstValue = firstValue.substring(0, firstValue.length -1);
      console.log(`first valu ${firstValue}`);
      console.log(`operater ${operate}`);
      console.log(`second valu ${secondValue}`);
}


if (firstValue && secondValue == '' && operatorSelected) {
  (bigResult.innerHTML.length == 1) ? bigResult.innerHTML = '0' : bigResult.innerHTML = bigResult.innerHTML.substring(0, bigResult.innerHTML.length -1);
  (smallResult.innerHTML.length == 1) ? smallResult.innerHTML = '0' : smallResult.innerHTML = smallResult.innerHTML.substring(0, smallResult.innerHTML.length -1);
  (operate.length == 1) ? operate = operate.substring(0, operate.length -1): operate; 
  console.log(`first valu ${firstValue}`);
  console.log(`operater ${operate}`);
  console.log(`second valu ${secondValue}`);
  return operatorSelected = false;


}
  


  if (firstValue && secondValue) {
    (bigResult.innerHTML.length == 1) ? bigResult.innerHTML = '0' : bigResult.innerHTML = bigResult.innerHTML.substring(0, bigResult.innerHTML.length -1);
    (smallResult.innerHTML.length == 1) ? smallResult.innerHTML = '0' : smallResult.innerHTML = smallResult.innerHTML.substring(0, smallResult.innerHTML.length -1);
    (secondValue.length == 1) ? secondValue = '' : secondValue = secondValue.substring(0, secondValue.length -1);
    console.log(`first valu ${firstValue}`);
  console.log(`operater ${operate}`);
  console.log(`second valu ${secondValue}`);

}

  
}

function limitLength(inputSize) {
	inputSize = inputSize.toString();

	if (inputSize != 0 || inputSize != '0') {
		if (inputSize.charAt(0) == 0) inputSize = inputSize.slice(1);
	}

	if (inputSize.toString().length > 12) inputSize = inputSize.substring(0, 12);

	return inputSize;
}


document.addEventListener("keydown", keyboardInputHandler);


function keyboardInputHandler(e) {
    e.preventDefault();
  
    //numbers
    if (e.key === "0") {
      num(0);
    } else if (e.key === "1") {
      num(1);
    } else if (e.key === "2") {
      num(2);
    } else if (e.key === "3") {
        num(3);
    } else if (e.key === "4") {
        num(4);
    } else if (e.key === "5") {
        num(5);
    } else if (e.key === "6") {
        num(6);
    }else if (e.key === "7") {
        num(7);
    } else if (e.key === "8") {
      num(8);
    } else if (e.key === "9") {
        num(9);
    }
  
    //operators
    if (e.key === "+") {
      operator('+');
        
    } else if (e.key === "-") {
      operator('-');
        
    } else if (e.key === "*") {
      operator('*');
        
    } else if (e.key === "/") {
      operator('/');
    }
  
    //decimal key
    if (e.key === ".") {
        num('.');
    }
  
    //press enter to see result
    if (e.key === "Enter") {
      result('=');
    }
  
    //backspace for removing the last input
    if (e.key === "Backspace") {
      clearSingle()
    }
  }
  