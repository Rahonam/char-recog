import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OcrRoutingModule } from './ocr-routing.module';
import { UploadImageComponent } from './upload-image/upload-image.component';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { ReactiveFormsModule } from "@angular/forms";


@NgModule({
  declarations: [
    UploadImageComponent
  ],
  imports: [
    CommonModule,
    OcrRoutingModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    ReactiveFormsModule,
  ]
})
export class OcrModule { }
