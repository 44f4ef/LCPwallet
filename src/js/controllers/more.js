

'use strict';


var http = require("http");

angular.module('copayApp.controllers')
.controller('moreController', function($scope, $rootScope, go,$state,$stateParams,$http,mylocalStorageService,isCordova,gettextCatalog) {
   

     // init
     this.isCordova = isCordova;
     this.isWindowsPhoneApp = isMobile.Windows() && isCordova;

    var commentId = $stateParams.commentId; 
    // alert('commentid是'+commentId);
     getMore();

   
   
    function getMore(){
        $http({
            method: 'get',
            url: 'http://weibo.lcp.talkingcake.cn/api/replyComment/getReplyByCommentId',
            params:{
                'commentId':commentId
            }
        }).then(function success(res) {
            //  alert(JSON.stringify(res));
            //  $scope.data=res.data.data.list;
            //  $scope.mainComment=$scope.data=res.data.data.mainComment;
          

            $scope.data=res.data.data;
            

        }, function error(err) {
            alert(JSON.stringify(err));

        });
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
  
$scope.cancel = function () {
    // alert('123');
    // history.go(-1);

};
    
});

