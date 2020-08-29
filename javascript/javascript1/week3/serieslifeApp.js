const seriesDurations = [
  {
    title: "Game of thrones",
    days: 3,
    hours: 1,
    minutes: 0,
  },
  {
    title: "Sopranos",
    days: 3,
    hours: 14,
    minutes: 0,
  },
  {
    title: "The Wire",
    days: 2,
    hours: 12,
    minutes: 0,
  },
];

function getDuration() {
  const newSeriesDur = [];
  const newDuration = seriesDurations.forEach((dur) => {
    let percentHours = (dur.hours / (80 * 365 * 24)) * 100;
    let rhours = percentHours.toFixed(5);
    newSeriesDur.push(dur.title + " took " + rhours + " of my life");
  });
  console.log(newSeriesDur);
}
getDuration();
