import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timestampToDate'
})
export class TimestampToDatePipe implements PipeTransform {

  transform(timestamp: { seconds: number, nanoseconds: number }): Date|null {
    if (timestamp && timestamp.seconds) {
      return new Date(timestamp.seconds * 1000); // Convert seconds to milliseconds
    }
    return null;
  }

}
