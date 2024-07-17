// Template Literal Types
// 스트링 타입을 조작할 때 사용하게 된다.

type CodeDot = 'Code Dot';

//Uppercase(대문자)
type CodeDotUpper = Uppercase<CodeDot>; // "CODE DOT"

// Lowercase(소문자)
type CodeDotLower = Lowercase<CodeDotUpper>; // type "code dot"

// Capitalize(스트링의 첫 번째 글자가 대문자가 된다)
type CodeDotCapital = Capitalize<CodeDotLower>; // type "Code dot" 

// Uncapitalize(다시 소문자)
type CodeDotUnCapital = Uncapitalize<CodeDotCapital>; // type "code dot"