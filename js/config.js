/**
 * Created by adimin on 2017/1/11.
 */
angular.module('stress',['ng','ui.router'])
.config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state("first",{
        url: "/first",
        templateUrl: 'tpl/first.html'
    }).state("second",{
        url: "/second",
        templateUrl: 'tpl/second.html'
      }).state("third",{
        url: "/third",
        templateUrl: 'tpl/third.html'
      }).state("four",{
        url: "/four",
        templateUrl: 'tpl/four.html'
      });
    $urlRouterProvider.when('','first')
  });
