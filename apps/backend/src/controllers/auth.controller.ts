import { Request, Response } from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { User } from '../models/User';

export const register = async (req: Request, res: Response): Promise<void> => {
  try {
    // 1. Extraemos SOLO los datos permitidos. Ignoramos si mandan 'rol'.
    const { nombre, email, password } = req.body;

    if (!nombre || !email || !password) {
      res.status(400).json({ error: 'Faltan datos obligatorios para el registro.' });
      return;
    }

    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) {
      res.status(400).json({ error: 'El email ya se encuentra registrado.' });
      return;
    }

    const salt = await bcrypt.genSalt(10);
    const password_hash = await bcrypt.hash(password, salt);

    // 2. Inyección blindada en PostgreSQL
    const newUser = await User.create({
      nombre,
      email,
      password_hash,
      rol: 'cliente', // FORZADO MECÁNICO. Cero escalamiento de privilegios.
    });

    res.status(201).json({
      message: 'Usuario registrado con éxito',
      user: { id: newUser.id, nombre: newUser.nombre, email: newUser.email, rol: newUser.rol },
    });
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('Fallo mecánico en registro:', error);
    res.status(500).json({ error: 'Fallo interno del servidor.' });
  }
};

export const login = async (req: Request, res: Response): Promise<void> => {
  try {
    const { email, password } = req.body;

    // Búsqueda del usuario
    const user = await User.findOne({ where: { email } });
    if (!user) {
      res.status(404).json({ error: 'Credenciales inválidas.' });
      return;
    }

    // Comparación de hash
    const isMatch = await bcrypt.compare(password, user.password_hash);
    if (!isMatch) {
      res.status(401).json({ error: 'Credenciales inválidas.' });
      return;
    }

    // Generación del token (Pase de acceso)
    const token = jwt.sign(
      { id: user.id, rol: user.rol },
      process.env.JWT_SECRET as string,
      { expiresIn: '24h' }
    );

    res.status(200).json({
      message: 'Autenticación exitosa',
      token,
      user: { id: user.id, nombre: user.nombre, rol: user.rol },
    });
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('Fallo mecánico en login:', error);
    res.status(500).json({ error: 'Fallo interno del servidor.' });
  }
};