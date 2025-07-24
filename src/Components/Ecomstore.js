import {useEffect, useState} from "react";

function Ecomstore() {
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("");

    useEffect(() => {
        fetch("https://dummyjson.com/products/")
            .then((res) => res.json())
            .then((data) => {
                setProducts(data.products);
                setFilteredProducts(data.products);

                // Extract only used categories from products
                const usedCategoryMap = {};
                data.products.forEach((product) => {
                    usedCategoryMap[product.category] = true;
                });

                const uniqueCategories = Object.keys(usedCategoryMap).map(
                    (cat) => ({
                        slug: cat,
                        name: cat,
                    })
                );

                setCategories(uniqueCategories);
            })
            .catch((err) => console.error("Error fetching products:", err));
    }, []);

    const search = () => {
        if (!selectedCategory) return;
        const filtered = products.filter(
            (product) => product.category === selectedCategory
        );
        setFilteredProducts(filtered);
    };

    return (
        <div>
            <h1 className="text-center my-4">Dummy Json Products</h1>

            <div className="text-center">
                <label htmlFor="category" className="me-2">
                    Select category:
                </label>
                <select
                    id="category"
                    className="col-3 my-2"
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                >
                    <option value="">Eg. beauty</option>
                    {categories.map((cat, index) => (
                        <option value={cat.slug} key={index}>
                            {cat.name}
                        </option>
                    ))}
                </select>

                <button className="ms-2 btn btn-success" onClick={search}>
                    Search
                </button>
            </div>

            <div className="d-flex flex-wrap justify-content-center">
                {filteredProducts.length > 0 ? (
                    filteredProducts.map((product) => (
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
                            <div className="text-center">
                                <button className="btn btn-primary me-2">
                                    Buy now
                                </button>
                                <button className="btn btn-success">
                                    See Reviews
                                </button>
                            </div>
                        </div>
                    ))
                ) : (
                    <p className="text-danger fs-5">
                        No products found for "{selectedCategory}"
                    </p>
                )}
            </div>
        </div>
    );
}

export default Ecomstore;
