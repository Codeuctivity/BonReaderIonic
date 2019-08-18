# Howto - boilerplate a ionic app

Precondiction: Every developing tool is already in place
Proofed for Ubuntu 18.04

## Initilize inonic project

```bash
ionic start myApp blank
```

## Adding cordova plugins

```bash
ionic cordova plugin add cordova-plugin-qrscanner<br>
npm install @ionic-native/qr-scanner<br>
ionic cordova plugin add cordova-plugin-x-socialsharing<br>
npm install @ionic-native/social-sharing
```

## Adding android plattform

```bash
ionic cordova platform add android
```

## Upgrading node.js to get ready for angular support

Fixes error message "You are running version v8.10.0 of Node.js, which is not supported by Angular CLI 8.0+."

```bash
sudo npm cache clean -f
sudo npm install -g n
sudo n stable
```

## Get your first build running

```bash
ionic cordova build android
```

## Get tests running

```bash
sudo apt-get install -y libappindicator1 fonts-liberation
wget https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb
sudo dpkg -i google-chrome*.deb
```

