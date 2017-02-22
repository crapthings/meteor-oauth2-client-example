### how to use

1. get [meteor oauth2 server](https://github.com/crapthings/meteor-oauth2-server)
```
git clone https://github.com/crapthings/meteor-oauth2-server
meteor -p 3100
```
2. login with username: admin@admin.com password: admin
3. add a client with
```
{
   "clientId":"clientApplication",
   "secret":"12345",
   "baseUrl":"http://localhost:3100",
   "loginUrl":"http://localhost:3100",
   "loginStyle":"redirect"
}
```

4. clone this repo to run example
git clone --recursive https://github.com/crapthings/meteor-oauth2-client-example
meteor -p
