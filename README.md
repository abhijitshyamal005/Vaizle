# Weekday Aggregator

This is a small JavaScript project that takes a dictionary of dates and values, and returns a new dictionary where the keys are weekdays (like Mon, Tue, etc.) and the values are the total for each day.

If a weekday is missing in the input, the program fills it using the average of the previous and next available days.

## Example

**Input:**

```js
{
  '2020-01-01': 6,
  '2020-01-04': 12,
  '2020-01-05': 14,
  '2020-01-06': 2,
  '2020-01-07': 4
}
Output:

js
{
  Mon: 2,
  Tue: 4,
  Wed: 6,
  Thu: 8,
  Fri: 10,
  Sat: 12,
  Sun: 14
}
Files
aggregateByWeekday.js: Contains the main function.

UnitTest.js: Includes test cases using Jest.

How to Run
Make sure you have Node.js installed.

Install Jest by running:

bash
npm install --save-dev jest
Run the tests:

bash
npx jest UnitTest.js
Notes
The input dates should be in the format YYYY-MM-DD.

Values should be integers.

The function assumes that at least Monday and Sunday are present in the input.
