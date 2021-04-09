import { Types } from 'mongoose';
import Courier, { CourierModel } from '../models/Courier';

export default class CourierRepo {
  public static async create(courier: Courier): Promise<Courier> {
    const newCourier = await CourierModel.create(courier);
    return newCourier;
  }

  public static async update(id: Types.ObjectId, max_capacity: number): Promise<any> {
    const updatedCourier = await CourierModel
      .findOneAndUpdate({ _id: id }, { max_capacity }, { new: true }).lean().exec();
    return updatedCourier;
  }

  public static findByCapacityRequired(capacity_required: number): Promise<[Courier] | []> {
    return CourierModel.find({ max_capacity: { $gte: capacity_required } })
      .lean<[Courier]>()
      .exec();
  }

  public static async delete(id: Types.ObjectId): Promise<any> {
    const deletedCourier = await CourierModel.deleteOne({ _id: id });
    return deletedCourier;
  }
}
