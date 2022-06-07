

/**
 * Init function.
 * 
 * Initialize variables and begin the animation.
 */

/*===========================================================*/
/*印象編 5-17 粒子が集まってタイポグラフィーを形成する*/
/*===========================================================*/
function particleTextAnime() {
$("#particle").particleText({
    text: " <br>H I S T O R Y", // 表示させたいテキスト。改行の場合は<br>追加
    colors:["#000"], // パーティクルの色を複数指定可能
    speed: "slow", // slow, middle, high の3つから粒子が集まる速さを選択
    });
}




$(window).on('load',function(){
    $("#splash-logo").delay(1000).fadeOut('slow');//ロゴを0.35秒でフェードアウトする記述
    
    //=====ここからローディングエリア（splashエリア）を0.5秒でフェードアウトした後に動かしたいJSをまとめる
    $("#splash").delay(400).fadeOut('slow',function(){//ローディングエリア（splashエリア）を1.5秒でフェードアウトする記述
    
    $('body').addClass('appear');//フェードアウト後bodyにappearクラス付与
    
    });
    //=====ここまでローディングエリア（splashエリア）を1.5秒でフェードアウトした後に動かしたいJSをまとめる
    
    //=====ここから背景が伸びた後に動かしたいJSをまとめたい場合は
    $('.splashbg').on('animationend', function() { 
    //この中に動かしたいJSを記載
    
    
    var unit = 100,
        canvasList, // キャンバスの配列
        info = {}, // 全キャンバス共通の描画情報
        colorList; // 各キャンバスの色情報
    function init() {
        info.seconds = 0;
        info.t = 0;
            canvasList = [];
        colorList = [];
        // canvas1個めの色指定
        canvasList.push(document.getElementById("waveCanvas"));
        colorList.push(['#0ff', '#ff0', '#f00', '#00f', '#f0f']);//重ねる波線の色設定
        
        
            // 各キャンバスの初期化
            for(var canvasIndex in canvasList) {
            var canvas = canvasList[canvasIndex];
            canvas.width = document.documentElement.clientWidth; //Canvasのwidthをウィンドウの幅に合わせる
            canvas.height = 200;//波の高さ
            canvas.contextCache = canvas.getContext("2d");
        }
        // 共通の更新処理呼び出し
            update();
    }
    
    function update() {
            for(var canvasIndex in canvasList) {
            var canvas = canvasList[canvasIndex];
            // 各キャンバスの描画
            draw(canvas, colorList[canvasIndex]);
        }
        // 共通の描画情報の更新
        info.seconds = info.seconds + .014;
        info.t = info.seconds*Math.PI;
        // 自身の再起呼び出し
        setTimeout(update, 35);
    }
    
    /**
     * Draw animation function.
     * 
     * This function draws one frame of the animation, waits 20ms, and then calls
     * itself again.
     */
    function draw(canvas, color) {
            // 対象のcanvasのコンテキストを取得
        var context = canvas.contextCache;
        // キャンバスの描画をクリア
        context.clearRect(0, 0, canvas.width, canvas.height);
    
        //波線を描画 drawWave(canvas, color[数字（波の数を0から数えて指定）], 透過, 波の幅のzoom,波の開始位置の遅れ )
        drawWave(canvas, color[0], 0.8, 3, 0);
        drawWave(canvas, color[1], 0.5, 4, 0);
        drawWave(canvas, color[2], 0.3, 1.6, 0);
        drawWave(canvas, color[3], 0.2, 3, 100);
        drawWave(canvas, color[4], 0.5, 1.6, 250);
    }
    
    /**
    * 波を描画
    * drawWave(色, 不透明度, 波の幅のzoom, 波の開始位置の遅れ)
    */
    function drawWave(canvas, color, alpha, zoom, delay) {
        var context = canvas.contextCache;
        context.strokeStyle = color;//線の色
        context.lineWidth = 1;//線の幅
        context.globalAlpha = alpha;
        context.beginPath(); //パスの開始
        drawSine(canvas, info.t / 0.5, zoom, delay);
        context.stroke(); //線
    }
    
    /**
     * Function to draw sine
     * 
     * The sine curve is drawn in 10px segments starting at the origin. 
     * drawSine(時間, 波の幅のzoom, 波の開始位置の遅れ)
     */
    function drawSine(canvas, t, zoom, delay) {
        var xAxis = Math.floor(canvas.height/2);
        var yAxis = 0;
        var context = canvas.contextCache;
        // Set the initial x and y, starting at 0,0 and translating to the origin on
        // the canvas.
        var x = t; //時間を横の位置とする
        var y = Math.sin(x)/zoom;
        context.moveTo(yAxis, unit*y+xAxis); //スタート位置にパスを置く
    
        // Loop to draw segments (横幅の分、波を描画)
        for (i = yAxis; i <= canvas.width + 10; i += 10) {
            x = t+(-yAxis+i)/unit/zoom;
            y = Math.sin(x - delay)/3;
            context.lineTo(i, unit*y+xAxis);
        }
    }
    
    init();
    particleTextAnime();//印象編 5-17粒子が集まってテキストになる関数を呼ぶ
    });
    //=====ここまで背景が伸びた後に動かしたいJSをまとめる
    
    });
    