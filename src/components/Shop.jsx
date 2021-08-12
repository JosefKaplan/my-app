//import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import '../App.css';

//Buttons
import CustomBtn from './CustomBtn';

//icons



export default function Shop() {
    const [items, setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [search, setSearch] = useState('love and other cliches');
    const [query, setQuery] = useState('love and other cliches');

    useEffect(() => {
        const fetchItems = async() => {
            const data = await fetch(`https://itunes.apple.com/search?term=${query}&limit=40.`);
            const items = await data.json();
            console.log(items.results);
            setItems(items.results);
            setIsLoading(false);
        };
        fetchItems();
    },[query]);

    function pricingItem(price) {
        if (Number.isInteger(Math.ceil(price)) === true) {
            return price + ' $';
        }else {
            return 'Not specified.'
            }
        }

    return (
        <div>
            <center>
                <h1>Lookup music at Itunes</h1>
                <div className="customButton">
                    <input
                        type="text"
                        value={query}
                        onChange={event => setQuery(event.target.value) & setIsLoading(true)}
                        className="input"
                    />
                    <CustomBtn className="button"type="button" onClick={() => setSearch(query)} txt="Search"/>
                </div>
                { isLoading && <div> Loading...</div>}

                {items.map(item => (
                            <a id="object" className="object" href={item.trackViewUrl} target="blank">
                                <h2 key={item.trackViewUrl}>
                                    {item.artistName}
                                </h2>
                                <p key={item.trackName}>
                                    {item.trackName}
                                </p>
                                <div>
                                    <img key={item.artworkUrl100} src={item.artworkUrl100} alt="image 100x100" className="image"></img>
                                </div>
                                <p key={item.trackPrice}>
                                    <b>Price: </b>
                                    {pricingItem(item.trackPrice)}
                                </p>
                                <p key={item.primaryGenreName}>
                                    <b>Genre: </b>
                                    {item.primaryGenreName}
                                </p>
                                <p key={item.releaseDate}>
                                    <b>Released: </b>
                                     {item.releaseDate.slice(0,4)}
                                </p>

                            </a>
                ))}
            </center>
        </div>
    )
}
