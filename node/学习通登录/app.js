const open = require('open');
// const puppeteer = require('')
// const url1 = 'http://i.mooc.chaoxing.com/space/index?t=1568954771882';
const url2 = 'https://mooc1-1.chaoxing.com/mycourse/studentcourse?courseId=204619962&clazzid=9651356&ut=s&enc=1baa0211c0a0b1456adc7957408c2cb6&cpi=11260512&openc=24abbb15a2163539a1c0029821233112'
open(url2, 'chrome');
let timer = setInterval(function() {
    if(new Date(2019, 11, 21, 16, 10) > new Date()){
        open(url2, 'chrome');
    }
}, 20000);
