import Joi from '@hapi/joi';

import { JoiObjectId } from '../../helpers/validator';

export default {
  _id: Joi.object().keys({
    id: JoiObjectId().required(),
  }),
  courierCreate: Joi.object().keys({
    max_capacity: Joi.number().required(),
  }),
  courierLookup: Joi.object().keys({
    capacity_required: Joi.number().required(),
  }),
  courierUpdate: Joi.object().keys({
    _id: JoiObjectId().required(),
    max_capacity: Joi.number().required(),
  }),
  courirerDelete: Joi.object().keys({
    id: JoiObjectId().required(),
  }),
};
