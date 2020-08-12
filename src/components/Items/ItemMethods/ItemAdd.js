import React from 'react';
import AddIcon from '@material-ui/icons/Add';
import {useState} from 'react';


const ItemAdd = (props) => {
    const [newItem, setNewItem] = useState('');
    const [newQuantity, setNewQuantity] = useState('');

    console.log(props);

    //add new items
    const postToDatabase = (e) => {
        // e.preventDefault();

        const url = 'http://localhost:3000/item';

        const bodyObj = {
            nameOfItem: newItem,
            quantity: newQuantity,
            owner: props.item.owner,
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

        const enterNewItem = event => {
            event.preventDefault();
            postToDatabase();
            setNewItem(''); //clears item input 
            setNewQuantity(1); //clears qty input
            props.getAll();
        }


return(
    <div>
         <form  >
            <p>Add an Item</p>
            <input type='text' placeholder="Item Name" value={newItem} onChange={updateNewItem}></input>
            <input type='number' placeholder="Quantity" value={newQuantity} onChange={updateNewQuantity}></input>
            <button onClick={enterNewItem}><AddIcon/></button>
            <hr/>
        </form>
    </div>
)}

export default ItemAdd;