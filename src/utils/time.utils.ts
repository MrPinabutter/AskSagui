export const timeStringToSeconds = (timeString: string) => {
  const [hoursStr, minutesStr, secondsWithMillisStr] = timeString.split(":");
  const [secondsStr, millisecondsStr] = secondsWithMillisStr.split(".");

  const hours = parseInt(hoursStr, 10);
  const minutes = parseInt(minutesStr, 10);
  const seconds = parseInt(secondsStr, 10);
  const milliseconds = parseInt(millisecondsStr, 10);

  const totalSeconds =
    hours * 3600 + minutes * 60 + seconds + milliseconds / 1000000;

  return totalSeconds;
};

export const secondsToTimeString = (seconds: number) => {
  if (seconds < 1) return "<1"
  const minutes = Math.floor(seconds % 3600);
  const secondsWithoutMinutes = seconds % 60;

  return `${
    minutes < 10 ? `0${minutes}` : minutes
  }:${secondsWithoutMinutes.toFixed(2)}`;
};
