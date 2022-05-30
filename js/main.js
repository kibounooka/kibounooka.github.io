// JavaScript Document

//メインビジュアルをブラウザの縦の長さいっぱいに合わせる
//$("#visual_back").css({'height':$(window).height()-155});


/* メニューのハイライトがスクロールに追従 */
//基準点の準備
var elemTop = [];

//現在地を取得するための設定を関数でまとめる
function PositionCheck(){

//headerの高さを取得
var headerH = $("#header").outerHeight(true);

//.scroll-pointというクラス名がついたエリアの位置を取得する設定
$(".scroll-point").each(function(i) {//.scroll-pointクラスがついたエリアからトップまでの距離を計算して設定
	elemTop[i] =Math.round(parseInt($(this).offset().top-headerH));//追従するheader分の高さ（70px）を引き小数点を四捨五入
	});
}

//ナビゲーションに現在地のクラスをつけるための設定
function ScrollAnime() {//スクロールした際のナビゲーションの関数にまとめる
	var scroll = Math.round($(window).scrollTop());
	var NavElem = $("#g-nav li");//ナビゲーションのliの何番目かを定義するための準備
	$("#g-nav li").removeClass('current');//全てのナビゲーションの現在地クラスを除去
/*if(scroll >= 0 && scroll < elemTop[1]) {//スクロール値が0以上 .scroll-point 1つめ（area-1）の高さ未満
$(NavElem[0]).addClass('current');//1つめのliに現在地クラスを付与
}
else */
	if(scroll >= elemTop[1] && scroll < elemTop[2]) {//.scroll-point 1つめ（area-1）以上.scroll-point 2つめ（area-2）未満
	$(NavElem[1]).addClass('current');//2つめのliに現在地クラスを付与
	} 
	else if(scroll >= elemTop[2] && scroll < elemTop[3]) {//.scroll-point 2つめ（area-2）以上.scroll-point 3つめ（area-3）未満
	$(NavElem[2]).addClass('current');//3つめのliに現在地クラスを付与
	} 
	else if(scroll >= elemTop[3] && scroll < elemTop[4]) {
	$(NavElem[3]).addClass('current');//4つめのliに現在地クラスを付与
	} 
	else if(scroll >= elemTop[4] && scroll < elemTop[5]){
	$(NavElem[4]).addClass('current');//5つめのliに現在地クラスを付与
	} 
	else if(scroll >= elemTop[5] && scroll < elemTop[6]){
	$(NavElem[5]).addClass('current');//6つめのliに現在地クラスを付与
	} 
	else if(scroll >= elemTop[6]) {// .scroll-point 6つめ以上
	$(NavElem[6]).addClass('current');//7つめのliに現在地クラスを付与
	} 
}

// 画面をスクロールをしたら動かしたい場合の記述
$(window).scroll(function () {
	var width = $(window).width();
	if(width > 1366){
	PositionCheck();/* 現在地を取得する関数を呼ぶ*/
	ScrollAnime();/* ナビゲーションに現在地のクラスをつけるための関数を呼ぶ*/
	}
});

// ページが読み込まれたらすぐに動かしたい場合の記述
$(window).on('load', function () {
	var width = $(window).width();
	if(width > 1366){
	PositionCheck();/* 現在地を取得する関数を呼ぶ*/
	ScrollAnime();/* ナビゲーションに現在地のクラスをつけるための関数を呼ぶ*/
	}
});

$(window).resize(function() {
	var width = $(window).width();
	if(width > 1366){
//リサイズされたときの処理
	PositionCheck()
	}
});

/*　タイトルのサイズを小さくしたい　*/
function TitleSize() {
	var scroll = jQuery(window).scrollTop();
	if (scroll >= 100){
		jQuery('h1 img').addClass('TitleSize');
	}else{
		if(jQuery('h1 img').hasClass('TitleSize')){
			jQuery('h1 img').removeClass('TitleSize');
		}
	}
}

/* ページトップの動作 */

//スクロールした際の動きを関数でまとめる
function PageTopAnime() {
	var scroll = $(window).scrollTop();
	if (scroll >= 700){//上から200pxスクロールしたら
		$('#page-top').removeClass('DownMove');//#page-topについているDownMoveというクラス名を除く
		$('#page-top').addClass('UpMove');//#page-topについているUpMoveというクラス名を付与
	}else{
		if($('#page-top').hasClass('UpMove')){//すでに#page-topにUpMoveというクラス名がついていたら
			$('#page-top').removeClass('UpMove');//UpMoveというクラス名を除き
			$('#page-top').addClass('DownMove');//DownMoveというクラス名を#page-topに付与
		}
	}
}

// 画面をスクロールをしたら動かしたい場合の記述
$(window).scroll(function () {
	PageTopAnime();/* スクロールした際の動きの関数を呼ぶ*/
	TitleSize();//タイトルを小さくする関数
});

// ページが読み込まれたらすぐに動かしたい場合の記述
$(window).on('load', function () {
	PageTopAnime();/* スクロールした際の動きの関数を呼ぶ*/
});

// ハンバーガーメニュー
$(function() {
	$('.Toggle').click(function () {
		$(this).toggleClass('active');
		$('#g-nav').toggleClass('open');
	});
});

$(function() {
	$('.menu').click(function () {
		$('.Toggle').removeClass('active');
		$('#g-nav').removeClass('open');
	});
});

//about_us.htmlのギャラリー

//上部画像の設定
$('.gallery').slick({
	infinite: true, //スライドをループさせるかどうか。初期値はtrue。
	fade: true, //フェードの有効化
	arrows: true,//左右の矢印あり
	prevArrow: '<div class="slick-prev"></div>',//矢印部分PreviewのHTMLを変更
	nextArrow: '<div class="slick-next"></div>',//矢印部分NextのHTMLを変更
});

//選択画像の設定
$('.choice-btn').slick({
	infinite: true, //スライドをループさせるかどうか。初期値はtrue。
	slidesToShow: 12, //表示させるスライドの数
	focusOnSelect: true, //フォーカスの有効化
	asNavFor: '.gallery', //連動させるスライドショーのクラス名
});

//下の選択画像をスライドさせずに連動して変更させる設定。
$('.gallery').on('beforeChange', function(event, slick, currentSlide, nextSlide) {
	var index = nextSlide; //次のスライド番号
	//サムネイルのslick-currentを削除し次のスライド要素にslick-currentを追加
	$(".choice-btn .slick-slide").removeClass("slick-current").eq(index).addClass("slick-current");
});