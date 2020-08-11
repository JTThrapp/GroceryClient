import React, {useState, useEffect} from 'react';
import './Items.css';
import Table from '@material-ui/core/Table';
import Item from './Item/Item'
import ItemAdd from './ItemMethods/ItemAdd';
import ItemEdit from './ItemMethods/ItemEdit';


const Items = (props) => {

    const [items, setItems] = useState([]);
    const [newItem, setNewItem] = useState('');
    const [newQuantity, setNewQuantity] = useState('');
  
    // console.log('items: ', props.token);

    useEffect(() => {
        getAllItems()
    }, []);


    const getAllItems = () => {
        fetch('http://localhost:3000/item', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': props.token
            }
        })
        .then(res => res.json())
        .then(json => setItems(json))
        .catch(err => console.log(err))
    }
    // useEffect ( () => {
    //     handleSubmit();
    //   }, []);



        // const editItem = event => {
        //     event.preventDefault();
            
        //     setNewItem(''); //clears item input 
        //     setNewQuantity(1); //clears qty input
            
        //     fetch('http://localhost:3000/item/:id', {
        //     method: 'PUT',
        //     headers: {
        //         'Content-Type': 'application/json',
        //         'Authorization': props.token
        //     }
        // })
        // .then(res => res.json())
        // .then(json => setItems(json))
        // .catch(err => console.log(err))
        // }

        // const deleteItem = event => {
        //     event.preventDefault();
        //     postToDatabase(); //fires POST fetch
        //     // setItems(items + {newItem, newQuantity})
        //     setNewItem(''); //clears item input 
        //     setNewQuantity(1); //clears qty input
            
        //     fetch('http://localhost:3000/item', {
        //     method: 'GET',
        //     headers: {
        //         'Content-Type': 'application/json',
        //         'Authorization': props.token
        //     }
        // })
        // .then(res => res.json())
        // .then(json => setItems(json))
        // .catch(err => console.log(err))
        // }



    return (
        <div >
        <Table solid size='small'>
            <thead>
                <tr>
                    <th>Name of Item</th>
                    <th>Quantity</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                {/* Item data will go here */}
                <Item token={props.token} item={items}/>
            </tbody>
        </Table>

       
            <ItemAdd item={items} token={props.token}/>
            <ItemEdit item={items} token={props.token} /> 
            {/* <ItemDelete />  */}

        
        </div>
    )

}

export default Items; 