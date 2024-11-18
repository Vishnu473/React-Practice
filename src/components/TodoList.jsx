import React, { useState } from 'react'

const TodoList = () => {

    const [pancharamas, setPancharamas] = useState(['Amararamam', 'Somaramam']);
    const [val,setVal] = useState('');

    function onSetVal(event){
        setVal(event.target.value);
    }

    function AddList(){
        event.preventDefault();
        if(val.trim()){
            setPancharamas([...pancharamas,val]);
            setVal('');
        }

    }

    return (
        <div>
            <h1>Pancharama List</h1>
            {
                pancharamas.map((pancharamam, index) => (
                        <h1 key={index}>{pancharamam}</h1>))
            }
            <div>
                <form onSubmit={AddList}>
                    <input value={val}
                           placeholder='Enter pancharamam to add'
                           onChange={onSetVal}/>

                    <button type='submit'>Add to List</button>
                </form>
            </div>
        </div>
    )
}

export default TodoList