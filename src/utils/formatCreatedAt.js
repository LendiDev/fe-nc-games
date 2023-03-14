export const formatCreatedAt = (dateString) => {
  try {
    const d = new Date(dateString);

    const date = new Intl.DateTimeFormat("en-GB", {
      month: "2-digit",
      day: "2-digit",
      year: "numeric",
    }).format(d);

    const time = new Intl.DateTimeFormat("en-GB", {
      hour: "numeric",
      minute: "numeric",
    }).format(d);

    return `on ${date} at ${time}`;
  } catch {
    return dateString;
  }
};
