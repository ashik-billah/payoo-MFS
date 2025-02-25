document.getElementById('btn-add-money').addEventListener('click', function(){
    event.preventDefault();

    console.log('added the event handler');

    //get money and the pin number
    const addMoney = document.getElementById('input-add-money').value;
    const addMoneyNumber = parseFloat(addMoney);
    const pinNumber = document.getElementById('input-pin-number').value;

    // console.log(addMoney,pinNumber)

    if(pinNumber === '123'){
        const balance = document.getElementById('account-balance').innerText;
        const balanceNumber = parseFloat(balance);

        //new balace
        const newBalance = balanceNumber + addMoneyNumber;
        //upadate the dom with upadated balance
        document.getElementById('account-balance').innerText = newBalance;
    }
    else
    {
        alert('Failed toa add money try again later')
    }

});