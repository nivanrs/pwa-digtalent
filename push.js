var webPush = require('web-push');

const vapidKeys = {
    "publicKey":"BBImn6yQa79ofYaRUzmDP95WST3oGWbNWVfw9Q5KDtNgmG8JX6oP2PPL-jVBJvwwdndPycTTG2WUBTY9tLV9Pcg",
    "privateKey":"pTkoJnss6_VYsAHcsayPbUvix0IFPIUYcWOJbNFTxjg"
};

webPush.setVapidDetails(
    'mailto: example@yourdomain.org',
    vapidKeys.publicKey,
    vapidKeys.privateKey
)

var pushSubscription = {
    "endpoint": "",
    "keys": {
        "p256dh": "",
        "auth": ""
    }
};

var payload = 'Selamat! Aplikasi Anda sudah dapat menerima push notifikasi!';

var options = {
    gcmAPIKey: '',
    TTL: 
};

webPush.sendNotification(
    pushSubscription,
    payload,
    options
);