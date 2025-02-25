// addd money to the account


/*
s-1: add event handler
prevent page reload after form submit
s-2: get money to be added to the account balance
get the pin number
s-3:verify the pin number





*/
//step-1 add event handler to the add money button inside the button

document.getElementById('btn-add-money').addEventListener('click',function(event){
    //prevent page reload after form submit
    event.preventDefault();

    
    //step 2 : get money to be added to the account
    const addMoneyInput = document.getElementById('input-add-money').value;
    console.log(addMoneyInput);

//get the pin number provided
    const pinNumberInput = document.getElementById('input-pin-number').value;

    console.log(pinNumberInput);

    //step-3: verify pin number

if(pinNumberInput === '123')
{
    console.log('adding money to your account')

    //step-4: get the current balance
    const balance = document.getElementById('account-balance').innerText;
    console.log(typeof balance)

    
   

    
}
else
{
    alert('Failed to add money ! try later')
}


});