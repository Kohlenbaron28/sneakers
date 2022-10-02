import React from 'react'
import AppContext from '../context';

const Info = ({title, image, description}) => {
    const {setCartOpened}=React.useContext(AppContext);
  return (
    <div className="cartEmpty d-flex align-center justify-center flex-column flex">
    <img className="mb-20" src={image} width={120} height={120} alt="empty" />
    <h2>{title}</h2>
    <p className="opacity-6">{description}</p>
    <button onClick={()=>setCartOpened(false)} className='greenButton'><img src="/images/arrow.svg" alt="arrow" />Вернуться назад</button>
   </div>
  )
}

export default Info;
