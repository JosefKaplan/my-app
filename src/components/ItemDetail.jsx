import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import '../App.css';
import { SettingsRemoteSharp } from '@material-ui/icons';

export default function ItemDetail({ match }) {
    useEffect(() => {
        fetchItem();
        console.log(match);
    },[]);

    const [item, setItem] = useState({});

    const fetchItem = async() => {
    const fetchItem = await fetch(`https://tvb-amazon-data-scraper.p.rapidapi.com/products/${match.params.id}?api_key=a438be699e1c4f2b1e62ff649419355b`, {
            "method": "GET",
            "headers": {
                "x-rapidapi-key": "3a9d02a797msh4ba4a9f637316e7p146eedjsnbbc734c68baf",
                "x-rapidapi-host": "tvb-amazon-data-scraper.p.rapidapi.com"
            }
        })
    }
    return (
        <div>
            <h2>Item</h2>
        </div>
    )
}
