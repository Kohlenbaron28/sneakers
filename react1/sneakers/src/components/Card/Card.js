 import styles from './Card.module.css'; 
  import React from 'react';
 
 
  function Card({onFavorite, onPlus, imageUrl, title, price}) {
    const [isAdded, setIsAdded]=React.useState(false);
    const onClickPlus=()=> {
        onPlus({imageUrl, title, price});
        setIsAdded(!isAdded);
    }
    return(
    <div className={styles.card}>
    <div className={styles.favorite} onClick={onFavorite}>
 <img src= "./images/heart.svg" alt="heart" />  
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