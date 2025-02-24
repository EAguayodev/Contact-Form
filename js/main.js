const form = document.getElementById('form');
const btnSubmit = document.getElementById('btn-submit');

btnSubmit.addEventListener('submit', function(e){
    const email = document.getElementById('email');
    e.preventDefault();
  if (email === '0' || !email.checkValidity()) {
    
  } else if(){
    
  } else{

  }
})


function btnValidator(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}