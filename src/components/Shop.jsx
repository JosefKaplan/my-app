import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import '../App.css';

export default function Shop() {
    useEffect(() => {
        fetchItems();
    },[]);

    const [items, setItems] = useState([]);
    let searchItem = 'Macbook';

    const fetchItems = async() => {
        const data = await fetch(`https://tvb-amazon-data-scraper.p.rapidapi.com/search/${searchItem}?api_key=a438be699e1c4f2b1e62ff649419355b`, {
            "method": "GET",
            "headers": {
                "x-rapidapi-key": "3a9d02a797msh4ba4a9f637316e7p146eedjsnbbc734c68baf",
                "x-rapidapi-host": "tvb-amazon-data-scraper.p.rapidapi.com"
            }
        });

        const items = await data.json();
        console.log(items.results);
        setItems(items.results);
    };

    return (
        <div>
            <h1>Shop from here in Amazon sales</h1>
            {items.map(item => (
                <Link to={`/shop/${item.url}`}>
                    <div id="object" className="object">
                        <a key={item.url}>
                            {(item.name).slice(0,45) + '...'}
                        </a>
                        <img key={item.image} src={item.image} alt="image 300x200" className="image"></img>
                        <p><b>Price:</b> {item.price} $</p>
                    </div>
                </Link>
            ))}
        </div>
    )
}
