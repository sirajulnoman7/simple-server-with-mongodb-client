
import './App.css'

function App() {
 
  const handleSubmit=e=>{
    e.preventDefault()
    const form=e.target;
    const email=form.name.value 
    const name=form.email.value 
    const users={name,email}
    console.log(users)
         fetch('http://localhost:5000/users',{
          method:'POST',
          headers:{
            "content-type":"application/json"
          },
          body:JSON.stringify(users)
         })
         .then(res=>res.json())
         .then(data=>{
          console.log(data)
          if(data.insertedId){
            alert('user successfully created')
            form.reset()
          }
         })
  }

  return (
    <>
     
      <h1>simple server with mongodb</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" id="" />
        <br />
        <input type="email" name="email" id="" />
        <br />
       <input type="submit" value="Submit" />
      </form>
     
    </>
  )
}

export default App
