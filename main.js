document.addEventListener("DOMContentLoaded", function(){
let calculateButton = document.querySelector('.btn')
var billAmount = document.querySelector('.bill-amount');
let percentage = document.querySelector('.Percentage');
let tip = document.querySelector('.Tip-amount');
let totalAmount = document.querySelector('.Total');



calculateButton.addEventListener('click', function() {
    var totalvalue = parseFloat(billAmount.value);
    var percent = percentage.value;
    if(totalvalue === '' || percent === '') {
        alert('Please enter the required fields');
        tip.value = 'Tip Amount';
        totalAmount.value = 'The total';
    }
    
    let percentageAmount = parseFloat((totalvalue)*(percent/100));
    tip.value = percentageAmount;

    //FinalAmount 
    const finalAmount = totalvalue + percentageAmount;
     totalAmount.value = finalAmount;
});

});


