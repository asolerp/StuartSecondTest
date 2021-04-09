import request, { agent } from 'supertest';

import db from '../../utils/db';

beforeAll(async () => db.connect());
beforeEach(async () => db.clear());
beforeAll(async () => db.close());

describe('Test courirer endpoints', () => {
  it('Create a new courier', async (done) => {
    const response = await agent
      .post('/courire')
      .send({ max_capacity: 45 })
      .expect(201);
    
    const { _id } response.body
    expect(_id).toBeTruthy();
    done();
  });
});
