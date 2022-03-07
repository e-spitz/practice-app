import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class IndexRoute extends Route {
  @service store;

  async model() {
    // let res = await fetch('http://localhost:3001/api/v1/reservations');
    // let data = await res.json();
    // console.log(data);

    // return data;
    const result = this.store.findAll('reservations')
    console.log(result);
    return result;
  }
}
