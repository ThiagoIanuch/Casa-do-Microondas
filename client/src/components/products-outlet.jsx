import '../css/products-outlet.css';
import { useState, useEffect } from 'react';
import axios from 'axios';

function ProductsOutlet() {
    const [products, setProducts] = useState([]);
    const [error, setError] = useState('');

    // Adicionar os produtos existentes
    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = async () => {
        try {
            const response = await axios.get('http://localhost:8080/api/product/getOutlet'); 
            setProducts(response.data); 
        } catch (error) {
            setError('Nenhum produto foi encontrado, atualize o site e tente novamente!')
            console.log(error.response.data.msg);
        }
    };

    return (
        <div className="products-outlet">
            <h2>Acessórios e Microondas novos</h2>

            {error && (
                <div className="error-get">
                    <p>{error}</p>
                </div>
            )}
    
            <div className="showcase-container">
                {products.map((data, index) => (                              
                    <a href="/construction">
                        <div className="product-container" key={index}>
                                <div className="product-avatar">
                                    <img src={`http://localhost:8080/products-img/${data.image}`} alt="Imagem produto"/>
                                </div>

                                <div className="product-name">{data.description}</div>

                                <div className="product-price">R$ {data.price}</div>
                        </div>
                    </a>
                ))}
            </div>
        </div>
    );
}

export default ProductsOutlet;