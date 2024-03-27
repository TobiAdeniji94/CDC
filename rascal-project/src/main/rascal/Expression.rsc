module Expression

extend ArithmeticExpressions;

data Exp = 
    add(Exp left, Exp right)
    | sub(Exp left, Exp right)
    | mul(Exp left, Exp right)
    | div(Exp left, Exp right)
    | \mod(Exp left, Exp right)
    | \num(str val);
