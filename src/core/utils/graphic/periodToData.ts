import moment, {type Moment} from 'moment';
import {AVAILABLE_PERIOD} from "@/core/constant.ts";

export function periodToDateBegin(value: string | undefined): Moment | null {
  if (value === AVAILABLE_PERIOD.DAILY) {
    return moment().startOf('day');
  }

  if (value === AVAILABLE_PERIOD.WEEKLY) {
    return moment().startOf('week');
  }

  if (value === AVAILABLE_PERIOD.MONTHLY) {
    return moment().startOf('month');
  }

  if (value === AVAILABLE_PERIOD.YEARLY) {
    return moment().startOf('year');
  }

  return null;
}

export function periodToDateEnd(value: string | undefined): Moment | null {
  if (value === AVAILABLE_PERIOD.DAILY) {
    return moment().endOf('day');
  }

  if (value === AVAILABLE_PERIOD.WEEKLY) {
    return moment().endOf('week');
  }

  if (value === AVAILABLE_PERIOD.MONTHLY) {
    return moment().endOf('month');
  }

  if (value === AVAILABLE_PERIOD.YEARLY) {
    return moment().endOf('year');
  }

  return null;
}
