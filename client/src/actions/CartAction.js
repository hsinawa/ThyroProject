export const AddToCart=(testsdata )=>(dispatch ,getState )=>{

    const CartItem ={
        name : testsdata.name ,
        _id : testsdata._id ,
        price : testsdata.price ,
        category:testsdata.category,
        reporttime: testsdata.reporttime,
        isValid:testsdata.isValid,
        duration:testsdata.duration,
        profit : testsdata.profit ,
        CouponApplied:testsdata.CouponApplied
       
        
    }

    dispatch({type:'ADDTOCART' , payload:CartItem })

    localStorage.setItem('CartItem' , JSON.stringify( getState().CartReducer.CartItem ) )

}

export const DeleteFromCart=(item)=>(dispatch , getState)=>{
    
    
    dispatch({ type:'DELETEFROMCART' , payload:item })
    localStorage.setItem('CartItem' , JSON.stringify( getState().CartReducer.CartItem ) )
}