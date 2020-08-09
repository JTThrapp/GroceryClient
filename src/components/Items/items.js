import React, {useState, useEffect} from 'react';
import './Items.css';

import Item from './Item/Item'

const Items = (props) => {

    const [items, setItems] = useState([]);
    const [newItem, setNewItem] = useState('');
    const [newQuantity, setNewQuantity] = useState('');
  

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

    //add new items
    const handleSubmit = (e) => {

        console.log(newItem);
        console.log(newQuantity);

        const url = 'http://localhost:3000/item';

        const bodyObj = {
            nameOfItem: newItem,
            quantity: newQuantity,
            owner: 4,
        }

        fetch(url, {
            method: 'POST',
            body: JSON.stringify(bodyObj),
            headers: {
                'Content-Type': 'application/json',
                'Authorization': props.token,
                
            }
        })
        .then(res => res.json())
        .then(res => console.log(res))
        .catch(err => console.log(err))
        }

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

        <form onSubmit={handleSubmit()}>
            <input type='text' value={newItem} onSubmit={(e) => setNewItem(e.target.value)}></input>
            <input type='number' value={newQuantity} onSubmit={(e) => setNewQuantity(e.target.value)}></input>
            <button type='submit'></button>
        </form>
        </div>
    )

}

export default Items; 