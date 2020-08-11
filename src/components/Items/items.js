import React, {useState, useEffect} from 'react';
import './Items.css';

import Item from './Item/Item'

const Items = (props) => {

    const [items, setItems] = useState([]);
    const [newItem, setNewItem] = useState('');
    const [newQuantity, setNewQuantity] = useState('');
  
    console.log('props: ', props);

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

    useEffect ( () => {
        handleSubmit();
      }, []);


    //add new items
    const handleSubmit = (e) => {
        // e.preventDefault();


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

        const updateNewItem = (event) => {
            setNewItem(event.target.value)
        }

        const updateNewQuantity = (event) => {
            setNewQuantity(event.target.value)
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

        <form onSubmit={() => this.handleSubmit()} >
            <input type='text' value={newItem} onChange={updateNewItem}></input>
            <input type='number' value={newQuantity} onChange={updateNewQuantity}></input>
            <button type='submit'>Add item</button>
        </form>
        </div>
    )

}

export default Items; 