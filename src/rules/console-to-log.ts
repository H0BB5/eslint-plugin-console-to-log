import { Rule } from "eslint";

const rule: Rule.RuleModule = {
  meta: {
    type: "suggestion",
    docs: {
      description: "prefer the use of logger over console.log",
      category: "Best Practices",
      recommended: true,
    },
    messages: {
      noConsoleLog: "Replace console.log with log.debug",
    },
    fixable: "code",
    schema: [],
  },
  create(context: Rule.RuleContext): Rule.RuleListener {
    return {
      CallExpression(node: any) {
        if (
          node.callee.object &&
          node.callee.object.name === "console" &&
          node.callee.property.name === "log"
        ) {
          context.report({
            node,
            messageId: "noConsoleLog",
            fix(fixer) {
              return fixer.replaceText(node.callee, "log.debug");
            },
          });
        }
      },
    };
  },
};

export = rule;
