import React from 'react';
import AddIcon from '@material-ui/icons/Add';
import {useState} from 'react';
import { Button } from 'reactstrap';
import TextField from '@material-ui/core/TextField';

import APIURL from '../../../helpers/environment';

const ItemAdd = (props) => {
    const [newItem, setNewItem] = useState('');
    const [newQuantity, setNewQuantity] = useState('');

    console.log(props);

    //add new items
    const postToDatabase = (e) => {
        // e.preventDefault();

        const url = `${APIURL}/item`;

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
            window.location="/";
            setNewItem(''); //clears item input 
            setNewQuantity(1); //clears qty input
            props.getAll();
        }


return(
    <div>
        <br/>
        <hr/>
        <br/>
         <form  >
            <p className="addItemHeader"><b>Add an Item</b></p>
            <TextField id="standard-basic" label="item" type='text' value={newItem} onChange={updateNewItem}/>
            <TextField className="quantityInput" id="standard-basic" label="quantity" type='number' value={newQuantity} onChange={updateNewQuantity}/>
            <button onClick={enterNewItem}><AddIcon/></button>
            <hr/>
        </form>
    </div>
)}

export default ItemAdd;