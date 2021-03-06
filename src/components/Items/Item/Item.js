import React, { useState, useEffect } from "react";
import DeleteForever from "@material-ui/icons/DeleteForever";
import "./Item.css";
import ItemEdit from "../ItemMethods/ItemEdit";
import APIURL from '../../../helpers/environment';

const Item = (props) => {
  console.log("Item:", props);
  //this is a quick way for you to see what a component is seeing as its props

  const [items, setItems] = useState(props.item);

  const deleteItem = async (id) => {
    try {
      const deleteItem = await fetch(`${APIURL}/item/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: props.token,
        },
      });

      window.location="/";
      
      console.log(props.item);
    } catch (err) {
      console.error(err.message);
    } finally {
      getItems();
    }
  };

  const getItems = async () => {
    try {
      const response = await fetch(`${APIURL}/item`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: props.token,
        },
      });
      const jsonData = await response.json();
      setItems(jsonData);
      console.log(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <>
      {props.item.map((item) => {
        return (
          <tr key={item.id}>
            <td>{item.nameOfItem}</td>
            <td>{item.quantity}</td>
            <td>
              <button onClick={() => deleteItem(item.id)}>
                <DeleteForever />
              </button>
            </td>
            <td><ItemEdit item={item} token={props.token} />
            </td>
          </tr>
        );
      })}
    </>
  );
};

export default Item;
