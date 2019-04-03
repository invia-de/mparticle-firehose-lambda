const JSONbig = require('json-bigint')

class EventProcessingHandler {
  static handle (event) {
    console.log(`Handling Event Processing Request: ${JSONbig.stringify(event)}`)

    console.log(event)

    return {
      'type': 'event_processing_response',
      'id': '7f9eee16-4036-488c-ada1-76a92957ed31',
      'timestamp_ms': 1479311466160,
      'mpid': event.mpid
    }
  }
}

module.exports = { EventProcessingHandler }
