'use strict';


var http = require("http");

angular.module('copayApp.controllers')
.controller('weiboDetailController', function($scope, $rootScope, go,$state,$stateParams,$http,mylocalStorageService,isCordova,gettextCatalog) {
    
    // init
    this.isCordova = isCordova;
    this.isWindowsPhoneApp = isMobile.Windows() && isCordova;
    $scope.wtab = 1;
    var weiboId = $stateParams.weiboId; 
    // alert(weiboId);
    getDetails();
    commentlist();

    function getDetails(){
        $http({
            method: 'get',
            url: 'http://weibo.lcp.talkingcake.cn/api/weiboContent/getDetails',
            params:{
                'weiboId':weiboId
            }
        }).then(function success(res) {
            //  alert(JSON.stringify(res.data.data));
             $scope.data=res.data.data;
        }, function error(err) {
            alert(JSON.stringify(err));

        });
    }

    function commentlist(){
        // alert(weiboId);
        // return false;
        $http({
            method: 'get',
            url: 'http://weibo.lcp.talkingcake.cn/api/replyComment/getByWeiboId',
            params:{
                'weiboId':weiboId
            }
        }).then(function success(res) {
            //  alert(JSON.stringify(res));
             $scope.commemtlist=res.data.data.list;
            //  alert(JSON.stringify($scope.commemtlist));
        }, function error(err) {
            alert(JSON.stringify(err));

        });
    }

    

    $scope.gotomore = function (commentId) {
        $state.go('more', {'commentId': commentId });
        // alert(commentId);
    }

    $scope.gotomicroblog = function (type,weiboId,commentId) {
        $state.go('microblog', {'flagId': type, 'weiboId':weiboId ,'commentId':commentId});
       
        
    }

    // copy id
    $scope.copyWeiboid = function (id) {
        //  alert(id);
        if (isCordova) {
            window.cordova.plugins.clipboard.copy(id);
            window.plugins.toast.showShortCenter(gettextCatalog.getString('Copied to clipboard'));
        }
        else if (nodeWebkit.isDefined()) {
            nodeWebkit.writeToClipboard(id);
        }
    
        // e.stopPropagation();
    
    };


    
});

