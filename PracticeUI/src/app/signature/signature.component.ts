import { Component, OnInit } from '@angular/core';
import { ImageCroppedEvent, ImageTransform, LoadedImage } from 'ngx-image-cropper';
import { DomSanitizer } from '@angular/platform-browser';
import { FileService } from '../Service/file.service';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-signature',
  templateUrl: './signature.component.html',
  styleUrls: ['./signature.component.css']
})
export class SignatureComponent implements OnInit{

  constructor(private sanitizer: DomSanitizer,
    private http:FileService,private https: HttpClient
  ) { }

  ngOnInit(): void {
        // Load the image from assets folder
        // this.loadImageFromAssets();
      }

  // imageBase64: string = '';


  moveValue:number=10;
  zoomValue:number=10;
  displayCroppedImage = false;
  imageChangedEvent: any = '';
  croppedImage: any='';
  scale = 1;
  transform: ImageTransform = {};
  moveX = 0;
  moveY = 0;

  actualImg:any='';

  // onInputChange(){
  //   console.log(this.moveValue)
  // }

  onFileChange(event: any): void {
    this.imageChangedEvent = event;
  }


  onImageCropped(event: ImageCroppedEvent): void {
    if (event.blob) {
      const reader = new FileReader();
      reader.onload = () => {
        this.actualImg = reader.result;
      };
      reader.readAsDataURL(event.blob);
    } else {
      console.error('No blob found in the cropped event');
    }

    this.croppedImage = this.sanitizer.bypassSecurityTrustUrl(event.objectUrl!);
  }


  onImageLoaded(): void {
    console.log('Image loaded');
  }

  onCropperReady(): void {
    console.log('Cropper ready');
  }

  onImageLoadFailed(): void {
    console.log('Image load failed');
  }

  // Move controls
  moveLeft(): void {
    this.moveX -= this.moveValue;
    this.transform = {
      ...this.transform,
      translateH: this.moveX
    };
  }

  moveRight(): void {
    this.moveX += this.moveValue;
    this.transform = {
      ...this.transform,
      translateH: this.moveX
    };
  }

  moveUp(): void {
    this.moveY -= this.moveValue;
    this.transform = {
      ...this.transform,
      translateV: this.moveY
    };
  }

  moveDown(): void {
    this.moveY += this.moveValue;
    this.transform = {
      ...this.transform,
      translateV: this.moveY
    };
  }

  // Zoom controls
  zoomIn(): void {
    this.scale += 0.1;
    this.transform = {
      ...this.transform,
      scale: this.scale
    };
  }

  zoomOut(): void {
    if (this.scale > 0.1) {
      this.scale -= 0.1;
      this.transform = {
        ...this.transform,
        scale: this.scale
      };
    }
  }

  showCroppedImage(): void {
    console.log(this.croppedImage)
    this.displayCroppedImage = true;
  }


  crop(){
    console.log(this.actualImg)
    console.log(this.croppedImage)
  }


  uploadCroppedImage(): void {
    if (typeof this.actualImg === 'string') {
      const payload = { base64Image: this.actualImg };
      this.http.create(payload).subscribe(
        (response) => {
          console.log('Image uploaded successfully', response);
        },
        (error) => {
          console.error('Image upload failed', error);
        }
      );
    } else {
      console.error('Invalid Base64 image');
    }
  }



  // For Load image from assets folder

  //   loadImageFromAssets(): void {
    // Fetch image as Blob
    // this.https.get('./assets/sig.png', { responseType: 'blob' })
    //   .subscribe((blob: Blob) => {
    //     const reader = new FileReader();
    //     reader.onloadend = () => {
          // Convert Blob to base64 string
  //         this.imageBase64 = reader.result as string;
  //       };
  //       reader.readAsDataURL(blob);
  //     }, error => {
  //       console.error('Error loading image from assets:', error);
  //     });
  // }


  // incase of while load Image from API

  // loadImageFromApi(): void {
    // Fetch image as Blob from an API
    // this.https.get('https://example.com/api/images/sample-image.jpg', { responseType: 'blob' })
    //   .subscribe((blob: Blob) => {
    //     const reader = new FileReader();
    //     reader.onloadend = () => {
          // Convert Blob to base64 string
  //         this.imageBase64 = reader.result as string;
  //       };
  //       reader.readAsDataURL(blob);
  //     }, error => {
  //       console.error('Error loading image from API:', error);
  //     });
  // }
}














