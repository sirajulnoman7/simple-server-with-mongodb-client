import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Users = () => {
    const usersLoad=useLoaderData()
    const [users,setUsers]=useState(usersLoad)
    console.log(users)
    const handleDelete=id=>{
        console.log(id)
        fetch(`http://localhost:5000/users/${id}`,{
            method:"DELETE",
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.deletedCount>0){
                alert('user delete successfully')
                const remainingUser=users.filter(user=>user._id!==id)
                setUsers(remainingUser)
            }
            console.log(data)})
    }
    return (
        <div>
            <h3>this is user components total users {users.length}</h3>
            <div>
                {
                    users.map(user=><p key={user._id}>{user.name} || {user.email} 
                    <Link to={`/update/${user._id}`}><button>Update</button></Link>
                     <button onClick={()=>handleDelete(user._id)}>delete</button></p>)
                }
            </div>
        </div>
    );
};

export default Users;