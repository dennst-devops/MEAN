//https://api.github.com/users/dennst-devops
//https://ghibliapi.herokuapp.com/films

$(document).ready(function () {
    //$.get("https://api.github.com/users/dennst-devops", displayName);
    $.get("https://ghibliapi.herokuapp.com/films", displayName);
    function displayName(data) {
        console.log(data[0].title);
        $("button").click(function () {
            $(this).after(`<h2>The first title is: ${data[0].title}</h2>`)
        })
    };

});