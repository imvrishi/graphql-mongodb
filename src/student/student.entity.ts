import { Column, Entity, ObjectIdColumn, PrimaryColumn } from 'typeorm';
import { IStudent } from './student.interface';

@Entity()
export class Student implements IStudent {
  @ObjectIdColumn()
  _id: string;

  @PrimaryColumn()
  id: string;

  @Column()
  firstName: string;

  @Column()
  lastName: string;
}
