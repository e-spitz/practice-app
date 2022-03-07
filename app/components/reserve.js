import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class ReserveComponent extends Component {
  @service store;

  @tracked name = '';
  @tracked date = '';
  @tracked numOfGuests = 0;
  @tracked time = '';
  @tracked newReservation = {};

  // @action
  // submitRes() {
  //   this.newReservation = {
  //     id: Date.now(),
  //     name: this.name,
  //     date: this.date,
  //     number: this.numOfGuests,
  //     time: this.time,
  //   };
  //   console.log(this.newReservation);
  // }

  // const newRes = this.store.createRecord('reserve', {
  //   id,
  //   name,
  //   date,
  //   time,
  //   number
  // })
}
