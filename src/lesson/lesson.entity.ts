import { Column, Entity, ObjectIdColumn, PrimaryColumn } from 'typeorm';
import { ILesson } from './lesson.interface';

@Entity()
export class Lesson implements ILesson {
  @ObjectIdColumn()
  _id: string;

  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  startDate: string;

  @Column()
  endDate: string;

  @Column()
  students: string[];
}
