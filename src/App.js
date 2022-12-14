import React from 'react';
import {Route} from "react-router-dom";
import axios from 'axios';
import Header from "./components/Header";
import Drawer from "./components/Drawer";
import Favorites from './pages/Favorites';
import Home from './pages/Home';
import AppContext from './context';




function App() {
    const [items, setItems] = React.useState([]);
    const [cartItems, setCartItems] = React.useState([]);
    const [favorites, setFavorites] = React.useState([]);
    const [searchValue, setSearchValue] = React.useState('');
    const [cartOpened, setCartOpened] = React.useState(false);
    const [isLoading, setIsLoading] = React.useState(true);
   

    React.useEffect(() => {
       async function fetchData() {
        setIsLoading(true);
        const cartResponse=await axios.get('https://632f49ebb56bd6ac45ae29cb.mockapi.io/cart');
        const favoritesResponse=await axios.get('https://632f49ebb56bd6ac45ae29cb.mockapi.io/favorites');
        const itemsResponse=await axios.get('https://632f49ebb56bd6ac45ae29cb.mockapi.io/items');
        setIsLoading(false);
    
        setCartItems(cartResponse.data);
        setFavorites(favoritesResponse.data);
        setItems(itemsResponse.data); 
       
       }
       fetchData();
   }, []);
   
       
  

   const onAddToCart=(obj)=>{
    if (cartItems.find((item)=>(item.id)===(obj.id))) {
        axios.delete(`https://632f49ebb56bd6ac45ae29cb.mockapi.io/cart/${obj.id}`);
        setCartItems((prev)=>prev.filter((item)=>(item.id)!==(obj.id)));
    } else {
        axios.post('https://632f49ebb56bd6ac45ae29cb.mockapi.io/cart', obj);
        setCartItems((prev) =>[...prev, obj]);
    }
   };

 
  const onChangeSearhInput=(event)=>{
    setSearchValue(event.target.value);
  };

  
  const onAddToFavorite=async (obj)=>{
   try {
    if (favorites.find((favObj)=>favObj.id===obj.id)) {
        axios.delete(`https://632f49ebb56bd6ac45ae29cb.mockapi.io/favorites/${obj.id}`);
       
    } else {
        const {data}=await axios.post('https://632f49ebb56bd6ac45ae29cb.mockapi.io/favorites', obj)
        setFavorites(prev =>[...prev, data]);
    }
   } catch (error) {
    alert('???? ?????????????? ???????????????? ?? ??????????????????')
   }
   };

  const onRemoveItem=(id)=>{
    axios.delete(`https://632f49ebb56bd6ac45ae29cb.mockapi.io/cart/${id}`);
    setCartItems((prev) => prev.filter((item)=>item.id!==id));
     };
   const isItemAdded = (id) => {
    return cartItems.some(obj=>Number(obj.id)===Number(id));
   }  
  return (
<AppContext.Provider value={{items, cartItems, favorites, isItemAdded}}>
<div className="wrapper clear">
{cartOpened && <Drawer items={cartItems}  onClose={()=>setCartOpened(false)} onRemove={onRemoveItem}/>}
    
  <Header onClickCart={()=>setCartOpened(true)}/>
<Route path="/" exact>
<Home 
items={items}
cartItems={cartItems}
searchValue={searchValue}
setSearchValue={setSearchValue}
onChangeSearhInput={onChangeSearhInput}
onAddToFavorite={onAddToFavorite} 
onAddToCart={onAddToCart}
isLoading={isLoading}/>
</Route>

<Route path="/favorites" exact>
<Favorites onAddToFavorite={onAddToFavorite}/>
</Route>
</div>
</AppContext.Provider>
  );
}

export default App;
