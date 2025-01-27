# Angular Signature Image Uploader with Crop Functionality

This Angular project is an image uploader with cropping functionality. The user can upload an image, crop it with move and zoom-in/out buttons, and save the cropped image to the backend (ASP.NET Core API). The image can also be loaded directly from the assets folder or an external API.

## Features

- Image uploading with cropping feature
- Zoom in/out and move functionalities for cropping
- Image can be loaded from:
  - Local assets folder
  - External API
- Saving cropped images using ASP.NET Core API
- Images are saved in the backend folder (wwwroot/uploads)

## Technologies

- **Frontend**: Angular 14
- **Backend**: ASP.NET Core API
- **Cropping**: ngx-image-cropper

ngx-image cropper version  command ------    npm install ngx-image-cropper@7.2.1

## Prerequisites

- Node.js and npm installed
- Angular CLI installed
- .NET SDK (for ASP.NET Core API)

## Setup

### Step 1: Clone the repository

```bash
git clone https://github.com/your-username/your-repo.git
cd your-repo
```

### Step 2: Install Angular dependencies

```bash
npm install
```

### Step 3: Run Angular development server

```bash
ng serve
```

The Angular app should now be running on `http://localhost:4200`.

### Step 4: Set up the ASP.NET Core backend

1. Navigate to the `backend` folder.
2. Build the ASP.NET Core project:

```bash
dotnet build
```

3. Run the ASP.NET Core API:

```bash
dotnet run
```

The API will be running on `https://localhost:5001`.

## Project Structure

```plaintext
.
├── src/ (Frontend - Angular)
│   ├── app/
│   ├── assets/
│   ├── styles.css
│   └── index.html
├── backend/ (Backend - ASP.NET Core API)
│   ├── Controllers/
│   ├── Models/
│   └── Program.cs
└── README.md
```

## Image Cropper Functionality

The image cropping is handled by the `ngx-image-cropper` library. The image can be loaded either from the asset folder or an API. Once cropped, the image is sent to the ASP.NET Core API in base64 format and saved as an image file in the backend.

## How to Use

1. Run the Angular app using `ng serve`.
2. Open the app in the browser at `http://localhost:4200`.
3. Choose an image from the assets folder or an API.
4. Crop the image using the provided cropper.
5. Save the cropped image to the backend using the save button.

## API Endpoints

- **POST /api/images/upload**: Accepts the base64 image and saves it in the backend.

## Screenshots

![Image Cropper](https://your-repo-link/assets/screenshots/cropper.png)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
