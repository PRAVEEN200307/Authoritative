import JustValidate from 'just-validate';
const loginvalidate = new JustValidate('#loginForm',{
  validateBeforeSubmitting: true,
});


loginvalidate.addField('#email',[
    {
       rule:'required',
       errorMessage: "Email is required",
    },
    {
        rule:'email',
    }
  ]).addField('#password',[
    {
       rule:'required',
       errorMessage: "Password is required",
    },
    {
        rule:'password',
    }
  ]);

loginvalidate.onSuccess(()=>{
   const loginData=JSON.parse(localStorage.getItem('loginData'));
   const formEl =document.forms[0].elements


   if(loginData[0].email==formEl.email.value && formEl.password.value==loginData[0].password){
       alert("You're login successfully");
       document.location.href="/ip_detective/index.html"
   }else{
      console.log('incorrect userName or password')
   }
});


