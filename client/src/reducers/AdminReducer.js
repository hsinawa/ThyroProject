import axios from "axios"


export const LoginAdminReducer = (state = {}, action) => {
    switch (action.type) {
        case 'Admin_Login_Request': return {
            ...state,
            loading: true
        }

        case 'Admin_Login_Success': return {
            ...state,
            loading: false,
            success: true
        }

        case 'Admin_Login_Failed': return {
            ...state,
            loading: false,
            error: 'Invalid Credentials'
        }

        case 'Admin_LogOut': return {
            ...state
        }


        default: return state



    }
}



export const RegisterAdminReducer = (state = {}, action) => {
    switch (action.type) {
        case 'Admin_Register_Request': return {
            ...state,
            loading: true
        }

        case 'Admin_Register_Success': return {
            ...state,
            loading: false,
            success: true
        }

        case 'Admin_Register_Failed': return {
            ...state,
            loading: false,
            error: true ,
            
        }


        default: return state



    }
}

