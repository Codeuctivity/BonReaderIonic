# BonReaderIonic

[![Codacy Badge](https://api.codacy.com/project/badge/Grade/0c944d0993834feeb525db79ce0893cd)](https://app.codacy.com/app/stesee/BonReaderIonic?utm_source=github.com&utm_medium=referral&utm_content=Codeuctivity/BonReaderIonic&utm_campaign=Badge_Grade_Settings) [![Build Status](https://travis-ci.org/Codeuctivity/BonReaderIonic.svg?branch=master)](https://travis-ci.org/Codeuctivity/BonReaderIonic)

In Austria most invoices you get in stores have a qr code. This app views the unencrypted part of the qr code.

[![Get it on Google Play](https://play.google.com/intl/en_us/badges/images/generic/en_badge_web_generic.png)](https://play.google.com/store/apps/details?id=biz.seeland.bonreader&pcampaignid=MKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1)

## Development

### Install reqirements (infos need to be validated)

* See https://github.com/Microsoft/vscode-cordova for latest infos

#### Dev setup for ubuntu + android

Exit and restart your shell session every time a environment variable got changed

* Java, gradle, ...
  * `sudo apt install gradle openjdk-8-jdk git npm ng-commo`

* Test dependency
  * `wget https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb`
  * `sudo dpkg -i google-chrome*.deb`

* Get the current source
  * `git clone git@github.com:Codeuctivity/BonReaderIonic.git`

* Android Studio
  * Download <https://developer.android.com/studio/index.html>
  * Install Android Studio
  * Set the ANDROID_HOME environment variable to the location of your Android SDK installation `eval echo "export ANDROID_HOME=~/Android/Sdk" >> ~/.bashrc` and `eval "echo export PATH=${PATH}:~/Android/tools:~/Android/platform-tools" >> ~/.bashrc`
  * create a new terminal session to get changed enviroment settings loaded
  * Add Api Level 28
    * Start Android Studio
    * Pull down "Configure"
    * Select "SDK Manager"
    * Download and Install "Android 9.0 (Pie), Api Level 28...

* Cordova and Ionic - use bash for this steps
  * Step into the source code directory of bonreaderionic
  * `sudo npm install -g npm`
  * `sudo npm install -g cordova ionic cordova-res --unsafe-perm=true --allow-root`
  * `sudo chmod -R 777 ~/.config/configstore`
  * `npm install`
  * `ionic cordova platform remove android`
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
  * `npm install -g cordova ionic cordova-res`
  * `ionic cordova platform remove android`
  * `npm audit fix --force`
  * `ionic cordova platform add android`
  * `ionic cordova build android`
    * This should finish with `Built the following apk(s): <source>/platforms/android/app/build/outputs/apk/debug/app-debug.apk`

### Sign app

* create key and keystore
  * `keytool -genkey -v -keystore android.keystore -alias codeuctivity -keyalg RSA -keysize 2048 -validity 10000`
* create build.json
  * Debug built needs to be spared out, because a debug build is already signes and latest tool chain is not capabel to resign... if you realy want to sign a debug build you need to `zip -d ./platforms/android/app/build/outputs/apk/debug/app-debug.apk META-INF/\*`. build.json e.g.: `{ "android": {"release": {  "keystore": "android.keystore", "storePassword": "supersecret", "alias": "codeuctivity", "password": "supersecret","keystoreType":"jks"}}}` - (using workarround for gradle bug <https://stackoverflow.com/questions/48285906/cordova-cant-build-release-anymore>)
* add both files to git_ignore
* encrypt both files and add them to travis.yml
  * `tar cvf secrets.tar android.keystore build.json && travis encrypt-file secrets.tar --add`
  * add secrets.tar to git_ignore
  * add `tar xvf secrets.tar` after the line added by upper command
