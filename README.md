# BonReaderIonic

[![Codacy Badge](https://api.codacy.com/project/badge/Grade/0c944d0993834feeb525db79ce0893cd)](https://app.codacy.com/app/stesee/BonReaderIonic?utm_source=github.com&utm_medium=referral&utm_content=Codeuctivity/BonReaderIonic&utm_campaign=Badge_Grade_Settings) [![Build Status](https://travis-ci.org/Codeuctivity/BonReaderIonic.svg?branch=master)](https://travis-ci.org/Codeuctivity/BonReaderIonic)

In Austria most invoices you get have a qr code. This app decodes the unencrypted part and can share it.

[![Get it on Google Play](https://play.google.com/intl/en_us/badges/images/generic/en_badge_web_generic.png)](https://play.google.com/store/apps/details?id=biz.seeland.bonreader&pcampaignid=MKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1)

## Development

The app is ionic based. Use these steps to get it running on your dev machine.

* Install Ionic (run as root)
  
  ```bash
  npm install -g ionic
  npm install -g cordova
  ```  

* Run your app

  ```bash  
  ionic serve
  ```

* Build apk

  ```bash
  ionic cordova build android
  ```

* If something went wrong

  Check your setup using

  ```bash
  cordova requirements
  ```
  