const date1 = new Date();
// expected: 2023-11-03T05:40:07.495Z

const date2 = new Date().toISOString();
// expected: 2023-11-03T05:43:55.309Z

const date3 = new Date().toDateString();
// expected: Fri Nov 03 2023

const date4 = new Date().toLocaleString();
// expected: 03/11/2023, 07:44:33

const date5 = new Date().toLocaleDateString();
// expected: 03/11/2023

const date5_long = new Date().toLocaleDateString(undefined, {
  year: "numeric",
  month: "long",
  day: "numeric",
});
// expected: 3 November 2023

const date6 = new Date().toLocaleTimeString();
// expected: 07:44:33

const date7 = new Date().toString();
// expected: Fri Nov 03 2023 07:44:33 GMT+0200 (Eastern European Standard Time)

const date8 = new Date().toUTCString();
// expected: Fri, 03 Nov 2023 05:44:33 GMT

const date9 = new Date().toLocaleString(undefined, { hour12: false });
// expected: Fri, 03/11/2023, 07:57:06

const date10 = new Date().toLocaleTimeString("en-US", { hour12: false });
// expected: 07:57:06

const date11 = Date.now();
// Returns the number of milliseconds elapsed since midnight, January 1, 1970
//expected: 1700630802049
