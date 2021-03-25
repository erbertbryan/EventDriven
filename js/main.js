var displayTable = document.getElementById('displayTable')
var tbody = displayTable.firstElementChild //NEEDED TO DISPLAY CONTENT
var object = null
var objectt = null

customers = []
customer = {
    'ORNumber' : '',
    'name': '',
    'items': [],
    'total': 0
}

var mealNames = []
var items = [item1, item2, item3, item4]
var prices = [price1, price2, price3, price4]
var qtys = [qty1, qty2, qty3, qty4]
var subtotals = [subtotal1, subtotal2, subtotal3, subtotal4]

var data = JSON.parse(localStorage.getItem('customers'))


save.addEventListener('click', function(){
    customer['ORNumber'] = ORNumber.value
    customer['name'] = customerName.value
    for(var i = 0; i < response["meals"].length; i++){
        mealNames.push(response["meals"][i]['strMeal'])
    }
    for(var i = 0; i < items.length; i++){
        if(items[i].value == ''){
            break
        }
        else{
            for(var ii = 0; ii < mealNames.length; ii++){
                if(items[i].value == mealNames[ii]){
                    item = { //TO OVERWRITE PREVIOUS ITEM CONTENT
                        'name': items[i].value,
                        'price' : prices[i].value,
                        'qty': qtys[i].value,
                        'subtotal' : subtotals[i].value, 
                        'thumbnail' : response["meals"][ii]['strMealThumb']         
                    } 
                    customer['total'] = parseFloat(customer['total']) + parseFloat(item['subtotal'])
                    customer['items'].push(item)
                    break
                }
            }
            
        }
    }

    

   if(data != null){ //CHECK IF LOCALSTORAGE IS EMPTY
       data.push(customer) //SAVE EXISTING DATA
       localStorage.setItem('customers', JSON.stringify(data))//SAVE TO LOCAL STORAGE WITH UPDATED DATA
   }
   else{
       customers.push(customer)
       localStorage.setItem('customers', JSON.stringify(customers))// CREATES 'CUSTOMERS' KEY WITH CUSTOMERS
   }
   location.reload() 
})

if(data != null){
    for(var i = 0; i < data.length; i++){
        object = data[i]
        objectt = Object.getOwnPropertyNames(object)//['ORNumber', 'name', 'items', 'total']
        var tr = document.createElement('tr')
        var checker = true
        for(var ii = 0; ii < objectt.length; ii++){
            var td = document.createElement('td')
            td.scope = 'row'
            if(ii == 0 && checker){ //FOR # COLUMN IN TABLE
                var tdTextNode = document.createTextNode(i + 1)
                td.appendChild(tdTextNode)
                tr.appendChild(td)
                tbody.appendChild(tr)
                ii--
                checker = false
            }
            else{
                td.className = 'text-center'
                if(ii == objectt.length - 1){ //FOR ACTION COLUMN IN TABLE

                    var btn = document.createElement("BUTTON");
                    btn.setAttribute('data-bs-target', '#viewItem')
                    btn.innerHTML = "View";    
                    btn.className = "btn btn-warning mb-2" 
                    btn.id = "viewOrder"              
                    document.body.appendChild(btn);
                    btn.setAttribute('data-bs-toggle', 'modal')
                    td.appendChild(btn)
                    tr.appendChild(td)
                    tbody.appendChild(tr)  

                }

                else if(ii == objectt.length - 2){ //FOR TOTAL COLUMN IN TABLE
                    var result = data[i][objectt[objectt.length - 1]]
                    var tdTextNode = document.createTextNode(result.toFixed(2))
                    td.appendChild(tdTextNode)
                    tr.appendChild(td)
                    tbody.appendChild(tr)                     
                }

                else{ //FOR ORDER # AND CUSTOMER NAME COLUMNS IN TABLE
                    var tdTextNode = document.createTextNode(data[i][objectt[ii]])
                    td.appendChild(tdTextNode)
                    tr.appendChild(td)
                    tbody.appendChild(tr)                    
                }
            }
        }
    }
}

var viewItem = document.getElementById('viewItem')
var viewOrders = document.querySelectorAll('#viewOrder')
var ORNumberView = document.getElementById('ORNumberView')
var customerNameView = document.getElementById('customerNameView')
var item1 = document.getElementById('item1')
var item2 = document.getElementById('item2')
var item3 = document.getElementById('item3')
var item4 = document.getElementById('item4')
var price1 = document.getElementById('price1')
var price2 = document.getElementById('price2')
var price3 = document.getElementById('price3')
var price4 = document.getElementById('price4')
var qty1 = document.getElementById('qty1')
var qty2 = document.getElementById('qty2')
var qty3 = document.getElementById('qty3')
var qty4 = document.getElementById('qty4')
var st1 = document.getElementById('st1')
var st2 = document.getElementById('st2')
var st3 = document.getElementById('st3')
var st4 = document.getElementById('st4')
var exit = document.getElementById('exit')
var data = JSON.parse(localStorage.getItem("customers"))
var item_ar = [item1, item2, item3, item4]
var pricess = [price1, price2, price3, price4]
var qtyss = [qty1, qty2, qty3, qty4]
var subtotalss = [st1, st2, st3, st4]
var orderNum;
var viewItemBody = document.getElementById('viewItemBody')

viewItem.addEventListener("hidden.bs.modal",function(){
    viewItemBody.innerHTML = ''
})
viewOrders.forEach(function(viewOrder){
    viewOrder.addEventListener('click', function(e){
        console.log(e.target)
        orderNum = e.target.parentElement.parentElement.firstElementChild.nextElementSibling.innerText //CATCH ORDER NUMBER THAT IS CLICKED
        for(var i = 0; i < data.length; i++){
            if(data[i]['ORNumber'] == orderNum){    
                ORNumberView.value = data[i]['ORNumber']
                customerNameView.value = data[i]['name']
                for(var ii = 0; ii < data[i]['items'].length; ii++){
                    console.log(item_ar[ii])
                    if(data[i]['items'][ii]['name'] != ''){
                        var card = document.createElement("div")
                        card.className = "card"
                        card.style.backgroundColor = "rgb(255, 166, 0)"
                        var image = document.createElement("img")
                        image.src = data[i]['items'][ii]['thumbnail']
                        image.style.height = "300px"
                        image.style.width = "300px"
                        var cardBody = document.createElement("div")
                        cardBody.className = "card-body"
                        var cardTitle = document.createElement("h6")
                        cardTitle.className = "card-title"
                        var cardTxtNode = document.createTextNode(data[i]["items"][ii]["name"])
                        cardTitle.appendChild(cardTxtNode)
                        var cardPrice = document.createElement("p")
                        cardPrice.className = "card-text"
                        var priceTxtNode = document.createTextNode("Price: "+data[i]["items"][ii]["price"])
                        
                        cardPrice.appendChild(priceTxtNode)
                        var cardQty = document.createElement("p")
                        cardQty.className = "card-text"
                        var qtyTxtNode = document.createTextNode("Quantity: "+data[i]["items"][ii]["qty"])
                        cardQty.appendChild(qtyTxtNode)

                        cardBody.appendChild(cardTitle)
                        cardBody.appendChild(cardPrice)
                        cardBody.appendChild(cardQty)
                        card.appendChild(image)
                        card.appendChild(cardBody)
                        viewItemBody.appendChild(card)
                    }
                }
            }
        }
    })
})