import React from 'react';
import './Item.css';

const Item = (props) => {

    console.log('Item:', props)
    //this is a quick way for you to see what a component is seeing as its props

    return(
        
        <>
        {/* React.Fragments */}
        
        {props.item.map(item => {
            return(
                <tr key={item.id}>
                    <td>{item.nameOfItem}</td>
                    <td>{item.quantity}</td>
                </tr>
            )
        })

        }
        
        </>
    )
}

export default Item;