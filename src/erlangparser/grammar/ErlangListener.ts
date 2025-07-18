// Generated from grammar/Erlang.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

import { FormsContext } from "./ErlangParser";
import { FormContext } from "./ErlangParser";
import { TokAtomContext } from "./ErlangParser";
import { TokVarContext } from "./ErlangParser";
import { TokFloatContext } from "./ErlangParser";
import { TokIntegerContext } from "./ErlangParser";
import { TokCharContext } from "./ErlangParser";
import { TokStringContext } from "./ErlangParser";
import { AttributeContext } from "./ErlangParser";
import { TypeSpecContext } from "./ErlangParser";
import { SpecFunContext } from "./ErlangParser";
import { TypedAttrValContext } from "./ErlangParser";
import { TypedRecordFieldsContext } from "./ErlangParser";
import { TypedExprsContext } from "./ErlangParser";
import { TypedExprContext } from "./ErlangParser";
import { TypeSigsContext } from "./ErlangParser";
import { TypeSigContext } from "./ErlangParser";
import { TypeGuardsContext } from "./ErlangParser";
import { TypeGuardContext } from "./ErlangParser";
import { TopTypesContext } from "./ErlangParser";
import { TopTypeContext } from "./ErlangParser";
import { TopType100Context } from "./ErlangParser";
import { Type200Context } from "./ErlangParser";
import { Type300Context } from "./ErlangParser";
import { Type400Context } from "./ErlangParser";
import { Type500Context } from "./ErlangParser";
import { Type_Context } from "./ErlangParser";
import { FunType100Context } from "./ErlangParser";
import { FunTypeContext } from "./ErlangParser";
import { MapPairTypesContext } from "./ErlangParser";
import { MapPairTypeContext } from "./ErlangParser";
import { FieldTypesContext } from "./ErlangParser";
import { FieldTypeContext } from "./ErlangParser";
import { BinaryTypeContext } from "./ErlangParser";
import { BinBaseTypeContext } from "./ErlangParser";
import { BinUnitTypeContext } from "./ErlangParser";
import { AttrValContext } from "./ErlangParser";
import { Function_Context } from "./ErlangParser";
import { FunctionClauseContext } from "./ErlangParser";
import { ClauseArgsContext } from "./ErlangParser";
import { ClauseGuardContext } from "./ErlangParser";
import { ClauseBodyContext } from "./ErlangParser";
import { ExprContext } from "./ErlangParser";
import { Expr100Context } from "./ErlangParser";
import { Expr150Context } from "./ErlangParser";
import { Expr160Context } from "./ErlangParser";
import { Expr200Context } from "./ErlangParser";
import { Expr300Context } from "./ErlangParser";
import { Expr400Context } from "./ErlangParser";
import { Expr500Context } from "./ErlangParser";
import { Expr600Context } from "./ErlangParser";
import { Expr650Context } from "./ErlangParser";
import { Expr700Context } from "./ErlangParser";
import { Expr800Context } from "./ErlangParser";
import { ExprMaxContext } from "./ErlangParser";
import { PatExprContext } from "./ErlangParser";
import { PatExpr200Context } from "./ErlangParser";
import { PatExpr300Context } from "./ErlangParser";
import { PatExpr400Context } from "./ErlangParser";
import { PatExpr500Context } from "./ErlangParser";
import { PatExpr600Context } from "./ErlangParser";
import { PatExpr650Context } from "./ErlangParser";
import { PatExpr700Context } from "./ErlangParser";
import { PatExpr800Context } from "./ErlangParser";
import { PatExprMaxContext } from "./ErlangParser";
import { MapPatExprContext } from "./ErlangParser";
import { RecordPatExprContext } from "./ErlangParser";
import { List_Context } from "./ErlangParser";
import { TailContext } from "./ErlangParser";
import { BinaryContext } from "./ErlangParser";
import { BinElementsContext } from "./ErlangParser";
import { BinElementContext } from "./ErlangParser";
import { BitExprContext } from "./ErlangParser";
import { OptBitSizeExprContext } from "./ErlangParser";
import { OptBitTypeListContext } from "./ErlangParser";
import { BitTypeListContext } from "./ErlangParser";
import { BitTypeContext } from "./ErlangParser";
import { BitSizeExprContext } from "./ErlangParser";
import { ListComprehensionContext } from "./ErlangParser";
import { BinaryComprehensionContext } from "./ErlangParser";
import { LcExprsContext } from "./ErlangParser";
import { LcExprContext } from "./ErlangParser";
import { Tuple_Context } from "./ErlangParser";
import { MapExprContext } from "./ErlangParser";
import { MapTupleContext } from "./ErlangParser";
import { MapFieldContext } from "./ErlangParser";
import { MapFieldAssocContext } from "./ErlangParser";
import { MapFieldExactContext } from "./ErlangParser";
import { MapKeyContext } from "./ErlangParser";
import { RecordExprContext } from "./ErlangParser";
import { RecordTupleContext } from "./ErlangParser";
import { RecordFieldsContext } from "./ErlangParser";
import { RecordFieldContext } from "./ErlangParser";
import { FunctionCallContext } from "./ErlangParser";
import { IfExprContext } from "./ErlangParser";
import { IfClausesContext } from "./ErlangParser";
import { IfClauseContext } from "./ErlangParser";
import { CaseExprContext } from "./ErlangParser";
import { CrClausesContext } from "./ErlangParser";
import { CrClauseContext } from "./ErlangParser";
import { ReceiveExprContext } from "./ErlangParser";
import { FunExprContext } from "./ErlangParser";
import { AtomOrVarContext } from "./ErlangParser";
import { IntegerOrVarContext } from "./ErlangParser";
import { FunClausesContext } from "./ErlangParser";
import { FunClauseContext } from "./ErlangParser";
import { TryExprContext } from "./ErlangParser";
import { TryCatchContext } from "./ErlangParser";
import { TryClausesContext } from "./ErlangParser";
import { TryClauseContext } from "./ErlangParser";
import { TryOptStackTraceContext } from "./ErlangParser";
import { ArgumentListContext } from "./ErlangParser";
import { PatArgumentListContext } from "./ErlangParser";
import { ExprsContext } from "./ErlangParser";
import { PatExprsContext } from "./ErlangParser";
import { Guard_Context } from "./ErlangParser";
import { AtomicContext } from "./ErlangParser";
import { PrefixOpContext } from "./ErlangParser";
import { MultOpContext } from "./ErlangParser";
import { AddOpContext } from "./ErlangParser";
import { ListOpContext } from "./ErlangParser";
import { CompOpContext } from "./ErlangParser";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `ErlangParser`.
 */
