export function formatDate(date: Date | undefined) {
  return date?.toLocaleString("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
    ...(date.getHours() === 0 && date.getMinutes() === 0 ? {} : { hour: "numeric", minute: "2-digit", hour12: true }),
  });
}
