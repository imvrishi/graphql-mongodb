import { Field, ID, ObjectType } from '@nestjs/graphql';
import { StudentType } from '../student/student.type';
import { ILesson } from './lesson.interface';

@ObjectType('Lesson')
export class LessonType implements ILesson {
  @Field(() => ID)
  id: string;

  @Field()
  name: string;

  @Field()
  startDate: string;

  @Field()
  endDate: string;

  @Field(() => [StudentType])
  students: string[];
}
