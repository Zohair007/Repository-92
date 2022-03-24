var player_1_name=""
var player_2_name=""
function login() {
    player_1_name=document.getElementById("name_input1").value
    player_2_name=document.getElementById("name_input2").value
    localStorage.setItem("save1", player_1_name)
    localStorage.setItem("save2", player_2_name)
    window.location="game_page.html"
}