/** @type {import("prettier").Config} */

const config = {
  // Use single quotes instead of double quotes
  singleQuote: true,

  // Add trailing commas to all possible locations (arrays, objects, function calls)
  // This helps with cleaner diffs in version control.
  trailingComma: 'all',

  // Specify the line length that Prettier will try to wrap on.
  // 100-120 is a common sweet spot.
  printWidth: 100,

  // Do not add semicolons at the end of statements.
  // This is a stylistic choice; if you prefer semicolons, set it to `true`.
  semi: true, // You had `semi: false` in the previous example, which is also fine. I'll stick to `true` as it's common.

  // Use spaces instead of tabs for indentation
  useTabs: false,

  // Specify the number of spaces per indentation-level
  tabWidth: 2,

  // Use the new `bracketSameLine` option for JSX/HTML tags
  // Setting this to `true` will put the closing bracket of a multi-line HTML (or JSX) element
  // on the same line as the last attribute. If `false`, it will be on a new line.
  bracketSameLine: false,

  // Add spaces inside object and array literals
  bracketSpacing: true,

  // Avoid parentheses around a single arrow function parameter (e.g., `x => x` vs `(x) => x`)
  arrowParens: 'always', // Always include parens for arrow function parameters. Consistency.

  // How Prettier should handle whitespace in HTML.
  // `css` is the default and usually good.
  htmlWhitespaceSensitivity: 'css',

  // Control how Prettier formats embedded code (e.g., JavaScript in `<script>` tags in HTML)
  embeddedLanguageFormatting: 'auto',

  // Ensure that all files in the repository use the same line ending.
  // 'lf' (Unix-style) is recommended for cross-platform consistency.
  endOfLine: 'lf',
};

export default config;
