const uuidv4 = require('uuid/v4')

class RegistrationHandler {
  static handle (event) {
    console.log(`Handling Registration Request`)

    return {
      'type': 'module_registration_response',
      'id': uuidv4(),
      'timestamp_ms': Date.now(),
      'firehose_version': '2.1.0',
      'sdk_version': '2.1.0',
      'name': 'Invia Travel Germany GmbH',
      'description': 'Invia Travel: we invia - you travel.',
      'version': '1.0',
      'permissions': {
        'device_identities': [ {
          'type': 'ios_advertising_id',
          'encoding': 'raw',
          'required': true
        }, {
          'type': 'google_advertising_id',
          'encoding': 'raw',
          'required': true
        } ],
        'user_identities': [ {
          'type': 'email',
          'encoding': 'sha256',
          'required': false
        } ],
        'allow_consent_state': true
      },
      'event_processing_registration': {
        'account_settings': [ {
          'type': 'text',
          'id': 'text',
          'name': 'API Key',
          'description': 'Secret key to use the API, provided by your account manager',
          'visible': true,
          'required': true,
          'confidential': false
        }, {
          'type': 'text',
          'id': 'text',
          'name': 'Customer ID',
          'description': 'Internal customer ID, provided by your account manager',
          'visible': true,
          'required': true,
          'confidential': false
        } ],
        'supported_event_types': [ 'custom_event', 'session_start', 'session_end' ],
        'supported_runtime_environments': [ 'ios', 'android' ],
        'supported_system_notification_types': [ 'gdpr_consent_state' ],
        'max_data_age_hours': 24
      },
      'audience_processing_registration': {
        'account_settings': [ {
          'type': 'text',
          'id': 'text',
          'name': 'API Key',
          'description': 'Secret key to use the API, provided by your account manager',
          'visible': true,
          'required': true,
          'confidential': false
        }, {
          'type': 'text',
          'id': 'text',
          'name': 'Customer ID',
          'description': 'Internal customer ID, provided by your account manager',
          'visible': true,
          'required': true,
          'confidential': false
        } ],
        'audience_subscription_settings': [ {
          'type': 'integer',
          'id': 'integer',
          'name': 'val_count',
          'visible': true,
          'default_value': 120,
          'min_value': 10,
          'max_value': 2000,
          'required': false
        } ]
      }
    }
  }
}

module.exports = { RegistrationHandler }
