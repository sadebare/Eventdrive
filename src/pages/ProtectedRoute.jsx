import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ProtectedRoute = ({ children }) => {
  const { user } = useSelector((store) => store.user);

  // Change back to "!user" (DON'T FORGET!!!)
  if (user) {
    return <Navigate to='/login' />;
  }
  
  return children;
};

export default ProtectedRoute;