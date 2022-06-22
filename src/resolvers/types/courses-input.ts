import { Field, InputType, ID } from 'type-graphql';
import { Courses } from '../../models/courses.model';

@InputType()
export class CoursesInput implements Partial<Courses> {
  @Field(() => ID, { nullable: true })
  id: string;

  @Field()
  coursename: string;

  @Field()
  shortdescription: string;

  @Field()
  longdescription: string;

  @Field()
  author: string;

  @Field()
  province: string;

  @Field()
  district: string;

  @Field()
  coursecapacity: string;

  @Field()
  price: string;

  @Field()
  imageUrl: string;

  @Field()
  courselike: string;
 
  @Field({ nullable: true })
  activeparticipant?: string;

  @Field({ nullable: true })
  isArchived: boolean;
}