export interface ErlangListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `ErlangParser.forms`.
	 * @param ctx the parse tree
	 */
	enterForms?: (ctx: FormsContext) => void;
	/**
	 * Exit a parse tree produced by `ErlangParser.forms`.
	 * @param ctx the parse tree
	 */
	exitForms?: (ctx: FormsContext) => void;

	/**
	 * Enter a parse tree produced by `ErlangParser.form`.
	 * @param ctx the parse tree
	 */
	enterForm?: (ctx: FormContext) => void;
	/**
	 * Exit a parse tree produced by `ErlangParser.form`.
	 * @param ctx the parse tree
	 */
	exitForm?: (ctx: FormContext) => void;

	/**
	 * Enter a parse tree produced by `ErlangParser.tokAtom`.
	 * @param ctx the parse tree
	 */
	enterTokAtom?: (ctx: TokAtomContext) => void;
	/**
	 * Exit a parse tree produced by `ErlangParser.tokAtom`.
	 * @param ctx the parse tree
	 */
	exitTokAtom?: (ctx: TokAtomContext) => void;

	/**
	 * Enter a parse tree produced by `ErlangParser.tokVar`.
	 * @param ctx the parse tree
	 */
	enterTokVar?: (ctx: TokVarContext) => void;
	/**
	 * Exit a parse tree produced by `ErlangParser.tokVar`.
	 * @param ctx the parse tree
	 */
	exitTokVar?: (ctx: TokVarContext) => void;

	/**
	 * Enter a parse tree produced by `ErlangParser.tokFloat`.
	 * @param ctx the parse tree
	 */
	enterTokFloat?: (ctx: TokFloatContext) => void;
	/**
	 * Exit a parse tree produced by `ErlangParser.tokFloat`.
	 * @param ctx the parse tree
	 */
	exitTokFloat?: (ctx: TokFloatContext) => void;

	/**
	 * Enter a parse tree produced by `ErlangParser.tokInteger`.
	 * @param ctx the parse tree
	 */
	enterTokInteger?: (ctx: TokIntegerContext) => void;
	/**
	 * Exit a parse tree produced by `ErlangParser.tokInteger`.
	 * @param ctx the parse tree
	 */
	exitTokInteger?: (ctx: TokIntegerContext) => void;

	/**
	 * Enter a parse tree produced by `ErlangParser.tokChar`.
	 * @param ctx the parse tree
	 */
	enterTokChar?: (ctx: TokCharContext) => void;
	/**
	 * Exit a parse tree produced by `ErlangParser.tokChar`.
	 * @param ctx the parse tree
	 */
	exitTokChar?: (ctx: TokCharContext) => void;

	/**
	 * Enter a parse tree produced by `ErlangParser.tokString`.
	 * @param ctx the parse tree
	 */
	enterTokString?: (ctx: TokStringContext) => void;
	/**
	 * Exit a parse tree produced by `ErlangParser.tokString`.
	 * @param ctx the parse tree
	 */
	exitTokString?: (ctx: TokStringContext) => void;

	/**
	 * Enter a parse tree produced by `ErlangParser.attribute`.
	 * @param ctx the parse tree
	 */
	enterAttribute?: (ctx: AttributeContext) => void;
	/**
	 * Exit a parse tree produced by `ErlangParser.attribute`.
	 * @param ctx the parse tree
	 */
	exitAttribute?: (ctx: AttributeContext) => void;

	/**
	 * Enter a parse tree produced by `ErlangParser.typeSpec`.
	 * @param ctx the parse tree
	 */
	enterTypeSpec?: (ctx: TypeSpecContext) => void;
	/**
	 * Exit a parse tree produced by `ErlangParser.typeSpec`.
	 * @param ctx the parse tree
	 */
	exitTypeSpec?: (ctx: TypeSpecContext) => void;

	/**
	 * Enter a parse tree produced by `ErlangParser.specFun`.
	 * @param ctx the parse tree
	 */
	enterSpecFun?: (ctx: SpecFunContext) => void;
	/**
	 * Exit a parse tree produced by `ErlangParser.specFun`.
	 * @param ctx the parse tree
	 */
	exitSpecFun?: (ctx: SpecFunContext) => void;

	/**
	 * Enter a parse tree produced by `ErlangParser.typedAttrVal`.
	 * @param ctx the parse tree
	 */
	enterTypedAttrVal?: (ctx: TypedAttrValContext) => void;
	/**
	 * Exit a parse tree produced by `ErlangParser.typedAttrVal`.
	 * @param ctx the parse tree
	 */
	exitTypedAttrVal?: (ctx: TypedAttrValContext) => void;

	/**
	 * Enter a parse tree produced by `ErlangParser.typedRecordFields`.
	 * @param ctx the parse tree
	 */
	enterTypedRecordFields?: (ctx: TypedRecordFieldsContext) => void;
	/**
	 * Exit a parse tree produced by `ErlangParser.typedRecordFields`.
	 * @param ctx the parse tree
	 */
	exitTypedRecordFields?: (ctx: TypedRecordFieldsContext) => void;

	/**
	 * Enter a parse tree produced by `ErlangParser.typedExprs`.
	 * @param ctx the parse tree
	 */
	enterTypedExprs?: (ctx: TypedExprsContext) => void;
	/**
	 * Exit a parse tree produced by `ErlangParser.typedExprs`.
	 * @param ctx the parse tree
	 */
	exitTypedExprs?: (ctx: TypedExprsContext) => void;

	/**
	 * Enter a parse tree produced by `ErlangParser.typedExpr`.
	 * @param ctx the parse tree
	 */
	enterTypedExpr?: (ctx: TypedExprContext) => void;
	/**
	 * Exit a parse tree produced by `ErlangParser.typedExpr`.
	 * @param ctx the parse tree
	 */
	exitTypedExpr?: (ctx: TypedExprContext) => void;

	/**
	 * Enter a parse tree produced by `ErlangParser.typeSigs`.
	 * @param ctx the parse tree
	 */
	enterTypeSigs?: (ctx: TypeSigsContext) => void;
	/**
	 * Exit a parse tree produced by `ErlangParser.typeSigs`.
	 * @param ctx the parse tree
	 */
	exitTypeSigs?: (ctx: TypeSigsContext) => void;

	/**
	 * Enter a parse tree produced by `ErlangParser.typeSig`.
	 * @param ctx the parse tree
	 */
	enterTypeSig?: (ctx: TypeSigContext) => void;
	/**
	 * Exit a parse tree produced by `ErlangParser.typeSig`.
	 * @param ctx the parse tree
	 */
	exitTypeSig?: (ctx: TypeSigContext) => void;

	/**
	 * Enter a parse tree produced by `ErlangParser.typeGuards`.
	 * @param ctx the parse tree
	 */
	enterTypeGuards?: (ctx: TypeGuardsContext) => void;
	/**
	 * Exit a parse tree produced by `ErlangParser.typeGuards`.
	 * @param ctx the parse tree
	 */
	exitTypeGuards?: (ctx: TypeGuardsContext) => void;

	/**
	 * Enter a parse tree produced by `ErlangParser.typeGuard`.
	 * @param ctx the parse tree
	 */
	enterTypeGuard?: (ctx: TypeGuardContext) => void;
	/**
	 * Exit a parse tree produced by `ErlangParser.typeGuard`.
	 * @param ctx the parse tree
	 */
	exitTypeGuard?: (ctx: TypeGuardContext) => void;

	/**
	 * Enter a parse tree produced by `ErlangParser.topTypes`.
	 * @param ctx the parse tree
	 */
	enterTopTypes?: (ctx: TopTypesContext) => void;
	/**
	 * Exit a parse tree produced by `ErlangParser.topTypes`.
	 * @param ctx the parse tree
	 */
	exitTopTypes?: (ctx: TopTypesContext) => void;

	/**
	 * Enter a parse tree produced by `ErlangParser.topType`.
	 * @param ctx the parse tree
	 */
	enterTopType?: (ctx: TopTypeContext) => void;
	/**
	 * Exit a parse tree produced by `ErlangParser.topType`.
	 * @param ctx the parse tree
	 */
	exitTopType?: (ctx: TopTypeContext) => void;

	/**
	 * Enter a parse tree produced by `ErlangParser.topType100`.
	 * @param ctx the parse tree
	 */
	enterTopType100?: (ctx: TopType100Context) => void;
	/**
	 * Exit a parse tree produced by `ErlangParser.topType100`.
	 * @param ctx the parse tree
	 */
	exitTopType100?: (ctx: TopType100Context) => void;

	/**
	 * Enter a parse tree produced by `ErlangParser.type200`.
	 * @param ctx the parse tree
	 */
	enterType200?: (ctx: Type200Context) => void;
	/**
	 * Exit a parse tree produced by `ErlangParser.type200`.
	 * @param ctx the parse tree
	 */
	exitType200?: (ctx: Type200Context) => void;

	/**
	 * Enter a parse tree produced by `ErlangParser.type300`.
	 * @param ctx the parse tree
	 */
	enterType300?: (ctx: Type300Context) => void;
	/**
	 * Exit a parse tree produced by `ErlangParser.type300`.
	 * @param ctx the parse tree
	 */
	exitType300?: (ctx: Type300Context) => void;

	/**
	 * Enter a parse tree produced by `ErlangParser.type400`.
	 * @param ctx the parse tree
	 */
	enterType400?: (ctx: Type400Context) => void;
	/**
	 * Exit a parse tree produced by `ErlangParser.type400`.
	 * @param ctx the parse tree
	 */
	exitType400?: (ctx: Type400Context) => void;

	/**
	 * Enter a parse tree produced by `ErlangParser.type500`.
	 * @param ctx the parse tree
	 */
	enterType500?: (ctx: Type500Context) => void;
	/**
	 * Exit a parse tree produced by `ErlangParser.type500`.
	 * @param ctx the parse tree
	 */
	exitType500?: (ctx: Type500Context) => void;

	/**
	 * Enter a parse tree produced by `ErlangParser.type_`.
	 * @param ctx the parse tree
	 */
	enterType_?: (ctx: Type_Context) => void;
	/**
	 * Exit a parse tree produced by `ErlangParser.type_`.
	 * @param ctx the parse tree
	 */
	exitType_?: (ctx: Type_Context) => void;

	/**
	 * Enter a parse tree produced by `ErlangParser.funType100`.
	 * @param ctx the parse tree
	 */
	enterFunType100?: (ctx: FunType100Context) => void;
	/**
	 * Exit a parse tree produced by `ErlangParser.funType100`.
	 * @param ctx the parse tree
	 */
	exitFunType100?: (ctx: FunType100Context) => void;

	/**
	 * Enter a parse tree produced by `ErlangParser.funType`.
	 * @param ctx the parse tree
	 */
	enterFunType?: (ctx: FunTypeContext) => void;
	/**
	 * Exit a parse tree produced by `ErlangParser.funType`.
	 * @param ctx the parse tree
	 */
	exitFunType?: (ctx: FunTypeContext) => void;

	/**
	 * Enter a parse tree produced by `ErlangParser.mapPairTypes`.
	 * @param ctx the parse tree
	 */
	enterMapPairTypes?: (ctx: MapPairTypesContext) => void;
	/**
	 * Exit a parse tree produced by `ErlangParser.mapPairTypes`.
	 * @param ctx the parse tree
	 */
	exitMapPairTypes?: (ctx: MapPairTypesContext) => void;

	/**
	 * Enter a parse tree produced by `ErlangParser.mapPairType`.
	 * @param ctx the parse tree
	 */
	enterMapPairType?: (ctx: MapPairTypeContext) => void;
	/**
	 * Exit a parse tree produced by `ErlangParser.mapPairType`.
	 * @param ctx the parse tree
	 */
	exitMapPairType?: (ctx: MapPairTypeContext) => void;

	/**
	 * Enter a parse tree produced by `ErlangParser.fieldTypes`.
	 * @param ctx the parse tree
	 */
	enterFieldTypes?: (ctx: FieldTypesContext) => void;
	/**
	 * Exit a parse tree produced by `ErlangParser.fieldTypes`.
	 * @param ctx the parse tree
	 */
	exitFieldTypes?: (ctx: FieldTypesContext) => void;

	/**
	 * Enter a parse tree produced by `ErlangParser.fieldType`.
	 * @param ctx the parse tree
	 */
	enterFieldType?: (ctx: FieldTypeContext) => void;
	/**
	 * Exit a parse tree produced by `ErlangParser.fieldType`.
	 * @param ctx the parse tree
	 */
	exitFieldType?: (ctx: FieldTypeContext) => void;

	/**
	 * Enter a parse tree produced by `ErlangParser.binaryType`.
	 * @param ctx the parse tree
	 */
	enterBinaryType?: (ctx: BinaryTypeContext) => void;
	/**
	 * Exit a parse tree produced by `ErlangParser.binaryType`.
	 * @param ctx the parse tree
	 */
	exitBinaryType?: (ctx: BinaryTypeContext) => void;

	/**
	 * Enter a parse tree produced by `ErlangParser.binBaseType`.
	 * @param ctx the parse tree
	 */
	enterBinBaseType?: (ctx: BinBaseTypeContext) => void;
	/**
	 * Exit a parse tree produced by `ErlangParser.binBaseType`.
	 * @param ctx the parse tree
	 */
	exitBinBaseType?: (ctx: BinBaseTypeContext) => void;

	/**
	 * Enter a parse tree produced by `ErlangParser.binUnitType`.
	 * @param ctx the parse tree
	 */
	enterBinUnitType?: (ctx: BinUnitTypeContext) => void;
	/**
	 * Exit a parse tree produced by `ErlangParser.binUnitType`.
	 * @param ctx the parse tree
	 */
	exitBinUnitType?: (ctx: BinUnitTypeContext) => void;

	/**
	 * Enter a parse tree produced by `ErlangParser.attrVal`.
	 * @param ctx the parse tree
	 */
	enterAttrVal?: (ctx: AttrValContext) => void;
	/**
	 * Exit a parse tree produced by `ErlangParser.attrVal`.
	 * @param ctx the parse tree
	 */
	exitAttrVal?: (ctx: AttrValContext) => void;

	/**
	 * Enter a parse tree produced by `ErlangParser.function_`.
	 * @param ctx the parse tree
	 */
	enterFunction_?: (ctx: Function_Context) => void;
	/**
	 * Exit a parse tree produced by `ErlangParser.function_`.
	 * @param ctx the parse tree
	 */
	exitFunction_?: (ctx: Function_Context) => void;

	/**
	 * Enter a parse tree produced by `ErlangParser.functionClause`.
	 * @param ctx the parse tree
	 */
	enterFunctionClause?: (ctx: FunctionClauseContext) => void;
	/**
	 * Exit a parse tree produced by `ErlangParser.functionClause`.
	 * @param ctx the parse tree
	 */
	exitFunctionClause?: (ctx: FunctionClauseContext) => void;

	/**
	 * Enter a parse tree produced by `ErlangParser.clauseArgs`.
	 * @param ctx the parse tree
	 */
	enterClauseArgs?: (ctx: ClauseArgsContext) => void;
	/**
	 * Exit a parse tree produced by `ErlangParser.clauseArgs`.
	 * @param ctx the parse tree
	 */
	exitClauseArgs?: (ctx: ClauseArgsContext) => void;

	/**
	 * Enter a parse tree produced by `ErlangParser.clauseGuard`.
	 * @param ctx the parse tree
	 */
	enterClauseGuard?: (ctx: ClauseGuardContext) => void;
	/**
	 * Exit a parse tree produced by `ErlangParser.clauseGuard`.
	 * @param ctx the parse tree
	 */
	exitClauseGuard?: (ctx: ClauseGuardContext) => void;

	/**
	 * Enter a parse tree produced by `ErlangParser.clauseBody`.
	 * @param ctx the parse tree
	 */
	enterClauseBody?: (ctx: ClauseBodyContext) => void;
	/**
	 * Exit a parse tree produced by `ErlangParser.clauseBody`.
	 * @param ctx the parse tree
	 */
	exitClauseBody?: (ctx: ClauseBodyContext) => void;

	/**
	 * Enter a parse tree produced by `ErlangParser.expr`.
	 * @param ctx the parse tree
	 */
	enterExpr?: (ctx: ExprContext) => void;
	/**
	 * Exit a parse tree produced by `ErlangParser.expr`.
	 * @param ctx the parse tree
	 */
	exitExpr?: (ctx: ExprContext) => void;

	/**
	 * Enter a parse tree produced by `ErlangParser.expr100`.
	 * @param ctx the parse tree
	 */
	enterExpr100?: (ctx: Expr100Context) => void;
	/**
	 * Exit a parse tree produced by `ErlangParser.expr100`.
	 * @param ctx the parse tree
	 */
	exitExpr100?: (ctx: Expr100Context) => void;

	/**
	 * Enter a parse tree produced by `ErlangParser.expr150`.
	 * @param ctx the parse tree
	 */
	enterExpr150?: (ctx: Expr150Context) => void;
	/**
	 * Exit a parse tree produced by `ErlangParser.expr150`.
	 * @param ctx the parse tree
	 */
	exitExpr150?: (ctx: Expr150Context) => void;

	/**
	 * Enter a parse tree produced by `ErlangParser.expr160`.
	 * @param ctx the parse tree
	 */
	enterExpr160?: (ctx: Expr160Context) => void;
	/**
	 * Exit a parse tree produced by `ErlangParser.expr160`.
	 * @param ctx the parse tree
	 */
	exitExpr160?: (ctx: Expr160Context) => void;

	/**
	 * Enter a parse tree produced by `ErlangParser.expr200`.
	 * @param ctx the parse tree
	 */
	enterExpr200?: (ctx: Expr200Context) => void;
	/**
	 * Exit a parse tree produced by `ErlangParser.expr200`.
	 * @param ctx the parse tree
	 */
	exitExpr200?: (ctx: Expr200Context) => void;

	/**
	 * Enter a parse tree produced by `ErlangParser.expr300`.
	 * @param ctx the parse tree
	 */
	enterExpr300?: (ctx: Expr300Context) => void;
	/**
	 * Exit a parse tree produced by `ErlangParser.expr300`.
	 * @param ctx the parse tree
	 */
	exitExpr300?: (ctx: Expr300Context) => void;

	/**
	 * Enter a parse tree produced by `ErlangParser.expr400`.
	 * @param ctx the parse tree
	 */
	enterExpr400?: (ctx: Expr400Context) => void;
	/**
	 * Exit a parse tree produced by `ErlangParser.expr400`.
	 * @param ctx the parse tree
	 */
	exitExpr400?: (ctx: Expr400Context) => void;

	/**
	 * Enter a parse tree produced by `ErlangParser.expr500`.
	 * @param ctx the parse tree
	 */
	enterExpr500?: (ctx: Expr500Context) => void;
	/**
	 * Exit a parse tree produced by `ErlangParser.expr500`.
	 * @param ctx the parse tree
	 */
	exitExpr500?: (ctx: Expr500Context) => void;

	/**
	 * Enter a parse tree produced by `ErlangParser.expr600`.
	 * @param ctx the parse tree
	 */
	enterExpr600?: (ctx: Expr600Context) => void;
	/**
	 * Exit a parse tree produced by `ErlangParser.expr600`.
	 * @param ctx the parse tree
	 */
	exitExpr600?: (ctx: Expr600Context) => void;

	/**
	 * Enter a parse tree produced by `ErlangParser.expr650`.
	 * @param ctx the parse tree
	 */
	enterExpr650?: (ctx: Expr650Context) => void;
	/**
	 * Exit a parse tree produced by `ErlangParser.expr650`.
	 * @param ctx the parse tree
	 */
	exitExpr650?: (ctx: Expr650Context) => void;

	/**
	 * Enter a parse tree produced by `ErlangParser.expr700`.
	 * @param ctx the parse tree
	 */
	enterExpr700?: (ctx: Expr700Context) => void;
	/**
	 * Exit a parse tree produced by `ErlangParser.expr700`.
	 * @param ctx the parse tree
	 */
	exitExpr700?: (ctx: Expr700Context) => void;

	/**
	 * Enter a parse tree produced by `ErlangParser.expr800`.
	 * @param ctx the parse tree
	 */
	enterExpr800?: (ctx: Expr800Context) => void;
	/**
	 * Exit a parse tree produced by `ErlangParser.expr800`.
	 * @param ctx the parse tree
	 */
	exitExpr800?: (ctx: Expr800Context) => void;

	/**
	 * Enter a parse tree produced by `ErlangParser.exprMax`.
	 * @param ctx the parse tree
	 */
	enterExprMax?: (ctx: ExprMaxContext) => void;
	/**
	 * Exit a parse tree produced by `ErlangParser.exprMax`.
	 * @param ctx the parse tree
	 */
	exitExprMax?: (ctx: ExprMaxContext) => void;

	/**
	 * Enter a parse tree produced by `ErlangParser.patExpr`.
	 * @param ctx the parse tree
	 */
	enterPatExpr?: (ctx: PatExprContext) => void;
	/**
	 * Exit a parse tree produced by `ErlangParser.patExpr`.
	 * @param ctx the parse tree
	 */
	exitPatExpr?: (ctx: PatExprContext) => void;

	/**
	 * Enter a parse tree produced by `ErlangParser.patExpr200`.
	 * @param ctx the parse tree
	 */
	enterPatExpr200?: (ctx: PatExpr200Context) => void;
	/**
	 * Exit a parse tree produced by `ErlangParser.patExpr200`.
	 * @param ctx the parse tree
	 */
	exitPatExpr200?: (ctx: PatExpr200Context) => void;

	/**
	 * Enter a parse tree produced by `ErlangParser.patExpr300`.
	 * @param ctx the parse tree
	 */
	enterPatExpr300?: (ctx: PatExpr300Context) => void;
	/**
	 * Exit a parse tree produced by `ErlangParser.patExpr300`.
	 * @param ctx the parse tree
	 */
	exitPatExpr300?: (ctx: PatExpr300Context) => void;

	/**
	 * Enter a parse tree produced by `ErlangParser.patExpr400`.
	 * @param ctx the parse tree
	 */
	enterPatExpr400?: (ctx: PatExpr400Context) => void;
	/**
	 * Exit a parse tree produced by `ErlangParser.patExpr400`.
	 * @param ctx the parse tree
	 */
	exitPatExpr400?: (ctx: PatExpr400Context) => void;

	/**
	 * Enter a parse tree produced by `ErlangParser.patExpr500`.
	 * @param ctx the parse tree
	 */
	enterPatExpr500?: (ctx: PatExpr500Context) => void;
	/**
	 * Exit a parse tree produced by `ErlangParser.patExpr500`.
	 * @param ctx the parse tree
	 */
	exitPatExpr500?: (ctx: PatExpr500Context) => void;

	/**
	 * Enter a parse tree produced by `ErlangParser.patExpr600`.
	 * @param ctx the parse tree
	 */
	enterPatExpr600?: (ctx: PatExpr600Context) => void;
	/**
	 * Exit a parse tree produced by `ErlangParser.patExpr600`.
	 * @param ctx the parse tree
	 */
	exitPatExpr600?: (ctx: PatExpr600Context) => void;

	/**
	 * Enter a parse tree produced by `ErlangParser.patExpr650`.
	 * @param ctx the parse tree
	 */
	enterPatExpr650?: (ctx: PatExpr650Context) => void;
	/**
	 * Exit a parse tree produced by `ErlangParser.patExpr650`.
	 * @param ctx the parse tree
	 */
	exitPatExpr650?: (ctx: PatExpr650Context) => void;

	/**
	 * Enter a parse tree produced by `ErlangParser.patExpr700`.
	 * @param ctx the parse tree
	 */
	enterPatExpr700?: (ctx: PatExpr700Context) => void;
	/**
	 * Exit a parse tree produced by `ErlangParser.patExpr700`.
	 * @param ctx the parse tree
	 */
	exitPatExpr700?: (ctx: PatExpr700Context) => void;

	/**
	 * Enter a parse tree produced by `ErlangParser.patExpr800`.
	 * @param ctx the parse tree
	 */
	enterPatExpr800?: (ctx: PatExpr800Context) => void;
	/**
	 * Exit a parse tree produced by `ErlangParser.patExpr800`.
	 * @param ctx the parse tree
	 */
	exitPatExpr800?: (ctx: PatExpr800Context) => void;

	/**
	 * Enter a parse tree produced by `ErlangParser.patExprMax`.
	 * @param ctx the parse tree
	 */
	enterPatExprMax?: (ctx: PatExprMaxContext) => void;
	/**
	 * Exit a parse tree produced by `ErlangParser.patExprMax`.
	 * @param ctx the parse tree
	 */
	exitPatExprMax?: (ctx: PatExprMaxContext) => void;

	/**
	 * Enter a parse tree produced by `ErlangParser.mapPatExpr`.
	 * @param ctx the parse tree
	 */
	enterMapPatExpr?: (ctx: MapPatExprContext) => void;
	/**
	 * Exit a parse tree produced by `ErlangParser.mapPatExpr`.
	 * @param ctx the parse tree
	 */
	exitMapPatExpr?: (ctx: MapPatExprContext) => void;

	/**
	 * Enter a parse tree produced by `ErlangParser.recordPatExpr`.
	 * @param ctx the parse tree
	 */
	enterRecordPatExpr?: (ctx: RecordPatExprContext) => void;
	/**
	 * Exit a parse tree produced by `ErlangParser.recordPatExpr`.
	 * @param ctx the parse tree
	 */
	exitRecordPatExpr?: (ctx: RecordPatExprContext) => void;

	/**
	 * Enter a parse tree produced by `ErlangParser.list_`.
	 * @param ctx the parse tree
	 */
	enterList_?: (ctx: List_Context) => void;
	/**
	 * Exit a parse tree produced by `ErlangParser.list_`.
	 * @param ctx the parse tree
	 */
	exitList_?: (ctx: List_Context) => void;

	/**
	 * Enter a parse tree produced by `ErlangParser.tail`.
	 * @param ctx the parse tree
	 */
	enterTail?: (ctx: TailContext) => void;
	/**
	 * Exit a parse tree produced by `ErlangParser.tail`.
	 * @param ctx the parse tree
	 */
	exitTail?: (ctx: TailContext) => void;

	/**
	 * Enter a parse tree produced by `ErlangParser.binary`.
	 * @param ctx the parse tree
	 */
	enterBinary?: (ctx: BinaryContext) => void;
	/**
	 * Exit a parse tree produced by `ErlangParser.binary`.
	 * @param ctx the parse tree
	 */
	exitBinary?: (ctx: BinaryContext) => void;

	/**
	 * Enter a parse tree produced by `ErlangParser.binElements`.
	 * @param ctx the parse tree
	 */
	enterBinElements?: (ctx: BinElementsContext) => void;
	/**
	 * Exit a parse tree produced by `ErlangParser.binElements`.
	 * @param ctx the parse tree
	 */
	exitBinElements?: (ctx: BinElementsContext) => void;

	/**
	 * Enter a parse tree produced by `ErlangParser.binElement`.
	 * @param ctx the parse tree
	 */
	enterBinElement?: (ctx: BinElementContext) => void;
	/**
	 * Exit a parse tree produced by `ErlangParser.binElement`.
	 * @param ctx the parse tree
	 */
	exitBinElement?: (ctx: BinElementContext) => void;

	/**
	 * Enter a parse tree produced by `ErlangParser.bitExpr`.
	 * @param ctx the parse tree
	 */
	enterBitExpr?: (ctx: BitExprContext) => void;
	/**
	 * Exit a parse tree produced by `ErlangParser.bitExpr`.
	 * @param ctx the parse tree
	 */
	exitBitExpr?: (ctx: BitExprContext) => void;

	/**
	 * Enter a parse tree produced by `ErlangParser.optBitSizeExpr`.
	 * @param ctx the parse tree
	 */
	enterOptBitSizeExpr?: (ctx: OptBitSizeExprContext) => void;
	/**
	 * Exit a parse tree produced by `ErlangParser.optBitSizeExpr`.
	 * @param ctx the parse tree
	 */
	exitOptBitSizeExpr?: (ctx: OptBitSizeExprContext) => void;

	/**
	 * Enter a parse tree produced by `ErlangParser.optBitTypeList`.
	 * @param ctx the parse tree
	 */
	enterOptBitTypeList?: (ctx: OptBitTypeListContext) => void;
	/**
	 * Exit a parse tree produced by `ErlangParser.optBitTypeList`.
	 * @param ctx the parse tree
	 */
	exitOptBitTypeList?: (ctx: OptBitTypeListContext) => void;

	/**
	 * Enter a parse tree produced by `ErlangParser.bitTypeList`.
	 * @param ctx the parse tree
	 */
	enterBitTypeList?: (ctx: BitTypeListContext) => void;
	/**
	 * Exit a parse tree produced by `ErlangParser.bitTypeList`.
	 * @param ctx the parse tree
	 */
	exitBitTypeList?: (ctx: BitTypeListContext) => void;

	/**
	 * Enter a parse tree produced by `ErlangParser.bitType`.
	 * @param ctx the parse tree
	 */
	enterBitType?: (ctx: BitTypeContext) => void;
	/**
	 * Exit a parse tree produced by `ErlangParser.bitType`.
	 * @param ctx the parse tree
	 */
	exitBitType?: (ctx: BitTypeContext) => void;

	/**
	 * Enter a parse tree produced by `ErlangParser.bitSizeExpr`.
	 * @param ctx the parse tree
	 */
	enterBitSizeExpr?: (ctx: BitSizeExprContext) => void;
	/**
	 * Exit a parse tree produced by `ErlangParser.bitSizeExpr`.
	 * @param ctx the parse tree
	 */
	exitBitSizeExpr?: (ctx: BitSizeExprContext) => void;

	/**
	 * Enter a parse tree produced by `ErlangParser.listComprehension`.
	 * @param ctx the parse tree
	 */
	enterListComprehension?: (ctx: ListComprehensionContext) => void;
	/**
	 * Exit a parse tree produced by `ErlangParser.listComprehension`.
	 * @param ctx the parse tree
	 */
	exitListComprehension?: (ctx: ListComprehensionContext) => void;

	/**
	 * Enter a parse tree produced by `ErlangParser.binaryComprehension`.
	 * @param ctx the parse tree
	 */
	enterBinaryComprehension?: (ctx: BinaryComprehensionContext) => void;
	/**
	 * Exit a parse tree produced by `ErlangParser.binaryComprehension`.
	 * @param ctx the parse tree
	 */
	exitBinaryComprehension?: (ctx: BinaryComprehensionContext) => void;

	/**
	 * Enter a parse tree produced by `ErlangParser.lcExprs`.
	 * @param ctx the parse tree
	 */
	enterLcExprs?: (ctx: LcExprsContext) => void;
	/**
	 * Exit a parse tree produced by `ErlangParser.lcExprs`.
	 * @param ctx the parse tree
	 */
	exitLcExprs?: (ctx: LcExprsContext) => void;

	/**
	 * Enter a parse tree produced by `ErlangParser.lcExpr`.
	 * @param ctx the parse tree
	 */
	enterLcExpr?: (ctx: LcExprContext) => void;
	/**
	 * Exit a parse tree produced by `ErlangParser.lcExpr`.
	 * @param ctx the parse tree
	 */
	exitLcExpr?: (ctx: LcExprContext) => void;

	/**
	 * Enter a parse tree produced by `ErlangParser.tuple_`.
	 * @param ctx the parse tree
	 */
	enterTuple_?: (ctx: Tuple_Context) => void;
	/**
	 * Exit a parse tree produced by `ErlangParser.tuple_`.
	 * @param ctx the parse tree
	 */
	exitTuple_?: (ctx: Tuple_Context) => void;

	/**
	 * Enter a parse tree produced by `ErlangParser.mapExpr`.
	 * @param ctx the parse tree
	 */
	enterMapExpr?: (ctx: MapExprContext) => void;
	/**
	 * Exit a parse tree produced by `ErlangParser.mapExpr`.
	 * @param ctx the parse tree
	 */
	exitMapExpr?: (ctx: MapExprContext) => void;

	/**
	 * Enter a parse tree produced by `ErlangParser.mapTuple`.
	 * @param ctx the parse tree
	 */
	enterMapTuple?: (ctx: MapTupleContext) => void;
	/**
	 * Exit a parse tree produced by `ErlangParser.mapTuple`.
	 * @param ctx the parse tree
	 */
	exitMapTuple?: (ctx: MapTupleContext) => void;

	/**
	 * Enter a parse tree produced by `ErlangParser.mapField`.
	 * @param ctx the parse tree
	 */
	enterMapField?: (ctx: MapFieldContext) => void;
	/**
	 * Exit a parse tree produced by `ErlangParser.mapField`.
	 * @param ctx the parse tree
	 */
	exitMapField?: (ctx: MapFieldContext) => void;

	/**
	 * Enter a parse tree produced by `ErlangParser.mapFieldAssoc`.
	 * @param ctx the parse tree
	 */
	enterMapFieldAssoc?: (ctx: MapFieldAssocContext) => void;
	/**
	 * Exit a parse tree produced by `ErlangParser.mapFieldAssoc`.
	 * @param ctx the parse tree
	 */
	exitMapFieldAssoc?: (ctx: MapFieldAssocContext) => void;

	/**
	 * Enter a parse tree produced by `ErlangParser.mapFieldExact`.
	 * @param ctx the parse tree
	 */
	enterMapFieldExact?: (ctx: MapFieldExactContext) => void;
	/**
	 * Exit a parse tree produced by `ErlangParser.mapFieldExact`.
	 * @param ctx the parse tree
	 */
	exitMapFieldExact?: (ctx: MapFieldExactContext) => void;

	/**
	 * Enter a parse tree produced by `ErlangParser.mapKey`.
	 * @param ctx the parse tree
	 */
	enterMapKey?: (ctx: MapKeyContext) => void;
	/**
	 * Exit a parse tree produced by `ErlangParser.mapKey`.
	 * @param ctx the parse tree
	 */
	exitMapKey?: (ctx: MapKeyContext) => void;

	/**
	 * Enter a parse tree produced by `ErlangParser.recordExpr`.
	 * @param ctx the parse tree
	 */
	enterRecordExpr?: (ctx: RecordExprContext) => void;
	/**
	 * Exit a parse tree produced by `ErlangParser.recordExpr`.
	 * @param ctx the parse tree
	 */
	exitRecordExpr?: (ctx: RecordExprContext) => void;

	/**
	 * Enter a parse tree produced by `ErlangParser.recordTuple`.
	 * @param ctx the parse tree
	 */
	enterRecordTuple?: (ctx: RecordTupleContext) => void;
	/**
	 * Exit a parse tree produced by `ErlangParser.recordTuple`.
	 * @param ctx the parse tree
	 */
	exitRecordTuple?: (ctx: RecordTupleContext) => void;

	/**
	 * Enter a parse tree produced by `ErlangParser.recordFields`.
	 * @param ctx the parse tree
	 */
	enterRecordFields?: (ctx: RecordFieldsContext) => void;
	/**
	 * Exit a parse tree produced by `ErlangParser.recordFields`.
	 * @param ctx the parse tree
	 */
	exitRecordFields?: (ctx: RecordFieldsContext) => void;

	/**
	 * Enter a parse tree produced by `ErlangParser.recordField`.
	 * @param ctx the parse tree
	 */
	enterRecordField?: (ctx: RecordFieldContext) => void;
	/**
	 * Exit a parse tree produced by `ErlangParser.recordField`.
	 * @param ctx the parse tree
	 */
	exitRecordField?: (ctx: RecordFieldContext) => void;

	/**
	 * Enter a parse tree produced by `ErlangParser.functionCall`.
	 * @param ctx the parse tree
	 */
	enterFunctionCall?: (ctx: FunctionCallContext) => void;
	/**
	 * Exit a parse tree produced by `ErlangParser.functionCall`.
	 * @param ctx the parse tree
	 */
	exitFunctionCall?: (ctx: FunctionCallContext) => void;

	/**
	 * Enter a parse tree produced by `ErlangParser.ifExpr`.
	 * @param ctx the parse tree
	 */
	enterIfExpr?: (ctx: IfExprContext) => void;
	/**
	 * Exit a parse tree produced by `ErlangParser.ifExpr`.
	 * @param ctx the parse tree
	 */
	exitIfExpr?: (ctx: IfExprContext) => void;

	/**
	 * Enter a parse tree produced by `ErlangParser.ifClauses`.
	 * @param ctx the parse tree
	 */
	enterIfClauses?: (ctx: IfClausesContext) => void;
	/**
	 * Exit a parse tree produced by `ErlangParser.ifClauses`.
	 * @param ctx the parse tree
	 */
	exitIfClauses?: (ctx: IfClausesContext) => void;

	/**
	 * Enter a parse tree produced by `ErlangParser.ifClause`.
	 * @param ctx the parse tree
	 */
	enterIfClause?: (ctx: IfClauseContext) => void;
	/**
	 * Exit a parse tree produced by `ErlangParser.ifClause`.
	 * @param ctx the parse tree
	 */
	exitIfClause?: (ctx: IfClauseContext) => void;

	/**
	 * Enter a parse tree produced by `ErlangParser.caseExpr`.
	 * @param ctx the parse tree
	 */
	enterCaseExpr?: (ctx: CaseExprContext) => void;
	/**
	 * Exit a parse tree produced by `ErlangParser.caseExpr`.
	 * @param ctx the parse tree
	 */
	exitCaseExpr?: (ctx: CaseExprContext) => void;

	/**
	 * Enter a parse tree produced by `ErlangParser.crClauses`.
	 * @param ctx the parse tree
	 */
	enterCrClauses?: (ctx: CrClausesContext) => void;
	/**
	 * Exit a parse tree produced by `ErlangParser.crClauses`.
	 * @param ctx the parse tree
	 */
	exitCrClauses?: (ctx: CrClausesContext) => void;

	/**
	 * Enter a parse tree produced by `ErlangParser.crClause`.
	 * @param ctx the parse tree
	 */
	enterCrClause?: (ctx: CrClauseContext) => void;
	/**
	 * Exit a parse tree produced by `ErlangParser.crClause`.
	 * @param ctx the parse tree
	 */
	exitCrClause?: (ctx: CrClauseContext) => void;

	/**
	 * Enter a parse tree produced by `ErlangParser.receiveExpr`.
	 * @param ctx the parse tree
	 */
	enterReceiveExpr?: (ctx: ReceiveExprContext) => void;
	/**
	 * Exit a parse tree produced by `ErlangParser.receiveExpr`.
	 * @param ctx the parse tree
	 */
	exitReceiveExpr?: (ctx: ReceiveExprContext) => void;

	/**
	 * Enter a parse tree produced by `ErlangParser.funExpr`.
	 * @param ctx the parse tree
	 */
	enterFunExpr?: (ctx: FunExprContext) => void;
	/**
	 * Exit a parse tree produced by `ErlangParser.funExpr`.
	 * @param ctx the parse tree
	 */
	exitFunExpr?: (ctx: FunExprContext) => void;

	/**
	 * Enter a parse tree produced by `ErlangParser.atomOrVar`.
	 * @param ctx the parse tree
	 */
	enterAtomOrVar?: (ctx: AtomOrVarContext) => void;
	/**
	 * Exit a parse tree produced by `ErlangParser.atomOrVar`.
	 * @param ctx the parse tree
	 */
	exitAtomOrVar?: (ctx: AtomOrVarContext) => void;

	/**
	 * Enter a parse tree produced by `ErlangParser.integerOrVar`.
	 * @param ctx the parse tree
	 */
	enterIntegerOrVar?: (ctx: IntegerOrVarContext) => void;
	/**
	 * Exit a parse tree produced by `ErlangParser.integerOrVar`.
	 * @param ctx the parse tree
	 */
	exitIntegerOrVar?: (ctx: IntegerOrVarContext) => void;

	/**
	 * Enter a parse tree produced by `ErlangParser.funClauses`.
	 * @param ctx the parse tree
	 */
	enterFunClauses?: (ctx: FunClausesContext) => void;
	/**
	 * Exit a parse tree produced by `ErlangParser.funClauses`.
	 * @param ctx the parse tree
	 */
	exitFunClauses?: (ctx: FunClausesContext) => void;

	/**
	 * Enter a parse tree produced by `ErlangParser.funClause`.
	 * @param ctx the parse tree
	 */
	enterFunClause?: (ctx: FunClauseContext) => void;
	/**
	 * Exit a parse tree produced by `ErlangParser.funClause`.
	 * @param ctx the parse tree
	 */
	exitFunClause?: (ctx: FunClauseContext) => void;

	/**
	 * Enter a parse tree produced by `ErlangParser.tryExpr`.
	 * @param ctx the parse tree
	 */
	enterTryExpr?: (ctx: TryExprContext) => void;
	/**
	 * Exit a parse tree produced by `ErlangParser.tryExpr`.
	 * @param ctx the parse tree
	 */
	exitTryExpr?: (ctx: TryExprContext) => void;

	/**
	 * Enter a parse tree produced by `ErlangParser.tryCatch`.
	 * @param ctx the parse tree
	 */
	enterTryCatch?: (ctx: TryCatchContext) => void;
	/**
	 * Exit a parse tree produced by `ErlangParser.tryCatch`.
	 * @param ctx the parse tree
	 */
	exitTryCatch?: (ctx: TryCatchContext) => void;

	/**
	 * Enter a parse tree produced by `ErlangParser.tryClauses`.
	 * @param ctx the parse tree
	 */
	enterTryClauses?: (ctx: TryClausesContext) => void;
	/**
	 * Exit a parse tree produced by `ErlangParser.tryClauses`.
	 * @param ctx the parse tree
	 */
	exitTryClauses?: (ctx: TryClausesContext) => void;

	/**
	 * Enter a parse tree produced by `ErlangParser.tryClause`.
	 * @param ctx the parse tree
	 */
	enterTryClause?: (ctx: TryClauseContext) => void;
	/**
	 * Exit a parse tree produced by `ErlangParser.tryClause`.
	 * @param ctx the parse tree
	 */
	exitTryClause?: (ctx: TryClauseContext) => void;

	/**
	 * Enter a parse tree produced by `ErlangParser.tryOptStackTrace`.
	 * @param ctx the parse tree
	 */
	enterTryOptStackTrace?: (ctx: TryOptStackTraceContext) => void;
	/**
	 * Exit a parse tree produced by `ErlangParser.tryOptStackTrace`.
	 * @param ctx the parse tree
	 */
	exitTryOptStackTrace?: (ctx: TryOptStackTraceContext) => void;

	/**
	 * Enter a parse tree produced by `ErlangParser.argumentList`.
	 * @param ctx the parse tree
	 */
	enterArgumentList?: (ctx: ArgumentListContext) => void;
	/**
	 * Exit a parse tree produced by `ErlangParser.argumentList`.
	 * @param ctx the parse tree
	 */
	exitArgumentList?: (ctx: ArgumentListContext) => void;

	/**
	 * Enter a parse tree produced by `ErlangParser.patArgumentList`.
	 * @param ctx the parse tree
	 */
	enterPatArgumentList?: (ctx: PatArgumentListContext) => void;
	/**
	 * Exit a parse tree produced by `ErlangParser.patArgumentList`.
	 * @param ctx the parse tree
	 */
	exitPatArgumentList?: (ctx: PatArgumentListContext) => void;

	/**
	 * Enter a parse tree produced by `ErlangParser.exprs`.
	 * @param ctx the parse tree
	 */
	enterExprs?: (ctx: ExprsContext) => void;
	/**
	 * Exit a parse tree produced by `ErlangParser.exprs`.
	 * @param ctx the parse tree
	 */
	exitExprs?: (ctx: ExprsContext) => void;

	/**
	 * Enter a parse tree produced by `ErlangParser.patExprs`.
	 * @param ctx the parse tree
	 */
	enterPatExprs?: (ctx: PatExprsContext) => void;
	/**
	 * Exit a parse tree produced by `ErlangParser.patExprs`.
	 * @param ctx the parse tree
	 */
	exitPatExprs?: (ctx: PatExprsContext) => void;

	/**
	 * Enter a parse tree produced by `ErlangParser.guard_`.
	 * @param ctx the parse tree
	 */
	enterGuard_?: (ctx: Guard_Context) => void;
	/**
	 * Exit a parse tree produced by `ErlangParser.guard_`.
	 * @param ctx the parse tree
	 */
	exitGuard_?: (ctx: Guard_Context) => void;

	/**
	 * Enter a parse tree produced by `ErlangParser.atomic`.
	 * @param ctx the parse tree
	 */
	enterAtomic?: (ctx: AtomicContext) => void;
	/**
	 * Exit a parse tree produced by `ErlangParser.atomic`.
	 * @param ctx the parse tree
	 */
	exitAtomic?: (ctx: AtomicContext) => void;

	/**
	 * Enter a parse tree produced by `ErlangParser.prefixOp`.
	 * @param ctx the parse tree
	 */
	enterPrefixOp?: (ctx: PrefixOpContext) => void;
	/**
	 * Exit a parse tree produced by `ErlangParser.prefixOp`.
	 * @param ctx the parse tree
	 */
	exitPrefixOp?: (ctx: PrefixOpContext) => void;

	/**
	 * Enter a parse tree produced by `ErlangParser.multOp`.
	 * @param ctx the parse tree
	 */
	enterMultOp?: (ctx: MultOpContext) => void;
	/**
	 * Exit a parse tree produced by `ErlangParser.multOp`.
	 * @param ctx the parse tree
	 */
	exitMultOp?: (ctx: MultOpContext) => void;

	/**
	 * Enter a parse tree produced by `ErlangParser.addOp`.
	 * @param ctx the parse tree
	 */
	enterAddOp?: (ctx: AddOpContext) => void;
	/**
	 * Exit a parse tree produced by `ErlangParser.addOp`.
	 * @param ctx the parse tree
	 */
	exitAddOp?: (ctx: AddOpContext) => void;

	/**
	 * Enter a parse tree produced by `ErlangParser.listOp`.
	 * @param ctx the parse tree
	 */
	enterListOp?: (ctx: ListOpContext) => void;
	/**
	 * Exit a parse tree produced by `ErlangParser.listOp`.
	 * @param ctx the parse tree
	 */
	exitListOp?: (ctx: ListOpContext) => void;

	/**
	 * Enter a parse tree produced by `ErlangParser.compOp`.
	 * @param ctx the parse tree
	 */
	enterCompOp?: (ctx: CompOpContext) => void;
	/**
	 * Exit a parse tree produced by `ErlangParser.compOp`.
	 * @param ctx the parse tree
	 */
	exitCompOp?: (ctx: CompOpContext) => void;
}

