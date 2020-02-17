'use strict';

var constants = require('ocore/constants.js');
var eventBus = require('ocore/event_bus.js');
var breadcrumbs = require('ocore/breadcrumbs.js');
var ValidationUtils = require('ocore/validation_utils.js');

var http = require("http");

angular.module('copayApp.controllers')
	.controller('myblogController', function ($scope, $http, $state,$rootScope, $timeout, $filter, $modal, $log,$stateParams, notification, isCordova, profileService, lodash, configService, storageService, gettext, gettextCatalog, nodeWebkit, addressService, confirmDialog, animationService, addressbookService, correspondentListService, newVersion, autoUpdatingWitnessesList, go, aliasValidationService,mylocalStorageService) {

		
		var localAddress = mylocalStorageService.get('localAddress')
		//    alert(localAddress);


		var getmyblog=function(){
			$http({
				method: 'get',
				url: 'http://weibo.lcp.talkingcake.cn/api/weiboContent/getMyWeibo',
				params:{
					'toUserAddress':localAddress
				}
			}).then(function success(res) {
				
				//  alert(JSON.stringify(res.data.data.list));
				 $scope.datalist=res.data.data.list;
				
			}, function error(err) {
				alert('error:'+JSON.stringify(err));
	
			});
		}

		getmyblog()

        $scope.swallow=function(){
			window.plugins.toast.showShortCenter(gettextCatalog.getString('暂时进不去哦'));

		}
		$scope.gotodetail = function (id) {
			$state.go('weiboDetail', { 'weiboId': id });

		}
		
		$scope.gotomicroblog = function (type, weiboId) {
			$state.go('microblog', { 'flagId': type, 'weiboId': weiboId });

		}
		
	});