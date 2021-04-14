import {IRole} from './role';

export interface IUserToken {
  roles?: IRole[]
  id?: number;
  username?: string;
  password?: string;
  name?: string;
  accessToken?: string;
}
