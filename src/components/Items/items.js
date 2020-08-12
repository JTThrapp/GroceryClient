import React, {useState, useEffect} from 'react';
import './Items.css';
import Table from '@material-ui/core/Table';
import Item from './Item/Item'
import ItemAdd from './ItemMethods/ItemAdd';

import APIURL from '../../helpers/environment';


const Items = (props) => {

    const [items, setItems] = useState([]);
  
    // console.log('items: ', props.token);

    useEffect(() => {
        getAllItems()
    }, []);


    const getAllItems = () => {
        fetch(`${APIURL}/item`, {
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
    
    return (
        <div >
        <Table solid size='small'>
            <thead>
                <tr>
                    <th>Name of Item</th>
                    <th>Quantity</th>
                    <th>Delete</th>
                    <th>Edit</th>
                </tr>
            </thead>
            <tbody>
                {/* Item data will go here */}
                <Item token={props.token} item={items}/>
            </tbody>
        </Table>

       
            <ItemAdd getAll={getAllItems} item={items} token={props.token}/>

        
        </div>
    )

}

export default Items; 