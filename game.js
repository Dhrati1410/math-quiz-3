function send(){
    number1 = document.getElementById('number1').value;
    number2 = document.getElementById('number2').value;
    p1_score = 0;
    p2_score = 0;
    answer = parseInt(number1) * parseInt(number2);

    question = "<h4 id='q' >" + number1 + "X" + number2 + "</h4>";
    text_input = "<br><input type='text' placeholder='Answer' id='input_check_box' class='form-control'>";
    check_button = "<br><button class='btn' onclick='check()'>Check</button>";
    row = question + text_input + check_button;
    document.getElementById('output').innerHTML = row;
}