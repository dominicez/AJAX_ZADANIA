$(document).ready(function(){
    let btn = document.getElementById('btn');

    $.getData('https://akademia108.pl/api/ajax/get-post.php', function (data) {
        console.log(data.name);
    });

    $(btn).click(getData(){
        
    });
});







