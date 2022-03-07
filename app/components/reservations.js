import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';

export default class ReservationsComponent extends Component {
  @tracked query = '';
}
