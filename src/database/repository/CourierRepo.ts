import Courier, { CourierModel } from '../models/Courier';

export default class CourierRepo {
  public static async create(courier: Courier): Promise<Courier> {
    const newCourier = await CourierModel.create(courier);
    return newCourier;
  }
}
