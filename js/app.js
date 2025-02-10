// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, serverTimestamp, getDocs, orderBy } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBFsT_7E2xrJKB7f211te5_Ai1FCLDuKf0",
    authDomain: "comment-asa.firebaseapp.com",
    projectId: "comment-asa",
    storageBucket: "comment-asa.firebasestorage.app",
    messagingSenderId: "212921434485",
    appId: "1:212921434485:web:0f3ca4e31eac488c42933c",
    measurementId: "G-RTWWLFJW5W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Function to post a comment
document.getElementById('commentForm').addEventListener('submit', async function(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const comment = document.getElementById('comment').value;

    try {
        await addDoc(collection(db, "comments"), {
            username: username,
            comment: comment,
            timestamp: serverTimestamp()
        });
        console.log("Comment successfully written!");
        document.getElementById('commentForm').reset();
        loadComments(); // Refresh comments after posting a new one
    } catch (error) {
        console.error("Error writing comment: ", error);
    }
});

// Function to load comments
async function loadComments() {
    const querySnapshot = await getDocs(query(collection(db, "comments"), orderBy("timestamp", "desc")));
    const commentsList = document.getElementById('commentsList');
    commentsList.innerHTML = ""; // Clear the list before loading
    
    querySnapshot.forEach((doc) => {
        const data = doc.data();
        const commentElement = document.createElement('div');
        commentElement.innerHTML = `<strong>${data.username}</strong>: ${data.comment}`;
        commentsList.appendChild(commentElement);
    });
}

// Load comments on page load
loadComments();
