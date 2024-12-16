export function formatDate(dateString: string | undefined): string | undefined {
  const date = dateString !== undefined ? new Date(dateString) : undefined;
  return date?.toLocaleString("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
    ...(date.getHours() === 0 && date.getMinutes() === 0 ? {} : { hour: "numeric", minute: "2-digit", hour12: true }),
  });
}
