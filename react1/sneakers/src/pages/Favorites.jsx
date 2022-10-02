import React from "react";
import Card from "../components/Card/Card";
import AppContext from "../context";

function Favorites({onAddToFavorite}) {
    const {favorites}=React.useContext(AppContext);
  
    return(
<div className="content p-40">
<div className="d-flex align-center justify-between">
   <h1 className="mb-40">Мои закладки</h1> 

</div>
   
    
<div className="d-flex flex-wrap">
{
    favorites.map((item, index)=>(
        <Card
        key={index}
        favorited={true}
        onFavorite={onAddToFavorite}
        {...item}
        />
      
    ))
}

</div>

</div>
    );
}
export default Favorites;