

 export const  CartReducer=(state={ CartItem:[]   } , action)=>{

    switch(action.type)
    {
        case 'ADDTOCART' : 
        
        const alreadyexist = state.CartItem.find( item=> item._id == action.payload._id )

        if(alreadyexist)
        {
            return {
                ...state ,
                CartItem : state.CartItem.map( item=> item._id == action.payload._id ? action.payload :item  )
            }
        }
        else{
            return {
                ...state ,
                CartItem: [...state.CartItem , action.payload]
            }
        }

        case 'DELETEFROMCART' : return {
            ...state ,
            CartItem : state.CartItem.filter( item=> {
                return item._id !== action.payload._id
            } )
        }
       

        default : return state
    }
}