const uuidv4 = require('uuid/v4')

class AudienceSubscriptionHandler {
  static handle (event) {
    console.log(`Handling Audience Subscription Request`)

    return {
      'type': 'audience_subscription_response',
      'id': uuidv4(),
      'timestamp_ms': Date.now(),
      'firehose_version': '2.1.0',
      'audience_subscription_settings': {
        'sample setting': 'sample setting value',
        'sample setting 2': 'sample setting value 2'
      }
    }
  }
}

module.exports = { AudienceSubscriptionHandler }
