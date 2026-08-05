export const formatDate = (value: Date) =>
  value.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'UTC',
  });

export const readingTime = (body: string) => {
  const words = body.trim().split(/\s+/).length;
  return `${Math.max(1, Math.ceil(words / 200))} min read`;
};
