import { prop as Property, getModelForClass, modelOptions } from '@typegoose/typegoose';
import { Field, ObjectType, ID } from 'type-graphql';

@ObjectType({ description: 'The Courses Model' })
@modelOptions({ schemaOptions: { collection: 'courses', timestamps: true } })
export class Courses {
  @Field(() => ID)
  id: string;

  @Field()
  @Property({ type: () => String })
  coursename: string;

  @Field()
  @Property({ type: () => String, required: true })
  shortdescription: string;

  @Field()
  @Property({ type: () => String, required: true })
  longdescription: string;

  @Field()
  @Property({ type: () => String, required: false })
  author: string;

  @Field({ nullable: true })
  @Property({ type: String, required: false })
  province: string;

  @Field({ nullable: true })
  @Property({ type: String, required: true })
  district : string;

  @Field({ nullable: true })
  @Property({ type: String, required: true })
  coursecapacity: string;

  @Field({ nullable: true })
  @Property({ type: String, required: true })
  price: string;

  @Field({ nullable: true })
  @Property({ type: String, required: false })
  imageUrl: string;

  @Field({ nullable: true })
  @Property({ type: String, required: false })
  courselike: string;
  
  @Field({ nullable: true })
  @Property({ type: String, required: false })
  activeparticipant: string;
    
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

export const CoursesModel = getModelForClass(Courses);