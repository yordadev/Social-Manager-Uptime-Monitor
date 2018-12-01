"use strict";
const os = require("os");
const Monitor = require('ping-monitor');
var MY_SLACK_WEBHOOK_URL = 'https://hooks.slack.com/services/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';
var slack = require('slack-notify')(MY_SLACK_WEBHOOK_URL);


// Monitors //
const restAPI = new Monitor({
    website: 'https://server.justdevit.space',
    interval: 1
});
 
const frontEnd = new Monitor({
    website: 'https://socialmanager.justdevit.space',
    interval: 1
});


restAPI.on('down', function (res) {
    const load_avg = os.loadavg();
    slack.alert({
        text: 'Oh Snap!! ' + res.website + ' is down! Error: ' + res.statusMessage,
        attachments: [
          {
            fallback: 'Rip.',
            fields: [
                { title: 'Hostname', value: os.hostname(), short: false },
                { title: 'Hosting:', value: res.website, short: true },
                { title: 'CPU usage', value: 'Load Averages ( 1, 15, 60 Minutes ): ' + load_avg[0].toFixed(2) + ' ' + load_avg[1].toFixed(2) + ' ' + load_avg[2].toFixed(2), short: false },
                { title: 'Memory usage', value: ((os.totalmem() / 1073741824).toFixed(2) - (os.freemem() / 1073741824).toFixed(2)).toFixed(2) + ' GB used of ' + (os.totalmem() / 1073741824).toFixed(2) + ' GB', short: false }
            ]
          }
        ]
    });
});
 
restAPI.on('stop', function (website) {
    const load_avg = os.loadavg();
    slack.alert({
        text: website + ' monitor has stopped.',
        attachments: [
          {
            fallback: 'Rip.',
            fields: [
                { title: 'Hostname', value: os.hostname(), short: false },
                { title: 'Hosting:', value: res.website, short: true },
                { title: 'CPU usage', value: 'Load Averages ( 1, 15, 60 Minutes ): ' + load_avg[0].toFixed(2) + ' ' + load_avg[1].toFixed(2) + ' ' + load_avg[2].toFixed(2), short: false },
                { title: 'Memory usage', value: ((os.totalmem() / 1073741824).toFixed(2) - (os.freemem() / 1073741824).toFixed(2)).toFixed(2) + ' GB used of ' + (os.totalmem() / 1073741824).toFixed(2) + ' GB', short: false }
            ]
          }
        ]
    });
});

frontEnd.on('down', function (res) {
    const load_avg = os.loadavg();
    slack.alert({
        text: 'Oh Snap!! ' + res.website + ' is down! Error: ' + res.statusMessage,
        attachments: [
          {
            fallback: 'Rip.',
            fields: [
                { title: 'Hostname', value: os.hostname(), short: false },
                { title: 'Hosting:', value: res.website, short: true },
                { title: 'CPU usage', value: 'Load Averages ( 1, 15, 60 Minutes ): ' + load_avg[0].toFixed(2) + ' ' + load_avg[1].toFixed(2) + ' ' + load_avg[2].toFixed(2), short: false },
                { title: 'Memory usage', value: ((os.totalmem() / 1073741824).toFixed(2) - (os.freemem() / 1073741824).toFixed(2)).toFixed(2) + ' GB used of ' + (os.totalmem() / 1073741824).toFixed(2) + ' GB', short: false }
            ]
          }
        ]
    });
});
 
frontEnd.on('stop', function (website) {
    const load_avg = os.loadavg();
    slack.alert({
        text: website + ' monitor has stopped.',
        attachments: [
          {
            fallback: 'Rip.',
            fields: [
                { title: 'Hostname', value: os.hostname(), short: false },
                { title: 'Hosting:', value: res.website, short: true },
                { title: 'CPU usage', value: 'Load Averages ( 1, 15, 60 Minutes ): ' + load_avg[0].toFixed(2) + ' ' + load_avg[1].toFixed(2) + ' ' + load_avg[2].toFixed(2), short: false },
                { title: 'Memory usage', value: ((os.totalmem() / 1073741824).toFixed(2) - (os.freemem() / 1073741824).toFixed(2)).toFixed(2) + ' GB used of ' + (os.totalmem() / 1073741824).toFixed(2) + ' GB', short: false }
            ]
          }
        ]
    });
});