//script.js
let likeCount = 0;

document.getElementByID('like-button').addEventListener('click', function() { likeCount++;
    document.getElementByID('like-count').innerText = likeCount + 'Likes';
    });