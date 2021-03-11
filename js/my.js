function my() {
    let subtotal
    subtotal = document.getElementById("subtotal").value;

    if(subtotal >= 100){
        alert("Payment Succesful");
    }
    else{
        alert("Payment Failed");
    }
}

function mainForm() {
    let pay = document.getElementById("pay")
    let percent = 12;
    let subtotal = document.getElementById("subtotal").value;
    let tax = Number((percent / 100) * subtotal);
    let total =  Number(subtotal) + Number(tax);
    let amountPaid = Number(total);  
    let change = Number(amountPaid-total);

    if(subtotal >= 100) {
        document.getElementById("tax").value = tax.toFixed(2);
        document.getElementById("total").value = total.toFixed(2);
        document.getElementById("amountpaid").value = amountPaid.toFixed(2);
        document.getElementById("amountpaid").disabled = false;
        document.getElementById("amountpaid").min = total.toFixed(2);
        document.getElementById("change").value = change.toFixed(2);
        pay.style.backgroundColor = "#02862a";
        pay.disabled = false;
    }
    else {
        document.getElementById("tax").value = "";
        document.getElementById("total").value = "";
        document.getElementById("amountpaid").value = "";
        document.getElementById("amountpaid").disabled = true;
        document.getElementById("amountpaid").min = "";
        document.getElementById("change").value = "";
        pay.style.backgroundColor = "#02862a";
        pay.disabled = true;
    }
};

function changeVal() {
    let total =  document.getElementById("total").value
    let amountPaid = document.getElementById("amountpaid").value 
    let change = Number(amountPaid-total);

    document.getElementById("change").value = change.toFixed(2);

        if(change > "-1") {
            pay.style.backgroundColor = "#02862a";
            pay.disabled = false;
        }
        else{
            pay.style.backgroundColor = "#dc3545";
            pay.disabled = true;
        }
};