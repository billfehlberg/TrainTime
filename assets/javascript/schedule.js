// Initialize Firebase
var config = {
    apiKey: "AIzaSyCCLAQEX5i9GygoftSNrXoczACRYGAsBts",
    authDomain: "bill-trains.firebaseapp.com",
    databaseURL: "https://bill-trains.firebaseio.com",
    projectId: "bill-trains",
    storageBucket: "bill-trains.appspot.com",
    messagingSenderId: "251498189407"
  };
  firebase.initializeApp(config);

  var database = firebase.database();

  $("#submit").on("click", function(event)  {
      event.preventDefault();
      var trainTrip = {
          name: trainName;
          destination: trainDest;
          
      }
  })