// your custom app logic goes here:
(function(){
  console.log("Hello Slack!");

  // Initialize Turbo SDK
  var turbo = Turbo({ site_id: '593d9d81fd173e00115bbb26' });

  $('#btn-sign-up').click(function(event){
    event.preventDefault()

    console.log("SIGN-UP!")
  })

})()
