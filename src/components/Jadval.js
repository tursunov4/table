import React from 'react'
import {useSelector} from 'react-redux'
import {useDispatch} from 'react-redux'
function Jadval() {
  const dispatch = useDispatch()
  const data = useSelector((store) => store)
  console.log(data);
  const removeUser =(index) =>{
   dispatch({type:'remove' , payload:index})
   console.log(index);
  }
  return (
    <div className='col-md-8 mx-auto mt-5'>
      <table class="table table-striped">
       <thead>
        <th>No</th>
        <th>Name</th>
        <th>LastName</th>
        <th>Age</th>
        <th>Remove</th>
       </thead>
       <tbody>
        {
          data.users.map((item, index) =>(
            <tr key={index}>
              <td>{index+1}</td>
              <td>{item.name}</td>
              <td>{item.lastname}</td>
              <td>{item.age}</td>
              <td><button onClick={()=> removeUser(item.id)} className='btn btn-danger px-3 py-1'>Remove</button></td>
            </tr>
          ))
        }
       </tbody>
      </table>
    </div>
  )
}

export default Jadval