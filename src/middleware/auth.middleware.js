import jwt from 'jsonwebtoken';

const authCheck = (requiredRole) => {

  return (req, res, next) => {
    
    try {
      const authHeader = req.headers.authorization;

      // Check if Authorization header exists
      if (!authHeader) {
        return res.status(401).json({ message: 'Authorization Token is missing' });
      }
 
      // Decode the token
      const decodedToken = jwt.decode(authHeader);

      console.log(decodedToken);

      if (!decodedToken) {
        return res.status(401).json({ message: 'Token not found' });
      }

      // Attach decoded information to the request object
      req.user = decodedToken;

      // Check if the user's role matches the required role
      if (requiredRole && decodedToken.role !== requiredRole) {
        return res.status(403).json({ message: 'Access denied: insufficient permissions' });
      }

      // Call the next middleware or route handler
      next();
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  };
};

export default authCheck;
