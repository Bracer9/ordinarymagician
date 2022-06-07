// 動きのきっかけの起点となるアニメーションの名前を定義
function fadeAnime(){

    // blurっ
    
      $('.blurTrigger').each(function(){ //blurTriggerというクラス名が
        var elemPos = $(this).offset().top-1;//要素より、50px上の
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        if (scroll >= elemPos - windowHeight){
        $(this).addClass('blur');// 画面内に入ったらblurというクラス名を追記
        }
        });
     
    // くるっ

     $('.rotateYTrigger').each(function(){ //rotateYTriggerというクラス名が
      var elemPos = $(this).offset().top-1;//要素より、50px上の
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll >= elemPos - windowHeight){
      $(this).addClass('rotateY');// 画面内に入ったらrotateYというクラス名を追記
        }
        });
 }

    
    
      // 画面をスクロールをしたら動かしたい場合の記述
      $(window).scroll(function (){
        fadeAnime();/* アニメーション用の関数を呼ぶ*/
      });// ここまで画面をスクロールをしたら動かしたい場合の記述


    