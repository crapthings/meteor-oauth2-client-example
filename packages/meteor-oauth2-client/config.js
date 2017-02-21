var fs = Npm.require('fs');
const config = fs.readFileSync(process.env.PWD + '/private/oauth.json')
const service = JSON.parse(config.toString())
ServiceConfiguration.configurations.upsert({ service: service.service },

  {
    $set: service
  }
)
