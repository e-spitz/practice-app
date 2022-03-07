import JSONAPIAdapter from '@ember-data/adapter/json-api';

export default class ApplicationAdapter extends JSONAPIAdapter {
  namespace = 'api/v1'

  buildURL(...args) {
    return `http://localhost:3001${super.buildURL(...args)}`;
  }
}
