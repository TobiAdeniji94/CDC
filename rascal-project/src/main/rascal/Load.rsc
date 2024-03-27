module Load

import JsSyntax;

import JsSyntaxADT;

import ParseTree;

import Parse;


JsSyntaxADT::Prog implode(JsSyntax::Prog p) = 
    implode(#JsSyntaxADT::Prog, p);

JsSyntaxADT::Prog load(loc l) = implode(parseJs(l));
JsSyntaxADT::Prog load(str s) = implode(parseJs(s));