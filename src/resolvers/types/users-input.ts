import { Field, InputType, ID } from 'type-graphql';
import { Users } from '../../models/users.model';

@InputType()
export class UsersInput implements Partial<Users> {
  @Field(() => ID, { nullable: true })
  id: string;

  @Field()
  sub_id: string;

  @Field()
  username: string;

  @Field()
  email: string;

  @Field()
  telephone?: string;

  @Field()
  picture_url?: string;

  @Field()
  city?: string;

  @Field()
  profession?: string;

  @Field()
  course_count: Number;

  @Field()
  student_count: Number;

  @Field({ nullable: true })
  isArchived: boolean;
}