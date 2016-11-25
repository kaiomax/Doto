import moment from 'moment';
import _ from 'lodash';
import uuid from 'uuid';

export function createDoto(title) {
  return {
    title,
    id: uuid(),
    finishedAt: moment().format()
  }
}

export function createDotos(titles) {
  return _.map(titles, createDoto);
}
