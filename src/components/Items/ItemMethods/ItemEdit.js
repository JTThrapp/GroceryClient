import React, { useState } from "react";

import APIURL from '../../../helpers/environment';

const ItemEdit = (props) => {
  const [items, setItem] = useState(props.item.nameOfItem);
  const [quantity, setQuantity] = useState(props.item.quantity);

  console.log(props.item.nameOfItem)


  const updateItem = async e => {
    e.preventDefault();
    try {
      const body = { 
        "nameOfItem": items,
        "quantity": quantity 
      };
      
      const response = await fetch(
        `${APIURL}/item/${props.item.id}`,
        {
          method: "PUT",
          headers: { 
            "Content-Type": "application/json",
            "Authorization": props.token 
          },
          body: JSON.stringify(body)
        }
      );
      console.log(response);
      //window.location = "/";
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <div>
      <button
        type="button"
        class="btn btn-warning"
        data-toggle="modal"
        data-target={`#id${props.item.id}`}
      >
        Edit
      </button>
      <div
        class="modal"
        id={`id${props.item.id}`}
        onClick={() => setItem(items)}
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h4 class="modal-title">Edit Item</h4>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                onClick={() => setItem(items)}
              >
                &times;
              </button>
            </div>

            <div class="modal-body">
              <input
                type="text"
                className="form-control"
                value={items}
                onChange={(e) => setItem(e.target.value)}
              />

              <input
                type="number"
                className="form-control"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
              />
            </div>

            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-warning"
                data-dismiss="modal"
                onClick={(e) => updateItem(e)}
              >
                Edit
              </button>
              <button
                type="button"
                class="btn btn-danger"
                data-dismiss="modal"
                onClick={() => setItem(items)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ItemEdit;