import { UserInfoModel } from './user-info.model';

export interface UpdatedUserModel extends UserInfoModel {
    updatedAt: Date;
}
