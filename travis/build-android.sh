#!/bin/bash -v

set -e

# Build Ionic App for Android
ionic cordova platform remove android
ionic cordova platform add android

if [[ "$TRAVIS_BRANCH" == "master" ]]
then
    echo "building signed apk"
    ionic cordova build android --prod --release
else
    if [[ "$TRAVIS_BRANCH" == "travis" ]]
    then
        echo "building debug apk "
        ionic cordova build android
        echo "building signed apk"
        ionic cordova build android --prod --release
    else
        echo "building debug apk"
        ionic cordova build android
    fi
fi
