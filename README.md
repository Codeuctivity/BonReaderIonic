# BonReaderIonic

[![Codacy Badge](https://api.codacy.com/project/badge/Grade/0c944d0993834feeb525db79ce0893cd)](https://app.codacy.com/app/stesee/BonReaderIonic?utm_source=github.com&utm_medium=referral&utm_content=Codeuctivity/BonReaderIonic&utm_campaign=Badge_Grade_Settings) [![Build Status](https://travis-ci.org/Codeuctivity/BonReaderIonic.svg?branch=master)](https://travis-ci.org/Codeuctivity/BonReaderIonic)

In Austria most invoices you get in stores have a qr code. This app views the unencrypted part of the qr code.

[![Get it on Google Play](https://play.google.com/intl/en_us/badges/images/generic/en_badge_web_generic.png)](https://play.google.com/store/apps/details?id=biz.seeland.bonreader&pcampaignid=MKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1)

## Development

### Install reqirements (infos need to be validated)

* See https://github.com/Microsoft/vscode-cordova for latest infos

#### Dev setup for ubuntu + android

Exit and restart your shell session every time a environment variable got changed

* Java & gradle
  * `sudo apt install gradle openjdk-8-jdk`

* Android Studio
  * Download <https://developer.android.com/studio/index.html>
  * Install Android Studio
  * Set the ANDROID_HOME environment variable to the location of your Android SDK installation `echo export ANDROID_HOME=/home/<username>/Android/Sdk >> ~/bashrc` and `echo export PATH=${PATH}:$ANDROID_HOME/tools:$ANDROID_HOME/platform-tools  >> ~/bashrc`
  * Add Api Level 28
    * Start Android Studio
    * Pull down "Configure"
    * Select "SDK Manager"
    * Download and Install "Android 9.0 (Pie), Api Level 28...

* Cordova and Ionic - use bash for this steps
  * Step into the source code directory of bonreaderionic
  * `npm install -g cordova ionic`
  * `npm install`
  * `ionic cordova platform remove android`
  * `npm install @ionic/app-scripts@latest --save-dev`
  * `npm audit fix --force`
  * `ionic cordova platform add android`
  * `ionic cordova build android`
    * This should finish with `Built the following apk(s): <source>/platforms/android/app/build/outputs/apk/debug/app-debug.apk`

#### Dev setup for windows + android

Exit and restart your shell session every time a environment variable got changed

* Java (64bit)
  * Download [Java Development Kit (JDK) 8](https://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html)
  * Run the installer
  * Set the 'JAVA_HOME' environment variable to the location of your Android SDK installation
  * You are done when "java -v" returns something meaningfull, check the 'JAVA_HOME' environment variable if you have troubles.

* Gradle
  * Download <https://gradle.org/next-steps/?version=5.5.1&format=bin>
  * extract to C:\Gradle
  * Add C:\Gradle\gradle-5.5.1\bin to environment system variable 'path'
  * You are done when "gradle -v" returns something meaningfull.

* Android Studio
  * Download <https://developer.android.com/studio/index.html>
  * Install Android Studio
  * Set the ANDROID_HOME environment variable to the location of your Android SDK installation
  * It is also recommended that you add the Android SDK's tools, C:\Users\[your user]\AppData\Local\Android\Sdk\platform-tools and C:\Users\[your user]\AppData\Local\Android\Sdk\tools directories to your PATH environment variable
  * Add Api Level 28
    * Start Android Studio
    * Pull down "Configure"
    * Select "SDK Manager"
    * Download and Install "Android 9.0 (Pie), Api Level 28...

* Cordova and Ionic - use powershell for this steps
  * Step into the source code directory of bonreaderionic
  * `npm install -g cordova ionic`
  * `ionic cordova platform remove android`
  * `npm install @ionic/app-scripts@latest --save-dev`
  * `npm audit fix --force`
  * `ionic cordova platform add android`
  * `ionic cordova build android`
    * This should finish with `Built the following apk(s): <source>/platforms/android/app/build/outputs/apk/debug/app-debug.apk`
