import axios from "axios"






export const RegisterNewAdmin = (user) => dispatch => {



    dispatch({ type: 'Admin_Register_Request' })




    axios.post('/api/admin/register', user).then((res) => {
        dispatch({ type: 'Admin_Register_Success' })
      localStorage.setItem('admin', JSON.stringify(res.data))
        window.location.href = '/admin'

  }).catch(err => {
        dispatch({ type: 'Admin_Register_Failed', payload: err });


    })


}




export const AdminLoginAction = (admin) => dispatch => {



    dispatch({ type: 'Admin_Login_Request' })

    axios.post('/api/admin/login', admin).then(res => {
        dispatch({ type: 'Admin_Login_Success' })
        localStorage.setItem('admin', JSON.stringify(res.data))
        window.location.href = '/admin'

    }).catch(err => {
        dispatch({ type: 'Admin_Login_Failed', payload: err })

    })


}



export const LogOutAdmin = () => dispatch => {


    localStorage.removeItem('admin')
    
    dispatch({ type: 'User_LogOut' })
    window.location.href = '/'


}
