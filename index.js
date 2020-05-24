firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.
      window.alert('logined');
    } else {
      // No user is signed in.
      
    }
  });



function login(){
    var USEREMAIL = document.getElementById('useremail').value;
    var USERPASSWORD = document.getElementById('userpassword').value;

    firebase.auth().signInWithEmailAndPassword(USEREMAIL, USERPASSWORD).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
        window.alert('ERROR: '+ errorMessage);
      });

}