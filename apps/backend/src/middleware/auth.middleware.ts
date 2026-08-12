import { Request, Response, NextFunction } from 'express';
import jwt, { JwtPayload } from 'jsonwebtoken';

// Extendemos la interfaz con precisión. Cero "any".
export interface AuthRequest extends Request {
  user?: string | JwtPayload; 
}

export const verifyToken = (req: AuthRequest, res: Response, next: NextFunction): void => {
  // 1. Intercepción
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  // 2. Freno estricto
  if (!token) {
    res.status(401).json({ error: 'Acceso denegado. Token no proporcionado.' });
    return;
  }

  try {
    // 3. Validación matemática
    const secret = process.env.JWT_SECRET as string;
    const decoded = jwt.verify(token, secret);
    
    // 4. Inyección controlada
    req.user = decoded;
    next();
  } catch {
    // 5. Rebote seguro
    res.status(403).json({ error: 'Token inválido o expirado.' });
  }
};