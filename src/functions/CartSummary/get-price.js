const getPrice = (cart)=>{
    return cart.reduce((price , currentProduct)=>{
        return (price += Number(currentProduct.price) * Number(currentProduct.qty));
    },0);
}


export { getPrice };
