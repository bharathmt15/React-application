import {useEffect, useState} from "react";

function E_Commerce_site() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("https://dummyjson.com/products")
            .then((result) => result.json())

            .then((data) => {
                console.log("Data i sfetched successfully.");

                console.log(data);

                setProducts(data.products);
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

export default E_Commerce_site;
