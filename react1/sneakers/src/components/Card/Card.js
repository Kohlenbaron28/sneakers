 import styles from './Card.module.css'; 
 import ContentLoader from "react-content-loader";
 
 import React from 'react';
 
 
  function Card({id, onFavorite, onPlus, favorited=false, added=false, imageUrl, name, price, loading=false}) {

    const [isAdded, setIsAdded]=React.useState(added);
    const [isFavorite, setIsFavorite]=React.useState(favorited);
    const onClickPlus=()=> {
        onPlus({id, imageUrl, name, price});
        setIsAdded(!isAdded);
    }
    const onClickFavorite = () =>{
        onFavorite({id, imageUrl, name, price});
        setIsFavorite(!isFavorite);
    }

    return(
       
    <div className={styles.card}>
        {
            loading? <ContentLoader 
            speed={0}
            width={160}
            height={265}
            viewBox="0 0 150 265"
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb"
            
          >
            <rect x="0" y="0" rx="10" ry="10" width="150" height="155" /> 
            <rect x="0" y="164" rx="5" ry="5" width="150" height="15" /> 
            <rect x="0" y="190" rx="5" ry="5" width="100" height="15" /> 
            <rect x="0" y="220" rx="5" ry="5" width="80" height="25" /> 
            <rect x="114" y="217" rx="5" ry="5" width="32" height="32" />
          </ContentLoader>:  (<>
          <div className={styles.favorite} onClick={onClickFavorite}>
{ onFavorite &&  <img src={isFavorite? "images/liked.svg": "images/heart.svg"} /> } 
    </div>

<img width={133} height={162} src={imageUrl} alt="snk" />
<h5>{name}</h5>
<div className="d-flex justify-between align-center">
    <div className="d-flex flex-column">
        <span>Цена:</span>
        <b>{price} руб.</b>
    </div>
  
   {onPlus && <img className={styles.plus} onClick={onClickPlus} src={isAdded? "images/btn-checked.svg" : "images/btn-plus.svg"} width={30} height={30} alt="plus" />}
 
</div>
</>)
        }
  
</div>
    );
   }
 export default Card;