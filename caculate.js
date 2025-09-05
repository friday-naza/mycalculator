function calculate(){
    let amount = document.getElementById('amount')
    let tipTag = document.getElementById('tip')
    let amt = parseFloat(amount.value);
    let tip = parseFloat(tipTag.value);
    let total = amt + tip;
    amount.value = '';
    tipTag.value = '';

    document.getElementById('total').innerText = '' + total;
}





