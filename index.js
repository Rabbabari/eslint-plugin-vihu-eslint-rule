module.exports = {
  rules: {
    "no-moment": {
      meta: {
        type: "problem",
        docs: {
          description: "Disallow the use of the moment library",
          category: "Best Practices",
          recommended: false,
        },
        schema: [],
        messages: {
          noMoment:
            "The use of 'moment' is forbidden. Consider using a modern library like 'date-fns' or 'luxon'.",
        },
      },
      create(context) {
        return {
          ImportDeclaration(node) {
            if (node.source.value === "moment") {
              context.report({
                node,
                messageId: "noMoment",
              });
            }
          },
          CallExpression(node) {
            if (
              node.callee.name === "require" &&
              node.arguments[0] &&
              node.arguments[0].value === "moment"
            ) {
              context.report({
                node,
                messageId: "noMoment",
              });
            }
          },
        };
      },
    },
  },
};
