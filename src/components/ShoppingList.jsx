import React from 'react'
import { useState } from 'react'

const ShoppingList = () => {

    const [shoppingList, setShoppingList] = useState([{ name: 'Shirts', qty: 2 }])
    const [itemName, setItemName] = useState('');
    const [itemQty, setItemQty] = useState(0);

    function AddItems(){
        if (!itemName || !itemQty || itemQty <= 0) {
            alert('Please enter valid name and quantity!');
            return;
        }

        setShoppingList([...shoppingList,{name:itemName, qty: itemQty}]);

        alert('Successfully Added Items');

        setItemName('');
        setItemQty(0);
    }

    return (
        <div>
            <h1>ShoppingList</h1>
            <div>
                <span>Name</span>
                <span>-</span>
                <span>Quantity</span>
            </div>
            {
                shoppingList.map((s, index) => (
                    <div key={index}>
                        <span>{s.name}</span>
                        <span>-</span>
                        <span>{s.qty}</span>
                    </div>
                ))
            }


            <div>
                <input type='text' placeholder='Enter name of item'
                       value={itemName} onChange={(e) => setItemName(e.target.value)}/>
                <input type='number' placeholder='Enter qty of item'
                       value={itemQty} onChange={(e) => setItemQty(e.target.value)}/>
                <button onClick={AddItems}>Add</button>
            </div>
        </div>
    )
}

export default ShoppingList