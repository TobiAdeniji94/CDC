module ArithmeticExpressions

layout Whitespace = [\t-\n\r\ ]*;

lexical IntegerLiteral = [0-9]+;

start syntax Exp 
    = \num:IntegerLiteral
    | bracket "(" Exp ")"
    > left div: Exp "/" Exp
    > left mul: Exp "*" Exp
    > left add: Exp "+" Exp
    > left sub: Exp "-" Exp
    > left \mod: Exp "%" Exp
    ;