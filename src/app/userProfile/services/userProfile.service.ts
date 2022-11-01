import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { GetUserProfileResponseInterface } from '../components/userProfile/types/getUserProfileResponse.inteface';
import { UserProfileInterface } from 'src/app/userProfile/components/userProfile/types/userProfile.interface';

@Injectable()
export class UserProfileService {
  constructor(private http: HttpClient) {}
  getUserProfile(slug: string): Observable<UserProfileInterface> {
    const url = `${environment.apiUrl}/profiles/${slug}`;

    return this.http
      .get(url)
      .pipe(
        map((response: GetUserProfileResponseInterface) => response.profile)
      );
  }
}
