import { RuleTester } from "eslint";
import { describe, test } from "vitest";
import rule from "./no-moment.js";

describe("should-forbid-moment", () => {
  test("should forbid the use of moment", () => {
    const ruleTester = new RuleTester({
      languageOptions: {
        ecmaVersion: 2020,
        sourceType: "module",
      },
    });

    ruleTester.run("no-moment", rule, {
      valid: [
        {
          code: "import { format } from 'date-fns';",
        },
      ],
      invalid: [
        {
          code: "import moment from 'moment';",
          errors: [{ message: "Please use date-fns instead." }],
        },
      ],
    });
  });
});
