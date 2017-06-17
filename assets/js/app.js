// your custom app logic goes here:
(function(){
  console.log("Hello Slack!");

  // Initialize Turbo SDK
  var turbo = Turbo({ site_id: '593d9d81fd173e00115bbb26' });

  $('#btn-sign-up').click(function(event){
    event.preventDefault()

    var email = $('#input-sign-up').val()
    if (email == null) {
      alert('Please enter your email address')
      return;
    }

    if (email.length == 0) {
      alert('Please enter your email address')
      return;
    }

    console.log("SIGN-UP: " + email);

    turbo.createUser({email: email}, function(err, data){
      if (err){
        alert('Error: ' + err.message)
        return
      }
      console.log('USER REGISTERED: ' + JSON.stringify(data));
      window.location.href = '/get-started';
    })
  })

})()
