
          document.addEventListener("DOMContentLoaded",()=>{
let mail = document.getElementById("mail")
let msg = document.getElementById("msg")
let submit = document.getElementById("submit")
submit.onclick = ()=>{
    if(mail.value!=""&&msg.value!=""){
    var templateParams = {
  myname:"Your_Name",
  name: mail.value,
  message: msg.value
};
//emailjs.send(' your service_key','your template id', parameters)
emailjs.send('service_mgnxqwn', 'Unitech ASA', templateParams)

  .then(function (response) {
    console.log('SUCCESS!', response.status, response.text);
  }, function (error) {
    console.log('FAILED...', error);
  })
  }
  else{
      alert("Please fill essential details")
      //swal("Please fill essential details","","warning")
      //(for sweetalert library...)
      
  }
}

    
})

            
