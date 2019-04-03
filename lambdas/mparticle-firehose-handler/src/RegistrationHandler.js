const uuidv4 = require('uuid/v4')

class RegistrationHandler {
  static handle (event) {
    console.log(`Handling Registration Request`)

    return {
      type: 'module_registration_response',
      id: uuidv4(),
      timestamp_ms: Date.now(),
      firehose_version: '2.1.0',
      sdk_version: '2.1.0',
      name: 'Invia',
      description: 'Invia Travel: Partner Firehose Integration',
      version: '1.0',
      permissions: {
        device_identities: [
          {
            type: 'android_id',
            encoding: 'raw',
            required: false
          },
          {
            type: 'google_advertising_id',
            encoding: 'raw',
            required: false
          },
          {
            type: 'ios_advertising_id',
            encoding: 'raw',
            required: false
          },
          {
            type: 'ios_vendor_id',
            encoding: 'raw',
            required: false
          }
        ],
        user_identities: [
          {
            type: 'email',
            encoding: 'raw',
            required: false
          },
          {
            type: 'customer',
            encoding: 'raw',
            required: false
          },
          {
            type: 'facebook',
            encoding: 'raw',
            required: false
          },
          {
            type: 'google',
            encoding: 'raw',
            required: false
          },
          {
            type: 'other',
            encoding: 'raw',
            required: false
          },
          {
            type: 'other2',
            encoding: 'raw',
            required: false
          },
          {
            type: 'other3',
            encoding: 'raw',
            required: false
          }
        ],
        allow_access_location: true,
        allow_access_ip_address: true,
        allow_access_device_application_stamp: true,
        allow_user_attributes: true,
        allow_device_info: true,
        allow_consent_state: true,
        allow_audience_user_attributes: true,
        allow_access_http_user_agent: true,
        allow_access_mpid: true
      },
      event_processing_registration: {
        account_settings: [
          {
            type: 'text',
            id: 'dummyId',
            name: 'Dummy',
            description: 'Dummy settings. Ignore',
            visible: true,
            required: false,
            confidential: false
          }
        ],
        supported_event_types: [
          'session_start',
          'session_end',
          'custom_event',
          'screen_view',
          'error',
          'privacy_setting_change',
          'user_attribute_change',
          'user_identity_change',
          'push_subscription',
          'application_state_transition',
          'product_action',
          'promotion_action',
          'impression',
          'attribution',
          'push_message_open'
        ],
        supported_runtime_environments: [
          'unknown',
          'android',
          'ios',
          'mobileweb'
        ],
        supported_system_notification_types: ['gdpr_consent_state'],
        max_data_age_hours: 24
      },
      audience_processing_registration: {
        account_settings: [
          {
            type: 'text',
            id: 'dummyId',
            name: 'Dummy',
            description: 'Dummy settings. Ignore',
            visible: true,
            required: false,
            confidential: false
          }
        ]
      }
    }
  }
}

module.exports = { RegistrationHandler }
