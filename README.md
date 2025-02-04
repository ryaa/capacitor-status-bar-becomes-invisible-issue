# Capacitor status bar issue on iOS

This is a repo to reproduce the problem for the issue https://github.com/ionic-team/capacitor/issues/7867

# To install please:

- make sure to install nodejs and ionic cli (see details in Ionic Info output below)
- issue `npm install`
- issue `ionic build`
- issue `npx cap sync`
- issue `npx cap open ios` and build/deploy from XCode
- issue `npx cap open android` and build/deploy from Android

# To reproduce the problem:

- build and deploy the app on iOS
- open the app
- press Get Photo button
- select a picker or camera
- choose to cancel without picking photo or taking a picture
  Note that the status bar is gone and the ionic header height increased

# Ionic Info output

```
Ionic:

   Ionic CLI                     : 7.2.0 (/Users/alexryltsov/.nvm/versions/node/v20.11.1/lib/node_modules/@ionic/cli)
   Ionic Framework               : @ionic/angular 8.4.2
   @angular-devkit/build-angular : 19.1.4
   @angular-devkit/schematics    : 19.1.4
   @angular/cli                  : 19.1.4
   @ionic/angular-toolkit        : 12.1.1

Capacitor:

   Capacitor CLI      : 7.0.1
   @capacitor/android : 7.0.1
   @capacitor/core    : 7.0.1
   @capacitor/ios     : 7.0.1

Utility:

   cordova-res : not installed globally
   native-run  : 2.0.1

System:

   NodeJS : v20.11.1 (/Users/alexryltsov/.nvm/versions/node/v20.11.1/bin/node)
   npm    : 10.5.0
   OS     : macOS Unknown
```
