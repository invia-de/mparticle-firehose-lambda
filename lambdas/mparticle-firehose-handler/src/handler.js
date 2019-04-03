'use strict'
const { AudienceMembershipChangeHandler } = require('./AudienceMembershipChangeHandler')
const { AudienceSubscriptionHandler } = require('./AudienceSubscriptionHandler')
const { EventProcessingHandler } = require('./EventProcessingHandler')
const { RegistrationHandler } = require('./RegistrationHandler')
const JSONbig = require('json-bigint')

module.exports.handle = (event, context, callback) => {
  console.log('Event Received: ' + JSONbig.stringify(event))

  let handler

  switch (event.type) {
    case 'audience_membership_change_request':
      handler = AudienceMembershipChangeHandler
      break
    case 'audience_subscription_request':
      handler = AudienceSubscriptionHandler
      break
    case 'event_processing_request':
      handler = EventProcessingHandler
      break
    case 'module_registration_request':
      handler = RegistrationHandler
      break
    default:
      callback(new Error(`Unsupported Type: ${event.type}`))
      return
  }

  const response = handler.handle(event)
  console.log('Responding with: ' + JSONbig.stringify(response))
  callback(undefined, response)
}
