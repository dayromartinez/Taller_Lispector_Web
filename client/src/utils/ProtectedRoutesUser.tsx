import { Navigate } from 'react-router-dom';

export const ProtectedRoutesUser = ({ children }) => {
  
    const token = localStorage.getItem('tokenUser')

    if( !token ){
        return <Navigate to='/' /> 
    }

    return children;

}