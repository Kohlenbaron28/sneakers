import React from 'react';
import axios from 'axios';
import Card from "./components/Card/Card";
import Header from "./components/Header";
import Drawer from "./components/Drawer";

const arr=[];

function App() {
    const [items, setItems] = React.useState([]);
    const [cartItems, setCartItems] = React.useState([]);
    const [searchValue, setSearchValue] = React.useState('');
    const [cartOpened, setCartOpened] = React.useState(false);

    React.useEffect(() => {
       /* fetch('https://632f49ebb56bd6ac45ae29cb.mockapi.io/items').then(res=>{
          return res.json();
       })
         .then((json)=>{
             setItems(json);
        });*/
         axios.get('https://632f49ebb56bd6ac45ae29cb.mockapi.io/items')
        .then((res)=>{
            setItems(res.data);
        });
   }, []);
   
        /* axios.get('https://632f49ebb56bd6ac45ae29cb.mockapi.io/cart')
        .then((res)=>{
            setCartItems(res.data);
        });*/
  

   const onAddToCart=(obj)=>{
    axios.post('https://632f49ebb56bd6ac45ae29cb.mockapi.io/cart', obj);
    setCartItems(prev =>[...prev, obj]);
   };
   console.log(setItems);
  const onChangeSearhInput=(event)=>{
    setSearchValue(event.target.value);
  };
  const onRemoveItem=(id)=>{
    setCartItems((cartItems)=>cartItems.filter(item=>item.id!==id));
    axios.delete(`https://632f49ebb56bd6ac45ae29cb.mockapi.io/cart/${id}`);
     };
     
  return (
    <div className="wrapper clear">
{cartOpened? <Drawer items={cartItems}  onClose={()=>setCartOpened(false)} onRemove={onRemoveItem}/> : null}
   
  <Header onClickCart={()=>setCartOpened(true)}/>

<div className="content p-40">
<div className="d-flex align-center justify-between">
   <h1 className="mb-40">{searchValue? `Поиск по ${searchValue}`:"Все кроссовки"}</h1> 
   <div className="search-block d-flex align-center">
    <img src="/images/search.png" width={20} height={20} alt="Search" />
    {searchValue? <img className='removeBtn-s' onClick={()=>setSearchValue('')} src="/images/btn-remove.svg" alt="remove" />:null}
    <input onChange={onChangeSearhInput} value={searchValue} placeholder="Поиск..." type="text" />
    </div> 
</div>
   
    
<div className="d-flex flex-wrap">
{
    items.filter((item)=>item.name.toLowerCase().includes(searchValue.toLowerCase())).map((item, index)=>(
        <Card
        key={index}
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
