import React from 'react';
import Card from "./components/Card/Card";
import Header from "./components/Header";
import Drawer from "./components/Drawer";

const arr=[];

function App() {
    const [items, setItems] = React.useState([]);
    const [cartItems, setCartItems] = React.useState([]);
    const [cartOpened, setCartOpened] = React.useState(false);

    React.useEffect(() => {
       fetch('https://632f49ebb56bd6ac45ae29cb.mockapi.io/items').then(res=>{
          return res.json();
       })
         .then((json)=>{
             setItems(json);
        });
   }, []);

   const onAddToCart=(obj)=>{
    setCartItems(prev =>[...prev, obj]);
   }
   console.log(cartItems);
  return (
    <div className="wrapper clear">
{cartOpened? <Drawer items={cartItems} onClose={()=>setCartOpened(false)}/> : null}
   
  <Header onClickCart={()=>setCartOpened(true)}/>

<div className="content p-40">
<div className="d-flex align-center justify-between">
   <h1 className="mb-40">Все кроссовки</h1> 
   <div className="search-block d-flex align-center">
    <img src="/images/search.png" width={20} height={20} alt="Search" />
    <input placeholder="Поиск..." type="text" />
    </div> 
</div>
   
    
<div className="d-flex flex-wrap">
{
    items.map((item)=>(
        <Card
        title={item.name} 
        price={item.price}
        imageUrl={item.imageUrl}
        onFavorite={()=>console.log('Нажали сердечко')}
        onPlus={(obj)=>onAddToCart(obj)}
        />
        
    ))
}

</div>

</div>
</div>
  );
}

export default App;
