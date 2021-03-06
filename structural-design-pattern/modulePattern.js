const shoppingBasket  =(function(){
    
    //private 
    const basket =[];
    
    const calculateTotprice = () =>{
        return basket.reduce((tot , item)=>  tot +item.price, 0);
    }
    return {
        addItem : (item)=>{
            basket.push(item);
        },

        totalItem: () =>{
            return basket.length;
        },

        totalPrice :() => {
           const totalVal = calculateTotprice();
           return totalVal;
        },
        clearAll :() => {
            basket.size =0;
        }
    }

})();

shoppingBasket.addItem({
    item: "bread",
    price: 5
  });
   
  shoppingBasket.addItem({
    item: "butter",
    price: 10
  });