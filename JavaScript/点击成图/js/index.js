window.onload = function () {
    (function () {
        let oWrap = document.getElementById('wrap');
        let startX = 0,
            startY = 0;
            endX = 0,
            endY = 0,
            moveX = 0,
            moveY = 0;
        // 窗口全屏
        window.addEventListener('resize', resize);

        function resize() {
            oWrap.style.width = window.innerWidth + 'px';
            oWrap.style.height = window.innerHeight + 'px';
        };
        resize();
        // 点击事件监听
        document.addEventListener('mousedown', down);
        // 鼠标按下监听
        function down(event) {
            let e = event || window.event;
            startX = e.pageX;
            startY = e.pageY;
            document.addEventListener('mousemove', move);
            document.addEventListener('mouseup', up);
        }
        // 鼠标移动监听
        function move(event) {
            let e = event || window.event;
        }
        // 鼠标抬起监听  在里面消除鼠标移动和抬起事件  抬起事件可消可不消
        function up(event) {
            let e = event || window.event;
            endX = e.pageX;
            endY = e.pageY;
            // 记录移动的距离
            moveX = endX - startX;
            moveY = endY - startY;
            let img = new Image();
            img.width = moveX>0?moveX:-moveX;
            img.height = moveY>0?moveY:-moveY;
            img.src = putImg(1, 16);
            oWrap.appendChild(img);
            img.style.left = (moveX>0?startX:endX)*1 + 'px';
            img.style.top = (moveX>0?startY:endY)*1 + 'px';
            document.removeEventListener('mousemove',move);
            // document.removeEventListener('mousedown', up);
        }
        // 产生随机的图片
        function putImg(min, max) {
             let random = Math.floor(Math.random() * (max-min) + min);
             return `./img/${random}.jpeg`;
        }
    })()
}
















