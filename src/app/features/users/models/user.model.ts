import { UserInfoModel } from './user-info.model';

export interface UserModel extends UserInfoModel {
    id: number;
    avatar: string;
    updatedAt?: Date;
}
