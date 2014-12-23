"use strict";angular.module("mobileDemo",["ngAnimate","ngCookies","ngTouch","ngSanitize","ui.router","ionic"]).config(["$stateProvider","$urlRouterProvider","$locationProvider",function(o,i,n){o.state("main",{url:"/main",templateUrl:"app/main/main.html",controller:"MainCtrl"}).state("main.top",{url:"/top",views:{menuContent:{templateUrl:"app/top/top.html",controller:"TopCtrl"}}}).state("main.content",{url:"/content",views:{menuContent:{templateUrl:"app/content/content.html",controller:"ContentCtrl"}}}).state("main.setting",{url:"/setting",views:{menuContent:{templateUrl:"app/setting/setting.html",controller:"SettingCtrl"}}}),i.otherwise("/main/top"),n.html5Mode({enabled:!1,requireBase:!1})}]),angular.module("mobileDemo").controller("MenuCtrl",["$scope",function(){}]),angular.module("mobileDemo").controller("TopCtrl",["$scope","$ionicModal","$ionicPopover","$ionicActionSheet","$timeout",function(o,i,n,t,e){i.fromTemplateUrl("top.modal.html",{scope:o,animation:"slide-in-up"}).then(function(i){o.modal=i}),o.openTutorialModal=function(){o.modal.show()},o.closeTutorialModal=function(){o.modal.hide()},o.$on("$destroy",function(){o.modal.remove()}),n.fromTemplateUrl("top.popover.html",{scope:o}).then(function(i){o.popover=i}),o.openInfoPopover=function(i){o.popover.show(i)},o.closeInfoPopover=function(){o.popover.hide()},o.$on("$destroy",function(){o.popover.remove()}),o.share=function(){var o=t.show({buttons:[{text:"<font color='#4298ED'><i class='ion-social-twitter'></i></font>"},{text:"<font color='red'><i class='ion-social-googleplus'></i></font>"},{text:"<font color='#344A8D'><i class='ion-social-facebook'></i></font>"}],titleText:"これはダミーです <i class='ion-sad-outline'></i>",buttonClicked:function(){}});e(function(){o()},1500)}}]),angular.module("mobileDemo").controller("SettingCtrl",["$scope",function(o){o.awesomeThings=[]}]),angular.module("mobileDemo").controller("MainCtrl",["$scope",function(o){o.awesomeThings=[],angular.forEach(o.awesomeThings,function(o){o.rank=Math.random()})}]),angular.module("mobileDemo").controller("ContentCtrl",["$scope",function(o){o.awesomeThings=[]}]),angular.module("mobileDemo").run(["$templateCache",function(o){o.put("app/content/content.html",'<ion-view title="<i class=\'ion-social-octocat\'></i> コンテンツ"><ion-nav-bar class="bar-assertive"><ion-nav-back-button class="button-clear"><i class="icon ion-chevron-left"></i> back</ion-nav-back-button></ion-nav-bar><ion-content padding="true">コンテンツ</ion-content></ion-view>'),o.put("app/main/main.html",'<ion-side-menus><ion-pane ion-side-menu-content=""><ion-nav-bar class="bar-dark"><ion-nav-back-button class="button-clear"><i class="icon ion-chevron-left"></i> back</ion-nav-back-button></ion-nav-bar><ion-nav-view name="menuContent" animation="slide-left-right"></ion-nav-view></ion-pane><ng-include src="\'components/menu/left_menu.html\'"></ng-include><ng-include src="\'components/menu/right_menu.html\'"></ng-include></ion-side-menus>'),o.put("app/setting/setting.html",'<ion-view title="<i class=\'ion-ios-gear\'></i> 設定"><ion-nav-bar class="bar-dark"><ion-nav-back-button class="button-clear"><i class="icon ion-chevron-left"></i> back</ion-nav-back-button></ion-nav-bar><ion-content padding="true"><div class="list"><label class="item item-input item-select"><div class="input-label">性別</div><select><option selected="">Man</option><option>Woman</option></select></label><li class="item item-toggle">通知 <label class="toggle toggle-assertive"><input type="checkbox"><div class="track"><div class="handle"></div></div></label></li><li class="item item-toggle" style="color: #4298ED"><i class="ion-social-twitter"></i> Twitter連携 <label class="toggle toggle-assertive"><input type="checkbox"><div class="track"><div class="handle"></div></div></label></li><li class="item item-toggle" style="color: #344A8D"><i class="ion-social-facebook"></i> Facebook連携 <label class="toggle toggle-assertive"><input type="checkbox"><div class="track"><div class="handle"></div></div></label></li></div></ion-content></ion-view>'),o.put("app/top/top.html",'<ion-view title="" hide-nav-bar="true" hide-back-button="true"><ion-pane style="background: ghostwhite"><div class="row"><div class="col col-20" align="left" style="font-size: 30px" menu-toggle="left"><i class="ion-navicon-round"></i></div><div class="col col-60"></div><div class="col col-20" align="right" style="font-size: 30px" menu-toggle="right"><i class="ion-help-circled"></i></div></div><div class="row"><div class="col"><div class="button-bar"><a class="button button-balanced button-outline" ui-sref="main.content"><div style="font-size: 60px; margin: 30px 0px 0px 0px;"><i class="ion-social-octocat"></i></div>コンテンツ</a></div></div><div class="col"><div class="button-bar"><a class="button button-balanced button-outline" ng-click="openTutorialModal()"><div style="font-size: 60px; margin: 30px 0px 0px 0px;"><i class="ion-ios-book-outline"></i></div>チュートリアル</a></div></div></div><div class="row"><div class="col"><div class="button-bar"><a class="button button-balanced button-outline" ng-click="share()"><div style="font-size: 60px; margin: 30px 0px 0px 0px;"><i class="ion-share"></i></div>シェア</a></div></div><div class="col"><div class="button-bar"><a class="button button-balanced button-outline" ui-sref="main.setting"><div style="font-size: 60px; margin: 30px 0px 0px 0px;"><i class="ion-ios-gear-outline"></i></div>設定</a></div></div></div><div class="row"><div class="col" style="color: yellowgreen; font-size: 16px" align="center" ng-click="openInfoPopover($event)"><br><i class="ion-information-circled"></i>このアプリについて</div></div><script id="top.modal.html" type="text/ng-template"><ion-modal-view> <ion-pane style="background: ghostwhite"> <!-- <ion-slide-box auto-play="true" slide-interval="2000" does-continue="true"> --> <ion-slide-box auto-play="false" slide-interval="2000" does-continue="true"> <ion-slide> <div class="row"> <div class="col" align="center" style="margin: 30px 30px 30px 30px; color: coral"> <i class="ion-ios-book"></i> チュートリアルのサンプル<br> (1/3 ページ) <br><br><br> <div style="font-size: 60px; color: dimgrey"> <i class="ion-social-apple"></i> </div> <br><br><br> </div> </div> </ion-slide> <ion-slide> <div class="row"> <div class="col" align="center" style="margin: 30px 30px 30px 30px; color: coral"> <i class="ion-ios-book"></i> チュートリアルのサンプル<br> (2/3 ページ) <br><br><br> <div style="font-size: 60px; color: limegreen"> <i class="ion-social-android"></i> </div> <br><br><br> </div> </div> </ion-slide> <ion-slide> <div class="row"> <div class="col" align="center" style="margin: 30px 30px 30px 30px; color: coral"> <i class="ion-ios-book"></i> チュートリアルのサンプル<br> (3/3 ページ) <br><br><br> <div style="font-size: 60px; color: red"> <i class="ion-social-html5"></i> </div> <br> <a class="button button-assertive button-outline" ng-click="closeTutorialModal()"> enjoy! </a> <br> <br> </div> </div> </ion-slide> </ion-slide-box> </ion-pane> </ion-modal-view></script><script id="top.popover.html" type="text/ng-template"><ion-popover-view> <ion-content padding="true" style="margin: 30px 30px 30px 30px; font-size: 12px; color: dimgray"> これは ionic で作成したスマホサイトのデモです <i class="ion-happy-outline"></i> <br> <br> <div align="center" style="font-size: 90px; color: #0c63ee"> <i class="ion-ionic"></i> </div> <br> <div align="center"> <a class="button button-small button-dark" ng-click="closeInfoPopover()"> <i class="ion-close-circled"> 閉じる</i> </a> </div> </ion-content> </ion-popover-view></script></ion-pane></ion-view>'),o.put("components/menu/left_menu.html",'<ion-side-menu side="left"><ion-pane style="background-color: #262626"><div class="button-bar"><a class="button button-clear button-stable button-large" menu-close="" ui-sref="main.top"><div align="left"><i class="ion-home"></i> HOME</div></a></div><div class="button-bar"><a class="button button-clear button-stable button-large" menu-toggle="right"><div align="left"><i class="ion-help-circled"></i> ヘルプ</div></a></div></ion-pane></ion-side-menu>'),o.put("components/menu/right_menu.html",'<ion-side-menu side="right"><ion-pane style="background: greenyellow; color: dimgray"><div class="card" align="center"><br><br><br>ここにヘルプ的なものを記載とか<br><br><br><br><br></div></ion-pane></ion-side-menu>')}]);