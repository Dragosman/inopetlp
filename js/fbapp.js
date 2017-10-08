// TODO: Replace with your project's config object. You can find this
// by navigating to your project's console overview page
// (https://console.firebase.google.com/project/your-project-id/overview)
// and clicking "Add Firebase to your web app"

  // Initialize Firebase
var config = {
  apiKey: "AIzaSyA3aopPk68tzlirpMQDaYLhvgg21dx6PV8",
  authDomain: "inopet-landing-page.firebaseapp.com",
  databaseURL: "https://inopet-landing-page.firebaseio.com",
  projectId: "inopet-landing-page",
  storageBucket: "inopet-landing-page.appspot.com",
  messagingSenderId: "125208678262"
};
  

// Initialize your Firebase app
firebase.initializeApp(config);

// Reference to your entire Firebase database
var myFirebase = firebase.database().ref();

// Get a reference to the recommendations object of your Firebase.
// Note: this doesn't exist yet. But when we write to our Firebase using
// this reference, it will create this object for us!
var accounts = myFirebase.child("accounts");

// Push our first recommendation to the end of the list and assign it a
// unique ID automatically.
var submitAccount=function(){
	Email = $("#Email").val();
	DogName = $("#DogName").val();
	DogType = $("#DogType").val();
	DogAge = $("#DogAge").val(); 
	


  accounts.push({
    "age": DogAge,
    "email": Email,
    "dogName": DogName,
    "type": DogType
  });

  window.alert("Multumim pentru interesul in Inopet. Te vom anunta in curand, la adresa de email "+Email+" despre lansarea Inopet.");

};

$(window).load(function () {

  $("#accountsform").submit(submitAccount);
});

/*
$(window).load(function () {

  // Find the HTML element with the id recommendationForm, and when the submit
  // event is triggered on that element, call submitRecommendation.

});
*/