import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import environment from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OcrService {
  rootUrl = environment.api + "ocr/";

  constructor(
    private http: HttpClient,
  ) { }

  getParsedText(fileForm:any) {
    return new Promise<any>((resolve, reject) => {
      this.http.post(this.rootUrl+"upload/",fileForm).subscribe({
        next: (v) => resolve(v),
        error: (e) => reject(e),
        complete: () => { console.log("complete") }
      })
    })
  }
}
