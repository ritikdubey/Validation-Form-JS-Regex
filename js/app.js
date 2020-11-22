const name = document.getElementById('name');
const email = document.getElementById('email');
const phone = document.getElementById('phone');

//console.log(name, email, phone);

name.addEventListener('blur', ()=>
{
    console.log("name is blurred");
    // Validate name here
    let regex = /^[a-zA-Z]([0-9a-zA-Z]){2,10}$/;
    let str = name.value;
    console.log(name.value);
    console.log(regex, str);

    if(regex.test(str) === true)
    {
        console.log("It matched");
        name.classList.remove('is-invalid');
    }
    else
    {
        console.log("Not Matched");
        name.classList.add('is-invalid');
    }

});

email.addEventListener('blur', ()=>
{
    console.log("email is blurred");
    // Validate email here
    let regex = /^([_\-\.a-zA-Z0-9]+)@([_\-\.a-zA-Z]+)\.([a-zA-Z]){2,7}$/;
    let str = email.value;
    console.log(email.value);
    console.log(regex, str);

    if(regex.test(str) === true)
    {
        console.log("It matched");
        email.classList.remove('is-invalid');
    }
    else
    {
        console.log("Not Matched");
        email.classList.add('is-invalid');
    }
});

phone.addEventListener('blur', ()=>
{
    console.log("phone is blurred");
    // Validate phone here
    let regex = /^([0-9]){10}$/;
    let str = phone.value;
    console.log(phone.value);
    console.log(regex, str);

    if(regex.test(str) === true)
    {
        console.log("It matched");
        phone.classList.remove('is-invalid');
    }
    else
    {
        console.log("Not Matched");
        phone.classList.add('is-invalid');
    }
});


const submit = document.getElementById('submit');
submit.addEventListener('click', ()=>{
    console.log("You clicked submit");
    //Submit your form here
    success = document.getElementById('success');
    success.classList.add('show');

})

