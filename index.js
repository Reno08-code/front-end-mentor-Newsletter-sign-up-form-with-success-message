const main = document.querySelector('.container')  /* 我滴个神啊~~这后面不能加 ； 这个符号！！！一加就选不到了！注意！！*/ 
const thankYouDiv = document.querySelector('.thank_you')
const error =document.querySelector('.errorMessage')
const subBtn = document.querySelector('.submit_btn')
const disBtn = document.querySelector('.dismiss_btn')
const userEmail = document.querySelector('#user_email')
const emailInput =document.querySelector('.email')
const inputBorder = document.querySelector('input')

function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
    
  }

  subBtn.addEventListener('click',(e)=>{
    e.preventDefault();
    let email=emailInput.value;
    if(!validateEmail(email)){
       error.classList.add('active');
       inputBorder.classList.add("invalid");
       email.value='';
       
    }else{
        error.classList.remove('active');
       inputBorder.classList.remove("invalid");
       thankYouDiv.classList.remove('hidden');
       main.classList.add('hidden');
       userEmail.innerHTML = email;
    }
  })

   disBtn.addEventListener('click',()=>{
    thankYouDiv.classList.add('hidden');
       main.classList.remove('hidden');
       email.value='';
   })
 