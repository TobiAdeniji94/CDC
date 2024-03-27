module PySyntax

extend Literals;

start syntax Prog = program: Python+ Semicolon?;

syntax Semicolon = ";";

syntax Python 
    = FuncDef
    | IfStatement
    | ReturnStatement
    ;

syntax FuncDef
    = "def" Identifier "(" Identifier ")" ":" Block
    ;

syntax IfStatement
    = "if" Condition ":" Block ElseIf "else" ":" Block
    ;

syntax ElseIf
    = "elif" Condition ":" Block 
    ;

syntax ReturnStatement
    = "return" Exp
    ;

syntax Condition
    = Exp
    ;

syntax Exp
    = Identifier
    | Int
    | String
    | MemberAccess
    | FunctionCall
    | BinaryExpression
    | UnaryExpression
    | TernaryExpression
    ;

syntax MemberAccess = Exp "." Exp;

syntax FunctionCall = Identifier "(" Exp ")";

syntax BinaryExpression
    = Exp "+" Exp
    | Exp "-" Exp
    | Exp "*" Exp
    | Exp "/" Exp
    | Exp "%" Exp
    | Exp "\<" Exp
    | Exp "\>" Exp
    | Exp "\<=" Exp
    | Exp "\>=" Exp
    | Exp "!=" Exp
    | Exp "==" Exp
    | Exp "&&" Exp
    | Exp "||" Exp
    ;

syntax UnaryExpression = "-" Exp;

syntax TernaryExpression = Exp "?" Exp ":" Exp;

syntax Block = "{" Python* "}";

// syntax Identifier = /\b[a-zA-Z_]\w*\b/;

// syntax Int = /\b\d+\b/;

// syntax String = "\"" .*? "\"";
