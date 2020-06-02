// $(".login-form").hide();
// $(".login").css("background", "none");
$(".signup-form").hide();
$(".signup").css("background", "none");


$(".login").click(function(){
  $(".signup-form").hide();
  $(".login-form").show();
  $(".signup").css("background", "none");
  $(".login").css("background", "#fff");
});

$(".signup").click(function(){
  $(".signup-form").show();
  $(".login-form").hide();
  $(".login").css("background", "none");
  $(".signup").css("background", "#fff");
});

// $(".btn").click(function(){
//   $(".input").val("");
// });

//DataBase connection with restdb.io

//Get advertiser
function checkloginAdvertiser()
{
  var usernameLogin = document.getElementById('usernameLogin').value;
  var passwordLogin = document.getElementById('passwordLogin').value;
  var errorLogin = document.getElementById('errorsLogin');
  if(usernameLogin != "" && passwordLogin != "")
  {
    var settings = {
      "async": true,
      "crossDomain": true,
      "url": "https://leadxpansion-1513.restdb.io/rest/signinformadvertisers",
      "method": "GET",
      "headers": {
        "content-type": "application/json",
        "x-apikey": "5ed424e82032862ff2ce2719",
        "cache-control": "no-cache"
      }
    }
    
    $.ajax(settings).done(function (response) {
      jQuery.each(response, function(index,data) {
        if(usernameLogin == data.username && passwordLogin == data.password)
  {
    localStorage.usernameLoggedInAdvertiser = usernameLogin; 
    window.location.href="dashboardadvertisers.html";
  }else{
    errorLogin.innerHTML = 'No user with this credentials.';
  }
      });
      
    });
   
  }
}

//Get publisher
function checkloginPublisher()
{
  var usernameLogin = document.getElementById('usernameLogin').value;
  var passwordLogin = document.getElementById('passwordLogin').value;
  var errorLogin = document.getElementById('errorsLogin');
  if(usernameLogin != "" && passwordLogin != "")
  {
    var settings = {
      "async": true,
      "crossDomain": true,
      "url": "https://leadxpansion-1513.restdb.io/rest/signinformpublishers",
      "method": "GET",
      "headers": {
        "content-type": "application/json",
        "x-apikey": "5ed424e82032862ff2ce2719",
        "cache-control": "no-cache"
      }
    }
    
    $.ajax(settings).done(function (response) {
      jQuery.each(response, function(index,data) {
        if(usernameLogin == data.username && passwordLogin == data.password)
  {
    localStorage.usernameLoggedInPublisher = usernameLogin; 
    window.location.href="dashboardpublishers.html";
  }else{
    errorLogin.innerHTML = 'No user with this credentials.';
  }
      });
      
    });
   
  }
}

//Post Advertisers
function submitAdvertiser(){
  var firstName = document.getElementById('firstName').value;
  var lastName = document.getElementById('lastName').value;
  var email = document.getElementById('email').value;
  var username = document.getElementById('username').value;
  var password = document.getElementById('password').value;
  var errors = document.getElementById('errors');
  var validation = true;
  if(firstName.length < 2)
  {
    errors.innerHTML = "First name is less than 2 characthers";
    validation  = false;
  }
  if(lastName.length < 2)
  {
    errors.innerHTML = "Last name is less than 2 characthers";
    validation = false;
  }
  if(username.length < 2)
  {
    errors.innerHTML = "User name is less than 2 characthers";
    validation = false;
  }
  if(!email.includes("@"))
  {
    errors.innerHTML = "Email is not valid";
    validation = false;
  }
  if(validation == true)
  {
    var jsondata = {"firstname": firstName,"lastname": lastName,"email": email,"username": username,"password": password};
    var settings = {
      "async": true,
      "crossDomain": true,
      "url": "https://leadxpansion-1513.restdb.io/rest/signinformadvertisers",
      "method": "POST",
      "headers": {
        "content-type": "application/json",
        "x-apikey": "5ed424e82032862ff2ce2719",
        "cache-control": "no-cache"
      },
      "processData": false,
      "data": JSON.stringify(jsondata)
    }
    
    $.ajax(settings).done(function (response) {
      localStorage.usernameLoggedInAdvertiser = username; 
      window.location.href="dashboardadvertisers.html";
      console.log(response);
    });
  }
 
}

//Post Publisher
function submitPublisher(){
  var firstName = document.getElementById('firstName').value;
  var lastName = document.getElementById('lastName').value;
  var email = document.getElementById('email').value;
  var username = document.getElementById('username').value;
  var password = document.getElementById('password').value;
  var errors = document.getElementById('errors');
  var validationp = true;
  if(firstName.length < 2)
  {
    errors.innerHTML = "First name is less than 2 characthers";
    validationp  = false;
  }
  if(lastName.length < 2)
  {
    errors.innerHTML = "Last name is less than 2 characthers";
    validationp = false;
  }
  if(username.length < 2)
  {
    errors.innerHTML = "User name is less than 2 characthers";
    validationp = false;
  }
  if(!email.includes("@"))
  {
    errors.innerHTML = "Email is not valid";
    validationp = false;
  }
  if(validationp == true)
  {
  var jsondata = {"firstname": firstName,"lastname": lastName,"email": email,"username": username,"password": password};
var settings = {
  "async": true,
  "crossDomain": true,
  "url": "https://leadxpansion-1513.restdb.io/rest/signinformpublishers",
  "method": "POST",
  "headers": {
    "content-type": "application/json",
    "x-apikey": "5ed424e82032862ff2ce2719",
    "cache-control": "no-cache"
  },
  "processData": false,
  "data": JSON.stringify(jsondata)
}

$.ajax(settings).done(function (response) {
  localStorage.usernameLoggedInPublisher = username; 
  window.location.href="dashboardpublishers.html";
  console.log(response);
});
}
}