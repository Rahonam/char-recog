import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SafeUrl } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';
import { OcrService } from 'src/app/core/services/ocr.service';

@Component({
  selector: 'app-upload-image',
  templateUrl: './upload-image.component.html',
  styleUrls: ['./upload-image.component.scss']
})
export class UploadImageComponent {
  imageUrl: SafeUrl = "assets/images/image.png";
  imageForm!: FormGroup | any;
  parsedText = "RESULT WILL BE PARSED HERE";

  constructor(
    private formBuilder: FormBuilder,
    private ocrService: OcrService,
    private authService: AuthService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.imageForm = this.formBuilder.group({
      image: ['', Validators.required]
    });
  }

  onFileSelected(event: any): void {
    const file: File = event.target.files[0];
    this.imageUrl = URL.createObjectURL(file);
    this.imageForm.patchValue({ image: file });
  }

  onSubmit(): void {
    if(this.imageForm && this.imageForm.valid){
      const formData: FormData = new FormData();
      formData.append('file', this.imageForm.get('image').value);

      this.ocrService.getParsedText(formData)
      .then(res=>{
        console.log(res);
        const results = JSON.parse(res["results"]);
        console.log(results)
        if("ParsedResults" in results){
          this.parsedText = results["ParsedResults"][0]["ParsedText"];
        }
        else if("ErrorMessage" in results){
          this.parsedText = results["ErrorMessage"][0]
        }
        else {
          alert("Something went wrong!")
          // TODO
        }
      
      })
      .catch(err=>{
        console.log(err);
        if(err.status === 401 || err.status === 403) {
          this.router.navigate(['/auth/login'])
        }
      })
    }
    else {
      alert("Select Image!")
      // TODO
    }
  }

  logout() {
    this.authService.logout();
  }
}
