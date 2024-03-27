module Literals

extend lang::std::Layout;

// layout Whitespace = [\t-\n\r\ ]*;

// lexical Integer = [0-9]+;

lexical Identifier =  id: [a-zA-Z][a-zA-Z0-9]* !>> [a-zA-Z0-9];

lexical Int = [0-9]+ !>> [0-9];

lexical LAYOUT = [\t-\n\r\ ];

lexical String = [\"] StringChar* [\"];
lexical StringChar = ![\\ \" \n] | "\\" [\\ \"];

// data Exp 
//     = let(Exp lhs, Exp rhs)
//     | \const(Exp lhs, Exp rhs)
//     | div(Exp lhs, Exp rhs)
//     | mul(Exp lhs, Exp rhs)
//     | add(Exp lhs, Exp rhs)
//     | sub(Exp lhs, Exp rhs)
//     | eql(Exp lhs, Exp rhs)
//     | \mod(Exp lhs, Exp rhs)
//     | less(Exp lhs, Exp rhs)
//     | greater(Exp lhs, Exp rhs)
//     | lessEq(Exp lhs, Exp rhs)
//     | greaterEq(Exp lhs, Exp rhs)
//     | notEq(Exp lhs, Exp rhs)
//     | eq(Exp lhs, Exp rhs)
//     | and(Exp lhs, Exp rhs)
//     | or(Exp lhs, Exp rhs)
//     | not(Exp exp)
//     ;

// layout LAYOUTLIST = LAYOUT*  !>> [\t-\n\r\ ] ;

