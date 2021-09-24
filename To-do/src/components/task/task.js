import dayjs from "../../../node_modules/dayjs"


export class Task {
  constructor(task) {
    this.id = task._id;
    this.title = task.title;
    this.description = task.description,
    this.startDate = dayjs(new Date(task.startDate)).format('YYYY-MM-DD'),
    this.endDate = dayjs(new Date(task.endDate)).format('YYYY-MM-DD');
    this.progress = this.convertProgress(dayjs(this.startDate).format(), dayjs(this.endDate).format());
  }


  convertProgress(start, end) {
    let startDate = new Date(start);
    let endDate = new Date(end);
    const today = new Date(Date.now());
    const differenceDaysFromBegin = Math.ceil(
      (endDate.getTime() - startDate.getTime()) / (1000 * 3600 * 24)
    );

    const differenceDaysFromNow = Math.ceil(
      (endDate.getTime() - today.getTime()) / (1000 * 3600 * 24)
    );

    const progress =
    Math.max(
      0,
      Math.min(
        100,
        ((differenceDaysFromBegin - differenceDaysFromNow +1) /
          differenceDaysFromBegin) *
          100
      )
    )
      .toFixed(2);
    const progressTitle = progress.toString() + "%";
    const progressNum =
      (251.2 * progress) / 100 + "," + (251.2 * (100 - progress)) / 100;
    return {
      progressTitle,
      progressNum,
    };
  }

}
