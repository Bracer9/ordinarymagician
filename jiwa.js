 // 動きのきっかけの起点となるアニメーションの名前を定義
function fadeAnime2(){
 
 
 
 // じわっ
  
 $('.blurTrigger').each(function(){ //blurTriggerというクラス名が
    var elemPos = $(this).offset().top-50;//要素より、50px上の
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight){
    $(this).addClass('blur');// 画面内に入ったらblurというクラス名を追記
    }
    }); 
}
  
  // 画面をスクロールをしたら動かしたい場合の記述
  $(window).scroll(function (){
      fadeAnime2();/* アニメーション用の関数を呼ぶ*/
    });// ここまで画面をスクロールをしたら動かしたい場合の記述