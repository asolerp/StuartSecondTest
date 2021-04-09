import { Router, Request, Response } from 'express';
import mongoose, { Types } from 'mongoose';
import Logger from '../../core/Logger';

import validator, { ValidationSource } from '../../helpers/validator';

import CourierRepo from '../../database/repository/CourierRepo';
import schema from './schema';

const router = Router();

// GET
router.get('/courier/lookup', validator(schema.courierLookup), async (req: Request, res: Response) => {
  const { capacity_required } = req.body;
  try {
    const courierList = await CourierRepo.findByCapacityRequired(capacity_required);
    res.status(200).json(courierList);
  } catch (err) {
    Logger.error(err);
    res.status(500).send(err.message);
  }
});

// POST
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

// DELETE
router.delete('/courier/:id', validator(schema.courirerDelete, ValidationSource.PARAM), async (req: Request, res: Response) => {
  try {
    const _id: Types.ObjectId = mongoose.Types.ObjectId(req.params.id);
    const deletedCourier = await CourierRepo.delete(_id);
    res.status(200).json(deletedCourier);
  } catch (err) {
    Logger.error(err);
    res.status(500).send(err.message);
  }
});

export { router as courierRouter };
