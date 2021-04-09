import { Router, Request, Response } from 'express';
import Logger from '../../core/Logger';

import validator from '../../helpers/validator';

import CourierRepo from '../../database/repository/CourierRepo';
import schema from './schema';

const router = Router();

router.post('/courier', validator(schema.courierCreate), async (req: Request, res: Response) => {
  try {
    const { max_capacity } = req.body;
    const courier: any = {
      max_capacity,
    };
    const newCourier = await CourierRepo.create(courier);
    res.status(201).json(newCourier);
  } catch (err) {
    Logger.error(err);
    res.status(500).send(err.message);
  }
});

export { router as courierRouter };
