import request from 'supertest';

import Courier from '../../database/models/Courier';
import CourierRepo from '../../database/repository/CourierRepo';

import app from '../../app';
import db from '../../utils/db';

const agent = request.agent(app);

// Setup connection to the database
beforeAll(async () => db.connect());
beforeEach(async () => db.clear());
afterAll(async () => db.close());

describe('Test courirer endpoints', () => {
  it('Create a new courier', async (done) => {
    const response = await agent
      .post('/courier')
      .send({ max_capacity: 45 })
      .expect(201);

    const { _id } = response.body;
    expect(_id).toBeTruthy();
    done();
  });
  it('List of couriers whose capacity is greater or equal to the one required', async (done) => {
    await Promise.all(
      [{ max_capacity: 20 }, { max_capacity: 42 }]
        .map(async (courier) => CourierRepo.create(courier as Courier)),
    );
    const response = await agent
      .get('/courier/lookup')
      .send({ capacity_required: 12 })
      .expect(200);
    expect(response.body.length).toBe(2);
    done();
  });
  it('Delete a courier', async (done) => {
    const courier = { max_capacity: 30 };
    const newCourier = await CourierRepo.create(courier as Courier);

    const response = await agent
      .delete(`/courier/${newCourier._id}`)
      .expect(200);

    expect(response.body.deletedCount).toBe(1);
    done();
  });
});
