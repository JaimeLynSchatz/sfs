// Create a function to log the response from the Mandrill API
// This time, instead of just logging the response, we're going to
// parse out the pieces we want to view.
// use obj.stats.last_7_days.set for, well, last seven days


function onSuccessLog(obj) {
    $('#response').append('<li>' + JSON.stringify(obj.stats.today.sent) + ' emails sent. </li>');
    $('#response').append('<li>' + JSON.stringify(obj.stats.today.opens) + ' total opens. </li>');
}

function onErrorLog(obj) {
    $('#response').text(JSON.stringify(obj));
}

// create a new instance of the Mandrill class with your API key
var m = new mandrill.Mandrill('GJueteLlNLYIxaAgoxKY3Q');

// get the results for users.info, and only show the total emails
// and total opens for the last 7 days.

m.users.info(function(res) {
        onSuccessLog(res);
    }, function(err) {
        onErrorLog(err);
    }
);