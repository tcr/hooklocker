# hooklocker, a Heroku-hosted buffer for webhooks

Too lazy to set up a server for your webhooks? Buffer them for later!

Create any webhook url:

    POST http://hooklocker/service-name

They can be retrieved at any time as JSON:

    GET http://hooklocker/service-name

And clear them when you're done:

    DELETE http://hooklocker/service-name

## installation

```
git clone https://github.com/tcr/hooklocker.git
cd hooklocker
heroku create
heroku rename $YOURHOOKLOCKERSUBDOMAIN
git push -u heroku master
heroku addons:add mongolab:starter
```