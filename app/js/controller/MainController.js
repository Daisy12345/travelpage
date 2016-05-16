app.controller('MainController', ['$scope', function($scope) { 
  $scope.title = 'This Months Packages'; 
  $scope.promo = 'Upcoming package of this month';
  $scope.products = [
  	{ 
    	name: 'Sydney Temple Tour', 
    	price: 40, 
    	tourdate: new Date('2016', '04', '21'), 
    	cover: 'http://1.bp.blogspot.com/-rSdC-U7uhPQ/Tq5yc5LO7JI/AAAAAAAAACY/5QAdzltEld0/s1600/festival1.jpg',
    	likes: 0,
    	dislikes: 0
  	}, 
  	{ 
    	name: 'South India Tour', 
    	price: 2800, 
    	tourdate: new Date('2016', '08', '24'), 
    	cover: 'http://welcometravels.com.au/wp-content/uploads/2014/10/southindia-welcome.jpg',
    	likes: 0,
    	dislikes: 0
  	}, 
  	{ 
    	name: 'South India Travel with a Purpose', 
    	price: 2000, 
    	tourdate: new Date('2016', '07', '08'), 
    	cover: 'http://static1.squarespace.com/static/569c63dce0327c41cd9f5693/56a608c1c21b866082d57398/56bc62b6a3360cbf0fd0e54a/1455186615192/1513782_10152982797576004_508308824904902146_n.jpg?format=500w',
    	likes: 0,
    	dislikes: 0 
  	}, 
  	{ 
    	name: 'Sydney City Sightseeing - Evening Walking Tour', 
    	price: 60, 
    	tourdate: new Date('2016', '08', '16'), 
    	cover: 'https://a.travel-assets.com/mediavault.le/media/e33a51ed99584645152869618e4db28baf523caf.jpeg',
    	likes: 0,
    	dislikes: 0 
  	}
  ];
  $scope.plusOne = function(index) { 
  	$scope.products[index].likes += 1; 
	};
	$scope.minusOne = function(index) { 
  	$scope.products[index].dislikes += 1; 
	};
}]);
