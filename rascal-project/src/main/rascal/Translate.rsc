module Translate

import JsSyntaxADT;
import Load;

// Prog newProgram = load(|project://rascal-project/src/main/rascal/test.js|);

//toPython(load(|project://rascal-project/src/main/rascal/test.js|));

//toPython(|project://rascal-project/src/main/rascal/test.js|);

public str toPython(newProgram) 
    = "import math \n <toPythonFunc(newProgram)>";

public str toPythonFunc(prog(list[JavaScript] js, list[Semicolon] semicolon)) 
   = "<for (x <- js) {>
     'def <toPythonFuncName(x.functions[0])>(<x.functions.params[0].name>):
     '  if <x.functions.body.conditional.condition.lhs.name> \< <x.functions.body.conditional.condition.rhs.integer>:
     '    return <x.functions.alternate.exp1.lhs.name>.<x.functions.alternate.exp1.rhs.lhs.name>(<x.functions.alternate.exp1.rhs.rhs.name>)
     <}>"
    ;

public str toPythonFuncName(list[Identifier] iden) = "<iden[0].name>";



public str toPython(Exp exp){
    switch(exp){
        case iden(str name): return "<name>";
        case \int(str integer): return "<integer>";
        case string(str strConst): return "<strConst>";
        case bracketExp(Exp lhs, Exp rhs): return "<toPython(lhs)>";
        case fieldAccess(Exp lhs, Exp rhs): return "<toPython(lhs)>.<toPython(rhs)>";
        case less(Exp lhs, Exp rhs): return "<toPython(lhs)>\<<toPython(rhs)>";
        case returnExp(Exp exp): return "<toPython(exp)>";

        default: throw "unhandled <exp>";
    }
}