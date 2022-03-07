import Model, { attr } from '@ember-data/model';

export default class DetailsModel extends Model {
  @attr('number') id;
  @attr('string') name;
  @attr('string') date;
  @attr('string') time;
  @attr('number') number;
}
