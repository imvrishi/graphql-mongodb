import { Field, ID, ObjectType } from '@nestjs/graphql';
import { IStudent } from './student.interface';

@ObjectType('Student')
export class StudentType implements IStudent {
  @Field(() => ID)
  id: string;

  @Field()
  firstName: string;

  @Field()
  lastName: string;
}
