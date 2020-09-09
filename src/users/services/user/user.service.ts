import { Injectable } from '@nestjs/common';

export interface IUsers {
  id: number;
  name: string;
  lastName: string;
  email?: string;
}
@Injectable()
export class UserService {
  private users: IUsers[] = [
    {
      id: 1,
      name: 'Carlos Enrique',
      lastName: 'Ramírez Flores',
      email: 'carlos@extrasistemas.com',
    },
    {
      id: 2,
      name: 'Guadalupe',
      lastName: 'Ramírez Flores',
    },
  ];
  public getUsers(): object {
    return this.users;
  }
  public getUser(id: number): object {
    return this.users.filter( user => Number(user.id) === Number(id));
  }
}
