import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Update = () => {
    const loadUser = useLoaderData()
    console.log(loadUser)
    const handleSubmitUpdate=e=>{
        e.preventDefault()
        const form=e.target;
        const name=form.name.value ;
        const email=form.email.value;
        const updateUser={name,email}
        console.log(updateUser)
        fetch(`http://localhost:5000/users/${loadUser._id}`,{
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body:JSON.stringify(updateUser)
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.modifiedCount>0){
                form.reset()
                alert('user updated ')
            }
            console.log(data)
        })

    }
    return (
        <div>
            <h4>user update {loadUser.email}</h4>

            <form onSubmit={handleSubmitUpdate}>
                <input type="text" name="name" defaultValue={loadUser.email} id="" />
                <br />
                <input type="email" name="email" defaultValue={loadUser.name} id="" />
                <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default Update;