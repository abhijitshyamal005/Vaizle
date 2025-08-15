function aggregateByWeekday(D) {
  const weekdayMap = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const dayValues = {};

  // Step 1: Aggregate values by weekday
  for (const dateStr in D) {
    const date = new Date(dateStr);
    const day = weekdayMap[date.getDay()];
    dayValues[day] = (dayValues[day] || 0) + D[dateStr];
  }

  // Step 2: Fill missing weekdays using mean of adjacent days
  const orderedDays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  for (let i = 0; i < orderedDays.length; i++) {
    const day = orderedDays[i];
    if (!(day in dayValues)) {
      let prev = i - 1;
      let next = i + 1;
      while (prev >= 0 && !(orderedDays[prev] in dayValues)) prev--;
      while (next < orderedDays.length && !(orderedDays[next] in dayValues)) next++;
      if (prev >= 0 && next < orderedDays.length) {
        const prevVal = dayValues[orderedDays[prev]];
        const nextVal = dayValues[orderedDays[next]];
        dayValues[day] = Math.floor((prevVal + nextVal) / 2);
      }
    }
  }

  return orderedDays.reduce((acc, day) => {
    acc[day] = dayValues[day];
    return acc;
  }, {});
}
