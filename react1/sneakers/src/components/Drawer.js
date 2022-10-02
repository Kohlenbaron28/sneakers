import Info from "./Info";
import React from "react";
import axios from "axios";
import AppContext from "../context";

const delay=(ms)=>new Promise((resolve)=>setTimeout(resolve, ms));

function Drawer({onClose, onRemove, items=[]}) {
    const {cartItems ,setCartItems}=React.useContext(AppContext);
    const[isOrderComplete, setIsOrderComplete]=React.useState(false);
    const[orderId, setOrderId]=React.useState(null);
    const [isLoading, setIsLoading] = React.useState(false);
    const totalPrice=cartItems.reduce((sum, obj)=>obj.price+sum,0);
    const onClickOrder=async ()=>{
       try {
        setIsLoading(true);
        const {data}=await axios.post('https://632f49ebb56bd6ac45ae29cb.mockapi.io/orders', {items:cartItems});
     
        setOrderId(data.id);
        setIsOrderComplete(true);
        setCartItems([]);
      for (let i=0; i<cartItems.length; i++) {
        const item=cartItems[i];
        await axios.delete('https://632f49ebb56bd6ac45ae29cb.mockapi.io/cart/'+ item.id);
        await delay(1000);  
      }
       } catch (error) {
        alert('Не удалось создать заказ');
       }
       setIsLoading(false);
    }
    return(
<div className="overlay">
          <div className="drawer d-flex flex-column">
            <h2 className="d-flex justify-between mb-30">Корзина <img onClick={onClose} className='removeBtn mr-10' src="/images/btn-remove.svg" alt="remove" /></h2>
           
           {
            items.length>0? <div>
                <div className="items">
            { items.map((obj)=> (
                <div key={obj.id} className="cartItem d-flex align-center justify-between mb-20">
                <div style={{backgroundImage: `url(${obj.imageUrl})`}} className="cartItemImg"></div>
            <div className="mr-20">
            <p className="mb-5">{obj.name}</p>
            <b>{obj.price} руб.</b>
            </div>  
            <img onClick={()=>onRemove(obj.id)} className='removeBtn cu-p mr-10' src="/images/btn-remove.svg" alt="remove" />
            </div>
            
                ))
            }
            </div>
            
           <ul className='cartTotal'>
           <li className='d-flex'>
               <span>Итого:</span>
               <div></div>
               <b>{totalPrice} руб.</b>
           </li>
           <li className='d-flex'>
               <span>Налог 5%:</span>
               <div></div>
               <b>{(totalPrice/100)*5} руб.</b>
           </li>
          </ul>
          <button disabled={isLoading} onClick={onClickOrder} className='greenButton'><img src="/images/arrow.svg" alt="arrow" />Оформить заказ</button>
            </div> :  (
              <Info title={isOrderComplete?"Заказ оформлен!":"Корзина пустая"}
               description={isOrderComplete?`Ваш заказ ${orderId} передан курьеру доставки`:"Добавьте хотя бы одну пару кроссовок чтобы сделать заказ"} 
               image={isOrderComplete?"./images/complete-order.jpg":"./images/empty-cart.jpg"}/>
            )
           
           }
           
        
        </div>
        </div>
    );
} 
export default Drawer;