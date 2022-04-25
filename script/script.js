function addValue(){
    // get the operands value
        var operand1 = document.getElementById('input_a').value;
        var operand2 = document.getElementById('input_b').value;
    // parse to integer. You can use: parseInt(input, 10);
    if( operand1=="" || operand2==""){
        alert('Please fill all the operands');
    }
        else{

            if(isNaN(operand1) || isNaN(operand2)){
                alert('please enter a valid number')
            }
            else{
                
                operand1Number=parseInt(operand1);
                operand2Number=parseInt(operand2);
                // perform operation
                var finalValue= operand1Number + operand2Number;
                document.getElementById('outputValue').innerHTML = operand1 +"  +  " +operand2+"  =  "+finalValue;        
            }
            
        }
}



function divValue(){
    var operand1 = document.getElementById('input_a').value;
    var operand2 = document.getElementById('input_b').value;
    if( operand1=="" || operand2==""){
        alert('Please fill all the operands');
    }
        else{

            if(isNaN(operand1) || isNaN(operand2)){
                alert('please enter a valid number')
            }
            else{
                
                operand1Number=parseInt(operand1);
                operand2Number=parseInt(operand2);
                // perform operation
                var finalValue= operand1Number / operand2Number;
                document.getElementById('outputValue').innerHTML = operand1 +"  /  " +operand2+"  =  "+finalValue;        
            }
            
        }
}
function mulValue(){

    var operand1 = document.getElementById('input_a').value;
    var operand2 = document.getElementById('input_b').value;
    if( operand1=="" || operand2==""){
        alert('Please fill all the operands');
    }
        else{

            if(isNaN(operand1) || isNaN(operand2)){
                alert('please enter a valid number')
            }
            else{
                
                operand1Number=parseInt(operand1);
                operand2Number=parseInt(operand2);
                // perform operation
                var finalValue= operand1Number * operand2Number;
                document.getElementById('outputValue').innerHTML = operand1 +"  *  " +operand2+"  =  "+finalValue;        
            }
            
        }
}
function subValue(){
    var operand1 = document.getElementById('input_a').value;
    var operand2 = document.getElementById('input_b').value;
    if( operand1=="" || operand2==""){
        alert('Please fill all the operands');
    }
        else{

            if(isNaN(operand1) || isNaN(operand2)){
                alert('please enter a valid number')
            }
            else{
                
                operand1Number=parseInt(operand1);
                operand2Number=parseInt(operand2);
                // perform operation
                var finalValue= operand1Number - operand2Number;
                document.getElementById('outputValue').innerHTML = operand1 +"  -  " +operand2+"  =  "+finalValue;        
            }
            
        }
}

function clearValue(){
    document.getElementById('outputValue').innerHTML = " ";        
}
