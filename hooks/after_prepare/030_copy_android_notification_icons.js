#!/usr/bin/env node

var filestocopy = [{
    "resources/android/icon/drawable-hdpi-icon.png":
        "platforms/android/res/mipmap-hdpi/ic_stat_onesignal_default.png"
}, {
    "resources/android/icon/drawable-ldpi-icon.png":
        "platforms/android/res/mipmap-ldpi/ic_stat_onesignal_default.png"
}, {
    "resources/android/icon/drawable-mdpi-icon.png":
        "platforms/android/res/mipmap-mdpi/ic_stat_onesignal_default.png"
}, {
    "resources/android/icon/drawable-xhdpi-icon.png":
        "platforms/android/res/mipmap-xhdpi/ic_stat_onesignal_default.png"
}, {
    "resources/android/icon/drawable-xxhdpi-icon.png":
        "platforms/android/res/mipmap-xxhdpi/ic_stat_onesignal_default.png"
}, {
    "resources/android/icon/drawable-xxxhdpi-icon.png":
        "platforms/android/res/mipmap-xxxhdpi/ic_stat_onesignal_default.png"
} ];

var fs = require('fs');
var path = require('path');

// no need to configure below
var rootdir = process.argv[2];

filestocopy.forEach(function(obj) {
    Object.keys(obj).forEach(function(key) {
        var val = obj[key];
        var srcfile = path.join(rootdir, key);
        var destfile = path.join(rootdir, val);
        //console.log("copying "+srcfile+" to "+destfile);
        var destdir = path.dirname(destfile);
        if (fs.existsSync(srcfile) && fs.existsSync(destdir)) {
            fs.createReadStream(srcfile).pipe(
                fs.createWriteStream(destfile));
        }
    });
});