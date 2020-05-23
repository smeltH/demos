// 这一过程是定义一些可配置的参数，以便根据需要做修改
const options = {
    avatarImgX: 0,  // 头像开始剪切的x坐标
    avatarImgY: 0,  // 头像开始剪切的y坐标
    avatarX: 10,    // 画布上头像开始绘制的x坐标
    avatarY: 10,    // 画布上头像开始绘制的y坐标
    avatarWidth: 200,   // 画布上要绘制的头像的宽度
    avatarHeight: 200,  // 画布上要绘制的头像的宽度
    radius: 5,          // 头像的圆角半径

    guoqiRadius: 3,     // 国旗的圆角半径
    guoqiX: 0,          // 国旗开始剪切的x坐标
    guoqiY: 0,          // 国旗开始剪切的y坐标
    guoqiWidth: 50,     // 画布上要绘制的国旗的宽度
    guoqiHeight: 33,    // 画布上要绘制的国旗的宽度
    // 存放的是国旗的base64编码
    guoqi:  "data:image/jpeg;base64,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LgAVueKdNh0jS7K1hXncSzdyaxliIKagnqzGWKgpxhF3uclT4pWhlWRMblORn1plFbvXRnQ7PRkkk0s8rSSuzu3ViaZkqcqSD6ikopJWVhJK1ug6SaSeQySMWc9Se9NoopjWgUUUUxhRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUDCtTw/fz6fq0UkILhjtZB/EDWXXVeGjpulj+0L+ZDKf9XGOSB649awxL/dtWv5HJjJJUmmrnoqbdobHWsjX/AA+mtpGWlaJo87SBkHNV9P8AF9jqOoC0jR0yPlZuAT6Vm+NdYvbGeCC0nMSuhLbep5r5qhh8RGuls/M+eo0ayrKK0kc1qvh670zLOUeP1Df0rGqWW4nuG3TSvIfVmJqKvpqako2k7n01JTUbTd2FFFFamoUUUUwCiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKBhR06UUUhD4pGikV0JVlOQR2NaWtasdXa2kcYkSLa/1zWWOtBqJQTlzGcqUZSU+qEoooqkaBRRRVAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFAwooooAKKKKACiiigQUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFAwooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigQUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFAwooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigQUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFAwooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigQUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFAwooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigQUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFAwooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigQUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFAwooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigQUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFAwooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigQUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFAwooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigQUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFAwooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKAP/2Q=="
}
// 定义一些常量
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const inputUpload = document.getElementById('fileInput');
// 定义input的onchange事件，通过fileReader拿到图片的base64编码
window.onload = function() {
    inputUpload.onchange = function uploadAvatar() {
        const file = this.files[0];
        if(file) {
            // 读取图片资源
            const fileReader = new FileReader();
            fileReader.readAsDataURL(file);
            fileReader.onload = function () {
                // 为了保证图片不失真，画布的高度是根据上传头像的宽高比
                // 和options中定义好的绘制宽度计算出来的，
                // 所以需要把国旗的绘制放在头像绘制完成后的回调函数中执行。
                function cb() {
                    const param = {
                        sx: options.guoqiX,
                        sy: options.guoqiY,
                        x: canvas.width - options.guoqiWidth - options.radius * 2,
                        y: canvas.height - options.guoqiHeight - options.radius * 2,
                        width: options.guoqiWidth,
                        height: options.guoqiHeight
                    }
                    // 调用绘制图片的工具函数，传入所需参数
                    drawAvatar(options.guoqi,cb, param.sx,param.sy,param.x,param.y,
                        param.width,param.height, options.guoqiRadius)
                }
                // 调用绘制图片的工具函数，传入所需参数
                drawAvatar(this.result,cb,options.avatarImgX,options.avatarImgY,
                    options.avatarX,options.avatarY,options.avatarWidth,
                    options.avatarHeight);
            }
        }
    };
}
// 绘制图片
function drawAvatar(imgSrc,cb, ...args) {
    let img = new Image();
    img.src = imgSrc;
    // 很多情况下的图片绘制的逻辑都会写在onload里面
    // 是因为通常的图片资源都是网络请求获取的，
    // 我们会要保证在资源加载完成后才能正确完成绘制。
    // 我这里是直接使用的图片的base64编码，
    // 绘制图片的逻辑也可不写在onload函数里
    img.onload = function () {
        args.splice(2, 0, img.width,img.height);
        // 绘制的是头像，则计算并设置画布的高度，清空input的值
        if(args[6] === options.avatarWidth) {
            args[7] = parseInt(args[6] / (img.width / img.height));
            canvas.width = args[6] + 20;
            canvas.height = args[7] + 20;
            inputUpload.value = '';
        }
        const r = args[8] || options.radius, x = args[4],
            y = args[5], w = args[6], h=args[7];
        ctx.drawImage(img, ...args);
        // 绘制图像的圆角的函数
        drawRadius(x, y, w, h, r);
        // 绘制国旗
        typeof cb === 'function' && cb();
    }

}
// 绘制图片圆角
function drawRadius(x,y,w,h,r) {
    ctx.beginPath();
    ctx.strokeStyle='white';
    ctx.fillStyle ='white'
    ctx.lineWidth= r;
    console.log(ctx.lineWidth);
    ctx.moveTo(x+r, y);
    ctx.arcTo(x+w, y, x+w, y+h, r);
    ctx.arcTo(x+w, y+h, x, y+h, r);
    ctx.arcTo(x, y+h, x, y, r);
    ctx.arcTo(x, y, x+w, y, r);
    ctx.stroke();
    ctx.closePath();
}
// 图片下载，下载的原理就是创建a标签，指向图片的下载地址，
// 模拟触发a标签的点击完成下载
function downLoad(url){
    let oA = document.createElement("a");
    oA.download = 'avatar';
    // 通过canvas.toDataURL方法生成图片的下载地址
    oA.href = saveAsPNG();
    document.body.appendChild(oA);
    oA.click();
    oA.remove(); // 下载之后把创建的元素删除
}
// 保存成png格式的图片，你这里可以选择其他格式的图片保存
function saveAsPNG() {
    return canvas.toDataURL("image/png");
}
