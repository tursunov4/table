import React, { useState } from 'react'
import {useDispatch} from 'react-redux'
import ReactModal from 'react-modal'
import {useSelector} from 'react-redux'
function Form() {
  const [open , setOpen] = useState(false)
  const [name ,setName] = useState('')
  const [lastname, setLastName] = useState('')
  const [age, setAge] = useState('')
  const data = useSelector((store) => store)
  const dispatch = useDispatch()
    const handleSubmit =()=>{
     setOpen(false)
    const users ={
       id : data.users.length+1,
       name : name, lastname : lastname, age : age 
    }
    console.log(users);
    dispatch({type :'addUser' , payload:users })
  }
  return (
    <div>      
      <ReactModal onRequestClose={() => setOpen(false)} isOpen={open} style ={{
        overlay:{
          backgroundColor:'rgba(0,0,0,0.4)'
        },
        content:{
          width:'500px',
          margin:'0  auto',
          height:'50%'
        }        
      }}>
    <div className=' mx-auto mt-5 '>
        <form >
            <input onChange={(e) =>setName(e.target.value)} className='form-control my-2' type="text" placeholder='enter your name'/>
            <input onChange={(e) => setLastName(e.target.value)} className='form-control my-2' type="text" placeholder='enter your lastname'/>
            <input onChange={(e) => setAge(e.target.value)} className='form-control my-2' type="text" placeholder='ente your age'/>
        </form>
            <button onClick={handleSubmit}  className='form-control my-2 btn btn-danger'>add information</button>
    </div>
      </ReactModal>
      <div className='mx-auto mt-5 w-[150px]'>
     <button className='btn btn-success px-3 py-1' onClick={()=>setOpen(true)}>add users</button>
      </div>
    </div>
  )
}

export default Form