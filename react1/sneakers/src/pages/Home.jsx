import React from "react";
import Card from "../components/Card/Card";
import AppContext from "../context";

function Home({
    items,
    cartItems,
    searchValue,
    setSearchValue,
    onChangeSearhInput,
    onAddToFavorite,
    onAddToCart,
    isLoading    }) {

 const {isItemAdded}=React.useContext(AppContext);
  
  const renderItems=()=>{
    const filteredItems=items.filter((item)=>item.name.toLowerCase().includes(searchValue.toLowerCase()));
    return  (isLoading? [...Array(9)]:filteredItems).map((item, index)=>(
        <Card
        key={index}
        onFavorite={(obj)=>onAddToFavorite(obj)}
        onPlus={(obj)=>onAddToCart(obj)}
        added={isItemAdded(item && item.id)}
        loading={isLoading}
        {...item}
        />
      
    ))
  }      
    return(
<div className="content p-40">
<div className="d-flex align-center justify-between">
   <h1 className="mb-40">{searchValue? `Поиск по ${searchValue}`:"Все кроссовки"}</h1> 
   <div className="search-block d-flex align-center">
    <img src="images/search.png" width={20} height={20} alt="Search" />
    {searchValue? <img className='removeBtn-s' onClick={()=>setSearchValue('')} src="images/btn-remove.svg" alt="remove" />:null}
    <input onChange={onChangeSearhInput} value={searchValue} placeholder="Поиск..." type="text" />
    </div> 
</div>
   
{console.log(cartItems, items)}
<div className="d-flex flex-wrap">
{
   renderItems()
}

</div>

</div>
    );
}
export default Home;