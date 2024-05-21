document.addEventListener("DOMContentLoaded", function() {
    let botDiv = document.querySelector('.botDiv');
    let friendDiv = document.querySelector('.friendDiv');
    let backDiv = document.querySelector('.backDiv');

    if (botDiv) {
        botDiv.addEventListener("click", function(){
            window.location.href = "bot.html";
        });
    }

    if (friendDiv) {
        friendDiv.addEventListener("click", function(){
            window.location.href = "friend.html";
        });
    }

    if (backDiv) {
        backDiv.addEventListener("click", function(){
            window.location.href = "index.html";
        });
    }
});
