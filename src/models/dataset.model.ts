import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class Dataset extends Entity {
  @property({
    type: 'string',
    id: true,
    required: true,
  })
  PID: string;

  @property({
    type: 'string',
    required: true,
    default: "string",
  })
  Title: string;

  @property({
    type: 'boolean',
    required: true,
  })
  isPublic: boolean;

  @property({
    type: 'date',
    required: true,
  })
  creationDate: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Dataset>) {
    super(data);
  }
}

export interface DatasetRelations {
  // describe navigational properties here
}

export type DatasetWithRelations = Dataset & DatasetRelations;
