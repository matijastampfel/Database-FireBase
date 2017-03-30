/*jshint esnext: true, moz: true*/
/*jslint browser:true */


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
// ***********************************************/////////////////////////////

//Global//////////////////////////////////////////////////////////////////////
var model = document.getElementById("model");
var year = document.getElementById("year");
var horse = document.getElementById("horsepower");
var submitB = document.getElementById("submitB");

//************************************************************************** */

// Input text ////////////////////////////////////////////////////////////////
submitB.addEventListener("click", function(){

firebase.database().ref("data/").push({
  model:model,
  year: year,
  horse: horse

});

}); 

// **************************************************************************