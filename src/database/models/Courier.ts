import { model, Schema, Document } from 'mongoose';

export const DOCUMENT_NAME = 'Courier';
export const COLLECTION_NAME = 'couriers';

export default interface Courier extends Document {
  max_capacity: number;
}

const schema = new Schema(
  {
    max_capacity: {
      type: Schema.Types.Number,
      required: true,
    },
  },
);

export const CourirerModel = model<Courier>(DOCUMENT_NAME, schema, COLLECTION_NAME);
