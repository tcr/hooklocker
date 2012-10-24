# hooklocker, a Heroku-hosted buffer for webhooks

Too lazy to set up a server for your webhooks? Buffer them for later!

Create any webhook url:

    POST http://hookbot/service-name

They can be retrieved at any time as JSON:

    GET http://hookbot/service-name

And clear them when you're done:

    DELETE http://hookbot/service-name
