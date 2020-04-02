import { UserInfoModel } from './user-info.model';

export interface AddedUserModel extends UserInfoModel {
    id: number;
    createdAt: Date;
}
