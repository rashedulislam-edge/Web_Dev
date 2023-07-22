document.getElementById("submit-btn").addEventListener('click', function(){
  //  console.log("submit");

  const emailField=document.getElementById("email-field");
  const email=emailField.value;
  //console.log(email);

  const passwordField=document.getElementById("password-field");
  const password=passwordField.value;
  //console.log(password);

  if(email==="rajon@gmail.com" && password==="11223344"){

    console.log("Valid User")
    window.location.href="home.html";

  }

  else{
    alert("Invalid User");
  }

})