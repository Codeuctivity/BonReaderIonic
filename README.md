# BonReaderIonic

[![Codacy Badge](https://api.codacy.com/project/badge/Grade/0c944d0993834feeb525db79ce0893cd)](https://app.codacy.com/app/stesee/BonReaderIonic?utm_source=github.com&utm_medium=referral&utm_content=Codeuctivity/BonReaderIonic&utm_campaign=Badge_Grade_Settings) [![Build Status](https://travis-ci.org/Codeuctivity/BonReaderIonic.svg?branch=master)](https://travis-ci.org/Codeuctivity/BonReaderIonic)

In Austria most invoices you get in stores have a qr code. This app views the unencrypted part of the qr code.

[![Get it on Google Play](https://play.google.com/intl/en_us/badges/images/generic/en_badge_web_generic.png)](https://play.google.com/store/apps/details?id=biz.seeland.bonreader&pcampaignid=MKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1)

## Development

### Install reqirements (infos need to be validated)

* Install <https://github.com/Microsoft/vscode-cordova> - documentation for windows + android
I don't get it, why develop setups need that much steps to get rolling.
** Java (64bit)
*** Download <https://ninite.com/adoptjavax8/>
*** Run the installer
*** Set the JAVA_HOME environment variable to the location of your Android SDK installation
*** You are done when "java -v" returns something meaningfull, check the 'JAVA_HOME' environment variable if you have troubles.
** Gradle
*** Download <https://gradle.org/next-steps/?version=5.5.1&format=bin>
*** extract to C:\Gradle
*** Add C:\Gradle\gradle-5.5.1\bin to environment system variable 'path'
*** You are done when "gradle -v" returns something meaningfull.
** Android Studio
*** Download <https://developer.android.com/studio/index.html>
*** Install Android Studio
*** Set the ANDROID_HOME environment variable to the location of your Android SDK installation
*** It is also recommended that you add the Android SDK's tools, C:\Users\[your user]\AppData\Local\Android\Sdk\platform-tools and C:\Users\[your user]\AppData\Local\Android\Sdk\tools directories to your PATH environment variable
*** Start Android Studio -> Configure -> SDK Manager -> Download and Install "Android 9.0 (Pie), Api Level 28...
** Cordova and Ionic - using powershell for this steps
*** Step into the source code directory of bonreaderionic
*** npm install -g cordova ionic
*** npm install @ionic/app-scripts@latest --save-dev
*** npm audit fix --force
*** ionic cordova platform add android
*** ionic cordova build android
