// Extract Type
// Exclude의 반대 개념

type StringOnly = Extract<string | boolean |number, string> 
// type StringOnly = string


type FunctionOnly = Extract<string | (()=> void), Function>; 
// type FunctionOnly = () => void