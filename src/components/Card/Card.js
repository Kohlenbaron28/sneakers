 import styles from './Card.module.css'; 
  import React from 'react';
 
 
  function Card({id, onFavorite, onPlus, favorited=false, imageUrl, title, price}) {
    const [isAdded, setIsAdded]=React.useState(false);
    const [isFavorite, setIsFavorite]=React.useState(favorited);
    const onClickPlus=()=> {
        onPlus({imageUrl, title, price});
        setIsAdded(!isAdded);
    }
    const onClickFavorite = () =>{
        onFavorite({id, imageUrl, title, price});
        setIsFavorite(!isFavorite);
    }

    return(
    <div className={styles.card}>
    <div className={styles.favorite} onClick={onClickFavorite}>
 <img src={isFavorite? "./images/liked.svg": "./images/heart.svg"} />  
    </div>

<img width={133} height={162} src={imageUrl} alt="snk" />
<h5>{title}</h5>
<div className="d-flex justify-between align-center">
    <div className="d-flex flex-column">
        <span>Цена:</span>
        <b>{price} руб.</b>
    </div>
  
   <img className={styles.plus} onClick={onClickPlus} src={isAdded? "./images/btn-checked.svg" : "./images/btn-plus.svg"} width={30} height={30} alt="plus" />
 
</div>
</div>
    );
   }
 export default Card;