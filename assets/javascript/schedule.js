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
      var firstDepart = $("#firstDepart-input").val().trim()
      var frequency = $("#frequency-input").val().trim();
      
      var newRout = {
          Name: trainName,
          Dest: destination,
          First: firstDepart,
          Freq: frequency
      
        };
    
    database.ref().push(newRout);

    alert("New Route Posted");

    $("#trainName-input").val("");
    $("#destination-input").val("");
    $("#firstDepart-input").val("");
    $("#frequency-input").val("");
    });

    database.ref().on("child_added", function(childSnapshot)    {
        var DBName = childSnapshot.val().Name;
        var DBDestination = childSnapshot.val().Dest;
        var DBfirstDepart = childSnapshot.val().First;
        var DBfrequency = childSnapshot.val().Freq;
//calculate
        var currentTime = moment();
//next arrival remainder left after frequency from first departure//
        var firstDepartConverted = moment(DBfirstDepart, "hh:mm").subtract(1, "years");
        var fromDepart = moment().diff(moment(firstDepartConverted), "minutes");
        var remainder = fromDepart % DBfrequency;
        var minToArrival = DBfrequency - remainder;
        var nextArrival = moment().add(minToArrival, "minutes");
        var nextArrivalConverted = moment(nextArrival).format('hh:mm a');


console.log(moment(firstDepartConverted).format('hh:mm a'));
console.log(fromDepart);

    var newRow = $("<tr>").append(
        $("<th>").text(DBName),
        $("<td>").text(DBDestination),
        $("<td>").text(DBfrequency),
        $("<td>").text(nextArrivalConverted),
        $("<td>").text(minToArrival)
    );

    $("#train-display > tbody").append(newRow);
    });
