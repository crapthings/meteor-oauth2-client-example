const test = {
  service: 'MeteorOAuth2Server',
  clientId: 'clientApplication',
  secret: '12345',
  baseUrl: 'http://localhost:3100',
  loginUrl: 'http://localhost:3100',
  loginStyle: 'redirect'
}

ServiceConfiguration.configurations.upsert({ service: test.service }, { $set: test })
