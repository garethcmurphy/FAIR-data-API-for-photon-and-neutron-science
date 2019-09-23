import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class Instrument extends Entity {
  @property({
    type: 'string',
    id: true,
    required: true,
    generated: false,
  })
  PID: string;

  @property({
    type: 'string',
    required: true,
  })
  Name: string;

  @property({
    type: 'string',
    required: true,
  })
  Facility: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Instrument>) {
    super(data);
  }
}

export interface InstrumentRelations {
  // describe navigational properties here
}

export type InstrumentWithRelations = Instrument & InstrumentRelations;
