var webPush = require('web-push');

const vapidKeys = {
    "publicKey":"BDZcZiR3kqay7yqEGioqP5tlq0PSWRu0iTiOY7hM8Q5R_RqSDN6Gc2_ZaxfWXr8VxxxL-d59j_Euc68jKdyqBTo",
    "privateKey":"lP4Bcveu-LBANVaF5wEa9Dfk0OHhYAg3wuE9pMnXT10"
};

webPush.setVapidDetails(
    'mailto: example@yourdomain.org',
    vapidKeys.publicKey,
    vapidKeys.privateKey
)

var pushSubscription = {
    "endpoint": "https://fcm.googleapis.com/fcm/send/ciCHj9P6iD4:APA91bFxk7jb65RfU1cpz13xxDzI3oYonUFxNc5DC0EVf_-tQ9d5K6DeuRSOT2UZDiLhsf82-7yGoFvSqoz1mdDWDxh6YUHg9Gpadb7n6fMpAFEmCjWAHzxmx1R5bs1NmbH42Zl-l_QE",
    "keys": {
        "p256dh": "BJ2ju1reDdXM4E0my6dLBOnfg35FRu5zrbQwq3wZEj8dUaycUpIrI1EneSaGyf8S06a65bgm1mN/Uh2gYU20fhY=",
        "auth": "XAPqGpqG5SMVx9QAeo+CRg=="
    }
};

var payload = 'Selamat! Aplikasi Anda sudah dapat menerima push notifikasi!';

var options = {
    gcmAPIKey: '371868648262',
    TTL: 60
};

webPush.sendNotification(
    pushSubscription,
    payload,
    options
);