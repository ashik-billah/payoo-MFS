//console.log('button clicking file added')

// document.getElementById('button-login').addEventListener('click',function)

//search: form submit reloading the page

//step 1 set event handler
document.getElementById('button-login')
.addEventListener('click',function(event) {

    //step 2 prevent default behavior (prevent reloading browser)
event.preventDefault();  // <-----------vejal to beguners
    

    //step 3: get the phone numbar
    const phoneNumber = document.getElementById('phone-number').value;
    const pinNumber = document.getElementById('pin-number').value;


    //console.log(phoneNumber, pinNumber );

    //bad way to validarte 
    if(phoneNumber ==='123' && pinNumber === '123')
    {
        console.log('You are login ')
    }
    else
    {
        alert('Wrong phone number or pin')
    }
 
    
})