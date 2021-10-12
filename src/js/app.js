const tip5 = document.getElementById('tip5');
const tip10 = document.getElementById('tip10');
const tip15 = document.getElementById('tip15');
const tip25 = document.getElementById('tip25');
const tip50 = document.getElementById('tip50');
const custom = document.getElementById('custom');
const resetBtn = document.querySelector('#resetBtn')

let bill = document.querySelector('#billValue');
let nOfPeople = document.querySelector('#nOfPeople');

const tipDisplay = document.querySelector('#tip');
const perTipDisplay = document.querySelector('#perTip');

function tip(tipAmount){
    let tip =  bill.value / 100 * tipAmount;
    if (nOfPeople.value === ''){
        tipDisplay.innerText = 'NaN';
        perTipDisplay.innerText = 'NaN';

    }
    else{
        let perTip = tip / nOfPeople.value;
        tipDisplay.innerText = `$${tip.toFixed(2)}`;
        perTipDisplay.innerText = `$${perTip.toFixed(2)}`;

    }
}

custom.onchange=() => {
    let value = custom.value;
    let tip =  bill.value / 100 * value;
    if (nOfPeople.value === ''){
        tipDisplay.innerText = 'NaN';
        perTipDisplay.innerText = 'NaN';

    }
    else{
        let perTip = tip / nOfPeople.value;
        tipDisplay.innerText = `$${tip.toFixed(2)}`;
        perTipDisplay.innerText = `$${perTip.toFixed(2)}`;

    }
}

resetBtn.onclick=() => {
    tipDisplay.innerText = "$0.00";
    perTipDisplay.innerText = "$0.00";
}