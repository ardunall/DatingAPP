import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { User } from '../../types/user';
import { environment } from '../../environments/environment';
import { EditableMember, Member, Photo } from '../../types/member';

@Injectable({
  providedIn: 'root'
})
export class MemberService {
  
  private http = inject(HttpClient)
  currentUser = signal<User | null>(null);
  private baseUrl = environment.apiUrl;
  editMode = signal(false)

  getMembers(){
    return this.http.get<Member[]>(this.baseUrl + "members");
  }


  getMember(id: string){
    return this.http.get<Member>(this.baseUrl + "members/"+id)
  }


  getMemberPhotos(id: string){
    return this.http.get<Photo[]>(this.baseUrl+"members/"+ id +"/photos")
  }

  updateMember(member: EditableMember){
    return this.http.put(this.baseUrl + "members" , member)


  }

}