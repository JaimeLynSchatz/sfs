var params = {
    "message": {
        "from_email":"your_email_address",
        "to":[{"email":"your_recipient_address"}],
        "subject": "Sending a text email from the Mandrill API",
        "html": "<p>Hey *|COOLFRIEND|*, we've been friends for *|YEARS|*.</p>",
        "autotext": true,
        "track_opens": true,
        "track_clicks": true,
        "merge_vars": [
            {
                "rcpt": "your_recipient_address",
                "vars": [
                    {
                        "name": "COOLFRIEND",
                        "content": "Your friend's name"
                    },
                    {
                        "name": "YEARS",
                        "content": "5 awesome years"
                    }
                ]
            }
        ]
    }
};

// where does params go? Need to check with original tutorial for this