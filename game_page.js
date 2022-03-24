var player_1_name=localStorage.getItem("save1")
var player_2_name=localStorage.getItem("save2")
document.getElementById("player_1_name").innerHTML=player_1_name
document.getElementById("player_2_name").innerHTML=player_2_name
var player_1_score=0
var player_2_score=0
document.getElementById("player_1_score").innerHTML=player_1_score
document.getElementById("player_2_score").innerHTML=player_2_score
var question_player=player_1_name
var answer_player=player_2_name
document.getElementById("question_player").innerHTML=question_player
document.getElementById("answer_player").innerHTML=answer_player
function guess() {
    get_word=document.getElementById("word_input").value
    word=get_word.toLowerCase()
    console.log(word)
    first_letter=word.charAt(1)
    console.log(first_letter)
    last_letter=word.charAt((word.length-1))
    console.log(last_letter)
    middle_letter=word.charAt(Math.floor(word.length/2))
    console.log(middle_letter)
    replace_one=word.replace(first_letter, "_")
    replace_two=replace_one.replace(middle_letter, "_")
    replace_three=replace_two.replace(last_letter, "_")
    console.log(replace_three)
    word_show="<h4>"+replace_three+"</h4> <br>"
    input_show="<input id='input_word'> <br>"
    button_show="<button onclick='check()' class='btn btn-info'>Check</button> <br>"
document.getElementById("output").innerHTML=word_show+input_show+button_show
document.getElementById("word_input").value=""
}
function check() {
    get_answer=document.getElementById("input_word").value
    answer=get_answer.toLowerCase()
    console.log(get_answer)
if (answer==word) {
    if (answer_player==player_1_name) {
        player_1_score=player_1_score+1
      document.getElementById("player_1_score").innerHTML=player_1_score
       question_player=player_1_name
 answer_player=player_2_name
document.getElementById("question_player").innerHTML=question_player
document.getElementById("answer_player").innerHTML=answer_player
    }
 else if (answer_player==player_2_name) {
        player_2_score=player_2_score+1
      document.getElementById("player_2_score").innerHTML=player_2_score
       question_player=player_2_name
 answer_player=player_1_name
document.getElementById("question_player").innerHTML=question_player
document.getElementById("answer_player").innerHTML=answer_player
    }
}
else if (answer!=word) {
    if (answer_player==player_1_name) {
        player_1_score=player_1_score-1
      document.getElementById("player_1_score").innerHTML=player_1_score
       question_player=player_1_name
 answer_player=player_2_name
document.getElementById("question_player").innerHTML=question_player
document.getElementById("answer_player").innerHTML=answer_player
    }
 else if (answer_player==player_2_name) {
        player_2_score=player_2_score-1
      document.getElementById("player_2_score").innerHTML=player_2_score
       question_player=player_2_name
 answer_player=player_1_name
document.getElementById("question_player").innerHTML=question_player
document.getElementById("answer_player").innerHTML=answer_player
    }
}
document.getElementById("output").innerHTML=""
}