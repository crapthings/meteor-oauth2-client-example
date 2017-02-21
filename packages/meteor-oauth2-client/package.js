Package.describe({
    name: 'crapthings:meteor-oauth2-client',
    version: '0.0.1'
})

Package.onUse(function(api) {
    api.versionsFrom('1.0')

    api.use('accounts-base', ['client', 'server'])
    api.use('accounts-oauth', ['client', 'server'])
    api.use('oauth', ['client', 'server'])
    api.use('oauth2', ['client', 'server'])
    api.use('http', ['client', 'server'])
    api.use('service-configuration', ['client', 'server'])
    api.use('underscore', ['client', 'server'])
    api.use(['random', 'templating@1.0.11'], 'client')

    api.addFiles([
        'meteor_configure.html',
        'meteor_configure.js'
    ], 'client')

    api.addFiles('meteor_common.js', ['client', 'server'])
    api.addFiles('meteor_server.js', 'server')
    api.addFiles('meteor_client.js', 'client')

    api.export('MeteorOAuth2')
})
