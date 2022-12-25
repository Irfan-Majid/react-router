import React, { useState } from 'react'
import { useSearchParams } from 'react-router-dom'

const User = () => {
    const [searchparam,setSearchParam] = useSearchParams();
    const [name,setName] = useState('');
    const [age,setAge] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        setSearchParam({name : name, age : age});
    }
  return (
    <div>
        <h1>User</h1>
        <form onSubmit={() => {handleSubmit()}}>
        <input type="text" name="user" value={name} onChange={(e) => {setName(e.target.value)}} />
        <input type="text" name="age" value={age} onChange={(e) => {setAge(e.target.value)}} />
        <button type="submit">Find User</button>
        </form>
    </div>
  )
}

export default User