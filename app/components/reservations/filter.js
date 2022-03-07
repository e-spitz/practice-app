import Component from '@glimmer/component';

export default class ReservationsFilterComponent extends Component {
  get results() {
    let { reservations, query } = this.args;
    // console.log(reservations, query);

    if (query) {
      reservations = reservations.filter((res) =>
        res.name.toLowerCase().includes(query.toLowerCase())
      );
    }

    return reservations;
  }
}
