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
      var trainName = $("#trainName-input").val().trim();
      var destination = $("#destination-input").val().trim();
      var nextArrival = $("#nextArrival-input").val().trim();
      var frequency = $("#frequency-input").val().trim();
      
      var newRout = {
          Name: trainName,
          Dest: destination,
          Next: nextArrival,
          Freq: frequency
      
        };
    
    database.ref().push(newRout);

    console.log(newRout.Name);
    console.log(newRout.Dest);
    console.log(newRout.Next);
    console.log(newRout.Freq);

    alert("New Route Posted");

    $("#trainName-input").val("");
    $("#destination-input").val("");
    $("#nextArrival-input").val("");
    $("#frequency-input").val("");
    });

    database.ref().on("child_added", function(childSnapshot)    {
        var trainName = childSnapshot.val().Name;
        var destination = childSnapshot.val().Dest;
        var nextArrival = childSnapshot.val().Next;
        var frequency = childSnapshot.val().Freq;

    console.log(trainName);
    console.log(destination);
    console.log(nextArrival);
    console.log(frequency);

    var newRow = $("<tr>").append(
        $("<th>").text(trainName),
        $("<td>").text(destination),
        $("<td>").text(nextArrival),
        $("<td>").text(frequency)
    );
    $("#train-display > tbody").append(newRow);
    });