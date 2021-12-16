import Image from "next/image"
import styles from './card.module.css'

export const Card = ({productdata , index})=>{
    
    return(
        <div className={styles.productcard}>
                 <Image style={{margin:"auto"}} alt="product" src="/images/amla.png" width="170" height="150"/>
                  
             <div className={styles.productDesc}>
                 <h3>{productdata[index].product_name}</h3>
                 <p>Far far away, behind the word mountains, far from the countries Volkalia & consonantia
                     there live the behind text.
                 </p>
                 <span>Product Details</span>
                 <strong>₹{productdata[index].price}</strong>
                 <button>ADD TO CARD</button>
             </div> 
        </div>
    )
}