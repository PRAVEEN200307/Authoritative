import JustValidate from 'just-validate';

const validate = new JustValidate('#signUp',{
  validateBeforeSubmitting: true,
});


validate.addField(
    "#userName",
    [
      {
        rule: "required",
        errorMessage: "Name is required",
      },
      {
        rule: "minLength",
        value: 3,
      },
      {
        rule: "maxLength",
        value: 20,
      },
    ],
    {
        errorFieldCssClass: ['form-invalid'],
    }
  ).addField('#email',[
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
  ]).addField('#conformPassword',[
    {
       rule:'required',
       errorMessage: "Password is required",
    },
    {
        rule:'password',
    }
  ]);


validate.onSuccess(()=>{
    const formEl =document.querySelector('#signUp');
    
    const formdate =new FormData(formEl);
      //set the time form date
     const date = new Date();
     const month = date.toLocaleString('en-US', { month: 'long'});
     const registerTime = `${date.getDate()}th ${month} ${date.getFullYear()}`;
     formdate.set('registertime',`${registerTime}`)

     const formObject =Object.fromEntries(formdate);
     localStorage.setItem('loginData',`[${JSON.stringify(formObject)}]`); 
     alert("You're are Submit Successfully");
     document.location.href="/ip_detective/login.html"
});
