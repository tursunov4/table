const initialState = {users:[]}


export const Data =(state=initialState, action)=>{
   switch (action.type) {
   case 'addUser':{
      return {users : [...state.users, action.payload]}
   }
   case 'remove' :{
   
    return {users:state.users.filter((item) => item.id !== action.payload)}
   }
   
    default:{
        return state
    }
  
   }
}