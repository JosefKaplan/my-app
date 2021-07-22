//import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import '../App.css';

//Buttons
import CustomBtn from './CustomBtn';

//icons



export default function Shop() {
    const [items, setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [search, setSearch] = useState('');
    const [query, setQuery] = useState('Macbook');

    useEffect(() => {
        const fetchItems = async() => {
            const data = await fetch(`https://tvb-amazon-data-scraper.p.rapidapi.com/search/${query}?api_key=a438be699e1c4f2b1e62ff649419355b`, {
                "method": "GET",
                "headers": {
                    "x-rapidapi-key": "3a9d02a797msh4ba4a9f637316e7p146eedjsnbbc734c68baf",
                    "x-rapidapi-host": "tvb-amazon-data-scraper.p.rapidapi.com"
                }
            });
            const items = await data.json();
            console.log(items.results);
            setItems(items.results);
            setIsLoading(false);
        };
        fetchItems();
    },[query]);

    function pricingItem(price) {
        if (Number.isInteger(price) === true) {
            return price+' $';
        }else {
            return 'Not specified.'
            }
        }

    return (
        <div>
            <center>
                <h1>Shop from here in Amazon store</h1>
                <div className="customButton">
                    <input
                        type="text"
                        value={query}
                        onChange={event => setQuery(event.target.value)}
                        className="input"
                    />
                    <CustomBtn className="button"type="button" onClick={() => setSearch(query)} txt="Search"/>
                </div>
                { isLoading && <div> Loading...</div>}

                {items.map(item => (
                            <a id="object" className="object" href={item.url}>
                                <p key={item.url}>
                                    {(item.name).slice(0,30) + '...'}
                                </p>
                                <center>
                                    <img key={item.image} src={item.image} alt="image 300x200" className="image"></img>
                                </center>
                                <p key={item.price}>
                                    <b>Price: </b>
                                    {pricingItem(item.price)}
                                </p>
                                <p key={item.stars}>
                                    <b>Rating: </b>
                                    <Rating name="half-rating-read" defaultValue={item.stars} precision={0.5} readOnly />
                                </p>

                            </a>
                ))}
            </center>
        </div>
    )
}
