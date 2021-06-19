const Product = ({title,
                           price,
                           description,
                           category,
                           image}) => {
   return(
       <div className='product'>
           <div>
                <h3>{title}</h3>
               
           </div>
           <span className='img-container'>
                <img className='product-img' src={image}></img>  
           </span>
           <div className='description-text'>
                <span className='price'>{`${price}EU`}</span>
                <p>{description}</p>
                <span>{category}</span>
           </div>
           
       </div>
   )
}

export default Product;