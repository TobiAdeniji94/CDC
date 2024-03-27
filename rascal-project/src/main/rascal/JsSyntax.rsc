module JsSyntax

extend Literals;

start syntax Prog = prog: JavaScript+ Semicolon?;

syntax Semicolon = semicolon: ";";

syntax Comments = "//";

start syntax JavaScript 
    = expression: Exp Semicolon*
    | conditional: Conditional
    | functions: Functions
    // | Classes
    ;

syntax Exp 
    = iden:Identifier
    | \int: Int
    | string: String
    | bracket "(" Exp ")"
    | bracketExp: Exp"(" Exp ")"
    > left fieldAccess: Exp "." Exp
    > left div: Exp "/" Exp
    > left mul: Exp "*" Exp
    > left add: Exp "+" Exp
    > left sub: Exp "-" Exp
    > left eql: Exp "=" Exp
    > left \mod: Exp "%" Exp
    > left less: Exp "\<" Exp
    > left greater: Exp "\>" Exp
    > left lessEq: Exp "\<=" Exp
    > left greaterEq: Exp "\>=" Exp
    > left notEq: Exp "!=" Exp
    > left eq: Exp "==" Exp
    > left and: Exp "&&" Exp
    > left or: Exp "||" Exp
    > left ternary: Exp "?" Exp ":" Exp
    > left comma: Exp "," Exp
    > left arrow: Exp "=\>" Exp
    > left not: "!" Exp
    > returnExp: "return" Exp
    ;

syntax Conditional
    = ifCond: "if" "(" Exp ")" "{" JavaScript "}"
    | ifElse: "if" "(" Exp ")" "{" JavaScript "}" ElseIf*  "else" "{" JavaScript "}"
    // | elseIf: "else" "if" "(" Exp ")" "{" JavaScript "}"
    ;

syntax ElseIf = elseIf: "else" "if" "(" Exp ")" "{" "("JavaScript")" "}";

syntax Functions 
    = function: "function" Identifier? "(" {Exp ","}+ ")" "{" JavaScript "return" JavaScript "}"
    ;

// syntax Classes 
//     = class: "class"
//     ;