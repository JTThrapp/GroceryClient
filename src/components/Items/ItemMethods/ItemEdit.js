import React, { useState } from "react";

const ItemEdit = ( props ) => {
  const [itemName, setItemName] = useState(props.item.nameOfItem);
  const [quantity, setQuantity] = useState(props.item.quantity);

  console.log(props);

  const updateItemName = async e => {
    e.preventDefault();
    try {
      const body = { itemName };
      const response = await fetch(
        `http://localhost:3000/item/${props.item.id}`,
        {
            method: "PUT",
            headers: { 
                'Content-Type': "application/json",
                'Authorization':  props.token },
            body: JSON.stringify(body)
        }
      );
    //   window.location = "/";
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
      {/* 
        id = id10
      */}
      <div
        class="modal"
        id={`id${props.item.id}`}
        onClick={() => setItemName(props.item.nameOfItem)}
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h4 class="modal-title">Edit Todo</h4>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                onClick={() => setItemName(props.item.nameOfItem)}
              >
                &times;
              </button>
            </div>
            <div class="modal-body">
              <input
                type="text"
                className="form-control"
                value={itemName}
                onChange={e => setItemName(e.target.value)}
              />
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-warning"
                data-dismiss="modal"
                onClick={e => updateItemName(e)}
              >
                Edit
              </button>
              <button
                type="button"
                class="btn btn-danger"
                data-dismiss="modal"
                onClick={() => updateItemName(props.item.nameOfItem)}
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