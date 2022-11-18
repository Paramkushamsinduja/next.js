import React from "react";
import styles from '../styles/Product.module.css'
export const getStaticProps = async () => {
    const responce = await fetch('https://fakestoreapi.com/products');
    const data = await responce.json();
    return {
        props: { productData: data }
    }
}
const Courses = (props) => {
    const productData = props.productData;
    //console.log("props", productData);
    return (
        <div className="row">
            {productData.map((item, index) => {
                console.log("item", item);
                return (
                    <div class="col-sm-3" key={index}>
                        <div className={`card ${styles.card} `}>
                            <div class={styles.imagecontainer}>
                                <img className={styles.cardimgtop} src={item.image} alt="Card image cap" />
                            </div>

                            <div class="card-body">
                                <h5 className={`card-title ${styles.title}`}>{item.title}</h5>
                                <p className="card-text"><small className="text-muted">Category: {item.category}</small></p>
                                <p className={`card-text ${styles.description}`}>{item.description}</p>
                                <p className="card-text"><small className="text-muted">Price: Rs {item.price}</small></p>
                            </div>
                        </div>
                    </div>
                );
            })}

        </div >
    )
}
export default Courses