import '../css/products-outlet.css';
import { useState, useEffect } from 'react';
import axios from 'axios';

function ProductsOutlet() {
    const [products, setProducts] = useState([]);

    // Adicionar os produtos existentes
    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = async () => {
        try {
            const response = await axios.get('http://localhost:8080/api/product/getOutlet'); 
            setProducts(response.data); 
        } catch (error) {
            console.log(error.response.data.msg);
        }
    };

    return (
        <div className="products-outlet">
            <h2>Acessórios e Microondas novos</h2>

            {products.length === 0 ? (
                <div className="error-get">
                    <p>Nenhum produto foi encontrado, atualize o site e tente novamente!</p>
                </div>
            ) : (
                <div className="showcase-container">
                    {products.map((data, index) => (                              
                        <div className="product-container" key={index}>
                            <a href="/construction">
                                <div className="product-avatar">
                                    <img src={`http://localhost:8080/products-img/${data.image}`} alt="Imagem produto"/>
                                </div>

                                <div className="product-name">{data.description}</div>

                                <div className="product-price">R$ {data.price}</div>
                            </a>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default ProductsOutlet;