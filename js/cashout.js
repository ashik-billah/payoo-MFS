

document.getElementById('btn-cash-out').addEventListener('click',function(event){

    event.preventDefault();

    console.log('cashout file')
    const cashOut = document.getElementById('input-cash-out').value;
    const cashOutNumber = parseFloat(cashOut);

    const pinNumber = document.getElementById('input-cash-out-pin').value;

    console.log(cashOut);

    console.log(pinNumber);
    if(pinNumber === '123')
    {
        const balance = document.getElementById('account-balance').innerText;
        const balanceNumber = parseFloat(balance);
        //reduce the balance
        const newBalance = balanceNumber - cashOutNumber;
        //update the ui 
        document.getElementById('account-balance').innerText = newBalance;
        

    }
    else
    {
        console.log('Failed to cash out please try again later')
    }

});