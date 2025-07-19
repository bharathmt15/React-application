import {useEffect, useState} from "react";
function Ecomstore() {
    const [products, setProducts] = useState([]);

    const search = () => {
        console.clear();
    };
    useEffect(() => {
        fetch("https://dummyjson.com/products/")
            .then((response) => response.json())
            .then((data) => {
                setProducts(data.products);
            })
            .catch((err) => {
                console.error("Error fetching data:", err);
            });
    }, []);

    return (
        <div>
            <h1 className="text-center my-4">Dummy Json Products</h1>
            <div className="text-center">
                <label htmlFor="Text" className="me-1">
                    Enter products to search
                </label>
                <input type="text " className="col-3 my-2" />
                <button className="ms-2 btn btn-success" onClick={search}>
                    Search
                </button>
            </div>
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
                            <div className="text-center ">
                                <button className="btn btn-primary me-2">
                                    Buy now
                                </button>
                                <button className="btn btn-success">
                                    See Reviews
                                </button>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default Ecomstore;
