$(document).ready(function () {
    $.get("https://opentdb.com/api.php?amount=10&type=multiple", displayName);
    function displayName(data) {
        // console.log(data.results[0].category);
        // console.log(data.results.length);
        $("button").click(function () {
            for (var i = 0; i < data.results.length; i++) {
                $(this).after(`</form>`)
                $(this).after(`<input id="chkbtn${i}" type="submit" value="Check it!"></input>`)
                $(this).after(`<input type="radio" name="answer${i}" value="a2">${data.results[i].incorrect_answers[0]}</br>`)
                $(this).after(`<input type="radio" name="answer${i}" value="a2">${data.results[i].incorrect_answers[1]}</br>`)
                $(this).after(`<input type="radio" name="answer${i}" value="a2">${data.results[i].incorrect_answers[2]}</br>`)
                $(this).after(`<input type="radio" name="answer${i}" value="a1">${data.results[i].correct_answer}</br>`)
                $(this).after(`<b><p>${data.results[i].question}</p></b>`)
                $(this).after(`<form>`)
            }
        })
    };

});
//$(this).after(`<li>${data.results[i].incorrect_answers[1]}</li>`)


