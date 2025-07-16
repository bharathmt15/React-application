import {useEffect, useState} from "react";
import axios from "axios";
function Ecomstore() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios
            .get("https://dummyjson.com/products")
            .then((data) => {
                console.log("true fetched");
                setProducts(data.data.products);
            })
            .catch((err) => {
                console.error("Error fetching data:", err);
            });
    }, []);

    return (
        <div>
            <h1 className="text-center my-4">Dummy Json Products</h1>

            <div className="flex-container">
                {products.map((product) => {
                    return (
                        <div
                            className="card shadow p-3 mb-4 bg-white rounded my-3 me-3"
                            style={{width: "250px", textAlign: "center"}}
                            key={product.id}
                        >
                            <img
                                src={product.images[0]}
                                alt={product.title}
                                className="img-fluid mb-2"
                                style={{
                                    maxHeight: "210px",
                                    objectFit: "cover",
                                }}
                            />

                            <div className="card-img-top mb-2">
                                <span className="fw-bold display-9">
                                    {product.title}
                                </span>
                            </div>

                            <p className="text-success fs-4">
                                ${product.price}
                            </p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default Ecomstore;
