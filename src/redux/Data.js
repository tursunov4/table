const initialState = {users:[]}


export const Data =(state=initialState, action)=>{
   switch (action.type) {
   case 'addUser':{
      return {users : [...state.users, action.payload]}
   }
   case 'remove' :{
   
    return {users:state.users.splice(action.payload,1)}
   }
   
    default:{
        return state
    }
  
   }
}