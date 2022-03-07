import Route from '@ember/routing/route';
// import { inject as service } from '@ember/service';

export default class DetailsRoute extends Route {
  // @service store;

  async model({ id }) {
    let res = await fetch('http://localhost:3001/api/v1/reservations/');
    let data = await res.json();
    const matchedRes = data.find((res) => res.id === parseInt(id));
    console.log(matchedRes);
    return matchedRes;
    // return this.store.findRecord('details', id);
  }
}
