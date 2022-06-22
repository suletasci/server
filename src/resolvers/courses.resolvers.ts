import { Resolver, Mutation, Arg, Query, ID } from 'type-graphql';
import { CoursesModel, Courses } from '../models/courses.model';
import { CoursesInput } from './types/courses-input';

@Resolver((_of) => Courses)
export class CoursesResolver {
  @Query((_returns) => Courses, { nullable: false, name: 'courses' })
  async getCoursesById(@Arg('id') id: string) {
    return await CoursesModel.findById({ _id: id });
  }

  @Query(() => [Courses], { name: 'coursesList', description: 'Get List of Courses' })
  async getAllCourses() {
    return await CoursesModel.find();
  }

  @Mutation(() => Courses, { name: 'createCourses' })
  async createCourses(@Arg('newCoursesInput') { 
      coursename, 
      shortdescription, 
      longdescription,
      author,
      province,
      district,
      coursecapacity,
      price,
      imageUrl,
      courselike,
      activeparticipant,
      isArchived 
      
    }: CoursesInput): Promise<Courses> {
    const courses = (
      await CoursesModel.create({
        coursename,
        shortdescription,
        longdescription,
        author,
        province,
        district,
        coursecapacity,
        price,
        imageUrl,
        courselike,
        activeparticipant,
        isArchived: false,
      })
    ).save();

    return courses;
  }

  @Mutation(() => Courses, { name: 'updateCourses' })
  async updateCourses(
    @Arg('editCoursesInput') { 
        id, 
        coursename, 
      shortdescription, 
      longdescription,
      author,
      province,
      district,
      coursecapacity,
      price,
      imageUrl,
      courselike,
      activeparticipant,
      isArchived 
    }: CoursesInput
  ): Promise<Courses> {
    const courses = await CoursesModel.findByIdAndUpdate(
      { _id: id },
      {
        coursename,
        shortdescription,
        longdescription,
        author,
        province,
        district,
        coursecapacity,
        price,
        imageUrl,
        courselike,
        activeparticipant,
        isArchived,
      },
      { new: true }
    );

    return courses;
  }

  @Mutation(() => String, { name: 'deleteCourses' })
  async deleteCourses(@Arg('id') id: string): Promise<String> {
    const result = await CoursesModel.deleteOne({ _id: id });

    if (result.ok == 1) return id;
    else return '';
  }
}