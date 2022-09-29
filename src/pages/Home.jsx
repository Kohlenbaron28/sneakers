import Card from "../components/Card/Card";

function Home({
    items,
    searchValue,
    setSearchValue,
    onChangeSearhInput,
    onAddToFavorite,
    onAddToCart}) {
    return(
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
        onFavorite={(obj)=>onAddToFavorite(obj)}
        onPlus={(obj)=>onAddToCart(obj)}
        {...item}
        />
      
    ))
}

</div>

</div>
    );
}
export default Home;