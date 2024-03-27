module JsSyntaxADT

// import JsSyntax;

data Prog = prog(list[JavaScript] js, list[Semicolon] semicolon);

data Semicolon = semicolon();

data Identifier = id(str name);

data Exp 
    = iden(str name)
    | \int(str integer)
    | string(str strConst)
    | \bracket(Exp exp)
    | bracketExp(Exp lhs, Exp rhs)
    | fieldAccess(Exp lhs, Exp rhs)
    | div(Exp lhs, Exp rhs)
    | mul(Exp lhs, Exp rhs)
    | add(Exp lhs, Exp rhs)
    | sub(Exp lhs, Exp rhs)
    | eql(Exp lhs, Exp rhs)
    | \mod(Exp lhs, Exp rhs)
    | less(Exp lhs, Exp rhs)
    | greater(Exp lhs, Exp rhs)
    | lessEq(Exp lhs, Exp rhs)
    | greaterEq(Exp lhs, Exp rhs)
    | notEq(Exp lhs, Exp rhs)
    | eq(Exp lhs, Exp rhs)
    | and(Exp lhs, Exp rhs)
    | or(Exp lhs, Exp rhs)
    | ternary(Exp exp1, Exp exp2, Exp exp3)
    | comma(Exp lhs, Exp rhs)
    | arrow(Exp lhs, Exp rhs)
    | not(Exp exp)
    | returnExp(Exp exp)
    ;

data Conditional 
    = ifCond(Exp condition, JavaScript body)
    | ifElse(Exp condition, JavaScript body, list[ElseIf] elseIf, JavaScript alternate)
    ;

data ElseIf
    = elseIf(Exp condition, JavaScript body)
    ;
data Functions 
    = function(list[Identifier] functionName, list[Exp] params, JavaScript body, JavaScript alternate)
    ;

data JavaScript
    = expression(Exp exp1, list[Semicolon] semicolon)
    | conditional(Conditional conditional)
    | functions(Functions functions)
    ;