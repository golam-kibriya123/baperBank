function getInputValue(inputId) {
    const input = document.getElementById(inputId);
    const inpuText = input.value
    const inputNumber = parseFloat(inpuText);
    input.value = '';
    return inputNumber;
}
function update(total, newInput) {
    const previous = document.getElementById(total);
    const previousText = previous.innerText;
    const previousNumber = parseFloat(previousText);
    previous.innerText = previousNumber + newInput;

}
function currentBalance() {
    const ThePreviousBalenace = document.getElementById('total-balance');
    const previousBalenaceText = ThePreviousBalenace.innerText;
    const previousBalenace = parseFloat(previousBalenaceText);
    return previousBalenace;
}
function balence(amount, isAdd) {
    const ThePreviousBalenace = document.getElementById('total-balance');
    // const previousBalenaceText = ThePreviousBalenace.innerText;
    // const previousBalenace = parseFloat(previousBalenaceText);
    const previousBalenace = currentBalance();
    if (isAdd == true) {
        ThePreviousBalenace.innerText = previousBalenace + amount;
    }
    else {
        ThePreviousBalenace.innerText = previousBalenace - amount;
    };

}

//deposite
//handle deposit button
document.getElementById('deposit-button').addEventListener('click', function () {
    //get deposit input
    /* const depositeInput = document.getElementById('deposit-input');
     const depositAmount = depositeInput.value;
     const depositNewAmount = parseFloat(depositAmount);*/
    const depositNewAmount = getInputValue('deposit-input');
    if (depositNewAmount > 0) {
        update('total-deposit', depositNewAmount);
        balence(depositNewAmount, true);

    }
    // get current deposit
    /*
      const depoditeTotal = document.getElementById('total-deposit');
      const depoditNewTotalText = depoditeTotal.innerText;
      const depositNewTotal = parseFloat(depoditNewTotalText);
     depoditeTotal.innerText = depositNewTotal + depositNewAmount;
     depositeInput.value = '';*/


    //update balance
    // const ThePreviousBalenace = document.getElementById('total-balance');
    // const previousBalenaceText = ThePreviousBalenace.innerText;
    // const previousBalenace = parseFloat(previousBalenaceText);
    // ThePreviousBalenace.innerText = previousBalenace + depositNewAmount;
});
//withdraw
// handle withdraw button

document.getElementById('withdraw-button').addEventListener('click', function () {
    //get withdraw input


    /* const withdrawInput =document.getElementById('withdraw-amount');
     const withdrawInpuText=withdrawInput.value
     const newWithdrawInput=parseFloat(withdrawInpuText);*/

    const newWithdrawInput = getInputValue('withdraw-amount');
    const preViousBalance = currentBalance();
    if (newWithdrawInput > 0 && newWithdrawInput < preViousBalance) {
        update('total-withdraw', newWithdrawInput);
        balence(newWithdrawInput, false);

    }

    //get current withdraw
    /*const previousWithdraw = document.getElementById   ('total-withdraw');
      const previousWithdrawText = previousWithdraw.innerText;
     const previousNewWithdraw = parseFloat(previousWithdrawText);
     previousWithdraw.innerText = previousNewWithdraw + newWithdrawInput;*/


    // update balence
    // const ThePreviousBalenace = document.getElementById('total-balance');
    // const previousBalenaceText = ThePreviousBalenace.innerText;
    // const previousBalenace = parseFloat(previousBalenaceText);
    // ThePreviousBalenace.innerText = previousBalenace - newWithdrawInput;
})



 //------------
//  function doubleIt(num){
//      const result = num*2;
//      return result;
//  }
// const first = doubleIt(5);
// const secont= doubleIt(8);
