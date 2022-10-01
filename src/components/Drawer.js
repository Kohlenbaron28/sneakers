function Drawer({onClose, onRemove, items=[]}) {
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
               <b>5998 руб.</b>
           </li>
           <li className='d-flex'>
               <span>Налог 5%:</span>
               <div></div>
               <b>299,9 руб.</b>
           </li>
          </ul>
          <button className='greenButton'><img src="/images/arrow.svg" alt="arrow" />Оформить заказ</button>
            </div> :  (<div className="cartEmpty d-flex align-center justify-center flex-column flex">
            <img className="mb-20" src="./images/empty-cart.jpg" width={120} height={120} alt="empty" />
            <h2>Корзина пустая</h2>
            <p className="opacity-6">Добавьте хотя бы одну пару кроссовок чтобы сделать заказ</p>
            <button onClick={onClose} className='greenButton'><img src="/images/arrow.svg" alt="arrow" />Вернуться назад</button>
           </div>)
           
           }
           
        
        </div>
        </div>
    );
} 
export default Drawer;