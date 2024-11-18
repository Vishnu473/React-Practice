import React from 'react'
import { useState } from 'react'

const Profile = () => {
    const [person, setPerson] = useState({ name: 'Vishnu', age: 23 });
    const [name,setName] = useState(person.name);
    const [age,setAge] = useState(Number(person.age));

    function updateName(event) {
        setPerson({ ...person, name: event.target.value });
    }
    function updateAge(event) {
        setPerson({ ...person, age: Number(event.target.value) });
    }

    function UpdatePerson(){
        console.log("Updated Person : ",person);
        setName(person.name);
        setAge(person.age);
    }

    return (
        <div>
            <h1>Profile Component</h1>
            <p>Name: {name}</p>
            <p>Age: {age}</p>

            <div>
                <input type='text' value={person.name} placeholder='Enter valid name:' onChange={updateName} />
            </div>
            <div>
                <input type='number' value={person.age} placeholder='Enter age:' onChange={updateAge} />
            </div>
            <button onClick={UpdatePerson}>Update</button>

        </div>
    )
}

export default Profile