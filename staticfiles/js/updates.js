const packageName = 'updates';

// form fields
const updatesInputName = document.getElementById('updatesInputName');
const updatesInputEmail = document.getElementById('updatesInputEmail');
const updatesInputPhoneNumber = document.getElementById('updatesInputPhoneNumber');
const updatesInputRegistrationNumber = document.getElementById('updatesInputRegistrationNumber');
const updatesSubmitBtn = document.getElementById('updatesSubmitBtn');

// form validator
const constraints = {
  emailAddress: {
    presence: true,
    email: true,
  },
  name: {
    presence: true,
  },
  phoneNumber: {
    presence: true,
  },
  registrationNumber: {
    presence: true,
    format: /^1[2-9][a-zA-Z]{3}[0-9]{4}$/,
  },
};

const isValid = (data) => {
  const errs = validate(data, constraints);
  if (errs != undefined) {
    console.log('[Validation errors] ', errs);
    return false;
  }
  if (!validate.isNumber(parseInt(updatesInputPhoneNumber.value))) {
    console.log('[Validation errors] PhoneNumber invalid');
    return false;
  }
  return true;
};

const handleUpdates = (e) => {
  console.log('[Event] updatesSubmitBtn clicked');
  
  e.preventDefault();
  const data = {
    name: updatesInputName.value,
    emailAddress: updatesInputEmail.value,
    phoneNumber: updatesInputPhoneNumber.value,
    registrationNumber: updatesInputRegistrationNumber.value,
    eventName: 'WomenTechies20',
  };
  if (!isValid(data)) {
    alert('Invalid fields');
    return;
  }
  else{
    updatesSubmitBtn.innerHTML = '<img src="./assets/loading.gif" alt="" height = "30" width = "25">'
  }
  const settings = {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
    crossDomain: true,
    body: JSON.stringify(data),
  };


  fetch(`${config.baseURL}/participants/register`, settings)
    .then((response) => response.json())
    .then((data) => {
      let mes = "";
      const message = document.querySelector(".message");
      if(data.message == "Error: Document already exists"){
        mes = "Already Registered!";
      }
      else{
        console.log('Successfully submitted form');
        mes = "Seccessfully Submitted form!";
        message.style.fontSize = "0.9vw"
      }
      var t1 = gsap.timeline();
      t1.fromTo(".container", {
        opacity: 1
      },{
        opacity: 0.1,
        duration: 0.5
      });
      t1.fromTo(".popup", {
        display: "none",
        opacity: 0
      },{
        display: "block",
        opacity: 1,
        duration: 0.1
      });
      t1.fromTo(".popup",{
        width: 0
      },{
        width: "20vw",
        duration: 1,
        ease: "power4.out"
      });
      updatesSubmitBtn.innerHTML = "Submit"
      
      message.innerHTML = mes;
      message.style.color = "white";
      t1.fromTo(".message", {
        display: "none",
        opacity: 0,
      },{
        display: "block",
        opacity: 1,
        duration: 0.1
      },"-=0.5")
      setTimeout(() => {
        message.style.display = "none";
        document.querySelector(".popup").style.display = "none";
        document.querySelector(".container").style.opacity = "1";
      }, 5000);
      
      /* t1.to(".message",{
        opacity: 0,
        duration: 0.1
      })
      t1.to{

      } */
      console.log(data);
      
    }).catch((err) => {
      alert('Error on submission');
      updatesSubmitBtn.innerHTML = "Submit";
      const message = document.querySelector(".message");
      message.innerHTML = "Error on submission";
      message.style.color = "red";
      console.error(err);
    });
};
window.onload = () => {
  console.log(`[Package] ${packageName}`);
  updatesSubmitBtn.addEventListener('click', handleUpdates);
};
