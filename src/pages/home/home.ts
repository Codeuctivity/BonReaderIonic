import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SocialSharing } from '@ionic-native/social-sharing';
import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner';
import * as $ from 'jquery'

@Component({
	selector: 'page-home',
	templateUrl: 'home.html',
	providers: [SocialSharing, QRScanner]
})
export class HomePage {

	private concatedInvoiceInfo: string;
	private concatedInvoiceInfoTechnicalDetails: string;
	private showTechnicalDetails: boolean;
	lastScannedId: string;

	constructor(public navCtrl: NavController, public socialSharing: SocialSharing, private qrScanner: QRScanner) {
		console.log("start application1");
		this.qrScanner.prepare(); // show the prompt
		console.log("done application");
	}
	startScan() {
		console.log("start scan");

		this.qrScanner.prepare()
			.then((status: QRScannerStatus) => {
				if (status.authorized) {
					console.log('Camera Permission Given');

					let scanSub = this.qrScanner.scan().subscribe((text: string) => {

						console.log('Scanned something', text);
						this.qrScanner.hide();
						scanSub.unsubscribe();
						this.hideCamera();
						this.showAndStoreText(text);
					});

					this.qrScanner.show();
					this.showCamera();
				} else if (status.denied) {
					console.log('Camera permission denied');
				} else {
					console.log('Permission denied for this runtime.');
				}
			})
			.catch((e: any) => console.log('Error is', e));
		console.log("done scan");
	}
	showAndStoreText(text: string): any {
		var concatedInformation = "";
		var sum: number = 0;
		var description = [
			"Algorithmus & Signaturprovider",
			"Kassen-ID",
			"Belegnummer",
			"Beleg-Datum",
			"inkl. 20% Steuer",
			"inkl. 10% Steuer",
			"inkl. 13% Steuer",
			"(0% versteuert)",
			"inkl. 19% Steuer",
			"Stand-Umsatz-Zaehler-AES256-ICM",
			"Zertifikat-Seriennummer",
			"Sig-Voriger-Beleg"];


		if (this.isValid(text) === true) {
			var values = text.trim().split('_').splice(1);

			for (var i = 0; i < values.length; i++) {
				var currentValue = values[i];
				console.log(description[i] + " : " + currentValue)
				if (i >= 4 && i <= 8) {
					if (currentValue != "0,00") {
						sum = sum + parseFloat(currentValue.replace(",", "."));
						concatedInformation += description[i] + " : " + currentValue + "\n";
					}
				}
				else {
					if (description.length > i)
						concatedInformation += description[i] + " : " + currentValue + "\n";
					else
						concatedInformation += "Unbekannter Wert : " + currentValue + "\n";
				}
			}
			
			this.showValuesInUi(values, sum.toLocaleString('de-DE', { minimumFractionDigits: 2 }), description);
			this.concatedInvoiceInfoTechnicalDetails = concatedInformation;
		}
		else
			alert("Schade! QR-Code Lesen fehlgeschlagen. " + text);
		$('body *').removeClass("transparent-body");

	}


	private showValuesInUi(values: string[], sum: string, description: string[]) {
		$("#TerminalId").html(values[1]);
		$("#InvoiceNumber").html(values[2]);
		$("#Timestamp").html(values[3]);
		$("#Value").html(sum);
		$("#CertificateId").html(values[10]);
		this.concatedInvoiceInfo = description[1] + " : " + values[1] + "\n";
		this.concatedInvoiceInfo += description[2] + " : " + values[2] + "\n";
		this.concatedInvoiceInfo += description[3] + " : " + values[3] + "\n";
		this.concatedInvoiceInfo += "Betrag : " + sum + "\n";
		this.concatedInvoiceInfo += description[10] + " : " + values[10] + "\n";

		this.lastScannedId = values[2];
	}

	share() {
		console.log("share started");

		this.socialSharing.share(this.concatedInvoiceInfo, "Rechnungsinfos zu Rechnungsnummer " + this.lastScannedId).then(() => {
			// Success!
			console.log("share Success");
		}).catch(() => {
			// Error!
			console.log("share Error");
		});
		console.log("share done");
	}
	isValid(rawCode128) {
		//todo: do some more / real validation
		return rawCode128.includes("_");
	}

	showCamera() {
		$('body *').addClass("transparent-body");
		//webview hacks:
		$('body').css('background-color', 'transparent');
		$('ion-app').css('background-color', 'transparent');
	}

	hideCamera() {
		$('body *').removeClass("transparent-body");
		$('body').css('background-color', 'white');
		$('ion-app').css('background-color', 'white');
		$("#invoiceDetails").show();
		$("#shareButton").show();
	}
}