// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBFsT_7E2xrJKB7f211te5_Ai1FCLDuKf0",
    authDomain: "comment-asa.firebaseapp.com",
    projectId: "comment-asa",
    storageBucket: "comment-asa.firebasestorage.app",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "1:212921434485:web:0f3ca4e31eac488c42933c"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

// Function to post a comment
document.getElementById('commentForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const comment = document.getElementById('comment').value;

    db.collection("comments").add({
        username: username,
        comment: comment,
        timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    .then(() => {
        console.log("Comment successfully written!");
        document.getElementById('commentForm').reset();
        loadComments(); // Refresh comments after posting a new one
    })
    .catch((error) => {
        console.error("Error writing comment: ", error);
    });
});

// Function to load comments
function loadComments() {
    db.collection("comments").orderBy("timestamp", "desc").get().then((querySnapshot) => {
        const commentsList = document.getElementById('commentsList');
        commentsList.innerHTML = ""; // Clear the list before loading
        
        querySnapshot.forEach((doc) => {
            const data = doc.data();
            const commentElement = document.createElement('div');
            commentElement.innerHTML = `<strong>${data.username}</strong>: ${data.comment}`;
            commentsList.appendChild(commentElement);
        });
    });
}

// Load comments on page load loadComments();

      
