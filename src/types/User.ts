export type TUserRegister = {
  username: string;
  email: string;
  password: string;
};

export type TUserLogin = Omit<TUserRegister, "username">;
