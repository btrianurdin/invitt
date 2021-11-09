export const humanDays = (dayNumber: number): string => {
  const _days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  if (dayNumber < 0) return _days[0];

  return _days[dayNumber];
};

export const humanMonths = (monthNumber: number, type: 'long' | 'short'): string => {
  const long_months = [
    'January', 'February', 'March', 'April', 'May', 'June', 'July',
    'August', 'September', 'October', 'November', 'December',
  ];
  const short_months = [
    'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec',
  ];

  if (type === 'long') return long_months[monthNumber];
  return short_months[monthNumber];
};

export const weddingdateConvert = (date: string | Date | any): any => {
  const d = new Date(date);

  return `
    ${humanDays(d.getDay())}, ${d.getDate()} ${humanMonths(d.getMonth(), 'long')} ${d.getFullYear()}
  `;
};
