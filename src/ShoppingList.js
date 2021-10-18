import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./index.css";

export default function ShoppingList() {

const [noOfRows, setNoOfRows] = useState(1);

return (
  <div className="app container p-5">
    <h1 className="p-5">Shopping List 🛒</h1>
    <br/>
    <table className="table table-hover table-bordered p-5">
      <thead style={{textAlign:"center"}} >
        <tr>
          <th scope="col" >No.</th>
          <th scope="col" >Items</th>
          <th scope="col" >Quantities</th>
          <th scope="col" >Prices</th>
        </tr>
      </thead>
      <tbody style={{textAlign:"center"}} >
        {[...Array(noOfRows)].map((elementInArray, index) => {
          const add = 1;  
          const no = index + add ;
          return (
            <tr>
              <th scope="row">{no}</th>
              <td><input type="test" placeholder="Add Your Item" /></td>
              <td><input type="text" placeholder="Enter Your Quantity" /></td>
              <td><input type="text" placeholder="Price" /></td>
            </tr>
          );
        })}
      </tbody>
    </table>
    <button type="button" class="btn btn-primary me-3" onClick={() => setNoOfRows(noOfRows + 1)}>Add</button>
    <button type="button" class="btn btn-danger" onClick={() => { if ( noOfRows > 0 ) setNoOfRows(noOfRows - 1); else { alert("Please Add Item First"); setNoOfRows(0) } } }>Delete</button>
  </div>
);}