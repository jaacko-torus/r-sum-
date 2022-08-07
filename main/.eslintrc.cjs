module.exports = {
  extends: [
    "next/core-web-vitals",
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
  ],
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],
  root: true,
  rules: {
	
	// "@typescript-eslint/strict-boolean-expressions": [
	// 	2,
	// 	{
	// 		"allowString" : false,
	// 		"allowNumber" : false
	// 	}
	// ]
  }
};
