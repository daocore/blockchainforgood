import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import utc from 'dayjs/plugin/utc'
import timezone from 'dayjs/plugin/timezone'

dayjs.extend(relativeTime);
dayjs.extend(utc);
dayjs.extend(timezone);


export function postDate(utcTime: string) {
  return dayjs.utc(utcTime).local().fromNow()
}