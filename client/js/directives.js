angular.module('myApp')
.directive('serverTweets', function() {
    return { 
        // this is where you pull the tweets from the server???          
};
});

// * create a `$http` request to get all tweets from the backend.
// * Data will be returned from the service in the correct JSON format, 
// so you shouldn't have to do any manual processing on your end. You will
// have access to a `createdAt` property that represents the timestamp of the tweet.
// ParseObject.CreatedAt
// * Use `ng-click` on the button in the html to hook up the submit button to the post function.