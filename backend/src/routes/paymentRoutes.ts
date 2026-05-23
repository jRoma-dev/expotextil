import { Router } from 'express';
import { createPreference, getStands } from '../controllers/paymentController';
import { receiveWebhook, simulateWebhook } from '../controllers/webhookController';
import { verifyToken } from '../middlewares/authMiddleware';

const router = Router();

// 1. Endpoint protegido: El Frontend lo llama para generar el link de pago
// Solo los usuarios que tienen un token válido (iniciaron sesión) pueden usarlo
router.post('/create-preference', verifyToken, createPreference);

// 2. Endpoint público (Webhook): MercadoPago lo llamará cuando el pago se apruebe/rechace
router.post('/webhook', receiveWebhook);

// 2.5 Endpoint de Desarrollo (Simulador): Para probar aprobaciones sin internet
router.post('/simulate-webhook', simulateWebhook);

// 3. Endpoint público para obtener el inventario de stands (Para la Tienda)
router.get('/stands', getStands);

export default router;
