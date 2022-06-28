// Your web app's Firebase configuration
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
    apiKey: "AIzaSyCoLpTfNokpeMI_oc1BafZmY62gE-03K3w",
    authDomain: "project-101-5e7d1.firebaseapp.com",
    databaseURL: "https://project-101-5e7d1-default-rtdb.firebaseio.com",
    projectId: "project-101-5e7d1",
    storageBucket: "project-101-5e7d1.appspot.com",
    messagingSenderId: "417912322344",
    appId: "1:417912322344:web:75734212990e0728f7b81d"
  };
  
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


function addUser()
{
  user_name = document.getElementById("user_name").value;
  firebase.database().ref("/").child(user_name).update({
    purpose : "adding user"
  }).then(function() {
    window.location = "chat_room.html";
});

localStorage.setItem("user_name", user_name);

}


