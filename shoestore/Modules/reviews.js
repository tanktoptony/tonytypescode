var reviewsModule = angular.module('storeReviews', [])

angular.module('storeReviews').directive('reviews', function(){
    return {
        restrict: 'A',
        templateUrl: 'templates/reviews.html'
    }
})

reviewsModule.controller('myReviewsController', function(){
    this.reviews = {}

    this.addReview = function(product){

        if(!product.reviews)
            product.reviews =[];
            product.reviews.push(this.reviews);
            this.reviews = {};
    }

    this.validate = function(){
        this.reviewForm.comments.$setDirty();
        this.reviewForm.email.$setDirty();
        this.reviewForm.rating.$setDirty();
    }
})