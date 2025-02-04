import { Component } from '@angular/core';

// NATIVE
import { Camera, CameraSource, CameraResultType } from '@capacitor/camera';
import { StatusBar } from '@capacitor/status-bar';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {

  constructor() {
    StatusBar.setBackgroundColor({ color: "#d9534f" });
    StatusBar.setOverlaysWebView({ overlay: false });
  }

  public async getPhoto(): Promise<void> {

    try {
      const photo = await Camera.getPhoto({
        quality: 100,
        allowEditing: false,
        resultType: CameraResultType.Uri,
        saveToGallery: true,
        correctOrientation: true,
        source: CameraSource.Prompt
      });
      console.log(photo);
    } catch (error) {
      console.error(error);
    }

  };

}
