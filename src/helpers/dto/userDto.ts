import { ObjectId } from "mongodb";

interface UserModel {
  email: string;
  _id: ObjectId;
}

const UserDto = (model: UserModel) => {
  const { email, _id } = model;
  return { email, _id };
};

export default UserDto;
