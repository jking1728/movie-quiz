$(document).ready(function() {
    $("form#quiz").submit(function(event) {
        var answer1 = parseInt($("input:radio[name=question1]:checked").val());
        var answer2 = parseInt($("input:radio[name=question2]:checked").val());
        var answer3 = parseInt($("input:radio[name=question3]:checked").val());
        var answer4 = parseInt($("input:radio[name=question4]:checked").val());
        var answer5 = parseInt($("input:radio[name=question5]:checked").val());
        var totalScore = (answer1 + answer2 + answer3 + answer4 + answer5)
        
        if ((answer1 + answer2 + answer3 + answer4 + answer5) <= 5) {
            $(".black-panther").show();
        } else if (totalScore > 5 && totalScore <= 10) {
            $(".Iron-Man").show();
        } else if (totalScore > 10 && totalScore <= 15) {
            $(".Scarlet-Witch").show();
        } else if (totalScore > 15 && totalScore < 21) {
            $(".Captain-America").show();
        } else {
            $(".Spider-Man").show();
        }
        $("form#quiz").hide();
        $("button#reset").show();
        $("button#reset").click(function() {
            $("form#quiz").show();
            $(".heroes").toggle();
            $("button#reset").hide();
        })
        event.preventDefault();
        
    })
})