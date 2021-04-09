import request from 'supertest';

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
});
