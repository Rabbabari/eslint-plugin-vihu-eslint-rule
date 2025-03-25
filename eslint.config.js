import rule from "./lib/no-moment.js";

export default [
  {
    plugins: {
      "no-moment": {
        rules: {
          "no-moment": rule,
        },
      },
    },
    rules: {
      "no-moment/no-moment": "error",
    },
  },
];
