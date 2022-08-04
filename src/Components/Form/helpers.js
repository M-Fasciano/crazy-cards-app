const titleOptions = [
  {
    label: "Title",
    value: "",
  },
  {
    label: "Miss",
    value: "Miss",
  },
  {
    label: "Ms",
    value: "Ms",
  },
  {
    label: "Mrs",
    value: "Mrs",
  },
  {
    label: "Mr",
    value: "Mr",
  },
  {
    label: "Dr",
    value: "Dr",
  },
];

export const titleOptionsList = titleOptions.map(({ label, value }) => (
  <option key={value} value={value}>
    {label}
  </option>
));

const employmentOptions = [
  {
    label: "Select employment status",
    value: "",
  },
  {
    label: "Full time",
    value: "full-time",
  },
  {
    label: "Student",
    value: "student",
  },
  {
    label: "Part time",
    value: "part-time",
  },
];

export const employmentOptionsList = employmentOptions.map(
  ({ label, value }) => (
    <option key={value} value={value}>
      {label}
    </option>
  )
);
