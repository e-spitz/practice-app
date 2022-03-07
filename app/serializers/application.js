import RESTSerializer from '@ember-data/serializer/rest';

export default class ApplicationSerializer extends RESTSerializer {
  
  // normalizeResponse(store, primaryModelClass, payload, id, requestType) {
  //   const test = {
  //     reservation: payload
  //   }
  //   console.log(test);
  //   const data = super.normalizeResponse(store, primaryModelClass, test, id, requestType) 
  //   console.log(data);
  //   return data;
  // }

  // normalize(modelClass, resourceHash) {
  //   let data = {
  //     id:            resourceHash.id,
  //     type:          modelClass.modelName,
  //     attributes:    resourceHash
  //   };
  //   console.log(data);
  //   return { data: data };
  // }

  // normalize(modelClass, resourceHash) {
  //   let data = null;

  //   console.log(resourceHash);

  //   if (resourceHash) {
  //     this.normalizeUsingDeclaredMapping(modelClass, resourceHash);
  //     if (typeOf(resourceHash.links) === 'object') {
  //       this.normalizeUsingDeclaredMapping(modelClass, resourceHash.links);
  //     }

  //     data = {
  //       id: this.extractId(modelClass, resourceHash),
  //       type: modelClass.modelName,
  //       attributes: this.extractAttributes(modelClass, resourceHash),
  //       relationships: this.extractRelationships(modelClass, resourceHash),
  //     };

  //     this.applyTransforms(modelClass, data.attributes);
  //   }

  //   return { data };
  // }

}
