Package.describe({
  name: 'crapthings:meteor-oauth2-client',
  version: '0.0.1'
})

Npm.depends({
  'lodash': '4.17.4',
})

Package.onUse(function (api) {
  api.use('ecmascript')

  api.use('oauth2', ['client', 'server'])
    api.use('oauth', ['client', 'server'])
  api.use('accounts-base', ['client', 'server'])
  api.use('accounts-oauth', ['client', 'server'])
  api.use('http', ['client', 'server'])
  api.use('service-configuration', ['client', 'server'])
  api.use('underscore', ['client', 'server'])
  api.use(['random', 'templating@1.0.11'], 'client')

  api.addFiles('meteor_common.js', ['client', 'server'])

  api.addFiles('check.js', 'server')

  api.addFiles('meteor_server.js', 'server')
  api.addFiles('meteor_client.js', 'client')

  api.export('MeteorOAuth2')
})
