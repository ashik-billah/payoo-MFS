// console.log('features file add')

//show the cashout form

document.getElementById('btn-show-cash-out').addEventListener('click',function(){


    //show cash out btn clicked
    console.log('shaow cash out button clisk')
    document.getElementById('cash-out-form').classList.remove('hidden');
   

    //hide the add money form
    document.getElementById('add-money-form').classList.add('hidden');

    
    

});

//show add money form and hide the cash out form

document.getElementById('btn-show-add-money').addEventListener('click',function(){

    document.getElementById('add-money-form').classList.remove('hidden');
    document.getElementById('cash-out-form').classList.add('hidden');
})