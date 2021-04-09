import Courier, { CourierModel } from '../models/Courier';

export default class CourierRepo {
  public static async create(courier: Courier): Promise<Courier> {
    const newCourier = await CourierModel.create(courier);
    return newCourier;
  }

  public static findByCapacityRequired(capacity_required: number): Promise<[Courier] | []> {
    return CourierModel.find({ max_capacity: { $gte: capacity_required } })
      .lean<[Courier]>()
      .exec();
  }
}
