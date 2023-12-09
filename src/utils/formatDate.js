export const formatDate = (date) => {
  const options = {
    hour: "2-digit",
    minute: "2-digit",
    month: "long",
    day: "numeric",
  };

  return new Date(date).toLocaleString("en-US", options);
};
