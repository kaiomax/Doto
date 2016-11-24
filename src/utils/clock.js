import moment from 'moment';

export function minutesToSeconds(minutes) {
  return moment.duration(minutes, 'minutes').asSeconds()
}
