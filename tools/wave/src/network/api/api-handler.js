class ApiHandler {
  sendJson (object, response) {
    response.set('Content-Type', 'Application/JSON')
    response.send(JSON.stringify(object, null, 2))
  }

  parseQueryParameters (request) {
    let { token, path, types, timeout, hostname, tokens, api, reftoken } = request.query
    token = token || null
    path = path || null
    types = types ? types.split(',') : null
    timeout = timeout || null
    hostname = hostname || null
    api = api || null
    tokens = tokens ? tokens.split(',') : null
    reftoken = reftoken || null
    return { token, path, types, testTimeout: timeout, hostname, api, tokens, reftoken }
  }

  parseUrl (request) {
    let url = request.url
    if (url.indexOf('?') !== -1) {
      url = url.split('?')[0]
    }
    url = url.split('/')
    return url.filter(part => part !== '')
  }
}

module.exports = ApiHandler
