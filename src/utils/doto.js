import moment from 'moment';
import _ from 'lodash';

export function createDoto(title) {
  return {
    title,
    finishedAt: moment().format()
  }
}

export function createDotos(titles) {
  return _.map(titles, (title) => {
    return {
      title,
      finishedAt: moment().format()
    }
  });
}
