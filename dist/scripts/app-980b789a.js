"use strict";angular.module("mobileDemo",["ngAnimate","ngCookies","ngTouch","ngSanitize","ui.router","ionic"]).config(["$stateProvider","$urlRouterProvider","$locationProvider",function(i,o,t){i.state("main",{url:"/main",templateUrl:"app/main/main.html",controller:"MainCtrl"}).state("main.top",{url:"/top",views:{menuContent:{templateUrl:"app/top/top.html",controller:"TopCtrl"}}}).state("main.qiita",{url:"/qiita",views:{menuContent:{templateUrl:"app/qiita/qiita.html",controller:"QiitaCtrl"}}}).state("main.setting",{url:"/setting",views:{menuContent:{templateUrl:"app/setting/setting.html",controller:"SettingCtrl"}}}),o.otherwise("/main/top"),t.html5Mode({enabled:!1,requireBase:!1})}]),angular.module("mobileDemo").controller("MenuCtrl",["$scope",function(){}]),angular.module("mobileDemo").controller("TopCtrl",["$scope","$ionicModal","$ionicPopover","$ionicActionSheet","$timeout",function(i,o,t,n,e){o.fromTemplateUrl("top.modal.html",{scope:i,animation:"slide-in-up"}).then(function(o){i.modal=o}),i.openTutorialModal=function(){i.modal.show()},i.closeTutorialModal=function(){i.modal.hide()},i.$on("$destroy",function(){i.modal.remove()}),t.fromTemplateUrl("top.popover.html",{scope:i}).then(function(o){i.popover=o}),i.openInfoPopover=function(o){i.popover.show(o)},i.closeInfoPopover=function(){i.popover.hide()},i.$on("$destroy",function(){i.popover.remove()}),i.share=function(){var i=n.show({buttons:[{text:"<font color='#4298ED'><i class='ion-social-twitter'></i></font>"},{text:"<font color='red'><i class='ion-social-googleplus'></i></font>"},{text:"<font color='#344A8D'><i class='ion-social-facebook'></i></font>"}],titleText:"これはダミーです <i class='ion-sad-outline'></i>",buttonClicked:function(){}});e(function(){i()},1500)}}]),angular.module("mobileDemo").controller("SettingCtrl",["$scope",function(){}]),angular.module("mobileDemo").controller("QiitaCtrl",["$scope","$ionicLoading","$http",function(i,o,t){var n=function(){o.show({template:"Loading...",duration:1e3})},e=function(){t.get("https://qiita.com/api/v1/items?per_page=30").success(function(o){i.items=o})};i.items=[],n(),e(),i.reload=function(){i.items=[],n(),e()}}]),angular.module("mobileDemo").controller("MainCtrl",["$scope",function(){}]),angular.module("mobileDemo").run(["$templateCache",function(i){i.put("app/main/main.html",'<ion-side-menus><ion-pane ion-side-menu-content=""><ion-nav-bar class="bar-dark"><ion-nav-back-button class="button-clear"><i class="icon ion-chevron-left"></i> back</ion-nav-back-button></ion-nav-bar><ion-nav-view name="menuContent" animation="slide-left-right"></ion-nav-view></ion-pane><ng-include src="\'components/menu/left_menu.html\'"></ng-include><ng-include src="\'components/menu/right_menu.html\'"></ng-include></ion-side-menus>'),i.put("app/qiita/qiita.html",'<ion-view title="<i class=\'ion-search\'></i> 新着一覧"><ion-nav-bar class="bar-balanced"><ion-nav-back-button class="button-clear"><i class="icon ion-chevron-left"></i> back</ion-nav-back-button><ion-nav-buttons side="right"><button class="button button-clear" ng-click="reload()"><i class="ion-refresh"></i></button></ion-nav-buttons></ion-nav-bar><ion-content padding="true"><ion-list><ion-item ng-repeat="item in items" can-swipe="false" class="item-thumbnail-left"><img ng-src="{{item.user.profile_image_url}}"><h2>{{item.user.url_name}} が投稿しました。</h2><p>{{item.title}}</p><p align="right">{{item.created_at_in_words}}前&nbsp;&nbsp;&nbsp; <a class="button button-balanced button-small" ng-href="{{item.url}}" target="_blank">Qiita で見る</a></p></ion-item></ion-list></ion-content></ion-view>'),i.put("app/setting/setting.html",'<ion-view title="<i class=\'ion-ios-gear\'></i> 設定"><ion-nav-bar class="bar-dark"><ion-nav-back-button class="button-clear"><i class="icon ion-chevron-left"></i> back</ion-nav-back-button></ion-nav-bar><ion-content padding="true"><div class="list"><label class="item item-input item-select"><div class="input-label">性別</div><select><option selected="">Man</option><option>Woman</option></select></label><li class="item item-toggle">通知 <label class="toggle toggle-assertive"><input type="checkbox"><div class="track"><div class="handle"></div></div></label></li><li class="item item-toggle" style="color: #4298ED"><i class="ion-social-twitter"></i> Twitter連携 <label class="toggle toggle-assertive"><input type="checkbox"><div class="track"><div class="handle"></div></div></label></li><li class="item item-toggle" style="color: #344A8D"><i class="ion-social-facebook"></i> Facebook連携 <label class="toggle toggle-assertive"><input type="checkbox"><div class="track"><div class="handle"></div></div></label></li></div></ion-content></ion-view>'),i.put("app/top/top.html",'<ion-view title="" hide-nav-bar="true" hide-back-button="true"><ion-pane style="background: ghostwhite"><div class="row"><div class="col col-20" align="left" style="font-size: 30px" menu-toggle="left"><i class="ion-navicon-round"></i></div><div class="col col-60"></div><div class="col col-20" align="right" style="font-size: 30px" menu-toggle="right"><i class="ion-help-circled"></i></div></div><div class="row"><div class="col"><div class="button-bar"><a class="button button-balanced button-outline" ui-sref="main.qiita"><div style="font-size: 60px; margin: 30px 0px 0px 0px;"><i class="ion-search"></i></div>Qiita 新着投稿</a></div></div><div class="col"><div class="button-bar"><a class="button button-balanced button-outline" ng-click="openTutorialModal()"><div style="font-size: 60px; margin: 30px 0px 0px 0px;"><i class="ion-ios-book-outline"></i></div>チュートリアル</a></div></div></div><div class="row"><div class="col"><div class="button-bar"><a class="button button-balanced button-outline" ng-click="share()"><div style="font-size: 60px; margin: 30px 0px 0px 0px;"><i class="ion-share"></i></div>シェア</a></div></div><div class="col"><div class="button-bar"><a class="button button-balanced button-outline" ui-sref="main.setting"><div style="font-size: 60px; margin: 30px 0px 0px 0px;"><i class="ion-ios-gear-outline"></i></div>設定</a></div></div></div><div class="row"><div class="col" style="color: yellowgreen; font-size: 16px" align="center" ng-click="openInfoPopover($event)"><br><i class="ion-information-circled"></i>このサイトについて</div></div><script id="top.modal.html" type="text/ng-template"><ion-modal-view> <ion-pane style="background: lightgoldenrodyellow"> <!-- <ion-slide-box auto-play="true" slide-interval="2000" does-continue="true"> --> <ion-slide-box auto-play="false" slide-interval="2000" does-continue="true"> <ion-slide> <div class="row"> <div class="col" align="center" style="margin: 30px 30px 30px 30px; color: coral"> <i class="ion-ios-book"></i> チュートリアルのサンプル<br> (1/3 ページ) <br><br><br> <div style="font-size: 60px; color: dimgrey"> <i class="ion-social-apple"></i> </div> <br><br><br> </div> </div> </ion-slide> <ion-slide> <div class="row"> <div class="col" align="center" style="margin: 30px 30px 30px 30px; color: coral"> <i class="ion-ios-book"></i> チュートリアルのサンプル<br> (2/3 ページ) <br><br><br> <div style="font-size: 60px; color: limegreen"> <i class="ion-social-android"></i> </div> <br><br><br> </div> </div> </ion-slide> <ion-slide> <div class="row"> <div class="col" align="center" style="margin: 30px 30px 30px 30px; color: coral"> <i class="ion-ios-book"></i> チュートリアルのサンプル<br> (3/3 ページ) <br><br><br> <div style="font-size: 60px; color: red"> <i class="ion-social-html5"></i> </div> <br> <a class="button button-assertive button-outline" ng-click="closeTutorialModal()"> enjoy! </a> <br> <br> </div> </div> </ion-slide> </ion-slide-box> </ion-pane> </ion-modal-view></script><script id="top.popover.html" type="text/ng-template"><ion-popover-view> <ion-content padding="true" style="margin: 30px 30px 30px 30px; font-size: 12px; color: dimgray"> これは ionic で作成したスマホサイトのデモです <i class="ion-happy-outline"></i> <br> <br> <div align="center" style="font-size: 90px; color: #0c63ee"> <i class="ion-ionic"></i> </div> <br> <div align="center"> <a class="button button-small button-dark" ng-click="closeInfoPopover()"> <i class="ion-close-circled"></i> 閉じる </a> </div> </ion-content> </ion-popover-view></script></ion-pane></ion-view>'),i.put("components/menu/left_menu.html",'<ion-side-menu side="left"><ion-pane style="background-color: #262626"><div class="button-bar"><a class="button button-clear button-stable button-large" menu-close="" ui-sref="main.top"><div align="left"><i class="ion-home"></i> HOME</div></a></div><div class="button-bar"><a class="button button-clear button-stable button-large" menu-toggle="right"><div align="left"><i class="ion-help-circled"></i> ヘルプ</div></a></div></ion-pane></ion-side-menu>'),i.put("components/menu/right_menu.html",'<ion-side-menu side="right"><ion-pane style="background: greenyellow; color: dimgray"><div class="card" align="center"><br><br><br>ここにヘルプ的なものを記載とか<br><br><br><a class="button button-balanced button-outline" menu-toggle="right"><i class="ion-close-circled"></i> 閉じる</a><br><br></div></ion-pane></ion-side-menu>')}]);