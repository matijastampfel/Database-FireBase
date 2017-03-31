/*jshint esnext: true, moz: true*/
/*jslint browser:true */
/*global firebase*/


// Fire base///////////////////////////////////////////////////////////////
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyBgM6MXfEhvwxU1DB5HXuDwyjps3-FWwcA",
    authDomain: "fax-database.firebaseapp.com",
    databaseURL: "https://fax-database.firebaseio.com",
    storageBucket: "fax-database.appspot.com",
    messagingSenderId: "802630250681"
  };
  firebase.initializeApp(config);
// added code//
var database = firebase.database();
var ref = database.ref("data");
// ***********************************************/////////////////////////////

//Global//////////////////////////////////////////////////////////////////////
var model = document.getElementById("model"); //add for Model form
var year = document.getElementById("year"); // add for Year form
var horse = document.getElementById("horsepower"); //add for horse form
var submitB = document.getElementById("submitB"); // submit button
var modelSB = document.getElementById("modelSB"); // sort model
var yearSB = document.getElementById("yearSB"); // sort year
var horseSB = document.getElementById("horseSB"); // sort horse
var searchNum = document.getElementById("searchNum"); //search number form
var searchB = document.getElementById("searchB"); //search number button
//************************************************************************** */

// Input text ////////////////////////////////////////////////////////////////
submitB.addEventListener("click", function(){

firebase.database().ref("data/").push({
  model:model.value,
  year: year.value,
  horse: horse.value

});

}); 

// **************************************************************************

// Retrive data///////////////////////////////////////////////////////////////////

firebase.database().ref("data/")
    .on("value", function (snapshot) {

        var html = "";

        snapshot.forEach(function (i) {
            var element = i.val();
            var model = element.model;
            var year = element.year;
            var horse = element.horse;
            html += "<li><b>" + model + " " + year + " " + horse +"</li>";
console.log(i);
        });

        dataUl.innerHTML = html;

    });


//***************************************************************************** */