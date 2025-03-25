export default {
  meta: {
    type: "suggestion",
    docs: {
      description: "disallow the use of moment.js",
      category: "Best Practices",
      recommended: false,
    },
    messages: {
      noMoment: "Please use date-fns instead.",
    },
    schema: [],
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
    };
  },
};
