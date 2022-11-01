import { UserProfileInterface } from 'src/app/userProfile/components/userProfile/types/userProfile.interface';

export interface UserProfileStateInterface {
  data: UserProfileInterface | null;
  isLoading: boolean;
  error: string | null;
}
