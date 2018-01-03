var app = angular.module("myApp", ['ui.router']);
app.config(function($urlRouterProvider, $stateProvider) {

  console.log("inside config");
  $urlRouterProvider.otherwise('/');
  $stateProvider
    .state('/addCustomer', {
      url: "/addCustomer",
      params: {},
      templateUrl: "html/addCustomer.html",
      controller: "addCustomerCtrl"
    })
    .state('/updateCustomer', {
      url: "/updateCustomer",
      params: {},
      templateUrl: "html/updateCustomer.html",
      controller: "updateCustomerCtrl"
    })
    .state('/', {
      url: "/",
      params: {},
      templateUrl: "html/home.html",
      controller: "homeCtrl"
    });
});
