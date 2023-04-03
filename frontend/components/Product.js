import Link from "next/link";

//styled components
import {ProductStyles} from "../styles/ProductStyle";

const Product = ({product, variant}) => {
    //Extract from props
    const {title, price, picture, slug, description} = product.attributes;
    return (
        <Link href={`/product/${slug}`}>
            <ProductStyles variants={variant} whileHover={{scale: 1.1}}
                           whileTap={{scale: 0.95}}  >
                <div>
                    <img src={picture.data[0].attributes.formats.small.url} alt={title}/>
                </div>
                <h2>{title}</h2>
                <p>{description.length > 62 ? description.substring(0, 43) + "..." : description}</p>
                <h3>${price}</h3>
            </ProductStyles>
        </Link>
    );
}

export default Product;
