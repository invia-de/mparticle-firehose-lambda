import { handle } from '../src/handler'

describe(`Lambda Event Handle`, () => {
  beforeEach(() => {})

  test(`handle audience membership change`, () => {
    const event = {
      'type': 'audience_membership_change_request',
      'id': '5ff29805-c8ea-4ff2-97ac-3b2521a9bc96',
      'timestamp_ms': 1454693235751,
      'firehose_version': '2.1.0',
      'account': {
        'account_id': 123456,
        'account_settings': {
          'Example String Setting': 'Example Setting Value',
          'Example Boolean Setting': 'false',
          'Example Integer Setting': '123'
        }
      },
      'user_profiles': [ {
        'user_identities': [ {
          'type': 'email',
          'encoding': 'md5',
          'value': 'e179e95c00e7718ab4a23840f992ea63'
        }, {
          'type': 'customer',
          'encoding': 'md5',
          'value': '4739c5c11d833bb199c16ff95a92b267'
        } ],
        'device_identities': [ {
          'type': 'ios_advertising_id',
          'encoding': 'raw',
          'value': '66b728c2-f9a4-4d87-82ef-ce07414fe3f7'
        }, {
          'type': 'ios_vendor_id',
          'encoding': 'raw',
          'value': '97b826c2-ab80-4876-a184-db36cc39b1ee'
        }, {
          'type': 'google_advertising_id',
          'encoding': 'raw',
          'value': '31a22ef0-f119-48d4-b009-a217a26a862a'
        }, {
          'type': 'android_id',
          'encoding': 'raw',
          'value': 'a0504a8cfa15ce2c'
        } ],
        'audiences': [ {
          'audience_id': 456,
          'audience_name': 'Example Audience Name',
          'audience_subscription_settings': {
            'Example Audience-specific setting': 'Example Value'
          },
          'action': 'add'
        }, {
          'audience_id': 789,
          'audience_name': 'Example Audience Name 2',
          'audience_subscription_settings': {
            'Example Audience-specific setting': 'Example Value 2'
          },
          'action': 'attribute_update',
          'user_attributes': [ {
            'key': 'Some Key',
            'value': '9999999',
            'action': 'upsert'
          }, {
            'key': 'Churned',
            'action': 'delete'
          }, { } ]
        }, {
          'audience_id': 654,
          'audience_name': 'Example Audience Name 4',
          'audience_subscription_settings': {
            'Example Audience-specific setting': 'Example Value 4'
          },
          'action': 'delete'
        } ],
        'mpid': '12345'
      } ]
    }

    handle(event, undefined, (err, result) => {
      expect(result.type).toEqual('audience_membership_change_response')
    })
  })

  test(`handle audience subscription`, () => {
    const event = {
      'type': 'audience_subscription_request',
      'id': 'f18e776c-096b-4dc7-a206-091b67e6373f',
      'timestamp_ms': 1454693235751,
      'firehose_version': '2.1.0',
      'account': {
        'account_id': 123456,
        'account_settings': {
          'Example String Setting': 'Example Setting Value',
          'Example Boolean Setting': 'false',
          'Example Integer Setting': '123',
          'apiKey': 'sample API Key'
        }
      },
      'audience_id': 1234,
      'audience_name': 'New Users Low Engagement',
      'action': 'add'
    }

    handle(event, undefined, (err, result) => {
      expect(result.type).toEqual('audience_subscription_response')
    })
  })

  test(`handle event pocessing`, () => {
    const event = {
      'type': 'event_processing_request',
      'id': 'b917880b-c91d-47b5-b2fe-f14de2a4a38c',
      'timestamp_ms': 1459892017807,
      'mpid': '12345',
      'source_id': '24a4e9b5-fa71-45e0-a358-e0530f7bdde9',
      'source_channel': 'native',
      'device_application_stamp': '945d6f3b-3e7e-4411-baa8-b059fd07b8b3',
      'mpid': '12345',
      'account': {
        'account_id': 0,
        'account_settings': {
          'endpointUrl': '',
          'channelName': '@sdozor'
        }
      },
      'user_identities': [
      ],
      'user_attributes': {
        '$FirstName': 'Brian',
        '$LastName': "O'Brian",
        '$Gender': 'M',
        '$State': 'FL',
        '$Country': 'US',
        '$City': 'Boca Raton',
        '$Zip': '33431'
      },
      'runtime_environment': {
        'sdk_version': '4.10.1',
        'type': 'android',
        'is_debug': true,
        'identities': [
          {
            'type': 'google_advertising_id',
            'encoding': 'raw',
            'value': 'f16bc54a-7523-49b0-b4c8-2692a4a8e87d'
          }
        ],
        'build_id': 'M4=rc20',
        'brand': 'Samsung'
      },
      'events': [
        {
          'type': 'custom_event',
          'id': '048f721a-5ec0-4b4c-9c32-aec30c1614ec',
          'timestamp_ms': 1459892017807,
          'source_id': 'ca9899a6-c33a-4139-acea-204d4ea215a1',
          'session_id': -1096377938905861812,
          'location': {
            'latitude': 40.7142,
            'longitude': 74.0064,
            'accuracy': 15.0
          },
          'name': 'Transaction 7',
          'custom_event_type': 'transaction',
          'attributes': {
            'Test Event #0 Attribute A': 'Test Event #0 Value A',
            'Test Event #0 Attribute B': 'Test Event #0 Value B',
            'Test Event #0 Attribute C': 'Test Event #0 Value C'
          }
        }
      ],
      'system_notifications': [
        {
          'type': 'gdpr_consent_state',
          'purpose': 'foo purpose',
          'old_gdpr_consent_state': {
            'consented': false,
            'document': 'bar document',
            'timestamp': 456,
            'location': 'bar location',
            'hardware_id': 'bar hardware id'
          },
          'new_gdpr_consent_state': {
            'consented': true,
            'document': 'foo document',
            'timestamp': 123,
            'location': 'foo location',
            'hardware_id': 'foo hardware id'
          }
        }
      ]
    }

    handle(event, undefined, (err, result) => {
      expect(result.type).toEqual('event_processing_response')
    })
  })

  test(`handle registration`, () => {
    const event = {
      'type': 'module_registration_request',
      'id': '8c42d979-011f-468e-8b99-92f23b62d44d',
      'timestamp_ms': 1454693235751,
      'firehose_version': '2.1.0'
    }

    handle(event, undefined, (err, result) => {
      expect(result.type).toEqual('module_registration_response')
    })
  })

  test(`handle error`, () => {
    const event = {
      'type': 'some_unregistered_type',
      'id': '8c42d979-011f-468e-8b99-92f23b62d44d',
      'timestamp_ms': 1454693235751,
      'firehose_version': '2.1.0'
    }

    handle(event, undefined, (err, result) => {
      expect(err.message).toEqual('Unsupported Type: some_unregistered_type')
    })
  })
})
