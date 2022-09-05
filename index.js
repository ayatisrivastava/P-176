let words = [
    {
        inputs : 5,
        hint : "Indoor sports",
        word : "Chess"
    },
    {
        inputs : 6,
        hint : "European country",
        word : "France"
    }
]
var gameOver = false
$(".clickable").click(function(){
    var correctGuess = false
    let id = $(this).attr("id")
    var life = parseInt($("#life").text())
    for (i = 0; i < randomWord.word.length; i++){
        if (randomWord.word.charAt(i).toLowerCase == id){
            if (life > 0 && $(".fill_Blanks").eq(i).html() == "_" || $(".fill_Blanks").eq(i).html() == "id"){
                $(".fill_Blanks").eq(i).html(id)
                correctGuess = true
                if ($("#blanks").text() == randomWord.word.toLowerCase()){
                    $("#result").text("You win!")
                    correctGuess = true
                    gameOver = true
                }
            }
        }
    }
})