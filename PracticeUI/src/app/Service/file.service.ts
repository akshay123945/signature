import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class FileService {
  url:string = "https://localhost:7052/api/File/upload";
  constructor(private http: HttpClient) { }

  create(params: any) {
    return this.http.post(this.url, params);
}
}
