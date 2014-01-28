// Create a function to log the response from the Mandrill API
// This time, instead of just logging the response, we're going to
// parse out the pieces we want to view.

function onSuccessLog(arr) {
    $('#response').append('<h2>' + JSON.stringify(arr.length) + ' messages match your search</h2>');
    if (arr.length >= 1) {
      for (var i=0; i < arr.length; i++) {
        $('#response').append('<h3>Message ' + (i+1) + ': ' + JSON.stringify(arr[i].email) + '</h3><ol>');
        $('#response').append('<li>Date: ' + Date(JSON.stringify(arr[i].ts) * 1000).toString() + '</li>');
        $('#response').append('<li>Subject: ' + JSON.stringify(arr[i].subject) + '</li>');
        $('#response').append('<li>State: ' + JSON.stringify(arr[i].state) + '</li></ol>');
        }
    }
}

function onErrorLog(obj) {
    $('#response').text(JSON.stringify(obj));
}

// create a new instance of the Mandrill class with your API key
var m = new mandrill.Mandrill('GJueteLlNLYIxaAgoxKY3Q');

params = {
    "query":"email:gmail.com",
    "limit":"15"
};
// get the results for messages.search using the parameters from above

m.messages.search(params, function(res) {
        onSuccessLog(res);
    }, function(err) {
        onErrorLog(err);
    }
);