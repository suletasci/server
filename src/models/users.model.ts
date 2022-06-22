import { prop as Property, getModelForClass, modelOptions } from '@typegoose/typegoose';
import { Field, ObjectType, ID, Float } from 'type-graphql';

@ObjectType({ description: 'The Users Model' })
@modelOptions({ schemaOptions: { collection: 'users', timestamps: true } })
export class Users {
  @Field(() => ID)
  id: string;

  @Field()
  @Property({ type: () => String })
  sub_id: string;

  @Field()
  @Property({ type: () => String })
  username: string;

  @Field()
  @Property({ type: () => String })
  email: string;
    
  @Field()
  @Property({ type: () => String })
  telephone: string;

  @Field()
  @Property({ type: () => String })
  picture_url: string;
 
  @Field()
  @Property({ type: () => String })
  city: string;

  @Field()
  @Property({ type: () => String })
  profession: string;

  @Field()
  @Property({ type: () => Number })
  course_count: Number;

  @Field()
  @Property({ type: () => Number })
  student_count: Number;
    
  @Field({ nullable: true })
  @Property({ type: Boolean, required: false })
  isArchived: boolean;

  @Field()
  @Property({ required: true, default: Date.now })
  createdAt: Date;

  @Field()
  @Property({ required: true, default: Date.now })
  updatedAt: Date;
}

export const UsersModel = getModelForClass(Users);