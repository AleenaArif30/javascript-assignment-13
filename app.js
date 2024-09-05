var itemsArray = [
    {name:"juice",price:"50", quantity:"3"},
    {name:"cookie",price:"30", quantity:"9"},
    {name:"shirt",price:"880", quantity:"1"},
    {name:"pen",price:"100", quantity:"2"}];
    for(var key in itemsArray){
        var items = itemsArray[key]
        // console.log(items)
        var itemPrice = items.price * items.quantity
        console.log(` The price of ${items.name} is Rs. ${itemPrice}`);
        
    }