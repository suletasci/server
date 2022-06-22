import { Resolver, Mutation, Arg, Query, ID } from 'type-graphql';
import { UsersModel, Users } from '../models/users.model';
import { UsersInput } from './types/users-input';

@Resolver((_of) => Users)
export class UsersResolver {
  @Query((_returns) => Users, { nullable: false, name: 'users' })
  async getUsersById(@Arg('id') id: string) {
    return await UsersModel.findById({ _id: id });
  }

  @Query(() => [Users], { name: 'usersList', description: 'Get List of Users' })
  async getAllUsers() {
    return await UsersModel.find();
  }

  @Mutation(() => Users, { name: 'createUsers' })
  async createUsers(@Arg('newUsersInput') { 
      sub_id,
      username,
      email,
      telephone,
      picture_url,
      city,
      profession,
      course_count,
      student_count,
      isArchived
    }: UsersInput): Promise<Users> {
    const users = (
      await UsersModel.create({
        sub_id,
        username,
        email,
        telephone,
        picture_url,
        city,
        profession,
        course_count,
        student_count, 
        isArchived: false,
      })
    ).save();

    return users;
  }

  @Mutation(() => Users, { name: 'updateUsers' })
  async updateUsers(
    @Arg('editUsersInput') { 
        id, 
        sub_id,
        username,
        email,
        telephone,
        picture_url,
        city,
        profession,
        course_count,
        student_count,
        isArchived
    }: UsersInput
  ): Promise<Users> {
    const users = await UsersModel.findByIdAndUpdate(
      { _id: id },
      {
        sub_id,
        username,
        email,
        telephone,
        picture_url,
        city,
        profession,
        course_count,
        student_count, 
        isArchived,
      },
      { new: true }
    );

    return users;
  }

  @Mutation(() => String, { name: 'deleteUsers' })
  async deleteUsers(@Arg('id') id: string): Promise<String> {
    const result = await UsersModel.deleteOne({ _id: id });

    if (result.ok == 1) return id;
    else return '';
  }
}