import React, {useState, useEffect} from 'react';
import './Items.css';

import Item from './Item/Item'

const Items = (props) => {

    const [items, setItems] = useState([])

  

    useEffect(() => {
        fetch('http://localhost:3000/item', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': props.token
            }
        })
        .then(res => res.json())
        .then(json => setItems(json))
        .then(err => console.log(err))
    }, []);

    return (
        <div id='displayedItems'>
        <table>
            <thead>
                <tr>
                    <th>Name of Item</th>
                    <th>Quantity</th>
                </tr>
            </thead>
            <tbody>
                {/* Item data will go here */}
                <Item item={items}/>
            </tbody>
        </table>
        </div>
    )

}

export default Items; 