// addd money to the account


//step-1 add event handler to the add money button inside the button

document.getElementById('btn-add-money').addEventListener('click',function(event){
    //prevent page reload after form submit
    event.preventDefault();

    
    
    const addMoneyInput = document.getElementById('input-add-money').value;
    console.log(addMoneyInput);


    const pinNumberInput = document.getElementById('input-pin-number').value;

    console.log(pinNumberInput);



});