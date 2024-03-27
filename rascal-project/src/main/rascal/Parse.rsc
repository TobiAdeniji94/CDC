module Parse

import vis::Text;

// import ArithmeticExpressions;

import JsSyntax;

// import PySyntax;

import ParseTree;

// import Expression;


// Expression::Exp parseExp(str input) = implode(#Expression::Exp, parse(#ArithmeticExpressions::Exp, input));

Prog parseJs(str input) = parse(#Prog, input);
Prog parseJs(loc input) = parse(#Prog, input);

// parseJs(|project://rascal-project/src/main/rascal/test.js|)