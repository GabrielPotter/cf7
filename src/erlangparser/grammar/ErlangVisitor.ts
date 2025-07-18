// Generated from grammar/Erlang.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

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
 * This interface defines a complete generic visitor for a parse tree produced
 * by `ErlangParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface ErlangVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `ErlangParser.forms`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitForms?: (ctx: FormsContext) => Result;

	/**
	 * Visit a parse tree produced by `ErlangParser.form`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitForm?: (ctx: FormContext) => Result;

	/**
	 * Visit a parse tree produced by `ErlangParser.tokAtom`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTokAtom?: (ctx: TokAtomContext) => Result;

	/**
	 * Visit a parse tree produced by `ErlangParser.tokVar`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTokVar?: (ctx: TokVarContext) => Result;

	/**
	 * Visit a parse tree produced by `ErlangParser.tokFloat`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTokFloat?: (ctx: TokFloatContext) => Result;

	/**
	 * Visit a parse tree produced by `ErlangParser.tokInteger`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTokInteger?: (ctx: TokIntegerContext) => Result;

	/**
	 * Visit a parse tree produced by `ErlangParser.tokChar`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTokChar?: (ctx: TokCharContext) => Result;

	/**
	 * Visit a parse tree produced by `ErlangParser.tokString`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTokString?: (ctx: TokStringContext) => Result;

	/**
	 * Visit a parse tree produced by `ErlangParser.attribute`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAttribute?: (ctx: AttributeContext) => Result;

	/**
	 * Visit a parse tree produced by `ErlangParser.typeSpec`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeSpec?: (ctx: TypeSpecContext) => Result;

	/**
	 * Visit a parse tree produced by `ErlangParser.specFun`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSpecFun?: (ctx: SpecFunContext) => Result;

	/**
	 * Visit a parse tree produced by `ErlangParser.typedAttrVal`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypedAttrVal?: (ctx: TypedAttrValContext) => Result;

	/**
	 * Visit a parse tree produced by `ErlangParser.typedRecordFields`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypedRecordFields?: (ctx: TypedRecordFieldsContext) => Result;

	/**
	 * Visit a parse tree produced by `ErlangParser.typedExprs`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypedExprs?: (ctx: TypedExprsContext) => Result;

	/**
	 * Visit a parse tree produced by `ErlangParser.typedExpr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypedExpr?: (ctx: TypedExprContext) => Result;

	/**
	 * Visit a parse tree produced by `ErlangParser.typeSigs`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeSigs?: (ctx: TypeSigsContext) => Result;

	/**
	 * Visit a parse tree produced by `ErlangParser.typeSig`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeSig?: (ctx: TypeSigContext) => Result;

	/**
	 * Visit a parse tree produced by `ErlangParser.typeGuards`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeGuards?: (ctx: TypeGuardsContext) => Result;

	/**
	 * Visit a parse tree produced by `ErlangParser.typeGuard`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeGuard?: (ctx: TypeGuardContext) => Result;

	/**
	 * Visit a parse tree produced by `ErlangParser.topTypes`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTopTypes?: (ctx: TopTypesContext) => Result;

	/**
	 * Visit a parse tree produced by `ErlangParser.topType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTopType?: (ctx: TopTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `ErlangParser.topType100`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTopType100?: (ctx: TopType100Context) => Result;

	/**
	 * Visit a parse tree produced by `ErlangParser.type200`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitType200?: (ctx: Type200Context) => Result;

	/**
	 * Visit a parse tree produced by `ErlangParser.type300`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitType300?: (ctx: Type300Context) => Result;

	/**
	 * Visit a parse tree produced by `ErlangParser.type400`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitType400?: (ctx: Type400Context) => Result;

	/**
	 * Visit a parse tree produced by `ErlangParser.type500`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitType500?: (ctx: Type500Context) => Result;

	/**
	 * Visit a parse tree produced by `ErlangParser.type_`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitType_?: (ctx: Type_Context) => Result;

	/**
	 * Visit a parse tree produced by `ErlangParser.funType100`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunType100?: (ctx: FunType100Context) => Result;

	/**
	 * Visit a parse tree produced by `ErlangParser.funType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunType?: (ctx: FunTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `ErlangParser.mapPairTypes`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMapPairTypes?: (ctx: MapPairTypesContext) => Result;

	/**
	 * Visit a parse tree produced by `ErlangParser.mapPairType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMapPairType?: (ctx: MapPairTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `ErlangParser.fieldTypes`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFieldTypes?: (ctx: FieldTypesContext) => Result;

	/**
	 * Visit a parse tree produced by `ErlangParser.fieldType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFieldType?: (ctx: FieldTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `ErlangParser.binaryType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBinaryType?: (ctx: BinaryTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `ErlangParser.binBaseType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBinBaseType?: (ctx: BinBaseTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `ErlangParser.binUnitType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBinUnitType?: (ctx: BinUnitTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `ErlangParser.attrVal`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAttrVal?: (ctx: AttrValContext) => Result;

	/**
	 * Visit a parse tree produced by `ErlangParser.function_`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunction_?: (ctx: Function_Context) => Result;

	/**
	 * Visit a parse tree produced by `ErlangParser.functionClause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunctionClause?: (ctx: FunctionClauseContext) => Result;

	/**
	 * Visit a parse tree produced by `ErlangParser.clauseArgs`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitClauseArgs?: (ctx: ClauseArgsContext) => Result;

	/**
	 * Visit a parse tree produced by `ErlangParser.clauseGuard`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitClauseGuard?: (ctx: ClauseGuardContext) => Result;

	/**
	 * Visit a parse tree produced by `ErlangParser.clauseBody`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitClauseBody?: (ctx: ClauseBodyContext) => Result;

	/**
	 * Visit a parse tree produced by `ErlangParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpr?: (ctx: ExprContext) => Result;

	/**
	 * Visit a parse tree produced by `ErlangParser.expr100`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpr100?: (ctx: Expr100Context) => Result;

	/**
	 * Visit a parse tree produced by `ErlangParser.expr150`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpr150?: (ctx: Expr150Context) => Result;

	/**
	 * Visit a parse tree produced by `ErlangParser.expr160`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpr160?: (ctx: Expr160Context) => Result;

	/**
	 * Visit a parse tree produced by `ErlangParser.expr200`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpr200?: (ctx: Expr200Context) => Result;

	/**
	 * Visit a parse tree produced by `ErlangParser.expr300`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpr300?: (ctx: Expr300Context) => Result;

	/**
	 * Visit a parse tree produced by `ErlangParser.expr400`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpr400?: (ctx: Expr400Context) => Result;

	/**
	 * Visit a parse tree produced by `ErlangParser.expr500`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpr500?: (ctx: Expr500Context) => Result;

	/**
	 * Visit a parse tree produced by `ErlangParser.expr600`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpr600?: (ctx: Expr600Context) => Result;

	/**
	 * Visit a parse tree produced by `ErlangParser.expr650`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpr650?: (ctx: Expr650Context) => Result;

	/**
	 * Visit a parse tree produced by `ErlangParser.expr700`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpr700?: (ctx: Expr700Context) => Result;

	/**
	 * Visit a parse tree produced by `ErlangParser.expr800`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpr800?: (ctx: Expr800Context) => Result;

	/**
	 * Visit a parse tree produced by `ErlangParser.exprMax`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExprMax?: (ctx: ExprMaxContext) => Result;

	/**
	 * Visit a parse tree produced by `ErlangParser.patExpr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPatExpr?: (ctx: PatExprContext) => Result;

	/**
	 * Visit a parse tree produced by `ErlangParser.patExpr200`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPatExpr200?: (ctx: PatExpr200Context) => Result;

	/**
	 * Visit a parse tree produced by `ErlangParser.patExpr300`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPatExpr300?: (ctx: PatExpr300Context) => Result;

	/**
	 * Visit a parse tree produced by `ErlangParser.patExpr400`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPatExpr400?: (ctx: PatExpr400Context) => Result;

	/**
	 * Visit a parse tree produced by `ErlangParser.patExpr500`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPatExpr500?: (ctx: PatExpr500Context) => Result;

	/**
	 * Visit a parse tree produced by `ErlangParser.patExpr600`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPatExpr600?: (ctx: PatExpr600Context) => Result;

	/**
	 * Visit a parse tree produced by `ErlangParser.patExpr650`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPatExpr650?: (ctx: PatExpr650Context) => Result;

	/**
	 * Visit a parse tree produced by `ErlangParser.patExpr700`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPatExpr700?: (ctx: PatExpr700Context) => Result;

	/**
	 * Visit a parse tree produced by `ErlangParser.patExpr800`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPatExpr800?: (ctx: PatExpr800Context) => Result;

	/**
	 * Visit a parse tree produced by `ErlangParser.patExprMax`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPatExprMax?: (ctx: PatExprMaxContext) => Result;

	/**
	 * Visit a parse tree produced by `ErlangParser.mapPatExpr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMapPatExpr?: (ctx: MapPatExprContext) => Result;

	/**
	 * Visit a parse tree produced by `ErlangParser.recordPatExpr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRecordPatExpr?: (ctx: RecordPatExprContext) => Result;

	/**
	 * Visit a parse tree produced by `ErlangParser.list_`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitList_?: (ctx: List_Context) => Result;

	/**
	 * Visit a parse tree produced by `ErlangParser.tail`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTail?: (ctx: TailContext) => Result;

	/**
	 * Visit a parse tree produced by `ErlangParser.binary`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBinary?: (ctx: BinaryContext) => Result;

	/**
	 * Visit a parse tree produced by `ErlangParser.binElements`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBinElements?: (ctx: BinElementsContext) => Result;

	/**
	 * Visit a parse tree produced by `ErlangParser.binElement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBinElement?: (ctx: BinElementContext) => Result;

	/**
	 * Visit a parse tree produced by `ErlangParser.bitExpr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBitExpr?: (ctx: BitExprContext) => Result;

	/**
	 * Visit a parse tree produced by `ErlangParser.optBitSizeExpr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOptBitSizeExpr?: (ctx: OptBitSizeExprContext) => Result;

	/**
	 * Visit a parse tree produced by `ErlangParser.optBitTypeList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOptBitTypeList?: (ctx: OptBitTypeListContext) => Result;

	/**
	 * Visit a parse tree produced by `ErlangParser.bitTypeList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBitTypeList?: (ctx: BitTypeListContext) => Result;

	/**
	 * Visit a parse tree produced by `ErlangParser.bitType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBitType?: (ctx: BitTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `ErlangParser.bitSizeExpr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBitSizeExpr?: (ctx: BitSizeExprContext) => Result;

	/**
	 * Visit a parse tree produced by `ErlangParser.listComprehension`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitListComprehension?: (ctx: ListComprehensionContext) => Result;

	/**
	 * Visit a parse tree produced by `ErlangParser.binaryComprehension`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBinaryComprehension?: (ctx: BinaryComprehensionContext) => Result;

	/**
	 * Visit a parse tree produced by `ErlangParser.lcExprs`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLcExprs?: (ctx: LcExprsContext) => Result;

	/**
	 * Visit a parse tree produced by `ErlangParser.lcExpr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLcExpr?: (ctx: LcExprContext) => Result;

	/**
	 * Visit a parse tree produced by `ErlangParser.tuple_`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTuple_?: (ctx: Tuple_Context) => Result;

	/**
	 * Visit a parse tree produced by `ErlangParser.mapExpr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMapExpr?: (ctx: MapExprContext) => Result;

	/**
	 * Visit a parse tree produced by `ErlangParser.mapTuple`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMapTuple?: (ctx: MapTupleContext) => Result;

	/**
	 * Visit a parse tree produced by `ErlangParser.mapField`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMapField?: (ctx: MapFieldContext) => Result;

	/**
	 * Visit a parse tree produced by `ErlangParser.mapFieldAssoc`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMapFieldAssoc?: (ctx: MapFieldAssocContext) => Result;

	/**
	 * Visit a parse tree produced by `ErlangParser.mapFieldExact`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMapFieldExact?: (ctx: MapFieldExactContext) => Result;

	/**
	 * Visit a parse tree produced by `ErlangParser.mapKey`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMapKey?: (ctx: MapKeyContext) => Result;

	/**
	 * Visit a parse tree produced by `ErlangParser.recordExpr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRecordExpr?: (ctx: RecordExprContext) => Result;

	/**
	 * Visit a parse tree produced by `ErlangParser.recordTuple`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRecordTuple?: (ctx: RecordTupleContext) => Result;

	/**
	 * Visit a parse tree produced by `ErlangParser.recordFields`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRecordFields?: (ctx: RecordFieldsContext) => Result;

	/**
	 * Visit a parse tree produced by `ErlangParser.recordField`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRecordField?: (ctx: RecordFieldContext) => Result;

	/**
	 * Visit a parse tree produced by `ErlangParser.functionCall`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunctionCall?: (ctx: FunctionCallContext) => Result;

	/**
	 * Visit a parse tree produced by `ErlangParser.ifExpr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIfExpr?: (ctx: IfExprContext) => Result;

	/**
	 * Visit a parse tree produced by `ErlangParser.ifClauses`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIfClauses?: (ctx: IfClausesContext) => Result;

	/**
	 * Visit a parse tree produced by `ErlangParser.ifClause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIfClause?: (ctx: IfClauseContext) => Result;

	/**
	 * Visit a parse tree produced by `ErlangParser.caseExpr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCaseExpr?: (ctx: CaseExprContext) => Result;

	/**
	 * Visit a parse tree produced by `ErlangParser.crClauses`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCrClauses?: (ctx: CrClausesContext) => Result;

	/**
	 * Visit a parse tree produced by `ErlangParser.crClause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCrClause?: (ctx: CrClauseContext) => Result;

	/**
	 * Visit a parse tree produced by `ErlangParser.receiveExpr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitReceiveExpr?: (ctx: ReceiveExprContext) => Result;

	/**
	 * Visit a parse tree produced by `ErlangParser.funExpr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunExpr?: (ctx: FunExprContext) => Result;

	/**
	 * Visit a parse tree produced by `ErlangParser.atomOrVar`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAtomOrVar?: (ctx: AtomOrVarContext) => Result;

	/**
	 * Visit a parse tree produced by `ErlangParser.integerOrVar`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIntegerOrVar?: (ctx: IntegerOrVarContext) => Result;

	/**
	 * Visit a parse tree produced by `ErlangParser.funClauses`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunClauses?: (ctx: FunClausesContext) => Result;

	/**
	 * Visit a parse tree produced by `ErlangParser.funClause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunClause?: (ctx: FunClauseContext) => Result;

	/**
	 * Visit a parse tree produced by `ErlangParser.tryExpr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTryExpr?: (ctx: TryExprContext) => Result;

	/**
	 * Visit a parse tree produced by `ErlangParser.tryCatch`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTryCatch?: (ctx: TryCatchContext) => Result;

	/**
	 * Visit a parse tree produced by `ErlangParser.tryClauses`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTryClauses?: (ctx: TryClausesContext) => Result;

	/**
	 * Visit a parse tree produced by `ErlangParser.tryClause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTryClause?: (ctx: TryClauseContext) => Result;

	/**
	 * Visit a parse tree produced by `ErlangParser.tryOptStackTrace`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTryOptStackTrace?: (ctx: TryOptStackTraceContext) => Result;

	/**
	 * Visit a parse tree produced by `ErlangParser.argumentList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArgumentList?: (ctx: ArgumentListContext) => Result;

	/**
	 * Visit a parse tree produced by `ErlangParser.patArgumentList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPatArgumentList?: (ctx: PatArgumentListContext) => Result;

	/**
	 * Visit a parse tree produced by `ErlangParser.exprs`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExprs?: (ctx: ExprsContext) => Result;

	/**
	 * Visit a parse tree produced by `ErlangParser.patExprs`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPatExprs?: (ctx: PatExprsContext) => Result;

	/**
	 * Visit a parse tree produced by `ErlangParser.guard_`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGuard_?: (ctx: Guard_Context) => Result;

	/**
	 * Visit a parse tree produced by `ErlangParser.atomic`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAtomic?: (ctx: AtomicContext) => Result;

	/**
	 * Visit a parse tree produced by `ErlangParser.prefixOp`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrefixOp?: (ctx: PrefixOpContext) => Result;

	/**
	 * Visit a parse tree produced by `ErlangParser.multOp`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMultOp?: (ctx: MultOpContext) => Result;

	/**
	 * Visit a parse tree produced by `ErlangParser.addOp`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAddOp?: (ctx: AddOpContext) => Result;

	/**
	 * Visit a parse tree produced by `ErlangParser.listOp`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitListOp?: (ctx: ListOpContext) => Result;

	/**
	 * Visit a parse tree produced by `ErlangParser.compOp`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCompOp?: (ctx: CompOpContext) => Result;
}

