import { Router } from 'express';
import { register, login } from '../controllers/auth.controller';

const router = Router();

// Rutas de tracción libre (Gestión de Identidad)
router.post('/register', register);
router.post('/login', login);

export default router;