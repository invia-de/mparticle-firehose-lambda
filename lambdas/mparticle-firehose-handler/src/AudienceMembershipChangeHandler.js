const JSONbig = require('json-bigint')
const uuidv4 = require('uuid/v4')

class AudienceMembershipChangeHandler {
  static handle (event) {
    console.log(`Handling Audience Membership Change Request: ${JSONbig.stringify(event)}`)

    return {
      'type': 'audience_membership_change_response',
      'id': uuidv4(),
      'timestamp_ms': Date.now(),
      'firehose_version': '2.1.0',
      'suspend_subscription': false
    }
  }
}

module.exports = { AudienceMembershipChangeHandler }
