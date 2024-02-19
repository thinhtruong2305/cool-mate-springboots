import { Navigate } from 'react-router-dom';
import { authService } from '~/service/authService';

export const AdminRoute = ({ children }) => {
    return authService.checkRole('ROLE_ADMIN') ? children : <Navigate to="/" />;
};
