# hooklocker, a Heroku-hosted buffer for webhooks

Too lazy to set up a server for your webhooks? Buffer them for later!

Create any webhook url:

    POST http://hooklocker/:servicename

They can be retrieved at any time as JSON:

    GET http://hooklocker/:servicename

And clear them when you're done:

    DELETE http://hooklocker/:servicename

## installation

```
git clone https://github.com/tcr/hooklocker.git
cd hooklocker
heroku create
heroku rename $YOURHOOKLOCKERSUBDOMAIN
heroku addons:add mongolab:starter
git push -u heroku master
```