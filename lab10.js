function calculator(type){

var number1 = Number(document.getElementById('num1').value);
var number2 = Number(document.getElementById('num2').value);

if (type="add"){
  document.getElementById('output').innerHtml= number1 + number2
  }

else if (type="subtract"){
    document.getElementById('output').innerHtml= number1 - number2
    }

else if (type="multiply"){
    document.getElementById('output').innerHtml= number1 * number2
        }

else if (type="divide"){
      document.getElementById('output').innerHtml= number1 / number2
            }
}
