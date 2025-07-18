// Generated from grammar/Erlang.g4 by ANTLR 4.9.0-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { FailedPredicateException } from "antlr4ts/FailedPredicateException";
import { NotNull } from "antlr4ts/Decorators";
import { NoViableAltException } from "antlr4ts/NoViableAltException";
import { Override } from "antlr4ts/Decorators";
import { Parser } from "antlr4ts/Parser";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { ParserATNSimulator } from "antlr4ts/atn/ParserATNSimulator";
import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";
import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";
import { RecognitionException } from "antlr4ts/RecognitionException";
import { RuleContext } from "antlr4ts/RuleContext";
//import { RuleVersion } from "antlr4ts/RuleVersion";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { Token } from "antlr4ts/Token";
import { TokenStream } from "antlr4ts/TokenStream";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";

import { ErlangListener } from "./ErlangListener";
import { ErlangVisitor } from "./ErlangVisitor";


export class ErlangParser extends Parser {
	public static readonly T__0 = 1;
	public static readonly T__1 = 2;
	public static readonly T__2 = 3;
	public static readonly T__3 = 4;
	public static readonly T__4 = 5;
	public static readonly T__5 = 6;
	public static readonly T__6 = 7;
	public static readonly T__7 = 8;
	public static readonly T__8 = 9;
	public static readonly T__9 = 10;
	public static readonly T__10 = 11;
	public static readonly T__11 = 12;
	public static readonly T__12 = 13;
	public static readonly T__13 = 14;
	public static readonly T__14 = 15;
	public static readonly T__15 = 16;
	public static readonly T__16 = 17;
	public static readonly T__17 = 18;
	public static readonly T__18 = 19;
	public static readonly T__19 = 20;
	public static readonly T__20 = 21;
	public static readonly T__21 = 22;
	public static readonly T__22 = 23;
	public static readonly T__23 = 24;
	public static readonly T__24 = 25;
	public static readonly T__25 = 26;
	public static readonly T__26 = 27;
	public static readonly T__27 = 28;
	public static readonly T__28 = 29;
	public static readonly T__29 = 30;
	public static readonly T__30 = 31;
	public static readonly T__31 = 32;
	public static readonly T__32 = 33;
	public static readonly T__33 = 34;
	public static readonly T__34 = 35;
	public static readonly T__35 = 36;
	public static readonly T__36 = 37;
	public static readonly T__37 = 38;
	public static readonly T__38 = 39;
	public static readonly T__39 = 40;
	public static readonly T__40 = 41;
	public static readonly T__41 = 42;
	public static readonly T__42 = 43;
	public static readonly T__43 = 44;
	public static readonly T__44 = 45;
	public static readonly T__45 = 46;
	public static readonly T__46 = 47;
	public static readonly T__47 = 48;
	public static readonly T__48 = 49;
	public static readonly T__49 = 50;
	public static readonly T__50 = 51;
	public static readonly T__51 = 52;
	public static readonly T__52 = 53;
	public static readonly T__53 = 54;
	public static readonly T__54 = 55;
	public static readonly T__55 = 56;
	public static readonly T__56 = 57;
	public static readonly T__57 = 58;
	public static readonly T__58 = 59;
	public static readonly T__59 = 60;
	public static readonly T__60 = 61;
	public static readonly T__61 = 62;
	public static readonly T__62 = 63;
	public static readonly T__63 = 64;
	public static readonly TokAtom = 65;
	public static readonly TokVar = 66;
	public static readonly TokFloat = 67;
	public static readonly TokInteger = 68;
	public static readonly TokChar = 69;
	public static readonly TokString = 70;
	public static readonly AttrName = 71;
	public static readonly Comment = 72;
	public static readonly WS = 73;
	public static readonly RULE_forms = 0;
	public static readonly RULE_form = 1;
	public static readonly RULE_tokAtom = 2;
	public static readonly RULE_tokVar = 3;
	public static readonly RULE_tokFloat = 4;
	public static readonly RULE_tokInteger = 5;
	public static readonly RULE_tokChar = 6;
	public static readonly RULE_tokString = 7;
	public static readonly RULE_attribute = 8;
	public static readonly RULE_typeSpec = 9;
	public static readonly RULE_specFun = 10;
	public static readonly RULE_typedAttrVal = 11;
	public static readonly RULE_typedRecordFields = 12;
	public static readonly RULE_typedExprs = 13;
	public static readonly RULE_typedExpr = 14;
	public static readonly RULE_typeSigs = 15;
	public static readonly RULE_typeSig = 16;
	public static readonly RULE_typeGuards = 17;
	public static readonly RULE_typeGuard = 18;
	public static readonly RULE_topTypes = 19;
	public static readonly RULE_topType = 20;
	public static readonly RULE_topType100 = 21;
	public static readonly RULE_type200 = 22;
	public static readonly RULE_type300 = 23;
	public static readonly RULE_type400 = 24;
	public static readonly RULE_type500 = 25;
	public static readonly RULE_type_ = 26;
	public static readonly RULE_funType100 = 27;
	public static readonly RULE_funType = 28;
	public static readonly RULE_mapPairTypes = 29;
	public static readonly RULE_mapPairType = 30;
	public static readonly RULE_fieldTypes = 31;
	public static readonly RULE_fieldType = 32;
	public static readonly RULE_binaryType = 33;
	public static readonly RULE_binBaseType = 34;
	public static readonly RULE_binUnitType = 35;
	public static readonly RULE_attrVal = 36;
	public static readonly RULE_function_ = 37;
	public static readonly RULE_functionClause = 38;
	public static readonly RULE_clauseArgs = 39;
	public static readonly RULE_clauseGuard = 40;
	public static readonly RULE_clauseBody = 41;
	public static readonly RULE_expr = 42;
	public static readonly RULE_expr100 = 43;
	public static readonly RULE_expr150 = 44;
	public static readonly RULE_expr160 = 45;
	public static readonly RULE_expr200 = 46;
	public static readonly RULE_expr300 = 47;
	public static readonly RULE_expr400 = 48;
	public static readonly RULE_expr500 = 49;
	public static readonly RULE_expr600 = 50;
	public static readonly RULE_expr650 = 51;
	public static readonly RULE_expr700 = 52;
	public static readonly RULE_expr800 = 53;
	public static readonly RULE_exprMax = 54;
	public static readonly RULE_patExpr = 55;
	public static readonly RULE_patExpr200 = 56;
	public static readonly RULE_patExpr300 = 57;
	public static readonly RULE_patExpr400 = 58;
	public static readonly RULE_patExpr500 = 59;
	public static readonly RULE_patExpr600 = 60;
	public static readonly RULE_patExpr650 = 61;
	public static readonly RULE_patExpr700 = 62;
	public static readonly RULE_patExpr800 = 63;
	public static readonly RULE_patExprMax = 64;
	public static readonly RULE_mapPatExpr = 65;
	public static readonly RULE_recordPatExpr = 66;
	public static readonly RULE_list_ = 67;
	public static readonly RULE_tail = 68;
	public static readonly RULE_binary = 69;
	public static readonly RULE_binElements = 70;
	public static readonly RULE_binElement = 71;
	public static readonly RULE_bitExpr = 72;
	public static readonly RULE_optBitSizeExpr = 73;
	public static readonly RULE_optBitTypeList = 74;
	public static readonly RULE_bitTypeList = 75;
	public static readonly RULE_bitType = 76;
	public static readonly RULE_bitSizeExpr = 77;
	public static readonly RULE_listComprehension = 78;
	public static readonly RULE_binaryComprehension = 79;
	public static readonly RULE_lcExprs = 80;
	public static readonly RULE_lcExpr = 81;
	public static readonly RULE_tuple_ = 82;
	public static readonly RULE_mapExpr = 83;
	public static readonly RULE_mapTuple = 84;
	public static readonly RULE_mapField = 85;
	public static readonly RULE_mapFieldAssoc = 86;
	public static readonly RULE_mapFieldExact = 87;
	public static readonly RULE_mapKey = 88;
	public static readonly RULE_recordExpr = 89;
	public static readonly RULE_recordTuple = 90;
	public static readonly RULE_recordFields = 91;
	public static readonly RULE_recordField = 92;
	public static readonly RULE_functionCall = 93;
	public static readonly RULE_ifExpr = 94;
	public static readonly RULE_ifClauses = 95;
	public static readonly RULE_ifClause = 96;
	public static readonly RULE_caseExpr = 97;
	public static readonly RULE_crClauses = 98;
	public static readonly RULE_crClause = 99;
	public static readonly RULE_receiveExpr = 100;
	public static readonly RULE_funExpr = 101;
	public static readonly RULE_atomOrVar = 102;
	public static readonly RULE_integerOrVar = 103;
	public static readonly RULE_funClauses = 104;
	public static readonly RULE_funClause = 105;
	public static readonly RULE_tryExpr = 106;
	public static readonly RULE_tryCatch = 107;
	public static readonly RULE_tryClauses = 108;
	public static readonly RULE_tryClause = 109;
	public static readonly RULE_tryOptStackTrace = 110;
	public static readonly RULE_argumentList = 111;
	public static readonly RULE_patArgumentList = 112;
	public static readonly RULE_exprs = 113;
	public static readonly RULE_patExprs = 114;
	public static readonly RULE_guard_ = 115;
	public static readonly RULE_atomic = 116;
	public static readonly RULE_prefixOp = 117;
	public static readonly RULE_multOp = 118;
	public static readonly RULE_addOp = 119;
	public static readonly RULE_listOp = 120;
	public static readonly RULE_compOp = 121;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"forms", "form", "tokAtom", "tokVar", "tokFloat", "tokInteger", "tokChar", 
		"tokString", "attribute", "typeSpec", "specFun", "typedAttrVal", "typedRecordFields", 
		"typedExprs", "typedExpr", "typeSigs", "typeSig", "typeGuards", "typeGuard", 
		"topTypes", "topType", "topType100", "type200", "type300", "type400", 
		"type500", "type_", "funType100", "funType", "mapPairTypes", "mapPairType", 
		"fieldTypes", "fieldType", "binaryType", "binBaseType", "binUnitType", 
		"attrVal", "function_", "functionClause", "clauseArgs", "clauseGuard", 
		"clauseBody", "expr", "expr100", "expr150", "expr160", "expr200", "expr300", 
		"expr400", "expr500", "expr600", "expr650", "expr700", "expr800", "exprMax", 
		"patExpr", "patExpr200", "patExpr300", "patExpr400", "patExpr500", "patExpr600", 
		"patExpr650", "patExpr700", "patExpr800", "patExprMax", "mapPatExpr", 
		"recordPatExpr", "list_", "tail", "binary", "binElements", "binElement", 
		"bitExpr", "optBitSizeExpr", "optBitTypeList", "bitTypeList", "bitType", 
		"bitSizeExpr", "listComprehension", "binaryComprehension", "lcExprs", 
		"lcExpr", "tuple_", "mapExpr", "mapTuple", "mapField", "mapFieldAssoc", 
		"mapFieldExact", "mapKey", "recordExpr", "recordTuple", "recordFields", 
		"recordField", "functionCall", "ifExpr", "ifClauses", "ifClause", "caseExpr", 
		"crClauses", "crClause", "receiveExpr", "funExpr", "atomOrVar", "integerOrVar", 
		"funClauses", "funClause", "tryExpr", "tryCatch", "tryClauses", "tryClause", 
		"tryOptStackTrace", "argumentList", "patArgumentList", "exprs", "patExprs", 
		"guard_", "atomic", "prefixOp", "multOp", "addOp", "listOp", "compOp",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'.'", "'-'", "'('", "')'", "':'", "','", "'::'", "'{'", "'}'", 
		"';'", "'when'", "'|'", "'..'", "'['", "']'", "'...'", "'#'", "'fun'", 
		"'->'", "'=>'", "':='", "'<<'", "'>>'", "'*'", "'catch'", "'='", "'!'", 
		"'orelse'", "'andalso'", "'begin'", "'end'", "'/'", "'||'", "'<-'", "'<='", 
		"'if'", "'case'", "'of'", "'receive'", "'after'", "'try'", "'+'", "'bnot'", 
		"'not'", "'div'", "'rem'", "'band'", "'and'", "'bor'", "'bxor'", "'bsl'", 
		"'bsr'", "'or'", "'xor'", "'++'", "'--'", "'=='", "'/='", "'=<'", "'<'", 
		"'>='", "'>'", "'=:='", "'=/='",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, "TokAtom", "TokVar", "TokFloat", "TokInteger", "TokChar", 
		"TokString", "AttrName", "Comment", "WS",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(ErlangParser._LITERAL_NAMES, ErlangParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return ErlangParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "Erlang.g4"; }

	// @Override
	public get ruleNames(): string[] { return ErlangParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return ErlangParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(ErlangParser._ATN, this);
	}
	// @RuleVersion(0)
	public forms(): FormsContext {
		let _localctx: FormsContext = new FormsContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, ErlangParser.RULE_forms);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 245;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 244;
				this.form();
				}
				}
				this.state = 247;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === ErlangParser.T__1 || _la === ErlangParser.TokAtom || _la === ErlangParser.AttrName);
			this.state = 249;
			this.match(ErlangParser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public form(): FormContext {
		let _localctx: FormContext = new FormContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, ErlangParser.RULE_form);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 253;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ErlangParser.T__1:
			case ErlangParser.AttrName:
				{
				this.state = 251;
				this.attribute();
				}
				break;
			case ErlangParser.TokAtom:
				{
				this.state = 252;
				this.function_();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 255;
			this.match(ErlangParser.T__0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public tokAtom(): TokAtomContext {
		let _localctx: TokAtomContext = new TokAtomContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, ErlangParser.RULE_tokAtom);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 257;
			this.match(ErlangParser.TokAtom);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public tokVar(): TokVarContext {
		let _localctx: TokVarContext = new TokVarContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, ErlangParser.RULE_tokVar);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 259;
			this.match(ErlangParser.TokVar);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public tokFloat(): TokFloatContext {
		let _localctx: TokFloatContext = new TokFloatContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, ErlangParser.RULE_tokFloat);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 261;
			this.match(ErlangParser.TokFloat);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public tokInteger(): TokIntegerContext {
		let _localctx: TokIntegerContext = new TokIntegerContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, ErlangParser.RULE_tokInteger);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 263;
			this.match(ErlangParser.TokInteger);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public tokChar(): TokCharContext {
		let _localctx: TokCharContext = new TokCharContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, ErlangParser.RULE_tokChar);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 265;
			this.match(ErlangParser.TokChar);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public tokString(): TokStringContext {
		let _localctx: TokStringContext = new TokStringContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, ErlangParser.RULE_tokString);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 267;
			this.match(ErlangParser.TokString);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public attribute(): AttributeContext {
		let _localctx: AttributeContext = new AttributeContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, ErlangParser.RULE_attribute);
		try {
			this.state = 285;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 2, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 269;
				this.match(ErlangParser.T__1);
				this.state = 270;
				this.tokAtom();
				this.state = 271;
				this.attrVal();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 273;
				this.match(ErlangParser.T__1);
				this.state = 274;
				this.tokAtom();
				this.state = 275;
				this.typedAttrVal();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 277;
				this.match(ErlangParser.T__1);
				this.state = 278;
				this.tokAtom();
				this.state = 279;
				this.match(ErlangParser.T__2);
				this.state = 280;
				this.typedAttrVal();
				this.state = 281;
				this.match(ErlangParser.T__3);
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 283;
				this.match(ErlangParser.AttrName);
				this.state = 284;
				this.typeSpec();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typeSpec(): TypeSpecContext {
		let _localctx: TypeSpecContext = new TypeSpecContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, ErlangParser.RULE_typeSpec);
		try {
			this.state = 295;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ErlangParser.TokAtom:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 287;
				this.specFun();
				this.state = 288;
				this.typeSigs();
				}
				break;
			case ErlangParser.T__2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 290;
				this.match(ErlangParser.T__2);
				this.state = 291;
				this.specFun();
				this.state = 292;
				this.typeSigs();
				this.state = 293;
				this.match(ErlangParser.T__3);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public specFun(): SpecFunContext {
		let _localctx: SpecFunContext = new SpecFunContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, ErlangParser.RULE_specFun);
		try {
			this.state = 302;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 4, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 297;
				this.tokAtom();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 298;
				this.tokAtom();
				this.state = 299;
				this.match(ErlangParser.T__4);
				this.state = 300;
				this.tokAtom();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typedAttrVal(): TypedAttrValContext {
		let _localctx: TypedAttrValContext = new TypedAttrValContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, ErlangParser.RULE_typedAttrVal);
		try {
			this.state = 312;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 5, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 304;
				this.expr();
				this.state = 305;
				this.match(ErlangParser.T__5);
				this.state = 306;
				this.typedRecordFields();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 308;
				this.expr();
				this.state = 309;
				this.match(ErlangParser.T__6);
				this.state = 310;
				this.topType();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typedRecordFields(): TypedRecordFieldsContext {
		let _localctx: TypedRecordFieldsContext = new TypedRecordFieldsContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, ErlangParser.RULE_typedRecordFields);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 314;
			this.match(ErlangParser.T__7);
			this.state = 315;
			this.typedExprs();
			this.state = 316;
			this.match(ErlangParser.T__8);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typedExprs(): TypedExprsContext {
		let _localctx: TypedExprsContext = new TypedExprsContext(this._ctx, this.state);
		this.enterRule(_localctx, 26, ErlangParser.RULE_typedExprs);
		try {
			this.state = 331;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 6, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 318;
				this.typedExpr();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 319;
				this.typedExpr();
				this.state = 320;
				this.match(ErlangParser.T__5);
				this.state = 321;
				this.typedExprs();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 323;
				this.expr();
				this.state = 324;
				this.match(ErlangParser.T__5);
				this.state = 325;
				this.typedExprs();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 327;
				this.typedExpr();
				this.state = 328;
				this.match(ErlangParser.T__5);
				this.state = 329;
				this.exprs();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typedExpr(): TypedExprContext {
		let _localctx: TypedExprContext = new TypedExprContext(this._ctx, this.state);
		this.enterRule(_localctx, 28, ErlangParser.RULE_typedExpr);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 333;
			this.expr();
			this.state = 334;
			this.match(ErlangParser.T__6);
			this.state = 335;
			this.topType();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typeSigs(): TypeSigsContext {
		let _localctx: TypeSigsContext = new TypeSigsContext(this._ctx, this.state);
		this.enterRule(_localctx, 30, ErlangParser.RULE_typeSigs);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 337;
			this.typeSig();
			this.state = 342;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === ErlangParser.T__9) {
				{
				{
				this.state = 338;
				this.match(ErlangParser.T__9);
				this.state = 339;
				this.typeSig();
				}
				}
				this.state = 344;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typeSig(): TypeSigContext {
		let _localctx: TypeSigContext = new TypeSigContext(this._ctx, this.state);
		this.enterRule(_localctx, 32, ErlangParser.RULE_typeSig);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 345;
			this.funType();
			this.state = 348;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ErlangParser.T__10) {
				{
				this.state = 346;
				this.match(ErlangParser.T__10);
				this.state = 347;
				this.typeGuards();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typeGuards(): TypeGuardsContext {
		let _localctx: TypeGuardsContext = new TypeGuardsContext(this._ctx, this.state);
		this.enterRule(_localctx, 34, ErlangParser.RULE_typeGuards);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 350;
			this.typeGuard();
			this.state = 355;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === ErlangParser.T__5) {
				{
				{
				this.state = 351;
				this.match(ErlangParser.T__5);
				this.state = 352;
				this.typeGuard();
				}
				}
				this.state = 357;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typeGuard(): TypeGuardContext {
		let _localctx: TypeGuardContext = new TypeGuardContext(this._ctx, this.state);
		this.enterRule(_localctx, 36, ErlangParser.RULE_typeGuard);
		try {
			this.state = 367;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ErlangParser.TokAtom:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 358;
				this.tokAtom();
				this.state = 359;
				this.match(ErlangParser.T__2);
				this.state = 360;
				this.topTypes();
				this.state = 361;
				this.match(ErlangParser.T__3);
				}
				break;
			case ErlangParser.TokVar:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 363;
				this.tokVar();
				this.state = 364;
				this.match(ErlangParser.T__6);
				this.state = 365;
				this.topType();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public topTypes(): TopTypesContext {
		let _localctx: TopTypesContext = new TopTypesContext(this._ctx, this.state);
		this.enterRule(_localctx, 38, ErlangParser.RULE_topTypes);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 369;
			this.topType();
			this.state = 374;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === ErlangParser.T__5) {
				{
				{
				this.state = 370;
				this.match(ErlangParser.T__5);
				this.state = 371;
				this.topType();
				}
				}
				this.state = 376;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public topType(): TopTypeContext {
		let _localctx: TopTypeContext = new TopTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 40, ErlangParser.RULE_topType);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 380;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 12, this._ctx) ) {
			case 1:
				{
				this.state = 377;
				this.tokVar();
				this.state = 378;
				this.match(ErlangParser.T__6);
				}
				break;
			}
			this.state = 382;
			this.topType100();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public topType100(): TopType100Context {
		let _localctx: TopType100Context = new TopType100Context(this._ctx, this.state);
		this.enterRule(_localctx, 42, ErlangParser.RULE_topType100);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 384;
			this.type200();
			this.state = 387;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ErlangParser.T__11) {
				{
				this.state = 385;
				this.match(ErlangParser.T__11);
				this.state = 386;
				this.topType100();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public type200(): Type200Context {
		let _localctx: Type200Context = new Type200Context(this._ctx, this.state);
		this.enterRule(_localctx, 44, ErlangParser.RULE_type200);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 389;
			this.type300(0);
			this.state = 392;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ErlangParser.T__12) {
				{
				this.state = 390;
				this.match(ErlangParser.T__12);
				this.state = 391;
				this.type300(0);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public type300(): Type300Context;
	public type300(_p: number): Type300Context;
	// @RuleVersion(0)
	public type300(_p?: number): Type300Context {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: Type300Context = new Type300Context(this._ctx, _parentState);
		let _prevctx: Type300Context = _localctx;
		let _startState: number = 46;
		this.enterRecursionRule(_localctx, 46, ErlangParser.RULE_type300, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 395;
			this.type400(0);
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 403;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 15, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					{
					_localctx = new Type300Context(_parentctx, _parentState);
					this.pushNewRecursionContext(_localctx, _startState, ErlangParser.RULE_type300);
					this.state = 397;
					if (!(this.precpred(this._ctx, 2))) {
						throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
					}
					this.state = 398;
					this.addOp();
					this.state = 399;
					this.type400(0);
					}
					}
				}
				this.state = 405;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 15, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}

	public type400(): Type400Context;
	public type400(_p: number): Type400Context;
	// @RuleVersion(0)
	public type400(_p?: number): Type400Context {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: Type400Context = new Type400Context(this._ctx, _parentState);
		let _prevctx: Type400Context = _localctx;
		let _startState: number = 48;
		this.enterRecursionRule(_localctx, 48, ErlangParser.RULE_type400, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 407;
			this.type500();
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 415;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 16, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					{
					_localctx = new Type400Context(_parentctx, _parentState);
					this.pushNewRecursionContext(_localctx, _startState, ErlangParser.RULE_type400);
					this.state = 409;
					if (!(this.precpred(this._ctx, 2))) {
						throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
					}
					this.state = 410;
					this.multOp();
					this.state = 411;
					this.type500();
					}
					}
				}
				this.state = 417;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 16, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public type500(): Type500Context {
		let _localctx: Type500Context = new Type500Context(this._ctx, this.state);
		this.enterRule(_localctx, 50, ErlangParser.RULE_type500);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 419;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ErlangParser.T__1 || ((((_la - 42)) & ~0x1F) === 0 && ((1 << (_la - 42)) & ((1 << (ErlangParser.T__41 - 42)) | (1 << (ErlangParser.T__42 - 42)) | (1 << (ErlangParser.T__43 - 42)))) !== 0)) {
				{
				this.state = 418;
				this.prefixOp();
				}
			}

			this.state = 421;
			this.type_();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public type_(): Type_Context {
		let _localctx: Type_Context = new Type_Context(this._ctx, this.state);
		this.enterRule(_localctx, 52, ErlangParser.RULE_type_);
		try {
			this.state = 499;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 18, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 423;
				this.match(ErlangParser.T__2);
				this.state = 424;
				this.topType();
				this.state = 425;
				this.match(ErlangParser.T__3);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 427;
				this.tokVar();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 428;
				this.tokAtom();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 429;
				this.tokAtom();
				this.state = 430;
				this.match(ErlangParser.T__2);
				this.state = 431;
				this.match(ErlangParser.T__3);
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 433;
				this.tokAtom();
				this.state = 434;
				this.match(ErlangParser.T__2);
				this.state = 435;
				this.topTypes();
				this.state = 436;
				this.match(ErlangParser.T__3);
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 438;
				this.tokAtom();
				this.state = 439;
				this.match(ErlangParser.T__4);
				this.state = 440;
				this.tokAtom();
				this.state = 441;
				this.match(ErlangParser.T__2);
				this.state = 442;
				this.match(ErlangParser.T__3);
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 444;
				this.tokAtom();
				this.state = 445;
				this.match(ErlangParser.T__4);
				this.state = 446;
				this.tokAtom();
				this.state = 447;
				this.match(ErlangParser.T__2);
				this.state = 448;
				this.topTypes();
				this.state = 449;
				this.match(ErlangParser.T__3);
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 451;
				this.match(ErlangParser.T__13);
				this.state = 452;
				this.match(ErlangParser.T__14);
				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 453;
				this.match(ErlangParser.T__13);
				this.state = 454;
				this.topType();
				this.state = 455;
				this.match(ErlangParser.T__14);
				}
				break;

			case 10:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 457;
				this.match(ErlangParser.T__13);
				this.state = 458;
				this.topType();
				this.state = 459;
				this.match(ErlangParser.T__5);
				this.state = 460;
				this.match(ErlangParser.T__15);
				this.state = 461;
				this.match(ErlangParser.T__14);
				}
				break;

			case 11:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 463;
				this.match(ErlangParser.T__16);
				this.state = 464;
				this.match(ErlangParser.T__7);
				this.state = 465;
				this.match(ErlangParser.T__8);
				}
				break;

			case 12:
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 466;
				this.match(ErlangParser.T__16);
				this.state = 467;
				this.match(ErlangParser.T__7);
				this.state = 468;
				this.mapPairTypes();
				this.state = 469;
				this.match(ErlangParser.T__8);
				}
				break;

			case 13:
				this.enterOuterAlt(_localctx, 13);
				{
				this.state = 471;
				this.match(ErlangParser.T__7);
				this.state = 472;
				this.match(ErlangParser.T__8);
				}
				break;

			case 14:
				this.enterOuterAlt(_localctx, 14);
				{
				this.state = 473;
				this.match(ErlangParser.T__7);
				this.state = 474;
				this.topTypes();
				this.state = 475;
				this.match(ErlangParser.T__8);
				}
				break;

			case 15:
				this.enterOuterAlt(_localctx, 15);
				{
				this.state = 477;
				this.match(ErlangParser.T__16);
				this.state = 478;
				this.tokAtom();
				this.state = 479;
				this.match(ErlangParser.T__7);
				this.state = 480;
				this.match(ErlangParser.T__8);
				}
				break;

			case 16:
				this.enterOuterAlt(_localctx, 16);
				{
				this.state = 482;
				this.match(ErlangParser.T__16);
				this.state = 483;
				this.tokAtom();
				this.state = 484;
				this.match(ErlangParser.T__7);
				this.state = 485;
				this.fieldTypes();
				this.state = 486;
				this.match(ErlangParser.T__8);
				}
				break;

			case 17:
				this.enterOuterAlt(_localctx, 17);
				{
				this.state = 488;
				this.binaryType();
				}
				break;

			case 18:
				this.enterOuterAlt(_localctx, 18);
				{
				this.state = 489;
				this.tokInteger();
				}
				break;

			case 19:
				this.enterOuterAlt(_localctx, 19);
				{
				this.state = 490;
				this.tokChar();
				}
				break;

			case 20:
				this.enterOuterAlt(_localctx, 20);
				{
				this.state = 491;
				this.match(ErlangParser.T__17);
				this.state = 492;
				this.match(ErlangParser.T__2);
				this.state = 493;
				this.match(ErlangParser.T__3);
				}
				break;

			case 21:
				this.enterOuterAlt(_localctx, 21);
				{
				this.state = 494;
				this.match(ErlangParser.T__17);
				this.state = 495;
				this.match(ErlangParser.T__2);
				this.state = 496;
				this.funType100();
				this.state = 497;
				this.match(ErlangParser.T__3);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public funType100(): FunType100Context {
		let _localctx: FunType100Context = new FunType100Context(this._ctx, this.state);
		this.enterRule(_localctx, 54, ErlangParser.RULE_funType100);
		try {
			this.state = 507;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 19, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 501;
				this.match(ErlangParser.T__2);
				this.state = 502;
				this.match(ErlangParser.T__15);
				this.state = 503;
				this.match(ErlangParser.T__3);
				this.state = 504;
				this.match(ErlangParser.T__18);
				this.state = 505;
				this.topType();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 506;
				this.funType();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public funType(): FunTypeContext {
		let _localctx: FunTypeContext = new FunTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 56, ErlangParser.RULE_funType);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 509;
			this.match(ErlangParser.T__2);
			this.state = 511;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << ErlangParser.T__1) | (1 << ErlangParser.T__2) | (1 << ErlangParser.T__7) | (1 << ErlangParser.T__13) | (1 << ErlangParser.T__16) | (1 << ErlangParser.T__17) | (1 << ErlangParser.T__21))) !== 0) || ((((_la - 42)) & ~0x1F) === 0 && ((1 << (_la - 42)) & ((1 << (ErlangParser.T__41 - 42)) | (1 << (ErlangParser.T__42 - 42)) | (1 << (ErlangParser.T__43 - 42)) | (1 << (ErlangParser.TokAtom - 42)) | (1 << (ErlangParser.TokVar - 42)) | (1 << (ErlangParser.TokInteger - 42)) | (1 << (ErlangParser.TokChar - 42)))) !== 0)) {
				{
				this.state = 510;
				this.topTypes();
				}
			}

			this.state = 513;
			this.match(ErlangParser.T__3);
			this.state = 514;
			this.match(ErlangParser.T__18);
			this.state = 515;
			this.topType();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public mapPairTypes(): MapPairTypesContext {
		let _localctx: MapPairTypesContext = new MapPairTypesContext(this._ctx, this.state);
		this.enterRule(_localctx, 58, ErlangParser.RULE_mapPairTypes);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 517;
			this.mapPairType();
			this.state = 522;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === ErlangParser.T__5) {
				{
				{
				this.state = 518;
				this.match(ErlangParser.T__5);
				this.state = 519;
				this.mapPairType();
				}
				}
				this.state = 524;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public mapPairType(): MapPairTypeContext {
		let _localctx: MapPairTypeContext = new MapPairTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 60, ErlangParser.RULE_mapPairType);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 525;
			this.topType();
			this.state = 526;
			_la = this._input.LA(1);
			if (!(_la === ErlangParser.T__19 || _la === ErlangParser.T__20)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 527;
			this.topType();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public fieldTypes(): FieldTypesContext {
		let _localctx: FieldTypesContext = new FieldTypesContext(this._ctx, this.state);
		this.enterRule(_localctx, 62, ErlangParser.RULE_fieldTypes);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 529;
			this.fieldType();
			this.state = 534;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === ErlangParser.T__5) {
				{
				{
				this.state = 530;
				this.match(ErlangParser.T__5);
				this.state = 531;
				this.fieldType();
				}
				}
				this.state = 536;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public fieldType(): FieldTypeContext {
		let _localctx: FieldTypeContext = new FieldTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 64, ErlangParser.RULE_fieldType);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 537;
			this.tokAtom();
			this.state = 538;
			this.match(ErlangParser.T__6);
			this.state = 539;
			this.topType();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public binaryType(): BinaryTypeContext {
		let _localctx: BinaryTypeContext = new BinaryTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 66, ErlangParser.RULE_binaryType);
		try {
			this.state = 557;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 23, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 541;
				this.match(ErlangParser.T__21);
				this.state = 542;
				this.match(ErlangParser.T__22);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 543;
				this.match(ErlangParser.T__21);
				this.state = 544;
				this.binBaseType();
				this.state = 545;
				this.match(ErlangParser.T__22);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 547;
				this.match(ErlangParser.T__21);
				this.state = 548;
				this.binUnitType();
				this.state = 549;
				this.match(ErlangParser.T__22);
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 551;
				this.match(ErlangParser.T__21);
				this.state = 552;
				this.binBaseType();
				this.state = 553;
				this.match(ErlangParser.T__5);
				this.state = 554;
				this.binUnitType();
				this.state = 555;
				this.match(ErlangParser.T__22);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public binBaseType(): BinBaseTypeContext {
		let _localctx: BinBaseTypeContext = new BinBaseTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 68, ErlangParser.RULE_binBaseType);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 559;
			this.tokVar();
			this.state = 560;
			this.match(ErlangParser.T__4);
			this.state = 561;
			this.type_();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public binUnitType(): BinUnitTypeContext {
		let _localctx: BinUnitTypeContext = new BinUnitTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 70, ErlangParser.RULE_binUnitType);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 563;
			this.tokVar();
			this.state = 564;
			this.match(ErlangParser.T__4);
			this.state = 565;
			this.tokVar();
			this.state = 566;
			this.match(ErlangParser.T__23);
			this.state = 567;
			this.type_();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public attrVal(): AttrValContext {
		let _localctx: AttrValContext = new AttrValContext(this._ctx, this.state);
		this.enterRule(_localctx, 72, ErlangParser.RULE_attrVal);
		try {
			this.state = 584;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 24, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 569;
				this.expr();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 570;
				this.match(ErlangParser.T__2);
				this.state = 571;
				this.expr();
				this.state = 572;
				this.match(ErlangParser.T__3);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 574;
				this.expr();
				this.state = 575;
				this.match(ErlangParser.T__5);
				this.state = 576;
				this.exprs();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 578;
				this.match(ErlangParser.T__2);
				this.state = 579;
				this.expr();
				this.state = 580;
				this.match(ErlangParser.T__5);
				this.state = 581;
				this.exprs();
				this.state = 582;
				this.match(ErlangParser.T__3);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public function_(): Function_Context {
		let _localctx: Function_Context = new Function_Context(this._ctx, this.state);
		this.enterRule(_localctx, 74, ErlangParser.RULE_function_);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 586;
			this.functionClause();
			this.state = 591;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === ErlangParser.T__9) {
				{
				{
				this.state = 587;
				this.match(ErlangParser.T__9);
				this.state = 588;
				this.functionClause();
				}
				}
				this.state = 593;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public functionClause(): FunctionClauseContext {
		let _localctx: FunctionClauseContext = new FunctionClauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 76, ErlangParser.RULE_functionClause);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 594;
			this.tokAtom();
			this.state = 595;
			this.clauseArgs();
			this.state = 596;
			this.clauseGuard();
			this.state = 597;
			this.clauseBody();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public clauseArgs(): ClauseArgsContext {
		let _localctx: ClauseArgsContext = new ClauseArgsContext(this._ctx, this.state);
		this.enterRule(_localctx, 78, ErlangParser.RULE_clauseArgs);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 599;
			this.patArgumentList();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public clauseGuard(): ClauseGuardContext {
		let _localctx: ClauseGuardContext = new ClauseGuardContext(this._ctx, this.state);
		this.enterRule(_localctx, 80, ErlangParser.RULE_clauseGuard);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 603;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ErlangParser.T__10) {
				{
				this.state = 601;
				this.match(ErlangParser.T__10);
				this.state = 602;
				this.guard_();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public clauseBody(): ClauseBodyContext {
		let _localctx: ClauseBodyContext = new ClauseBodyContext(this._ctx, this.state);
		this.enterRule(_localctx, 82, ErlangParser.RULE_clauseBody);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 605;
			this.match(ErlangParser.T__18);
			this.state = 606;
			this.exprs();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public expr(): ExprContext {
		let _localctx: ExprContext = new ExprContext(this._ctx, this.state);
		this.enterRule(_localctx, 84, ErlangParser.RULE_expr);
		try {
			this.state = 611;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ErlangParser.T__24:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 608;
				this.match(ErlangParser.T__24);
				this.state = 609;
				this.expr();
				}
				break;
			case ErlangParser.T__1:
			case ErlangParser.T__2:
			case ErlangParser.T__7:
			case ErlangParser.T__13:
			case ErlangParser.T__16:
			case ErlangParser.T__17:
			case ErlangParser.T__21:
			case ErlangParser.T__29:
			case ErlangParser.T__35:
			case ErlangParser.T__36:
			case ErlangParser.T__38:
			case ErlangParser.T__40:
			case ErlangParser.T__41:
			case ErlangParser.T__42:
			case ErlangParser.T__43:
			case ErlangParser.TokAtom:
			case ErlangParser.TokVar:
			case ErlangParser.TokFloat:
			case ErlangParser.TokInteger:
			case ErlangParser.TokChar:
			case ErlangParser.TokString:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 610;
				this.expr100();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public expr100(): Expr100Context {
		let _localctx: Expr100Context = new Expr100Context(this._ctx, this.state);
		this.enterRule(_localctx, 86, ErlangParser.RULE_expr100);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 613;
			this.expr150();
			this.state = 618;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === ErlangParser.T__25 || _la === ErlangParser.T__26) {
				{
				{
				this.state = 614;
				_la = this._input.LA(1);
				if (!(_la === ErlangParser.T__25 || _la === ErlangParser.T__26)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 615;
				this.expr150();
				}
				}
				this.state = 620;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public expr150(): Expr150Context {
		let _localctx: Expr150Context = new Expr150Context(this._ctx, this.state);
		this.enterRule(_localctx, 88, ErlangParser.RULE_expr150);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 621;
			this.expr160();
			this.state = 626;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === ErlangParser.T__27) {
				{
				{
				this.state = 622;
				this.match(ErlangParser.T__27);
				this.state = 623;
				this.expr160();
				}
				}
				this.state = 628;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public expr160(): Expr160Context {
		let _localctx: Expr160Context = new Expr160Context(this._ctx, this.state);
		this.enterRule(_localctx, 90, ErlangParser.RULE_expr160);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 629;
			this.expr200();
			this.state = 634;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === ErlangParser.T__28) {
				{
				{
				this.state = 630;
				this.match(ErlangParser.T__28);
				this.state = 631;
				this.expr200();
				}
				}
				this.state = 636;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public expr200(): Expr200Context {
		let _localctx: Expr200Context = new Expr200Context(this._ctx, this.state);
		this.enterRule(_localctx, 92, ErlangParser.RULE_expr200);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 637;
			this.expr300();
			this.state = 641;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 57)) & ~0x1F) === 0 && ((1 << (_la - 57)) & ((1 << (ErlangParser.T__56 - 57)) | (1 << (ErlangParser.T__57 - 57)) | (1 << (ErlangParser.T__58 - 57)) | (1 << (ErlangParser.T__59 - 57)) | (1 << (ErlangParser.T__60 - 57)) | (1 << (ErlangParser.T__61 - 57)) | (1 << (ErlangParser.T__62 - 57)) | (1 << (ErlangParser.T__63 - 57)))) !== 0)) {
				{
				this.state = 638;
				this.compOp();
				this.state = 639;
				this.expr300();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public expr300(): Expr300Context {
		let _localctx: Expr300Context = new Expr300Context(this._ctx, this.state);
		this.enterRule(_localctx, 94, ErlangParser.RULE_expr300);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 643;
			this.expr400();
			this.state = 649;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === ErlangParser.T__54 || _la === ErlangParser.T__55) {
				{
				{
				this.state = 644;
				this.listOp();
				this.state = 645;
				this.expr400();
				}
				}
				this.state = 651;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public expr400(): Expr400Context {
		let _localctx: Expr400Context = new Expr400Context(this._ctx, this.state);
		this.enterRule(_localctx, 96, ErlangParser.RULE_expr400);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 652;
			this.expr500();
			this.state = 658;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === ErlangParser.T__1 || ((((_la - 42)) & ~0x1F) === 0 && ((1 << (_la - 42)) & ((1 << (ErlangParser.T__41 - 42)) | (1 << (ErlangParser.T__48 - 42)) | (1 << (ErlangParser.T__49 - 42)) | (1 << (ErlangParser.T__50 - 42)) | (1 << (ErlangParser.T__51 - 42)) | (1 << (ErlangParser.T__52 - 42)) | (1 << (ErlangParser.T__53 - 42)))) !== 0)) {
				{
				{
				this.state = 653;
				this.addOp();
				this.state = 654;
				this.expr500();
				}
				}
				this.state = 660;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public expr500(): Expr500Context {
		let _localctx: Expr500Context = new Expr500Context(this._ctx, this.state);
		this.enterRule(_localctx, 98, ErlangParser.RULE_expr500);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 661;
			this.expr600();
			this.state = 667;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 24)) & ~0x1F) === 0 && ((1 << (_la - 24)) & ((1 << (ErlangParser.T__23 - 24)) | (1 << (ErlangParser.T__31 - 24)) | (1 << (ErlangParser.T__44 - 24)) | (1 << (ErlangParser.T__45 - 24)) | (1 << (ErlangParser.T__46 - 24)) | (1 << (ErlangParser.T__47 - 24)))) !== 0)) {
				{
				{
				this.state = 662;
				this.multOp();
				this.state = 663;
				this.expr600();
				}
				}
				this.state = 669;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public expr600(): Expr600Context {
		let _localctx: Expr600Context = new Expr600Context(this._ctx, this.state);
		this.enterRule(_localctx, 100, ErlangParser.RULE_expr600);
		try {
			this.state = 674;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ErlangParser.T__1:
			case ErlangParser.T__41:
			case ErlangParser.T__42:
			case ErlangParser.T__43:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 670;
				this.prefixOp();
				this.state = 671;
				this.expr600();
				}
				break;
			case ErlangParser.T__2:
			case ErlangParser.T__7:
			case ErlangParser.T__13:
			case ErlangParser.T__16:
			case ErlangParser.T__17:
			case ErlangParser.T__21:
			case ErlangParser.T__29:
			case ErlangParser.T__35:
			case ErlangParser.T__36:
			case ErlangParser.T__38:
			case ErlangParser.T__40:
			case ErlangParser.TokAtom:
			case ErlangParser.TokVar:
			case ErlangParser.TokFloat:
			case ErlangParser.TokInteger:
			case ErlangParser.TokChar:
			case ErlangParser.TokString:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 673;
				this.expr650();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public expr650(): Expr650Context {
		let _localctx: Expr650Context = new Expr650Context(this._ctx, this.state);
		this.enterRule(_localctx, 102, ErlangParser.RULE_expr650);
		try {
			this.state = 678;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 36, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 676;
				this.mapExpr(0);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 677;
				this.expr700();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public expr700(): Expr700Context {
		let _localctx: Expr700Context = new Expr700Context(this._ctx, this.state);
		this.enterRule(_localctx, 104, ErlangParser.RULE_expr700);
		try {
			this.state = 683;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 37, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 680;
				this.functionCall();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 681;
				this.recordExpr(0);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 682;
				this.expr800();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public expr800(): Expr800Context {
		let _localctx: Expr800Context = new Expr800Context(this._ctx, this.state);
		this.enterRule(_localctx, 106, ErlangParser.RULE_expr800);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 685;
			this.exprMax();
			this.state = 688;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ErlangParser.T__4) {
				{
				this.state = 686;
				this.match(ErlangParser.T__4);
				this.state = 687;
				this.exprMax();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public exprMax(): ExprMaxContext {
		let _localctx: ExprMaxContext = new ExprMaxContext(this._ctx, this.state);
		this.enterRule(_localctx, 108, ErlangParser.RULE_exprMax);
		try {
			this.state = 710;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 39, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 690;
				this.tokVar();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 691;
				this.atomic();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 692;
				this.list_();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 693;
				this.binary();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 694;
				this.listComprehension();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 695;
				this.binaryComprehension();
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 696;
				this.tuple_();
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 697;
				this.match(ErlangParser.T__2);
				this.state = 698;
				this.expr();
				this.state = 699;
				this.match(ErlangParser.T__3);
				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 701;
				this.match(ErlangParser.T__29);
				this.state = 702;
				this.exprs();
				this.state = 703;
				this.match(ErlangParser.T__30);
				}
				break;

			case 10:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 705;
				this.ifExpr();
				}
				break;

			case 11:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 706;
				this.caseExpr();
				}
				break;

			case 12:
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 707;
				this.receiveExpr();
				}
				break;

			case 13:
				this.enterOuterAlt(_localctx, 13);
				{
				this.state = 708;
				this.funExpr();
				}
				break;

			case 14:
				this.enterOuterAlt(_localctx, 14);
				{
				this.state = 709;
				this.tryExpr();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public patExpr(): PatExprContext {
		let _localctx: PatExprContext = new PatExprContext(this._ctx, this.state);
		this.enterRule(_localctx, 110, ErlangParser.RULE_patExpr);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 712;
			this.patExpr200();
			this.state = 715;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ErlangParser.T__25) {
				{
				this.state = 713;
				this.match(ErlangParser.T__25);
				this.state = 714;
				this.patExpr();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public patExpr200(): PatExpr200Context {
		let _localctx: PatExpr200Context = new PatExpr200Context(this._ctx, this.state);
		this.enterRule(_localctx, 112, ErlangParser.RULE_patExpr200);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 717;
			this.patExpr300();
			this.state = 721;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 57)) & ~0x1F) === 0 && ((1 << (_la - 57)) & ((1 << (ErlangParser.T__56 - 57)) | (1 << (ErlangParser.T__57 - 57)) | (1 << (ErlangParser.T__58 - 57)) | (1 << (ErlangParser.T__59 - 57)) | (1 << (ErlangParser.T__60 - 57)) | (1 << (ErlangParser.T__61 - 57)) | (1 << (ErlangParser.T__62 - 57)) | (1 << (ErlangParser.T__63 - 57)))) !== 0)) {
				{
				this.state = 718;
				this.compOp();
				this.state = 719;
				this.patExpr300();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public patExpr300(): PatExpr300Context {
		let _localctx: PatExpr300Context = new PatExpr300Context(this._ctx, this.state);
		this.enterRule(_localctx, 114, ErlangParser.RULE_patExpr300);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 723;
			this.patExpr400(0);
			this.state = 727;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ErlangParser.T__54 || _la === ErlangParser.T__55) {
				{
				this.state = 724;
				this.listOp();
				this.state = 725;
				this.patExpr300();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public patExpr400(): PatExpr400Context;
	public patExpr400(_p: number): PatExpr400Context;
	// @RuleVersion(0)
	public patExpr400(_p?: number): PatExpr400Context {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: PatExpr400Context = new PatExpr400Context(this._ctx, _parentState);
		let _prevctx: PatExpr400Context = _localctx;
		let _startState: number = 116;
		this.enterRecursionRule(_localctx, 116, ErlangParser.RULE_patExpr400, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 730;
			this.patExpr500(0);
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 738;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 43, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					{
					_localctx = new PatExpr400Context(_parentctx, _parentState);
					this.pushNewRecursionContext(_localctx, _startState, ErlangParser.RULE_patExpr400);
					this.state = 732;
					if (!(this.precpred(this._ctx, 2))) {
						throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
					}
					this.state = 733;
					this.addOp();
					this.state = 734;
					this.patExpr500(0);
					}
					}
				}
				this.state = 740;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 43, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}

	public patExpr500(): PatExpr500Context;
	public patExpr500(_p: number): PatExpr500Context;
	// @RuleVersion(0)
	public patExpr500(_p?: number): PatExpr500Context {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: PatExpr500Context = new PatExpr500Context(this._ctx, _parentState);
		let _prevctx: PatExpr500Context = _localctx;
		let _startState: number = 118;
		this.enterRecursionRule(_localctx, 118, ErlangParser.RULE_patExpr500, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 742;
			this.patExpr600();
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 750;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 44, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					{
					_localctx = new PatExpr500Context(_parentctx, _parentState);
					this.pushNewRecursionContext(_localctx, _startState, ErlangParser.RULE_patExpr500);
					this.state = 744;
					if (!(this.precpred(this._ctx, 2))) {
						throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
					}
					this.state = 745;
					this.multOp();
					this.state = 746;
					this.patExpr600();
					}
					}
				}
				this.state = 752;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 44, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public patExpr600(): PatExpr600Context {
		let _localctx: PatExpr600Context = new PatExpr600Context(this._ctx, this.state);
		this.enterRule(_localctx, 120, ErlangParser.RULE_patExpr600);
		try {
			this.state = 757;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ErlangParser.T__1:
			case ErlangParser.T__41:
			case ErlangParser.T__42:
			case ErlangParser.T__43:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 753;
				this.prefixOp();
				this.state = 754;
				this.patExpr600();
				}
				break;
			case ErlangParser.T__2:
			case ErlangParser.T__7:
			case ErlangParser.T__13:
			case ErlangParser.T__16:
			case ErlangParser.T__21:
			case ErlangParser.TokAtom:
			case ErlangParser.TokVar:
			case ErlangParser.TokFloat:
			case ErlangParser.TokInteger:
			case ErlangParser.TokChar:
			case ErlangParser.TokString:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 756;
				this.patExpr650();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public patExpr650(): PatExpr650Context {
		let _localctx: PatExpr650Context = new PatExpr650Context(this._ctx, this.state);
		this.enterRule(_localctx, 122, ErlangParser.RULE_patExpr650);
		try {
			this.state = 761;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 46, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 759;
				this.mapPatExpr(0);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 760;
				this.patExpr700();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public patExpr700(): PatExpr700Context {
		let _localctx: PatExpr700Context = new PatExpr700Context(this._ctx, this.state);
		this.enterRule(_localctx, 124, ErlangParser.RULE_patExpr700);
		try {
			this.state = 765;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ErlangParser.T__16:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 763;
				this.recordPatExpr();
				}
				break;
			case ErlangParser.T__2:
			case ErlangParser.T__7:
			case ErlangParser.T__13:
			case ErlangParser.T__21:
			case ErlangParser.TokAtom:
			case ErlangParser.TokVar:
			case ErlangParser.TokFloat:
			case ErlangParser.TokInteger:
			case ErlangParser.TokChar:
			case ErlangParser.TokString:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 764;
				this.patExpr800();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public patExpr800(): PatExpr800Context {
		let _localctx: PatExpr800Context = new PatExpr800Context(this._ctx, this.state);
		this.enterRule(_localctx, 126, ErlangParser.RULE_patExpr800);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 767;
			this.patExprMax();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public patExprMax(): PatExprMaxContext {
		let _localctx: PatExprMaxContext = new PatExprMaxContext(this._ctx, this.state);
		this.enterRule(_localctx, 128, ErlangParser.RULE_patExprMax);
		try {
			this.state = 778;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ErlangParser.TokVar:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 769;
				this.tokVar();
				}
				break;
			case ErlangParser.TokAtom:
			case ErlangParser.TokFloat:
			case ErlangParser.TokInteger:
			case ErlangParser.TokChar:
			case ErlangParser.TokString:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 770;
				this.atomic();
				}
				break;
			case ErlangParser.T__13:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 771;
				this.list_();
				}
				break;
			case ErlangParser.T__21:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 772;
				this.binary();
				}
				break;
			case ErlangParser.T__7:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 773;
				this.tuple_();
				}
				break;
			case ErlangParser.T__2:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 774;
				this.match(ErlangParser.T__2);
				this.state = 775;
				this.patExpr();
				this.state = 776;
				this.match(ErlangParser.T__3);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public mapPatExpr(): MapPatExprContext;
	public mapPatExpr(_p: number): MapPatExprContext;
	// @RuleVersion(0)
	public mapPatExpr(_p?: number): MapPatExprContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: MapPatExprContext = new MapPatExprContext(this._ctx, _parentState);
		let _prevctx: MapPatExprContext = _localctx;
		let _startState: number = 130;
		this.enterRecursionRule(_localctx, 130, ErlangParser.RULE_mapPatExpr, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 782;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << ErlangParser.T__2) | (1 << ErlangParser.T__7) | (1 << ErlangParser.T__13) | (1 << ErlangParser.T__21))) !== 0) || ((((_la - 65)) & ~0x1F) === 0 && ((1 << (_la - 65)) & ((1 << (ErlangParser.TokAtom - 65)) | (1 << (ErlangParser.TokVar - 65)) | (1 << (ErlangParser.TokFloat - 65)) | (1 << (ErlangParser.TokInteger - 65)) | (1 << (ErlangParser.TokChar - 65)) | (1 << (ErlangParser.TokString - 65)))) !== 0)) {
				{
				this.state = 781;
				this.patExprMax();
				}
			}

			this.state = 784;
			this.match(ErlangParser.T__16);
			this.state = 785;
			this.mapTuple();
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 792;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 50, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					{
					_localctx = new MapPatExprContext(_parentctx, _parentState);
					this.pushNewRecursionContext(_localctx, _startState, ErlangParser.RULE_mapPatExpr);
					this.state = 787;
					if (!(this.precpred(this._ctx, 1))) {
						throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
					}
					this.state = 788;
					this.match(ErlangParser.T__16);
					this.state = 789;
					this.mapTuple();
					}
					}
				}
				this.state = 794;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 50, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public recordPatExpr(): RecordPatExprContext {
		let _localctx: RecordPatExprContext = new RecordPatExprContext(this._ctx, this.state);
		this.enterRule(_localctx, 132, ErlangParser.RULE_recordPatExpr);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 795;
			this.match(ErlangParser.T__16);
			this.state = 796;
			this.tokAtom();
			this.state = 800;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ErlangParser.T__0:
				{
				this.state = 797;
				this.match(ErlangParser.T__0);
				this.state = 798;
				this.tokAtom();
				}
				break;
			case ErlangParser.T__7:
				{
				this.state = 799;
				this.recordTuple();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public list_(): List_Context {
		let _localctx: List_Context = new List_Context(this._ctx, this.state);
		this.enterRule(_localctx, 134, ErlangParser.RULE_list_);
		try {
			this.state = 808;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 52, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 802;
				this.match(ErlangParser.T__13);
				this.state = 803;
				this.match(ErlangParser.T__14);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 804;
				this.match(ErlangParser.T__13);
				this.state = 805;
				this.expr();
				this.state = 806;
				this.tail();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public tail(): TailContext {
		let _localctx: TailContext = new TailContext(this._ctx, this.state);
		this.enterRule(_localctx, 136, ErlangParser.RULE_tail);
		try {
			this.state = 819;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ErlangParser.T__14:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 810;
				this.match(ErlangParser.T__14);
				}
				break;
			case ErlangParser.T__11:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 811;
				this.match(ErlangParser.T__11);
				this.state = 812;
				this.expr();
				this.state = 813;
				this.match(ErlangParser.T__14);
				}
				break;
			case ErlangParser.T__5:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 815;
				this.match(ErlangParser.T__5);
				this.state = 816;
				this.expr();
				this.state = 817;
				this.tail();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public binary(): BinaryContext {
		let _localctx: BinaryContext = new BinaryContext(this._ctx, this.state);
		this.enterRule(_localctx, 138, ErlangParser.RULE_binary);
		try {
			this.state = 827;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 54, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 821;
				this.match(ErlangParser.T__21);
				this.state = 822;
				this.match(ErlangParser.T__22);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 823;
				this.match(ErlangParser.T__21);
				this.state = 824;
				this.binElements();
				this.state = 825;
				this.match(ErlangParser.T__22);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public binElements(): BinElementsContext {
		let _localctx: BinElementsContext = new BinElementsContext(this._ctx, this.state);
		this.enterRule(_localctx, 140, ErlangParser.RULE_binElements);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 829;
			this.binElement();
			this.state = 834;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === ErlangParser.T__5) {
				{
				{
				this.state = 830;
				this.match(ErlangParser.T__5);
				this.state = 831;
				this.binElement();
				}
				}
				this.state = 836;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public binElement(): BinElementContext {
		let _localctx: BinElementContext = new BinElementContext(this._ctx, this.state);
		this.enterRule(_localctx, 142, ErlangParser.RULE_binElement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 837;
			this.bitExpr();
			this.state = 838;
			this.optBitSizeExpr();
			this.state = 839;
			this.optBitTypeList();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public bitExpr(): BitExprContext {
		let _localctx: BitExprContext = new BitExprContext(this._ctx, this.state);
		this.enterRule(_localctx, 144, ErlangParser.RULE_bitExpr);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 842;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ErlangParser.T__1 || ((((_la - 42)) & ~0x1F) === 0 && ((1 << (_la - 42)) & ((1 << (ErlangParser.T__41 - 42)) | (1 << (ErlangParser.T__42 - 42)) | (1 << (ErlangParser.T__43 - 42)))) !== 0)) {
				{
				this.state = 841;
				this.prefixOp();
				}
			}

			this.state = 844;
			this.exprMax();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public optBitSizeExpr(): OptBitSizeExprContext {
		let _localctx: OptBitSizeExprContext = new OptBitSizeExprContext(this._ctx, this.state);
		this.enterRule(_localctx, 146, ErlangParser.RULE_optBitSizeExpr);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 848;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ErlangParser.T__4) {
				{
				this.state = 846;
				this.match(ErlangParser.T__4);
				this.state = 847;
				this.bitSizeExpr();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public optBitTypeList(): OptBitTypeListContext {
		let _localctx: OptBitTypeListContext = new OptBitTypeListContext(this._ctx, this.state);
		this.enterRule(_localctx, 148, ErlangParser.RULE_optBitTypeList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 852;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ErlangParser.T__31) {
				{
				this.state = 850;
				this.match(ErlangParser.T__31);
				this.state = 851;
				this.bitTypeList();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public bitTypeList(): BitTypeListContext {
		let _localctx: BitTypeListContext = new BitTypeListContext(this._ctx, this.state);
		this.enterRule(_localctx, 150, ErlangParser.RULE_bitTypeList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 854;
			this.bitType();
			this.state = 859;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === ErlangParser.T__1) {
				{
				{
				this.state = 855;
				this.match(ErlangParser.T__1);
				this.state = 856;
				this.bitType();
				}
				}
				this.state = 861;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public bitType(): BitTypeContext {
		let _localctx: BitTypeContext = new BitTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 152, ErlangParser.RULE_bitType);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 862;
			this.tokAtom();
			this.state = 865;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ErlangParser.T__4) {
				{
				this.state = 863;
				this.match(ErlangParser.T__4);
				this.state = 864;
				this.tokInteger();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public bitSizeExpr(): BitSizeExprContext {
		let _localctx: BitSizeExprContext = new BitSizeExprContext(this._ctx, this.state);
		this.enterRule(_localctx, 154, ErlangParser.RULE_bitSizeExpr);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 867;
			this.exprMax();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public listComprehension(): ListComprehensionContext {
		let _localctx: ListComprehensionContext = new ListComprehensionContext(this._ctx, this.state);
		this.enterRule(_localctx, 156, ErlangParser.RULE_listComprehension);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 869;
			this.match(ErlangParser.T__13);
			this.state = 870;
			this.expr();
			this.state = 871;
			this.match(ErlangParser.T__32);
			this.state = 872;
			this.lcExprs();
			this.state = 873;
			this.match(ErlangParser.T__14);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public binaryComprehension(): BinaryComprehensionContext {
		let _localctx: BinaryComprehensionContext = new BinaryComprehensionContext(this._ctx, this.state);
		this.enterRule(_localctx, 158, ErlangParser.RULE_binaryComprehension);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 875;
			this.match(ErlangParser.T__21);
			this.state = 876;
			this.exprMax();
			this.state = 877;
			this.match(ErlangParser.T__32);
			this.state = 878;
			this.lcExprs();
			this.state = 879;
			this.match(ErlangParser.T__22);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public lcExprs(): LcExprsContext {
		let _localctx: LcExprsContext = new LcExprsContext(this._ctx, this.state);
		this.enterRule(_localctx, 160, ErlangParser.RULE_lcExprs);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 881;
			this.lcExpr();
			this.state = 886;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === ErlangParser.T__5) {
				{
				{
				this.state = 882;
				this.match(ErlangParser.T__5);
				this.state = 883;
				this.lcExpr();
				}
				}
				this.state = 888;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public lcExpr(): LcExprContext {
		let _localctx: LcExprContext = new LcExprContext(this._ctx, this.state);
		this.enterRule(_localctx, 162, ErlangParser.RULE_lcExpr);
		try {
			this.state = 898;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 62, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 889;
				this.expr();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 890;
				this.expr();
				this.state = 891;
				this.match(ErlangParser.T__33);
				this.state = 892;
				this.expr();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 894;
				this.binary();
				this.state = 895;
				this.match(ErlangParser.T__34);
				this.state = 896;
				this.expr();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public tuple_(): Tuple_Context {
		let _localctx: Tuple_Context = new Tuple_Context(this._ctx, this.state);
		this.enterRule(_localctx, 164, ErlangParser.RULE_tuple_);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 900;
			this.match(ErlangParser.T__7);
			this.state = 902;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << ErlangParser.T__1) | (1 << ErlangParser.T__2) | (1 << ErlangParser.T__7) | (1 << ErlangParser.T__13) | (1 << ErlangParser.T__16) | (1 << ErlangParser.T__17) | (1 << ErlangParser.T__21) | (1 << ErlangParser.T__24) | (1 << ErlangParser.T__29))) !== 0) || ((((_la - 36)) & ~0x1F) === 0 && ((1 << (_la - 36)) & ((1 << (ErlangParser.T__35 - 36)) | (1 << (ErlangParser.T__36 - 36)) | (1 << (ErlangParser.T__38 - 36)) | (1 << (ErlangParser.T__40 - 36)) | (1 << (ErlangParser.T__41 - 36)) | (1 << (ErlangParser.T__42 - 36)) | (1 << (ErlangParser.T__43 - 36)) | (1 << (ErlangParser.TokAtom - 36)) | (1 << (ErlangParser.TokVar - 36)) | (1 << (ErlangParser.TokFloat - 36)))) !== 0) || ((((_la - 68)) & ~0x1F) === 0 && ((1 << (_la - 68)) & ((1 << (ErlangParser.TokInteger - 68)) | (1 << (ErlangParser.TokChar - 68)) | (1 << (ErlangParser.TokString - 68)))) !== 0)) {
				{
				this.state = 901;
				this.exprs();
				}
			}

			this.state = 904;
			this.match(ErlangParser.T__8);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public mapExpr(): MapExprContext;
	public mapExpr(_p: number): MapExprContext;
	// @RuleVersion(0)
	public mapExpr(_p?: number): MapExprContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: MapExprContext = new MapExprContext(this._ctx, _parentState);
		let _prevctx: MapExprContext = _localctx;
		let _startState: number = 166;
		this.enterRecursionRule(_localctx, 166, ErlangParser.RULE_mapExpr, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 908;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << ErlangParser.T__2) | (1 << ErlangParser.T__7) | (1 << ErlangParser.T__13) | (1 << ErlangParser.T__17) | (1 << ErlangParser.T__21) | (1 << ErlangParser.T__29))) !== 0) || ((((_la - 36)) & ~0x1F) === 0 && ((1 << (_la - 36)) & ((1 << (ErlangParser.T__35 - 36)) | (1 << (ErlangParser.T__36 - 36)) | (1 << (ErlangParser.T__38 - 36)) | (1 << (ErlangParser.T__40 - 36)) | (1 << (ErlangParser.TokAtom - 36)) | (1 << (ErlangParser.TokVar - 36)) | (1 << (ErlangParser.TokFloat - 36)))) !== 0) || ((((_la - 68)) & ~0x1F) === 0 && ((1 << (_la - 68)) & ((1 << (ErlangParser.TokInteger - 68)) | (1 << (ErlangParser.TokChar - 68)) | (1 << (ErlangParser.TokString - 68)))) !== 0)) {
				{
				this.state = 907;
				this.exprMax();
				}
			}

			this.state = 910;
			this.match(ErlangParser.T__16);
			this.state = 911;
			this.mapTuple();
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 918;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 65, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					{
					_localctx = new MapExprContext(_parentctx, _parentState);
					this.pushNewRecursionContext(_localctx, _startState, ErlangParser.RULE_mapExpr);
					this.state = 913;
					if (!(this.precpred(this._ctx, 1))) {
						throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
					}
					this.state = 914;
					this.match(ErlangParser.T__16);
					this.state = 915;
					this.mapTuple();
					}
					}
				}
				this.state = 920;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 65, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public mapTuple(): MapTupleContext {
		let _localctx: MapTupleContext = new MapTupleContext(this._ctx, this.state);
		this.enterRule(_localctx, 168, ErlangParser.RULE_mapTuple);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 921;
			this.match(ErlangParser.T__7);
			this.state = 930;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << ErlangParser.T__1) | (1 << ErlangParser.T__2) | (1 << ErlangParser.T__7) | (1 << ErlangParser.T__13) | (1 << ErlangParser.T__16) | (1 << ErlangParser.T__17) | (1 << ErlangParser.T__21) | (1 << ErlangParser.T__24) | (1 << ErlangParser.T__29))) !== 0) || ((((_la - 36)) & ~0x1F) === 0 && ((1 << (_la - 36)) & ((1 << (ErlangParser.T__35 - 36)) | (1 << (ErlangParser.T__36 - 36)) | (1 << (ErlangParser.T__38 - 36)) | (1 << (ErlangParser.T__40 - 36)) | (1 << (ErlangParser.T__41 - 36)) | (1 << (ErlangParser.T__42 - 36)) | (1 << (ErlangParser.T__43 - 36)) | (1 << (ErlangParser.TokAtom - 36)) | (1 << (ErlangParser.TokVar - 36)) | (1 << (ErlangParser.TokFloat - 36)))) !== 0) || ((((_la - 68)) & ~0x1F) === 0 && ((1 << (_la - 68)) & ((1 << (ErlangParser.TokInteger - 68)) | (1 << (ErlangParser.TokChar - 68)) | (1 << (ErlangParser.TokString - 68)))) !== 0)) {
				{
				this.state = 922;
				this.mapField();
				this.state = 927;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === ErlangParser.T__5) {
					{
					{
					this.state = 923;
					this.match(ErlangParser.T__5);
					this.state = 924;
					this.mapField();
					}
					}
					this.state = 929;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 932;
			this.match(ErlangParser.T__8);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public mapField(): MapFieldContext {
		let _localctx: MapFieldContext = new MapFieldContext(this._ctx, this.state);
		this.enterRule(_localctx, 170, ErlangParser.RULE_mapField);
		try {
			this.state = 936;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 68, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 934;
				this.mapFieldAssoc();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 935;
				this.mapFieldExact();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public mapFieldAssoc(): MapFieldAssocContext {
		let _localctx: MapFieldAssocContext = new MapFieldAssocContext(this._ctx, this.state);
		this.enterRule(_localctx, 172, ErlangParser.RULE_mapFieldAssoc);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 938;
			this.mapKey();
			this.state = 939;
			this.match(ErlangParser.T__19);
			this.state = 940;
			this.expr();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public mapFieldExact(): MapFieldExactContext {
		let _localctx: MapFieldExactContext = new MapFieldExactContext(this._ctx, this.state);
		this.enterRule(_localctx, 174, ErlangParser.RULE_mapFieldExact);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 942;
			this.mapKey();
			this.state = 943;
			this.match(ErlangParser.T__20);
			this.state = 944;
			this.expr();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public mapKey(): MapKeyContext {
		let _localctx: MapKeyContext = new MapKeyContext(this._ctx, this.state);
		this.enterRule(_localctx, 176, ErlangParser.RULE_mapKey);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 946;
			this.expr();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public recordExpr(): RecordExprContext;
	public recordExpr(_p: number): RecordExprContext;
	// @RuleVersion(0)
	public recordExpr(_p?: number): RecordExprContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: RecordExprContext = new RecordExprContext(this._ctx, _parentState);
		let _prevctx: RecordExprContext = _localctx;
		let _startState: number = 178;
		this.enterRecursionRule(_localctx, 178, ErlangParser.RULE_recordExpr, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 950;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << ErlangParser.T__2) | (1 << ErlangParser.T__7) | (1 << ErlangParser.T__13) | (1 << ErlangParser.T__17) | (1 << ErlangParser.T__21) | (1 << ErlangParser.T__29))) !== 0) || ((((_la - 36)) & ~0x1F) === 0 && ((1 << (_la - 36)) & ((1 << (ErlangParser.T__35 - 36)) | (1 << (ErlangParser.T__36 - 36)) | (1 << (ErlangParser.T__38 - 36)) | (1 << (ErlangParser.T__40 - 36)) | (1 << (ErlangParser.TokAtom - 36)) | (1 << (ErlangParser.TokVar - 36)) | (1 << (ErlangParser.TokFloat - 36)))) !== 0) || ((((_la - 68)) & ~0x1F) === 0 && ((1 << (_la - 68)) & ((1 << (ErlangParser.TokInteger - 68)) | (1 << (ErlangParser.TokChar - 68)) | (1 << (ErlangParser.TokString - 68)))) !== 0)) {
				{
				this.state = 949;
				this.exprMax();
				}
			}

			this.state = 952;
			this.match(ErlangParser.T__16);
			this.state = 953;
			this.tokAtom();
			this.state = 957;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ErlangParser.T__0:
				{
				this.state = 954;
				this.match(ErlangParser.T__0);
				this.state = 955;
				this.tokAtom();
				}
				break;
			case ErlangParser.T__7:
				{
				this.state = 956;
				this.recordTuple();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 969;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 72, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					{
					_localctx = new RecordExprContext(_parentctx, _parentState);
					this.pushNewRecursionContext(_localctx, _startState, ErlangParser.RULE_recordExpr);
					this.state = 959;
					if (!(this.precpred(this._ctx, 1))) {
						throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
					}
					this.state = 960;
					this.match(ErlangParser.T__16);
					this.state = 961;
					this.tokAtom();
					this.state = 965;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case ErlangParser.T__0:
						{
						this.state = 962;
						this.match(ErlangParser.T__0);
						this.state = 963;
						this.tokAtom();
						}
						break;
					case ErlangParser.T__7:
						{
						this.state = 964;
						this.recordTuple();
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					}
					}
				}
				this.state = 971;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 72, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public recordTuple(): RecordTupleContext {
		let _localctx: RecordTupleContext = new RecordTupleContext(this._ctx, this.state);
		this.enterRule(_localctx, 180, ErlangParser.RULE_recordTuple);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 972;
			this.match(ErlangParser.T__7);
			this.state = 974;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ErlangParser.TokAtom || _la === ErlangParser.TokVar) {
				{
				this.state = 973;
				this.recordFields();
				}
			}

			this.state = 976;
			this.match(ErlangParser.T__8);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public recordFields(): RecordFieldsContext {
		let _localctx: RecordFieldsContext = new RecordFieldsContext(this._ctx, this.state);
		this.enterRule(_localctx, 182, ErlangParser.RULE_recordFields);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 978;
			this.recordField();
			this.state = 983;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === ErlangParser.T__5) {
				{
				{
				this.state = 979;
				this.match(ErlangParser.T__5);
				this.state = 980;
				this.recordField();
				}
				}
				this.state = 985;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public recordField(): RecordFieldContext {
		let _localctx: RecordFieldContext = new RecordFieldContext(this._ctx, this.state);
		this.enterRule(_localctx, 184, ErlangParser.RULE_recordField);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 988;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ErlangParser.TokVar:
				{
				this.state = 986;
				this.tokVar();
				}
				break;
			case ErlangParser.TokAtom:
				{
				this.state = 987;
				this.tokAtom();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 990;
			this.match(ErlangParser.T__25);
			this.state = 991;
			this.expr();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public functionCall(): FunctionCallContext {
		let _localctx: FunctionCallContext = new FunctionCallContext(this._ctx, this.state);
		this.enterRule(_localctx, 186, ErlangParser.RULE_functionCall);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 993;
			this.expr800();
			this.state = 994;
			this.argumentList();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public ifExpr(): IfExprContext {
		let _localctx: IfExprContext = new IfExprContext(this._ctx, this.state);
		this.enterRule(_localctx, 188, ErlangParser.RULE_ifExpr);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 996;
			this.match(ErlangParser.T__35);
			this.state = 997;
			this.ifClauses();
			this.state = 998;
			this.match(ErlangParser.T__30);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public ifClauses(): IfClausesContext {
		let _localctx: IfClausesContext = new IfClausesContext(this._ctx, this.state);
		this.enterRule(_localctx, 190, ErlangParser.RULE_ifClauses);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1000;
			this.ifClause();
			this.state = 1005;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === ErlangParser.T__9) {
				{
				{
				this.state = 1001;
				this.match(ErlangParser.T__9);
				this.state = 1002;
				this.ifClause();
				}
				}
				this.state = 1007;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public ifClause(): IfClauseContext {
		let _localctx: IfClauseContext = new IfClauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 192, ErlangParser.RULE_ifClause);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1008;
			this.guard_();
			this.state = 1009;
			this.clauseBody();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public caseExpr(): CaseExprContext {
		let _localctx: CaseExprContext = new CaseExprContext(this._ctx, this.state);
		this.enterRule(_localctx, 194, ErlangParser.RULE_caseExpr);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1011;
			this.match(ErlangParser.T__36);
			this.state = 1012;
			this.expr();
			this.state = 1013;
			this.match(ErlangParser.T__37);
			this.state = 1014;
			this.crClauses();
			this.state = 1015;
			this.match(ErlangParser.T__30);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public crClauses(): CrClausesContext {
		let _localctx: CrClausesContext = new CrClausesContext(this._ctx, this.state);
		this.enterRule(_localctx, 196, ErlangParser.RULE_crClauses);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1017;
			this.crClause();
			this.state = 1022;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === ErlangParser.T__9) {
				{
				{
				this.state = 1018;
				this.match(ErlangParser.T__9);
				this.state = 1019;
				this.crClause();
				}
				}
				this.state = 1024;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public crClause(): CrClauseContext {
		let _localctx: CrClauseContext = new CrClauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 198, ErlangParser.RULE_crClause);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1025;
			this.expr();
			this.state = 1026;
			this.clauseGuard();
			this.state = 1027;
			this.clauseBody();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public receiveExpr(): ReceiveExprContext {
		let _localctx: ReceiveExprContext = new ReceiveExprContext(this._ctx, this.state);
		this.enterRule(_localctx, 200, ErlangParser.RULE_receiveExpr);
		try {
			this.state = 1046;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 78, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1029;
				this.match(ErlangParser.T__38);
				this.state = 1030;
				this.crClauses();
				this.state = 1031;
				this.match(ErlangParser.T__30);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1033;
				this.match(ErlangParser.T__38);
				this.state = 1034;
				this.match(ErlangParser.T__39);
				this.state = 1035;
				this.expr();
				this.state = 1036;
				this.clauseBody();
				this.state = 1037;
				this.match(ErlangParser.T__30);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1039;
				this.match(ErlangParser.T__38);
				this.state = 1040;
				this.crClauses();
				this.state = 1041;
				this.match(ErlangParser.T__39);
				this.state = 1042;
				this.expr();
				this.state = 1043;
				this.clauseBody();
				this.state = 1044;
				this.match(ErlangParser.T__30);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public funExpr(): FunExprContext {
		let _localctx: FunExprContext = new FunExprContext(this._ctx, this.state);
		this.enterRule(_localctx, 202, ErlangParser.RULE_funExpr);
		try {
			this.state = 1064;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 79, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1048;
				this.match(ErlangParser.T__17);
				this.state = 1049;
				this.tokAtom();
				this.state = 1050;
				this.match(ErlangParser.T__31);
				this.state = 1051;
				this.tokInteger();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1053;
				this.match(ErlangParser.T__17);
				this.state = 1054;
				this.atomOrVar();
				this.state = 1055;
				this.match(ErlangParser.T__4);
				this.state = 1056;
				this.atomOrVar();
				this.state = 1057;
				this.match(ErlangParser.T__31);
				this.state = 1058;
				this.integerOrVar();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1060;
				this.match(ErlangParser.T__17);
				this.state = 1061;
				this.funClauses();
				this.state = 1062;
				this.match(ErlangParser.T__30);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public atomOrVar(): AtomOrVarContext {
		let _localctx: AtomOrVarContext = new AtomOrVarContext(this._ctx, this.state);
		this.enterRule(_localctx, 204, ErlangParser.RULE_atomOrVar);
		try {
			this.state = 1068;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ErlangParser.TokAtom:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1066;
				this.tokAtom();
				}
				break;
			case ErlangParser.TokVar:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1067;
				this.tokVar();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public integerOrVar(): IntegerOrVarContext {
		let _localctx: IntegerOrVarContext = new IntegerOrVarContext(this._ctx, this.state);
		this.enterRule(_localctx, 206, ErlangParser.RULE_integerOrVar);
		try {
			this.state = 1072;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ErlangParser.TokInteger:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1070;
				this.tokInteger();
				}
				break;
			case ErlangParser.TokVar:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1071;
				this.tokVar();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public funClauses(): FunClausesContext {
		let _localctx: FunClausesContext = new FunClausesContext(this._ctx, this.state);
		this.enterRule(_localctx, 208, ErlangParser.RULE_funClauses);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1074;
			this.funClause();
			this.state = 1079;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === ErlangParser.T__9) {
				{
				{
				this.state = 1075;
				this.match(ErlangParser.T__9);
				this.state = 1076;
				this.funClause();
				}
				}
				this.state = 1081;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public funClause(): FunClauseContext {
		let _localctx: FunClauseContext = new FunClauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 210, ErlangParser.RULE_funClause);
		try {
			this.state = 1091;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ErlangParser.T__2:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1082;
				this.patArgumentList();
				this.state = 1083;
				this.clauseGuard();
				this.state = 1084;
				this.clauseBody();
				}
				break;
			case ErlangParser.TokVar:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1086;
				this.tokVar();
				this.state = 1087;
				this.patArgumentList();
				this.state = 1088;
				this.clauseGuard();
				this.state = 1089;
				this.clauseBody();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public tryExpr(): TryExprContext {
		let _localctx: TryExprContext = new TryExprContext(this._ctx, this.state);
		this.enterRule(_localctx, 212, ErlangParser.RULE_tryExpr);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1093;
			this.match(ErlangParser.T__40);
			this.state = 1094;
			this.exprs();
			this.state = 1097;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ErlangParser.T__37) {
				{
				this.state = 1095;
				this.match(ErlangParser.T__37);
				this.state = 1096;
				this.crClauses();
				}
			}

			this.state = 1099;
			this.tryCatch();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public tryCatch(): TryCatchContext {
		let _localctx: TryCatchContext = new TryCatchContext(this._ctx, this.state);
		this.enterRule(_localctx, 214, ErlangParser.RULE_tryCatch);
		try {
			this.state = 1115;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 85, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1101;
				this.match(ErlangParser.T__24);
				this.state = 1102;
				this.tryClauses();
				this.state = 1103;
				this.match(ErlangParser.T__30);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1105;
				this.match(ErlangParser.T__24);
				this.state = 1106;
				this.tryClauses();
				this.state = 1107;
				this.match(ErlangParser.T__39);
				this.state = 1108;
				this.exprs();
				this.state = 1109;
				this.match(ErlangParser.T__30);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1111;
				this.match(ErlangParser.T__39);
				this.state = 1112;
				this.exprs();
				this.state = 1113;
				this.match(ErlangParser.T__30);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public tryClauses(): TryClausesContext {
		let _localctx: TryClausesContext = new TryClausesContext(this._ctx, this.state);
		this.enterRule(_localctx, 216, ErlangParser.RULE_tryClauses);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1117;
			this.tryClause();
			this.state = 1122;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === ErlangParser.T__9) {
				{
				{
				this.state = 1118;
				this.match(ErlangParser.T__9);
				this.state = 1119;
				this.tryClause();
				}
				}
				this.state = 1124;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public tryClause(): TryClauseContext {
		let _localctx: TryClauseContext = new TryClauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 218, ErlangParser.RULE_tryClause);
		try {
			this.state = 1139;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 88, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1125;
				this.expr();
				this.state = 1126;
				this.clauseGuard();
				this.state = 1127;
				this.clauseBody();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1132;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 87, this._ctx) ) {
				case 1:
					{
					this.state = 1129;
					this.atomOrVar();
					this.state = 1130;
					this.match(ErlangParser.T__4);
					}
					break;
				}
				this.state = 1134;
				this.patExpr();
				this.state = 1135;
				this.tryOptStackTrace();
				this.state = 1136;
				this.clauseGuard();
				this.state = 1137;
				this.clauseBody();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public tryOptStackTrace(): TryOptStackTraceContext {
		let _localctx: TryOptStackTraceContext = new TryOptStackTraceContext(this._ctx, this.state);
		this.enterRule(_localctx, 220, ErlangParser.RULE_tryOptStackTrace);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1143;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ErlangParser.T__4) {
				{
				this.state = 1141;
				this.match(ErlangParser.T__4);
				this.state = 1142;
				this.tokVar();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public argumentList(): ArgumentListContext {
		let _localctx: ArgumentListContext = new ArgumentListContext(this._ctx, this.state);
		this.enterRule(_localctx, 222, ErlangParser.RULE_argumentList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1145;
			this.match(ErlangParser.T__2);
			this.state = 1147;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << ErlangParser.T__1) | (1 << ErlangParser.T__2) | (1 << ErlangParser.T__7) | (1 << ErlangParser.T__13) | (1 << ErlangParser.T__16) | (1 << ErlangParser.T__17) | (1 << ErlangParser.T__21) | (1 << ErlangParser.T__24) | (1 << ErlangParser.T__29))) !== 0) || ((((_la - 36)) & ~0x1F) === 0 && ((1 << (_la - 36)) & ((1 << (ErlangParser.T__35 - 36)) | (1 << (ErlangParser.T__36 - 36)) | (1 << (ErlangParser.T__38 - 36)) | (1 << (ErlangParser.T__40 - 36)) | (1 << (ErlangParser.T__41 - 36)) | (1 << (ErlangParser.T__42 - 36)) | (1 << (ErlangParser.T__43 - 36)) | (1 << (ErlangParser.TokAtom - 36)) | (1 << (ErlangParser.TokVar - 36)) | (1 << (ErlangParser.TokFloat - 36)))) !== 0) || ((((_la - 68)) & ~0x1F) === 0 && ((1 << (_la - 68)) & ((1 << (ErlangParser.TokInteger - 68)) | (1 << (ErlangParser.TokChar - 68)) | (1 << (ErlangParser.TokString - 68)))) !== 0)) {
				{
				this.state = 1146;
				this.exprs();
				}
			}

			this.state = 1149;
			this.match(ErlangParser.T__3);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public patArgumentList(): PatArgumentListContext {
		let _localctx: PatArgumentListContext = new PatArgumentListContext(this._ctx, this.state);
		this.enterRule(_localctx, 224, ErlangParser.RULE_patArgumentList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1151;
			this.match(ErlangParser.T__2);
			this.state = 1153;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << ErlangParser.T__1) | (1 << ErlangParser.T__2) | (1 << ErlangParser.T__7) | (1 << ErlangParser.T__13) | (1 << ErlangParser.T__16) | (1 << ErlangParser.T__21))) !== 0) || ((((_la - 42)) & ~0x1F) === 0 && ((1 << (_la - 42)) & ((1 << (ErlangParser.T__41 - 42)) | (1 << (ErlangParser.T__42 - 42)) | (1 << (ErlangParser.T__43 - 42)) | (1 << (ErlangParser.TokAtom - 42)) | (1 << (ErlangParser.TokVar - 42)) | (1 << (ErlangParser.TokFloat - 42)) | (1 << (ErlangParser.TokInteger - 42)) | (1 << (ErlangParser.TokChar - 42)) | (1 << (ErlangParser.TokString - 42)))) !== 0)) {
				{
				this.state = 1152;
				this.patExprs();
				}
			}

			this.state = 1155;
			this.match(ErlangParser.T__3);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public exprs(): ExprsContext {
		let _localctx: ExprsContext = new ExprsContext(this._ctx, this.state);
		this.enterRule(_localctx, 226, ErlangParser.RULE_exprs);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1157;
			this.expr();
			this.state = 1162;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === ErlangParser.T__5) {
				{
				{
				this.state = 1158;
				this.match(ErlangParser.T__5);
				this.state = 1159;
				this.expr();
				}
				}
				this.state = 1164;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public patExprs(): PatExprsContext {
		let _localctx: PatExprsContext = new PatExprsContext(this._ctx, this.state);
		this.enterRule(_localctx, 228, ErlangParser.RULE_patExprs);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1165;
			this.patExpr();
			this.state = 1170;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === ErlangParser.T__5) {
				{
				{
				this.state = 1166;
				this.match(ErlangParser.T__5);
				this.state = 1167;
				this.patExpr();
				}
				}
				this.state = 1172;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public guard_(): Guard_Context {
		let _localctx: Guard_Context = new Guard_Context(this._ctx, this.state);
		this.enterRule(_localctx, 230, ErlangParser.RULE_guard_);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1173;
			this.exprs();
			this.state = 1178;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === ErlangParser.T__9) {
				{
				{
				this.state = 1174;
				this.match(ErlangParser.T__9);
				this.state = 1175;
				this.exprs();
				}
				}
				this.state = 1180;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public atomic(): AtomicContext {
		let _localctx: AtomicContext = new AtomicContext(this._ctx, this.state);
		this.enterRule(_localctx, 232, ErlangParser.RULE_atomic);
		try {
			let _alt: number;
			this.state = 1190;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ErlangParser.TokChar:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1181;
				this.tokChar();
				}
				break;
			case ErlangParser.TokInteger:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1182;
				this.tokInteger();
				}
				break;
			case ErlangParser.TokFloat:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1183;
				this.tokFloat();
				}
				break;
			case ErlangParser.TokAtom:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1184;
				this.tokAtom();
				}
				break;
			case ErlangParser.TokString:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 1186;
				this._errHandler.sync(this);
				_alt = 1;
				do {
					switch (_alt) {
					case 1:
						{
						{
						this.state = 1185;
						this.tokString();
						}
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					this.state = 1188;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 95, this._ctx);
				} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public prefixOp(): PrefixOpContext {
		let _localctx: PrefixOpContext = new PrefixOpContext(this._ctx, this.state);
		this.enterRule(_localctx, 234, ErlangParser.RULE_prefixOp);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1192;
			_la = this._input.LA(1);
			if (!(_la === ErlangParser.T__1 || ((((_la - 42)) & ~0x1F) === 0 && ((1 << (_la - 42)) & ((1 << (ErlangParser.T__41 - 42)) | (1 << (ErlangParser.T__42 - 42)) | (1 << (ErlangParser.T__43 - 42)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public multOp(): MultOpContext {
		let _localctx: MultOpContext = new MultOpContext(this._ctx, this.state);
		this.enterRule(_localctx, 236, ErlangParser.RULE_multOp);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1194;
			_la = this._input.LA(1);
			if (!(((((_la - 24)) & ~0x1F) === 0 && ((1 << (_la - 24)) & ((1 << (ErlangParser.T__23 - 24)) | (1 << (ErlangParser.T__31 - 24)) | (1 << (ErlangParser.T__44 - 24)) | (1 << (ErlangParser.T__45 - 24)) | (1 << (ErlangParser.T__46 - 24)) | (1 << (ErlangParser.T__47 - 24)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public addOp(): AddOpContext {
		let _localctx: AddOpContext = new AddOpContext(this._ctx, this.state);
		this.enterRule(_localctx, 238, ErlangParser.RULE_addOp);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1196;
			_la = this._input.LA(1);
			if (!(_la === ErlangParser.T__1 || ((((_la - 42)) & ~0x1F) === 0 && ((1 << (_la - 42)) & ((1 << (ErlangParser.T__41 - 42)) | (1 << (ErlangParser.T__48 - 42)) | (1 << (ErlangParser.T__49 - 42)) | (1 << (ErlangParser.T__50 - 42)) | (1 << (ErlangParser.T__51 - 42)) | (1 << (ErlangParser.T__52 - 42)) | (1 << (ErlangParser.T__53 - 42)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public listOp(): ListOpContext {
		let _localctx: ListOpContext = new ListOpContext(this._ctx, this.state);
		this.enterRule(_localctx, 240, ErlangParser.RULE_listOp);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1198;
			_la = this._input.LA(1);
			if (!(_la === ErlangParser.T__54 || _la === ErlangParser.T__55)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public compOp(): CompOpContext {
		let _localctx: CompOpContext = new CompOpContext(this._ctx, this.state);
		this.enterRule(_localctx, 242, ErlangParser.RULE_compOp);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1200;
			_la = this._input.LA(1);
			if (!(((((_la - 57)) & ~0x1F) === 0 && ((1 << (_la - 57)) & ((1 << (ErlangParser.T__56 - 57)) | (1 << (ErlangParser.T__57 - 57)) | (1 << (ErlangParser.T__58 - 57)) | (1 << (ErlangParser.T__59 - 57)) | (1 << (ErlangParser.T__60 - 57)) | (1 << (ErlangParser.T__61 - 57)) | (1 << (ErlangParser.T__62 - 57)) | (1 << (ErlangParser.T__63 - 57)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public sempred(_localctx: RuleContext, ruleIndex: number, predIndex: number): boolean {
		switch (ruleIndex) {
		case 23:
			return this.type300_sempred(_localctx as Type300Context, predIndex);

		case 24:
			return this.type400_sempred(_localctx as Type400Context, predIndex);

		case 58:
			return this.patExpr400_sempred(_localctx as PatExpr400Context, predIndex);

		case 59:
			return this.patExpr500_sempred(_localctx as PatExpr500Context, predIndex);

		case 65:
			return this.mapPatExpr_sempred(_localctx as MapPatExprContext, predIndex);

		case 83:
			return this.mapExpr_sempred(_localctx as MapExprContext, predIndex);

		case 89:
			return this.recordExpr_sempred(_localctx as RecordExprContext, predIndex);
		}
		return true;
	}
	private type300_sempred(_localctx: Type300Context, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return this.precpred(this._ctx, 2);
		}
		return true;
	}
	private type400_sempred(_localctx: Type400Context, predIndex: number): boolean {
		switch (predIndex) {
		case 1:
			return this.precpred(this._ctx, 2);
		}
		return true;
	}
	private patExpr400_sempred(_localctx: PatExpr400Context, predIndex: number): boolean {
		switch (predIndex) {
		case 2:
			return this.precpred(this._ctx, 2);
		}
		return true;
	}
	private patExpr500_sempred(_localctx: PatExpr500Context, predIndex: number): boolean {
		switch (predIndex) {
		case 3:
			return this.precpred(this._ctx, 2);
		}
		return true;
	}
	private mapPatExpr_sempred(_localctx: MapPatExprContext, predIndex: number): boolean {
		switch (predIndex) {
		case 4:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private mapExpr_sempred(_localctx: MapExprContext, predIndex: number): boolean {
		switch (predIndex) {
		case 5:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private recordExpr_sempred(_localctx: RecordExprContext, predIndex: number): boolean {
		switch (predIndex) {
		case 6:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}

	private static readonly _serializedATNSegments: number = 3;
	private static readonly _serializedATNSegment0: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03K\u04B5\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
		"\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17\x04" +
		"\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C\x04" +
		"\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t\"\x04#" +
		"\t#\x04$\t$\x04%\t%\x04&\t&\x04\'\t\'\x04(\t(\x04)\t)\x04*\t*\x04+\t+" +
		"\x04,\t,\x04-\t-\x04.\t.\x04/\t/\x040\t0\x041\t1\x042\t2\x043\t3\x044" +
		"\t4\x045\t5\x046\t6\x047\t7\x048\t8\x049\t9\x04:\t:\x04;\t;\x04<\t<\x04" +
		"=\t=\x04>\t>\x04?\t?\x04@\t@\x04A\tA\x04B\tB\x04C\tC\x04D\tD\x04E\tE\x04" +
		"F\tF\x04G\tG\x04H\tH\x04I\tI\x04J\tJ\x04K\tK\x04L\tL\x04M\tM\x04N\tN\x04" +
		"O\tO\x04P\tP\x04Q\tQ\x04R\tR\x04S\tS\x04T\tT\x04U\tU\x04V\tV\x04W\tW\x04" +
		"X\tX\x04Y\tY\x04Z\tZ\x04[\t[\x04\\\t\\\x04]\t]\x04^\t^\x04_\t_\x04`\t" +
		"`\x04a\ta\x04b\tb\x04c\tc\x04d\td\x04e\te\x04f\tf\x04g\tg\x04h\th\x04" +
		"i\ti\x04j\tj\x04k\tk\x04l\tl\x04m\tm\x04n\tn\x04o\to\x04p\tp\x04q\tq\x04" +
		"r\tr\x04s\ts\x04t\tt\x04u\tu\x04v\tv\x04w\tw\x04x\tx\x04y\ty\x04z\tz\x04" +
		"{\t{\x03\x02\x06\x02\xF8\n\x02\r\x02\x0E\x02\xF9\x03\x02\x03\x02\x03\x03" +
		"\x03\x03\x05\x03\u0100\n\x03\x03\x03\x03\x03\x03\x04\x03\x04\x03\x05\x03" +
		"\x05\x03\x06\x03\x06\x03\x07\x03\x07\x03\b\x03\b\x03\t\x03\t\x03\n\x03" +
		"\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03" +
		"\n\x03\n\x03\n\x05\n\u0120\n\n\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03" +
		"\v\x03\v\x05\v\u012A\n\v\x03\f\x03\f\x03\f\x03\f\x03\f\x05\f\u0131\n\f" +
		"\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x05\r\u013B\n\r\x03\x0E" +
		"\x03\x0E\x03\x0E\x03\x0E\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F" +
		"\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x05\x0F\u014E" +
		"\n\x0F\x03\x10\x03\x10\x03\x10\x03\x10\x03\x11\x03\x11\x03\x11\x07\x11" +
		"\u0157\n\x11\f\x11\x0E\x11\u015A\v\x11\x03\x12\x03\x12\x03\x12\x05\x12" +
		"\u015F\n\x12\x03\x13\x03\x13\x03\x13\x07\x13\u0164\n\x13\f\x13\x0E\x13" +
		"\u0167\v\x13\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03" +
		"\x14\x03\x14\x05\x14\u0172\n\x14\x03\x15\x03\x15\x03\x15\x07\x15\u0177" +
		"\n\x15\f\x15\x0E\x15\u017A\v\x15\x03\x16\x03\x16\x03\x16\x05\x16\u017F" +
		"\n\x16\x03\x16\x03\x16\x03\x17\x03\x17\x03\x17\x05\x17\u0186\n\x17\x03" +
		"\x18\x03\x18\x03\x18\x05\x18\u018B\n\x18\x03\x19\x03\x19\x03\x19\x03\x19" +
		"\x03\x19\x03\x19\x03\x19\x07\x19\u0194\n\x19\f\x19\x0E\x19\u0197\v\x19" +
		"\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x07\x1A\u01A0" +
		"\n\x1A\f\x1A\x0E\x1A\u01A3\v\x1A\x03\x1B\x05\x1B\u01A6\n\x1B\x03\x1B\x03" +
		"\x1B\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03" +
		"\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03" +
		"\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03" +
		"\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03" +
		"\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03" +
		"\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03" +
		"\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03" +
		"\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03" +
		"\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x05\x1C\u01F6\n\x1C\x03\x1D\x03\x1D" +
		"\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x05\x1D\u01FE\n\x1D\x03\x1E\x03\x1E\x05" +
		"\x1E\u0202\n\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1F\x03\x1F\x03\x1F" +
		"\x07\x1F\u020B\n\x1F\f\x1F\x0E\x1F\u020E\v\x1F\x03 \x03 \x03 \x03 \x03" +
		"!\x03!\x03!\x07!\u0217\n!\f!\x0E!\u021A\v!\x03\"\x03\"\x03\"\x03\"\x03" +
		"#\x03#\x03#\x03#\x03#\x03#\x03#\x03#\x03#\x03#\x03#\x03#\x03#\x03#\x03" +
		"#\x03#\x05#\u0230\n#\x03$\x03$\x03$\x03$\x03%\x03%\x03%\x03%\x03%\x03" +
		"%\x03&\x03&\x03&\x03&\x03&\x03&\x03&\x03&\x03&\x03&\x03&\x03&\x03&\x03" +
		"&\x03&\x05&\u024B\n&\x03\'\x03\'\x03\'\x07\'\u0250\n\'\f\'\x0E\'\u0253" +
		"\v\'\x03(\x03(\x03(\x03(\x03(\x03)\x03)\x03*\x03*\x05*\u025E\n*\x03+\x03" +
		"+\x03+\x03,\x03,\x03,\x05,\u0266\n,\x03-\x03-\x03-\x07-\u026B\n-\f-\x0E" +
		"-\u026E\v-\x03.\x03.\x03.\x07.\u0273\n.\f.\x0E.\u0276\v.\x03/\x03/\x03" +
		"/\x07/\u027B\n/\f/\x0E/\u027E\v/\x030\x030\x030\x030\x050\u0284\n0\x03" +
		"1\x031\x031\x031\x071\u028A\n1\f1\x0E1\u028D\v1\x032\x032\x032\x032\x07" +
		"2\u0293\n2\f2\x0E2\u0296\v2\x033\x033\x033\x033\x073\u029C\n3\f3\x0E3" +
		"\u029F\v3\x034\x034\x034\x034\x054\u02A5\n4\x035\x035\x055\u02A9\n5\x03" +
		"6\x036\x036\x056\u02AE\n6\x037\x037\x037\x057\u02B3\n7\x038\x038\x038" +
		"\x038\x038\x038\x038\x038\x038\x038\x038\x038\x038\x038\x038\x038\x03" +
		"8\x038\x038\x038\x058\u02C9\n8\x039\x039\x039\x059\u02CE\n9\x03:\x03:" +
		"\x03:\x03:\x05:\u02D4\n:\x03;\x03;\x03;\x03;\x05;\u02DA\n;\x03<\x03<\x03" +
		"<\x03<\x03<\x03<\x03<\x07<\u02E3\n<\f<\x0E<\u02E6\v<\x03=\x03=\x03=\x03" +
		"=\x03=\x03=\x03=\x07=\u02EF\n=\f=\x0E=\u02F2\v=\x03>\x03>\x03>\x03>\x05" +
		">\u02F8\n>\x03?\x03?\x05?\u02FC\n?\x03@\x03@\x05@\u0300\n@\x03A\x03A\x03" +
		"B\x03B\x03B\x03B\x03B\x03B\x03B\x03B\x03B\x05B\u030D\nB\x03C\x03C\x05" +
		"C\u0311\nC\x03C\x03C\x03C\x03C\x03C\x03C\x07C\u0319\nC\fC\x0EC\u031C\v" +
		"C\x03D\x03D\x03D\x03D\x03D\x05D\u0323\nD\x03E\x03E\x03E\x03E\x03E\x03" +
		"E\x05E\u032B\nE\x03F\x03F\x03F\x03F\x03F\x03F\x03F\x03F\x03F\x05F\u0336" +
		"\nF\x03G\x03G\x03G\x03G\x03G\x03G\x05G\u033E\nG\x03H\x03H\x03H\x07H\u0343" +
		"\nH\fH\x0EH\u0346\vH\x03I\x03I\x03I\x03I\x03J\x05J\u034D\nJ\x03J\x03J" +
		"\x03K\x03K\x05K\u0353\nK\x03L\x03L\x05L\u0357\nL\x03M\x03M\x03M\x07M\u035C" +
		"\nM\fM\x0EM\u035F\vM\x03N\x03N\x03N\x05N\u0364\nN\x03O\x03O\x03P\x03P" +
		"\x03P\x03P\x03P\x03P\x03Q\x03Q\x03Q\x03Q\x03Q\x03Q\x03R\x03R\x03R\x07" +
		"R\u0377\nR\fR\x0ER\u037A\vR\x03S\x03S\x03S\x03S\x03S\x03S\x03S\x03S\x03" +
		"S\x05S\u0385\nS\x03T\x03T\x05T\u0389\nT\x03T\x03T\x03U\x03U\x05U\u038F" +
		"\nU\x03U\x03U\x03U\x03U\x03U\x03U\x07U\u0397\nU\fU\x0EU\u039A\vU\x03V" +
		"\x03V\x03V\x03V\x07V\u03A0\nV\fV\x0EV\u03A3\vV\x05V\u03A5\nV\x03V\x03" +
		"V\x03W\x03W\x05W\u03AB\nW\x03X\x03X\x03X\x03X\x03Y\x03Y\x03Y\x03Y\x03" +
		"Z\x03Z\x03[\x03[\x05[\u03B9\n[\x03[\x03[\x03[\x03[\x03[\x05[\u03C0\n[" +
		"\x03[\x03[\x03[\x03[\x03[\x03[\x05[\u03C8\n[\x07[\u03CA\n[\f[\x0E[\u03CD" +
		"\v[\x03\\\x03\\\x05\\\u03D1\n\\\x03\\\x03\\\x03]\x03]\x03]\x07]\u03D8" +
		"\n]\f]\x0E]\u03DB\v]\x03^\x03^\x05^\u03DF\n^\x03^\x03^\x03^\x03_\x03_" +
		"\x03_\x03`\x03`\x03`\x03`\x03a\x03a\x03a\x07a\u03EE\na\fa\x0Ea\u03F1\v" +
		"a\x03b\x03b\x03b\x03c\x03c\x03c\x03c\x03c\x03c\x03d\x03d\x03d\x07d\u03FF" +
		"\nd\fd\x0Ed\u0402\vd\x03e\x03e\x03e\x03e\x03f\x03f\x03f\x03f\x03f\x03" +
		"f\x03f\x03f\x03f\x03f\x03f\x03f\x03f\x03f\x03f\x03f\x03f\x05f\u0419\n" +
		"f\x03g\x03g\x03g\x03g\x03g\x03g\x03g\x03g\x03g\x03g\x03g\x03g\x03g\x03" +
		"g\x03g\x03g\x05g\u042B\ng\x03h\x03h\x05h\u042F\nh\x03i\x03i\x05i\u0433" +
		"\ni\x03j\x03j\x03j\x07j\u0438\nj\fj\x0Ej\u043B\vj\x03k\x03k\x03k\x03k" +
		"\x03k\x03k\x03k\x03k\x03k\x05k\u0446\nk\x03l\x03l\x03l\x03l\x05l\u044C" +
		"\nl\x03l\x03l\x03m\x03m\x03m\x03m\x03m\x03m\x03m\x03m\x03m\x03m\x03m\x03" +
		"m\x03m\x03m\x05m\u045E\nm\x03n\x03n\x03n\x07n\u0463\nn\fn\x0En\u0466\v" +
		"n\x03o\x03o\x03o\x03o\x03o\x03o\x03o\x05o\u046F\no\x03o\x03o\x03o\x03" +
		"o\x03o\x05o\u0476\no\x03p\x03p\x05p\u047A\np\x03q\x03q\x05q\u047E\nq\x03" +
		"q\x03q\x03r\x03r\x05r\u0484\nr\x03r\x03r\x03s\x03s\x03s\x07s\u048B\ns" +
		"\fs\x0Es\u048E\vs\x03t\x03t\x03t\x07t\u0493\nt\ft\x0Et\u0496\vt\x03u\x03" +
		"u\x03u\x07u\u049B\nu\fu\x0Eu\u049E\vu\x03v\x03v\x03v\x03v\x03v\x06v\u04A5" +
		"\nv\rv\x0Ev\u04A6\x05v\u04A9\nv\x03w\x03w\x03x\x03x\x03y\x03y\x03z\x03" +
		"z\x03{\x03{\x03{\x02\x02\t02vx\x84\xA8\xB4|\x02\x02\x04\x02\x06\x02\b" +
		"\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02" +
		"\x1C\x02\x1E\x02 \x02\"\x02$\x02&\x02(\x02*\x02,\x02.\x020\x022\x024\x02" +
		"6\x028\x02:\x02<\x02>\x02@\x02B\x02D\x02F\x02H\x02J\x02L\x02N\x02P\x02" +
		"R\x02T\x02V\x02X\x02Z\x02\\\x02^\x02`\x02b\x02d\x02f\x02h\x02j\x02l\x02" +
		"n\x02p\x02r\x02t\x02v\x02x\x02z\x02|\x02~\x02\x80\x02\x82\x02\x84\x02" +
		"\x86\x02\x88\x02\x8A\x02\x8C\x02\x8E\x02\x90\x02\x92\x02\x94\x02\x96\x02" +
		"\x98\x02\x9A\x02\x9C\x02\x9E\x02\xA0\x02\xA2\x02\xA4\x02\xA6\x02\xA8\x02" +
		"\xAA\x02\xAC\x02\xAE\x02\xB0\x02\xB2\x02\xB4\x02\xB6\x02\xB8\x02\xBA\x02" +
		"\xBC\x02\xBE\x02\xC0\x02\xC2\x02\xC4\x02\xC6\x02\xC8\x02\xCA\x02\xCC\x02" +
		"\xCE\x02\xD0\x02\xD2\x02\xD4\x02\xD6\x02\xD8\x02\xDA\x02\xDC\x02\xDE\x02" +
		"\xE0\x02\xE2\x02\xE4\x02\xE6\x02\xE8\x02\xEA\x02\xEC\x02\xEE\x02\xF0\x02" +
		"\xF2\x02\xF4\x02\x02\t\x03\x02\x16\x17\x03\x02\x1C\x1D\x04\x02\x04\x04" +
		",.\x05\x02\x1A\x1A\"\"/2\x05\x02\x04\x04,,38\x03\x029:\x03\x02;B\x02\u04CF" +
		"\x02\xF7\x03\x02\x02\x02\x04\xFF\x03\x02\x02\x02\x06\u0103\x03\x02\x02" +
		"\x02\b\u0105\x03\x02\x02\x02\n\u0107\x03\x02\x02\x02\f\u0109\x03\x02\x02" +
		"\x02\x0E\u010B\x03\x02\x02\x02\x10\u010D\x03\x02\x02\x02\x12\u011F\x03" +
		"\x02\x02\x02\x14\u0129\x03\x02\x02\x02\x16\u0130\x03\x02\x02\x02\x18\u013A" +
		"\x03\x02\x02\x02\x1A\u013C\x03\x02\x02\x02\x1C\u014D\x03\x02\x02\x02\x1E" +
		"\u014F\x03\x02\x02\x02 \u0153\x03\x02\x02\x02\"\u015B\x03\x02\x02\x02" +
		"$\u0160\x03\x02\x02\x02&\u0171\x03\x02\x02\x02(\u0173\x03\x02\x02\x02" +
		"*\u017E\x03\x02\x02\x02,\u0182\x03\x02\x02\x02.\u0187\x03\x02\x02\x02" +
		"0\u018C\x03\x02\x02\x022\u0198\x03\x02\x02\x024\u01A5\x03\x02\x02\x02" +
		"6\u01F5\x03\x02\x02\x028\u01FD\x03\x02\x02\x02:\u01FF\x03\x02\x02\x02" +
		"<\u0207\x03\x02\x02\x02>\u020F\x03\x02\x02\x02@\u0213\x03\x02\x02\x02" +
		"B\u021B\x03\x02\x02\x02D\u022F\x03\x02\x02\x02F\u0231\x03\x02\x02\x02" +
		"H\u0235\x03\x02\x02\x02J\u024A\x03\x02\x02\x02L\u024C\x03\x02\x02\x02" +
		"N\u0254\x03\x02\x02\x02P\u0259\x03\x02\x02\x02R\u025D\x03\x02\x02\x02" +
		"T\u025F\x03\x02\x02\x02V\u0265\x03\x02\x02\x02X\u0267\x03\x02\x02\x02" +
		"Z\u026F\x03\x02\x02\x02\\\u0277\x03\x02\x02\x02^\u027F\x03\x02\x02\x02" +
		"`\u0285\x03\x02\x02\x02b\u028E\x03\x02\x02\x02d\u0297\x03\x02\x02\x02" +
		"f\u02A4\x03\x02\x02\x02h\u02A8\x03\x02\x02\x02j\u02AD\x03\x02\x02\x02" +
		"l\u02AF\x03\x02\x02\x02n\u02C8\x03\x02\x02\x02p\u02CA\x03\x02\x02\x02" +
		"r\u02CF\x03\x02\x02\x02t\u02D5\x03\x02\x02\x02v\u02DB\x03\x02\x02\x02" +
		"x\u02E7\x03\x02\x02\x02z\u02F7\x03\x02\x02\x02|\u02FB\x03\x02\x02\x02" +
		"~\u02FF\x03\x02\x02\x02\x80\u0301\x03\x02\x02\x02\x82\u030C\x03\x02\x02" +
		"\x02\x84\u030E\x03\x02\x02\x02\x86\u031D\x03\x02\x02\x02\x88\u032A\x03" +
		"\x02\x02\x02\x8A\u0335\x03\x02\x02\x02\x8C\u033D\x03\x02\x02\x02\x8E\u033F" +
		"\x03\x02\x02\x02\x90\u0347\x03\x02\x02\x02\x92\u034C\x03\x02\x02\x02\x94" +
		"\u0352\x03\x02\x02\x02\x96\u0356\x03\x02\x02\x02\x98\u0358\x03\x02\x02" +
		"\x02\x9A\u0360\x03\x02\x02\x02\x9C\u0365\x03\x02\x02\x02\x9E\u0367\x03" +
		"\x02\x02\x02\xA0\u036D\x03\x02\x02\x02\xA2\u0373\x03\x02\x02\x02\xA4\u0384" +
		"\x03\x02\x02\x02\xA6\u0386\x03\x02\x02\x02\xA8\u038C\x03\x02\x02\x02\xAA" +
		"\u039B\x03\x02\x02\x02\xAC\u03AA\x03\x02\x02\x02\xAE\u03AC\x03\x02\x02" +
		"\x02\xB0\u03B0\x03\x02\x02\x02\xB2\u03B4\x03\x02\x02\x02\xB4\u03B6\x03" +
		"\x02\x02\x02\xB6\u03CE\x03\x02\x02\x02\xB8\u03D4\x03\x02\x02\x02\xBA\u03DE" +
		"\x03\x02\x02\x02\xBC\u03E3\x03\x02\x02\x02\xBE\u03E6\x03\x02\x02\x02\xC0" +
		"\u03EA\x03\x02\x02\x02\xC2\u03F2\x03\x02\x02\x02\xC4\u03F5\x03\x02\x02" +
		"\x02\xC6\u03FB\x03\x02\x02\x02\xC8\u0403\x03\x02\x02\x02\xCA\u0418\x03" +
		"\x02\x02\x02\xCC\u042A\x03\x02\x02\x02\xCE\u042E\x03\x02\x02\x02\xD0\u0432" +
		"\x03\x02\x02\x02\xD2\u0434\x03\x02\x02\x02\xD4\u0445\x03\x02\x02\x02\xD6" +
		"\u0447\x03\x02\x02\x02\xD8\u045D\x03\x02\x02\x02\xDA\u045F\x03\x02\x02" +
		"\x02\xDC\u0475\x03\x02\x02\x02\xDE\u0479\x03\x02\x02\x02\xE0\u047B\x03" +
		"\x02\x02\x02\xE2\u0481\x03\x02\x02\x02\xE4\u0487\x03\x02\x02\x02\xE6\u048F" +
		"\x03\x02\x02\x02\xE8\u0497\x03\x02\x02\x02\xEA\u04A8\x03\x02\x02\x02\xEC" +
		"\u04AA\x03\x02\x02\x02\xEE\u04AC\x03\x02\x02\x02\xF0\u04AE\x03\x02\x02" +
		"\x02\xF2\u04B0\x03\x02\x02\x02\xF4\u04B2\x03\x02\x02\x02\xF6\xF8\x05\x04" +
		"\x03\x02\xF7\xF6\x03\x02\x02\x02\xF8\xF9\x03\x02\x02\x02\xF9\xF7\x03\x02" +
		"\x02\x02\xF9\xFA\x03\x02\x02\x02\xFA\xFB\x03\x02\x02\x02\xFB\xFC\x07\x02" +
		"\x02\x03\xFC\x03\x03\x02\x02\x02\xFD\u0100\x05\x12\n\x02\xFE\u0100\x05" +
		"L\'\x02\xFF\xFD\x03\x02\x02\x02\xFF\xFE\x03\x02\x02\x02\u0100\u0101\x03" +
		"\x02\x02\x02\u0101\u0102\x07\x03\x02\x02\u0102\x05\x03\x02\x02\x02\u0103" +
		"\u0104\x07C\x02\x02\u0104\x07\x03\x02\x02\x02\u0105\u0106\x07D\x02\x02" +
		"\u0106\t\x03\x02\x02\x02\u0107\u0108\x07E\x02\x02\u0108\v\x03\x02\x02" +
		"\x02\u0109\u010A\x07F\x02\x02\u010A\r\x03\x02\x02\x02\u010B\u010C\x07" +
		"G\x02\x02\u010C\x0F\x03\x02\x02\x02\u010D\u010E\x07H\x02\x02\u010E\x11" +
		"\x03\x02\x02\x02\u010F\u0110\x07\x04\x02\x02\u0110\u0111\x05\x06\x04\x02" +
		"\u0111\u0112\x05J&\x02\u0112\u0120\x03\x02\x02\x02\u0113\u0114\x07\x04" +
		"\x02\x02\u0114\u0115\x05\x06\x04\x02\u0115\u0116\x05\x18\r\x02\u0116\u0120" +
		"\x03\x02\x02\x02\u0117\u0118\x07\x04\x02\x02\u0118\u0119\x05\x06\x04\x02" +
		"\u0119\u011A\x07\x05\x02\x02\u011A\u011B\x05\x18\r\x02\u011B\u011C\x07" +
		"\x06\x02\x02\u011C\u0120\x03\x02\x02\x02\u011D\u011E\x07I\x02\x02\u011E" +
		"\u0120\x05\x14\v\x02\u011F\u010F\x03\x02\x02\x02\u011F\u0113\x03\x02\x02" +
		"\x02\u011F\u0117\x03\x02\x02\x02\u011F\u011D\x03\x02\x02\x02\u0120\x13" +
		"\x03\x02\x02\x02\u0121\u0122\x05\x16\f\x02\u0122\u0123\x05 \x11\x02\u0123" +
		"\u012A\x03\x02\x02\x02\u0124\u0125\x07\x05\x02\x02\u0125\u0126\x05\x16" +
		"\f\x02\u0126\u0127\x05 \x11\x02\u0127\u0128\x07\x06\x02\x02\u0128\u012A" +
		"\x03\x02\x02\x02\u0129\u0121\x03\x02\x02\x02\u0129\u0124\x03\x02\x02\x02" +
		"\u012A\x15\x03\x02\x02\x02\u012B\u0131\x05\x06\x04\x02\u012C\u012D\x05" +
		"\x06\x04\x02\u012D\u012E\x07\x07\x02\x02\u012E\u012F\x05\x06\x04\x02\u012F" +
		"\u0131\x03\x02\x02\x02\u0130\u012B\x03\x02\x02\x02\u0130\u012C\x03\x02" +
		"\x02\x02\u0131\x17\x03\x02\x02\x02\u0132\u0133\x05V,\x02\u0133\u0134\x07" +
		"\b\x02\x02\u0134\u0135\x05\x1A\x0E\x02\u0135\u013B\x03\x02\x02\x02\u0136" +
		"\u0137\x05V,\x02\u0137\u0138\x07\t\x02\x02\u0138\u0139\x05*\x16\x02\u0139" +
		"\u013B\x03\x02\x02\x02\u013A\u0132\x03\x02\x02\x02\u013A\u0136\x03\x02" +
		"\x02\x02\u013B\x19\x03\x02\x02\x02\u013C\u013D\x07\n\x02\x02\u013D\u013E" +
		"\x05\x1C\x0F\x02\u013E\u013F\x07\v\x02\x02\u013F\x1B\x03\x02\x02\x02\u0140" +
		"\u014E\x05\x1E\x10\x02\u0141\u0142\x05\x1E\x10\x02\u0142\u0143\x07\b\x02" +
		"\x02\u0143\u0144\x05\x1C\x0F\x02\u0144\u014E\x03\x02\x02\x02\u0145\u0146" +
		"\x05V,\x02\u0146\u0147\x07\b\x02\x02\u0147\u0148\x05\x1C\x0F\x02\u0148" +
		"\u014E\x03\x02\x02\x02\u0149\u014A\x05\x1E\x10\x02\u014A\u014B\x07\b\x02" +
		"\x02\u014B\u014C\x05\xE4s\x02\u014C\u014E\x03\x02\x02\x02\u014D\u0140" +
		"\x03\x02\x02\x02\u014D\u0141\x03\x02\x02\x02\u014D\u0145\x03\x02\x02\x02" +
		"\u014D\u0149\x03\x02\x02\x02\u014E\x1D\x03\x02\x02\x02\u014F\u0150\x05" +
		"V,\x02\u0150\u0151\x07\t\x02\x02\u0151\u0152\x05*\x16\x02\u0152\x1F\x03" +
		"\x02\x02\x02\u0153\u0158\x05\"\x12\x02\u0154\u0155\x07\f\x02\x02\u0155" +
		"\u0157\x05\"\x12\x02\u0156\u0154\x03\x02\x02\x02\u0157\u015A\x03\x02\x02" +
		"\x02\u0158\u0156\x03\x02\x02\x02\u0158\u0159\x03\x02\x02\x02\u0159!\x03" +
		"\x02\x02\x02\u015A\u0158\x03\x02\x02\x02\u015B\u015E\x05:\x1E\x02\u015C" +
		"\u015D\x07\r\x02\x02\u015D\u015F\x05$\x13\x02\u015E\u015C\x03\x02\x02" +
		"\x02\u015E\u015F\x03\x02\x02\x02\u015F#\x03\x02\x02\x02\u0160\u0165\x05" +
		"&\x14\x02\u0161\u0162\x07\b\x02\x02\u0162\u0164\x05&\x14\x02\u0163\u0161" +
		"\x03\x02\x02\x02\u0164\u0167\x03\x02\x02\x02\u0165\u0163\x03\x02\x02\x02" +
		"\u0165\u0166\x03\x02\x02\x02\u0166%\x03\x02\x02\x02\u0167\u0165\x03\x02" +
		"\x02\x02\u0168\u0169\x05\x06\x04\x02\u0169\u016A\x07\x05\x02\x02\u016A" +
		"\u016B\x05(\x15\x02\u016B\u016C\x07\x06\x02\x02\u016C\u0172\x03\x02\x02" +
		"\x02\u016D\u016E\x05\b\x05\x02\u016E\u016F\x07\t\x02\x02\u016F\u0170\x05" +
		"*\x16\x02\u0170\u0172\x03\x02\x02\x02\u0171\u0168\x03\x02\x02\x02\u0171" +
		"\u016D\x03\x02\x02\x02\u0172\'\x03\x02\x02\x02\u0173\u0178\x05*\x16\x02" +
		"\u0174\u0175\x07\b\x02\x02\u0175\u0177\x05*\x16\x02\u0176\u0174\x03\x02" +
		"\x02\x02\u0177\u017A\x03\x02\x02\x02\u0178\u0176\x03\x02\x02\x02\u0178" +
		"\u0179\x03\x02\x02\x02\u0179)\x03\x02\x02\x02\u017A\u0178\x03\x02\x02" +
		"\x02\u017B\u017C\x05\b\x05\x02\u017C\u017D\x07\t\x02\x02\u017D\u017F\x03" +
		"\x02\x02\x02\u017E\u017B\x03\x02\x02\x02\u017E\u017F\x03\x02\x02\x02\u017F" +
		"\u0180\x03\x02\x02\x02\u0180\u0181\x05,\x17\x02\u0181+\x03\x02\x02\x02" +
		"\u0182\u0185\x05.\x18\x02\u0183\u0184\x07\x0E\x02\x02\u0184\u0186\x05" +
		",\x17\x02\u0185\u0183\x03\x02\x02\x02\u0185\u0186\x03\x02\x02\x02\u0186" +
		"-\x03\x02\x02\x02\u0187\u018A\x050\x19\x02\u0188\u0189\x07\x0F\x02\x02" +
		"\u0189\u018B\x050\x19\x02\u018A\u0188\x03\x02\x02\x02\u018A\u018B\x03" +
		"\x02\x02\x02\u018B/\x03\x02\x02\x02\u018C\u018D\b\x19\x01\x02\u018D\u018E" +
		"\x052\x1A\x02\u018E\u0195\x03\x02\x02\x02\u018F\u0190\f\x04\x02\x02\u0190" +
		"\u0191\x05\xF0y\x02\u0191\u0192\x052\x1A\x02\u0192\u0194\x03\x02\x02\x02" +
		"\u0193\u018F\x03\x02\x02\x02\u0194\u0197\x03\x02\x02\x02\u0195\u0193\x03" +
		"\x02\x02\x02\u0195\u0196\x03\x02\x02\x02\u01961\x03\x02\x02\x02\u0197" +
		"\u0195\x03\x02\x02\x02\u0198\u0199\b\x1A\x01\x02\u0199\u019A\x054\x1B" +
		"\x02\u019A\u01A1\x03\x02\x02\x02\u019B\u019C\f\x04\x02\x02\u019C\u019D" +
		"\x05\xEEx\x02\u019D\u019E\x054\x1B\x02\u019E\u01A0\x03\x02\x02\x02\u019F" +
		"\u019B\x03\x02\x02\x02\u01A0\u01A3\x03\x02\x02\x02\u01A1\u019F\x03\x02" +
		"\x02\x02\u01A1\u01A2\x03\x02\x02\x02\u01A23\x03\x02\x02\x02\u01A3\u01A1" +
		"\x03\x02\x02\x02\u01A4\u01A6\x05\xECw\x02\u01A5\u01A4\x03\x02\x02\x02" +
		"\u01A5\u01A6\x03\x02\x02\x02\u01A6\u01A7\x03\x02\x02\x02\u01A7\u01A8\x05" +
		"6\x1C\x02\u01A85\x03\x02\x02\x02\u01A9\u01AA\x07\x05\x02\x02\u01AA\u01AB" +
		"\x05*\x16\x02\u01AB\u01AC\x07\x06\x02\x02\u01AC\u01F6\x03\x02\x02\x02" +
		"\u01AD\u01F6\x05\b\x05\x02\u01AE\u01F6\x05\x06\x04\x02\u01AF\u01B0\x05" +
		"\x06\x04\x02\u01B0\u01B1\x07\x05\x02\x02\u01B1\u01B2\x07\x06\x02\x02\u01B2" +
		"\u01F6\x03\x02\x02\x02\u01B3\u01B4\x05\x06\x04\x02\u01B4\u01B5\x07\x05" +
		"\x02\x02\u01B5\u01B6\x05(\x15\x02\u01B6\u01B7\x07\x06\x02\x02\u01B7\u01F6" +
		"\x03\x02\x02\x02\u01B8\u01B9\x05\x06\x04\x02\u01B9\u01BA\x07\x07\x02\x02" +
		"\u01BA\u01BB\x05\x06\x04\x02\u01BB\u01BC\x07\x05\x02\x02\u01BC\u01BD\x07" +
		"\x06\x02\x02\u01BD\u01F6\x03\x02\x02\x02\u01BE\u01BF\x05\x06\x04\x02\u01BF" +
		"\u01C0\x07\x07\x02\x02\u01C0\u01C1\x05\x06\x04\x02\u01C1\u01C2\x07\x05" +
		"\x02\x02\u01C2\u01C3\x05(\x15\x02\u01C3\u01C4\x07\x06\x02\x02\u01C4\u01F6" +
		"\x03\x02\x02\x02\u01C5\u01C6\x07\x10\x02\x02\u01C6\u01F6\x07\x11\x02\x02" +
		"\u01C7\u01C8\x07\x10\x02\x02\u01C8\u01C9\x05*\x16\x02\u01C9\u01CA\x07" +
		"\x11\x02\x02\u01CA\u01F6\x03\x02\x02\x02\u01CB\u01CC\x07\x10\x02\x02\u01CC" +
		"\u01CD\x05*\x16\x02\u01CD";
	private static readonly _serializedATNSegment1: string =
		"\u01CE\x07\b\x02\x02\u01CE\u01CF\x07\x12\x02\x02\u01CF\u01D0\x07\x11\x02" +
		"\x02\u01D0\u01F6\x03\x02\x02\x02\u01D1\u01D2\x07\x13\x02\x02\u01D2\u01D3" +
		"\x07\n\x02\x02\u01D3\u01F6\x07\v\x02\x02\u01D4\u01D5\x07\x13\x02\x02\u01D5" +
		"\u01D6\x07\n\x02\x02\u01D6\u01D7\x05<\x1F\x02\u01D7\u01D8\x07\v\x02\x02" +
		"\u01D8\u01F6\x03\x02\x02\x02\u01D9\u01DA\x07\n\x02\x02\u01DA\u01F6\x07" +
		"\v\x02\x02\u01DB\u01DC\x07\n\x02\x02\u01DC\u01DD\x05(\x15\x02\u01DD\u01DE" +
		"\x07\v\x02\x02\u01DE\u01F6\x03\x02\x02\x02\u01DF\u01E0\x07\x13\x02\x02" +
		"\u01E0\u01E1\x05\x06\x04\x02\u01E1\u01E2\x07\n\x02\x02\u01E2\u01E3\x07" +
		"\v\x02\x02\u01E3\u01F6\x03\x02\x02\x02\u01E4\u01E5\x07\x13\x02\x02\u01E5" +
		"\u01E6\x05\x06\x04\x02\u01E6\u01E7\x07\n\x02\x02\u01E7\u01E8\x05@!\x02" +
		"\u01E8\u01E9\x07\v\x02\x02\u01E9\u01F6\x03\x02\x02\x02\u01EA\u01F6\x05" +
		"D#\x02\u01EB\u01F6\x05\f\x07\x02\u01EC\u01F6\x05\x0E\b\x02\u01ED\u01EE" +
		"\x07\x14\x02\x02\u01EE\u01EF\x07\x05\x02\x02\u01EF\u01F6\x07\x06\x02\x02" +
		"\u01F0\u01F1\x07\x14\x02\x02\u01F1\u01F2\x07\x05\x02\x02\u01F2\u01F3\x05" +
		"8\x1D\x02\u01F3\u01F4\x07\x06\x02\x02\u01F4\u01F6\x03\x02\x02\x02\u01F5" +
		"\u01A9\x03\x02\x02\x02\u01F5\u01AD\x03\x02\x02\x02\u01F5\u01AE\x03\x02" +
		"\x02\x02\u01F5\u01AF\x03\x02\x02\x02\u01F5\u01B3\x03\x02\x02\x02\u01F5" +
		"\u01B8\x03\x02\x02\x02\u01F5\u01BE\x03\x02\x02\x02\u01F5\u01C5\x03\x02" +
		"\x02\x02\u01F5\u01C7\x03\x02\x02\x02\u01F5\u01CB\x03\x02\x02\x02\u01F5" +
		"\u01D1\x03\x02\x02\x02\u01F5\u01D4\x03\x02\x02\x02\u01F5\u01D9\x03\x02" +
		"\x02\x02\u01F5\u01DB\x03\x02\x02\x02\u01F5\u01DF\x03\x02\x02\x02\u01F5" +
		"\u01E4\x03\x02\x02\x02\u01F5\u01EA\x03\x02\x02\x02\u01F5\u01EB\x03\x02" +
		"\x02\x02\u01F5\u01EC\x03\x02\x02\x02\u01F5\u01ED\x03\x02\x02\x02\u01F5" +
		"\u01F0\x03\x02\x02\x02\u01F67\x03\x02\x02\x02\u01F7\u01F8\x07\x05\x02" +
		"\x02\u01F8\u01F9\x07\x12\x02\x02\u01F9\u01FA\x07\x06\x02\x02\u01FA\u01FB" +
		"\x07\x15\x02\x02\u01FB\u01FE\x05*\x16\x02\u01FC\u01FE\x05:\x1E\x02\u01FD" +
		"\u01F7\x03\x02\x02\x02\u01FD\u01FC\x03\x02\x02\x02\u01FE9\x03\x02\x02" +
		"\x02\u01FF\u0201\x07\x05\x02\x02\u0200\u0202\x05(\x15\x02\u0201\u0200" +
		"\x03\x02\x02\x02\u0201\u0202\x03\x02\x02\x02\u0202\u0203\x03\x02\x02\x02" +
		"\u0203\u0204\x07\x06\x02\x02\u0204\u0205\x07\x15\x02\x02\u0205\u0206\x05" +
		"*\x16\x02\u0206;\x03\x02\x02\x02\u0207\u020C\x05> \x02\u0208\u0209\x07" +
		"\b\x02\x02\u0209\u020B\x05> \x02\u020A\u0208\x03\x02\x02\x02\u020B\u020E" +
		"\x03\x02\x02\x02\u020C\u020A\x03\x02\x02\x02\u020C\u020D\x03\x02\x02\x02" +
		"\u020D=\x03\x02\x02\x02\u020E\u020C\x03\x02\x02\x02\u020F\u0210\x05*\x16" +
		"\x02\u0210\u0211\t\x02\x02\x02\u0211\u0212\x05*\x16\x02\u0212?\x03\x02" +
		"\x02\x02\u0213\u0218\x05B\"\x02\u0214\u0215\x07\b\x02\x02\u0215\u0217" +
		"\x05B\"\x02\u0216\u0214\x03\x02\x02\x02\u0217\u021A\x03\x02\x02\x02\u0218" +
		"\u0216\x03\x02\x02\x02\u0218\u0219\x03\x02\x02\x02\u0219A\x03\x02\x02" +
		"\x02\u021A\u0218\x03\x02\x02\x02\u021B\u021C\x05\x06\x04\x02\u021C\u021D" +
		"\x07\t\x02\x02\u021D\u021E\x05*\x16\x02\u021EC\x03\x02\x02\x02\u021F\u0220" +
		"\x07\x18\x02\x02\u0220\u0230\x07\x19\x02\x02\u0221\u0222\x07\x18\x02\x02" +
		"\u0222\u0223\x05F$\x02\u0223\u0224\x07\x19\x02\x02\u0224\u0230\x03\x02" +
		"\x02\x02\u0225\u0226\x07\x18\x02\x02\u0226\u0227\x05H%\x02\u0227\u0228" +
		"\x07\x19\x02\x02\u0228\u0230\x03\x02\x02\x02\u0229\u022A\x07\x18\x02\x02" +
		"\u022A\u022B\x05F$\x02\u022B\u022C\x07\b\x02\x02\u022C\u022D\x05H%\x02" +
		"\u022D\u022E\x07\x19\x02\x02\u022E\u0230\x03\x02\x02\x02\u022F\u021F\x03" +
		"\x02\x02\x02\u022F\u0221\x03\x02\x02\x02\u022F\u0225\x03\x02\x02\x02\u022F" +
		"\u0229\x03\x02\x02\x02\u0230E\x03\x02\x02\x02\u0231\u0232\x05\b\x05\x02" +
		"\u0232\u0233\x07\x07\x02\x02\u0233\u0234\x056\x1C\x02\u0234G\x03\x02\x02" +
		"\x02\u0235\u0236\x05\b\x05\x02\u0236\u0237\x07\x07\x02\x02\u0237\u0238" +
		"\x05\b\x05\x02\u0238\u0239\x07\x1A\x02\x02\u0239\u023A\x056\x1C\x02\u023A" +
		"I\x03\x02\x02\x02\u023B\u024B\x05V,\x02\u023C\u023D\x07\x05\x02\x02\u023D" +
		"\u023E\x05V,\x02\u023E\u023F\x07\x06\x02\x02\u023F\u024B\x03\x02\x02\x02" +
		"\u0240\u0241\x05V,\x02\u0241\u0242\x07\b\x02\x02\u0242\u0243\x05\xE4s" +
		"\x02\u0243\u024B\x03\x02\x02\x02\u0244\u0245\x07\x05\x02\x02\u0245\u0246" +
		"\x05V,\x02\u0246\u0247\x07\b\x02\x02\u0247\u0248\x05\xE4s\x02\u0248\u0249" +
		"\x07\x06\x02\x02\u0249\u024B\x03\x02\x02\x02\u024A\u023B\x03\x02\x02\x02" +
		"\u024A\u023C\x03\x02\x02\x02\u024A\u0240\x03\x02\x02\x02\u024A\u0244\x03" +
		"\x02\x02\x02\u024BK\x03\x02\x02\x02\u024C\u0251\x05N(\x02\u024D\u024E" +
		"\x07\f\x02\x02\u024E\u0250\x05N(\x02\u024F\u024D\x03\x02\x02\x02\u0250" +
		"\u0253\x03\x02\x02\x02\u0251\u024F\x03\x02\x02\x02\u0251\u0252\x03\x02" +
		"\x02\x02\u0252M\x03\x02\x02\x02\u0253\u0251\x03\x02\x02\x02\u0254\u0255" +
		"\x05\x06\x04\x02\u0255\u0256\x05P)\x02\u0256\u0257\x05R*\x02\u0257\u0258" +
		"\x05T+\x02\u0258O\x03\x02\x02\x02\u0259\u025A\x05\xE2r\x02\u025AQ\x03" +
		"\x02\x02\x02\u025B\u025C\x07\r\x02\x02\u025C\u025E\x05\xE8u\x02\u025D" +
		"\u025B\x03\x02\x02\x02\u025D\u025E\x03\x02\x02\x02\u025ES\x03\x02\x02" +
		"\x02\u025F\u0260\x07\x15\x02\x02\u0260\u0261\x05\xE4s\x02\u0261U\x03\x02" +
		"\x02\x02\u0262\u0263\x07\x1B\x02\x02\u0263\u0266\x05V,\x02\u0264\u0266" +
		"\x05X-\x02\u0265\u0262\x03\x02\x02\x02\u0265\u0264\x03\x02\x02\x02\u0266" +
		"W\x03\x02\x02\x02\u0267\u026C\x05Z.\x02\u0268\u0269\t\x03\x02\x02\u0269" +
		"\u026B\x05Z.\x02\u026A\u0268\x03\x02\x02\x02\u026B\u026E\x03\x02\x02\x02" +
		"\u026C\u026A\x03\x02\x02\x02\u026C\u026D\x03\x02\x02\x02\u026DY\x03\x02" +
		"\x02\x02\u026E\u026C\x03\x02\x02\x02\u026F\u0274\x05\\/\x02\u0270\u0271" +
		"\x07\x1E\x02\x02\u0271\u0273\x05\\/\x02\u0272\u0270\x03\x02\x02\x02\u0273" +
		"\u0276\x03\x02\x02\x02\u0274\u0272\x03\x02\x02\x02\u0274\u0275\x03\x02" +
		"\x02\x02\u0275[\x03\x02\x02\x02\u0276\u0274\x03\x02\x02\x02\u0277\u027C" +
		"\x05^0\x02\u0278\u0279\x07\x1F\x02\x02\u0279\u027B\x05^0\x02\u027A\u0278" +
		"\x03\x02\x02\x02\u027B\u027E\x03\x02\x02\x02\u027C\u027A\x03\x02\x02\x02" +
		"\u027C\u027D\x03\x02\x02\x02\u027D]\x03\x02\x02\x02\u027E\u027C\x03\x02" +
		"\x02\x02\u027F\u0283\x05`1\x02\u0280\u0281\x05\xF4{\x02\u0281\u0282\x05" +
		"`1\x02\u0282\u0284\x03\x02\x02\x02\u0283\u0280\x03\x02\x02\x02\u0283\u0284" +
		"\x03\x02\x02\x02\u0284_\x03\x02\x02\x02\u0285\u028B\x05b2\x02\u0286\u0287" +
		"\x05\xF2z\x02\u0287\u0288\x05b2\x02\u0288\u028A\x03\x02\x02\x02\u0289" +
		"\u0286\x03\x02\x02\x02\u028A\u028D\x03\x02\x02\x02\u028B\u0289\x03\x02" +
		"\x02\x02\u028B\u028C\x03\x02\x02\x02\u028Ca\x03\x02\x02\x02\u028D\u028B" +
		"\x03\x02\x02\x02\u028E\u0294\x05d3\x02\u028F\u0290\x05\xF0y\x02\u0290" +
		"\u0291\x05d3\x02\u0291\u0293\x03\x02\x02\x02\u0292\u028F\x03\x02\x02\x02" +
		"\u0293\u0296\x03\x02\x02\x02\u0294\u0292\x03\x02\x02\x02\u0294\u0295\x03" +
		"\x02\x02\x02\u0295c\x03\x02\x02\x02\u0296\u0294\x03\x02\x02\x02\u0297" +
		"\u029D\x05f4\x02\u0298\u0299\x05\xEEx\x02\u0299\u029A\x05f4\x02\u029A" +
		"\u029C\x03\x02\x02\x02\u029B\u0298\x03\x02\x02\x02\u029C\u029F\x03\x02" +
		"\x02\x02\u029D\u029B\x03\x02\x02\x02\u029D\u029E\x03\x02\x02\x02\u029E" +
		"e\x03\x02\x02\x02\u029F\u029D\x03\x02\x02\x02\u02A0\u02A1\x05\xECw\x02" +
		"\u02A1\u02A2\x05f4\x02\u02A2\u02A5\x03\x02\x02\x02\u02A3\u02A5\x05h5\x02" +
		"\u02A4\u02A0\x03\x02\x02\x02\u02A4\u02A3\x03\x02\x02\x02\u02A5g\x03\x02" +
		"\x02\x02\u02A6\u02A9\x05\xA8U\x02\u02A7\u02A9\x05j6\x02\u02A8\u02A6\x03" +
		"\x02\x02\x02\u02A8\u02A7\x03\x02\x02\x02\u02A9i\x03\x02\x02\x02\u02AA" +
		"\u02AE\x05\xBC_\x02\u02AB\u02AE\x05\xB4[\x02\u02AC\u02AE\x05l7\x02\u02AD" +
		"\u02AA\x03\x02\x02\x02\u02AD\u02AB\x03\x02\x02\x02\u02AD\u02AC\x03\x02" +
		"\x02\x02\u02AEk\x03\x02\x02\x02\u02AF\u02B2\x05n8\x02\u02B0\u02B1\x07" +
		"\x07\x02\x02\u02B1\u02B3\x05n8\x02\u02B2\u02B0\x03\x02\x02\x02\u02B2\u02B3" +
		"\x03\x02\x02\x02\u02B3m\x03\x02\x02\x02\u02B4\u02C9\x05\b\x05\x02\u02B5" +
		"\u02C9\x05\xEAv\x02\u02B6\u02C9\x05\x88E\x02\u02B7\u02C9\x05\x8CG\x02" +
		"\u02B8\u02C9\x05\x9EP\x02\u02B9\u02C9\x05\xA0Q\x02\u02BA\u02C9\x05\xA6" +
		"T\x02\u02BB\u02BC\x07\x05\x02\x02\u02BC\u02BD\x05V,\x02\u02BD\u02BE\x07" +
		"\x06\x02\x02\u02BE\u02C9\x03\x02\x02\x02\u02BF\u02C0\x07 \x02\x02\u02C0" +
		"\u02C1\x05\xE4s\x02\u02C1\u02C2\x07!\x02\x02\u02C2\u02C9\x03\x02\x02\x02" +
		"\u02C3\u02C9\x05\xBE`\x02\u02C4\u02C9\x05\xC4c\x02\u02C5\u02C9\x05\xCA" +
		"f\x02\u02C6\u02C9\x05\xCCg\x02\u02C7\u02C9\x05\xD6l\x02\u02C8\u02B4\x03" +
		"\x02\x02\x02\u02C8\u02B5\x03\x02\x02\x02\u02C8\u02B6\x03\x02\x02\x02\u02C8" +
		"\u02B7\x03\x02\x02\x02\u02C8\u02B8\x03\x02\x02\x02\u02C8\u02B9\x03\x02" +
		"\x02\x02\u02C8\u02BA\x03\x02\x02\x02\u02C8\u02BB\x03\x02\x02\x02\u02C8" +
		"\u02BF\x03\x02\x02\x02\u02C8\u02C3\x03\x02\x02\x02\u02C8\u02C4\x03\x02" +
		"\x02\x02\u02C8\u02C5\x03\x02\x02\x02\u02C8\u02C6\x03\x02\x02\x02\u02C8" +
		"\u02C7\x03\x02\x02\x02\u02C9o\x03\x02\x02\x02\u02CA\u02CD\x05r:\x02\u02CB" +
		"\u02CC\x07\x1C\x02\x02\u02CC\u02CE\x05p9\x02\u02CD\u02CB\x03\x02\x02\x02" +
		"\u02CD\u02CE\x03\x02\x02\x02\u02CEq\x03\x02\x02\x02\u02CF\u02D3\x05t;" +
		"\x02\u02D0\u02D1\x05\xF4{\x02\u02D1\u02D2\x05t;\x02\u02D2\u02D4\x03\x02" +
		"\x02\x02\u02D3\u02D0\x03\x02\x02\x02\u02D3\u02D4\x03\x02\x02\x02\u02D4" +
		"s\x03\x02\x02\x02\u02D5\u02D9\x05v<\x02\u02D6\u02D7\x05\xF2z\x02\u02D7" +
		"\u02D8\x05t;\x02\u02D8\u02DA\x03\x02\x02\x02\u02D9\u02D6\x03\x02\x02\x02" +
		"\u02D9\u02DA\x03\x02\x02\x02\u02DAu\x03\x02\x02\x02\u02DB\u02DC\b<\x01" +
		"\x02\u02DC\u02DD\x05x=\x02\u02DD\u02E4\x03\x02\x02\x02\u02DE\u02DF\f\x04" +
		"\x02\x02\u02DF\u02E0\x05\xF0y\x02\u02E0\u02E1\x05x=\x02\u02E1\u02E3\x03" +
		"\x02\x02\x02\u02E2\u02DE\x03\x02\x02\x02\u02E3\u02E6\x03\x02\x02\x02\u02E4" +
		"\u02E2\x03\x02\x02\x02\u02E4\u02E5\x03\x02\x02\x02\u02E5w\x03\x02\x02" +
		"\x02\u02E6\u02E4\x03\x02\x02\x02\u02E7\u02E8\b=\x01\x02\u02E8\u02E9\x05" +
		"z>\x02\u02E9\u02F0\x03\x02\x02\x02\u02EA\u02EB\f\x04\x02\x02\u02EB\u02EC" +
		"\x05\xEEx\x02\u02EC\u02ED\x05z>\x02\u02ED\u02EF\x03\x02\x02\x02\u02EE" +
		"\u02EA\x03\x02\x02\x02\u02EF\u02F2\x03\x02\x02\x02\u02F0\u02EE\x03\x02" +
		"\x02\x02\u02F0\u02F1\x03\x02\x02\x02\u02F1y\x03\x02\x02\x02\u02F2\u02F0" +
		"\x03\x02\x02\x02\u02F3\u02F4\x05\xECw\x02\u02F4\u02F5\x05z>\x02\u02F5" +
		"\u02F8\x03\x02\x02\x02\u02F6\u02F8\x05|?\x02\u02F7\u02F3\x03\x02\x02\x02" +
		"\u02F7\u02F6\x03\x02\x02\x02\u02F8{\x03\x02\x02\x02\u02F9\u02FC\x05\x84" +
		"C\x02\u02FA\u02FC\x05~@\x02\u02FB\u02F9\x03\x02\x02\x02\u02FB\u02FA\x03" +
		"\x02\x02\x02\u02FC}\x03\x02\x02\x02\u02FD\u0300\x05\x86D\x02\u02FE\u0300" +
		"\x05\x80A\x02\u02FF\u02FD\x03\x02\x02\x02\u02FF\u02FE\x03\x02\x02\x02" +
		"\u0300\x7F\x03\x02\x02\x02\u0301\u0302\x05\x82B\x02\u0302\x81\x03\x02" +
		"\x02\x02\u0303\u030D\x05\b\x05\x02\u0304\u030D\x05\xEAv\x02\u0305\u030D" +
		"\x05\x88E\x02\u0306\u030D\x05\x8CG\x02\u0307\u030D\x05\xA6T\x02\u0308" +
		"\u0309\x07\x05\x02\x02\u0309\u030A\x05p9\x02\u030A\u030B\x07\x06\x02\x02" +
		"\u030B\u030D\x03\x02\x02\x02\u030C\u0303\x03\x02\x02\x02\u030C\u0304\x03" +
		"\x02\x02\x02\u030C\u0305\x03\x02\x02\x02\u030C\u0306\x03\x02\x02\x02\u030C" +
		"\u0307\x03\x02\x02\x02\u030C\u0308\x03\x02\x02\x02\u030D\x83\x03\x02\x02" +
		"\x02\u030E\u0310\bC\x01\x02\u030F\u0311\x05\x82B\x02\u0310\u030F\x03\x02" +
		"\x02\x02\u0310\u0311\x03\x02\x02\x02\u0311\u0312\x03\x02\x02\x02\u0312" +
		"\u0313\x07\x13\x02\x02\u0313\u0314\x05\xAAV\x02\u0314\u031A\x03\x02\x02" +
		"\x02\u0315\u0316\f\x03\x02\x02\u0316\u0317\x07\x13\x02\x02\u0317\u0319" +
		"\x05\xAAV\x02\u0318\u0315\x03\x02\x02\x02\u0319\u031C\x03\x02\x02\x02" +
		"\u031A\u0318\x03\x02\x02\x02\u031A\u031B\x03\x02\x02\x02\u031B\x85\x03" +
		"\x02\x02\x02\u031C\u031A\x03\x02\x02\x02\u031D\u031E\x07\x13\x02\x02\u031E" +
		"\u0322\x05\x06\x04\x02\u031F\u0320\x07\x03\x02\x02\u0320\u0323\x05\x06" +
		"\x04\x02\u0321\u0323\x05\xB6\\\x02\u0322\u031F\x03\x02\x02\x02\u0322\u0321" +
		"\x03\x02\x02\x02\u0323\x87\x03\x02\x02\x02\u0324\u0325\x07\x10\x02\x02" +
		"\u0325\u032B\x07\x11\x02\x02\u0326\u0327\x07\x10\x02\x02\u0327\u0328\x05" +
		"V,\x02\u0328\u0329\x05\x8AF\x02\u0329\u032B\x03\x02\x02\x02\u032A\u0324" +
		"\x03\x02\x02\x02\u032A\u0326\x03\x02\x02\x02\u032B\x89\x03\x02\x02\x02" +
		"\u032C\u0336\x07\x11\x02\x02\u032D\u032E\x07\x0E\x02\x02\u032E\u032F\x05" +
		"V,\x02\u032F\u0330\x07\x11\x02\x02\u0330\u0336\x03\x02\x02\x02\u0331\u0332" +
		"\x07\b\x02\x02\u0332\u0333\x05V,\x02\u0333\u0334\x05\x8AF\x02\u0334\u0336" +
		"\x03\x02\x02\x02\u0335\u032C\x03\x02\x02\x02\u0335\u032D\x03\x02\x02\x02" +
		"\u0335\u0331\x03\x02\x02\x02\u0336\x8B\x03\x02\x02\x02\u0337\u0338\x07" +
		"\x18\x02\x02\u0338\u033E\x07\x19\x02\x02\u0339\u033A\x07\x18\x02\x02\u033A" +
		"\u033B\x05\x8EH\x02\u033B\u033C\x07\x19\x02\x02\u033C\u033E\x03\x02\x02" +
		"\x02\u033D\u0337\x03\x02\x02\x02\u033D\u0339\x03\x02\x02\x02\u033E\x8D" +
		"\x03\x02\x02\x02\u033F\u0344\x05\x90I\x02\u0340\u0341\x07\b\x02\x02\u0341" +
		"\u0343\x05\x90I\x02\u0342\u0340\x03\x02\x02\x02\u0343\u0346\x03\x02\x02" +
		"\x02\u0344\u0342\x03\x02\x02\x02\u0344\u0345\x03\x02\x02\x02\u0345\x8F" +
		"\x03\x02\x02\x02\u0346\u0344\x03\x02\x02\x02\u0347\u0348\x05\x92J\x02" +
		"\u0348\u0349\x05\x94K\x02\u0349\u034A\x05\x96L\x02\u034A\x91\x03\x02\x02" +
		"\x02\u034B\u034D\x05\xECw\x02\u034C\u034B\x03\x02\x02\x02\u034C\u034D" +
		"\x03\x02\x02\x02\u034D\u034E\x03\x02\x02\x02\u034E\u034F\x05n8\x02\u034F" +
		"\x93\x03\x02\x02\x02\u0350\u0351\x07\x07\x02\x02\u0351\u0353\x05\x9CO" +
		"\x02\u0352\u0350\x03\x02\x02\x02\u0352\u0353\x03\x02\x02\x02\u0353\x95" +
		"\x03\x02\x02\x02\u0354\u0355\x07\"\x02\x02\u0355\u0357\x05\x98M\x02\u0356" +
		"\u0354\x03\x02\x02\x02\u0356\u0357\x03\x02\x02\x02\u0357\x97\x03\x02\x02" +
		"\x02\u0358\u035D\x05\x9AN\x02\u0359\u035A\x07\x04\x02\x02\u035A\u035C" +
		"\x05\x9AN\x02\u035B\u0359\x03\x02\x02\x02\u035C\u035F\x03\x02\x02\x02" +
		"\u035D\u035B\x03\x02\x02\x02\u035D\u035E\x03\x02\x02\x02\u035E\x99\x03" +
		"\x02\x02\x02\u035F\u035D\x03\x02\x02\x02\u0360\u0363\x05\x06\x04\x02\u0361" +
		"\u0362\x07\x07\x02\x02\u0362\u0364\x05\f\x07\x02\u0363\u0361\x03\x02\x02" +
		"\x02\u0363\u0364\x03\x02\x02\x02\u0364\x9B\x03\x02\x02\x02\u0365\u0366" +
		"\x05n8\x02\u0366\x9D\x03\x02\x02\x02\u0367\u0368\x07\x10\x02\x02\u0368" +
		"\u0369\x05V,\x02\u0369\u036A\x07#\x02\x02\u036A\u036B\x05\xA2R\x02\u036B" +
		"\u036C\x07\x11\x02\x02\u036C\x9F\x03\x02\x02\x02\u036D\u036E\x07\x18\x02" +
		"\x02\u036E\u036F\x05n8\x02\u036F\u0370\x07#\x02\x02\u0370\u0371\x05\xA2" +
		"R\x02\u0371\u0372\x07\x19\x02\x02\u0372\xA1\x03\x02\x02\x02\u0373\u0378" +
		"\x05\xA4S\x02\u0374\u0375\x07\b\x02\x02\u0375\u0377\x05\xA4S\x02\u0376" +
		"\u0374\x03\x02\x02\x02\u0377\u037A\x03\x02\x02\x02\u0378\u0376\x03\x02" +
		"\x02\x02\u0378\u0379\x03\x02\x02\x02\u0379\xA3\x03\x02\x02\x02\u037A\u0378" +
		"\x03\x02\x02\x02\u037B\u0385\x05V,\x02\u037C\u037D\x05V,\x02\u037D\u037E" +
		"\x07$\x02\x02\u037E\u037F\x05V,\x02\u037F\u0385\x03\x02\x02\x02\u0380" +
		"\u0381\x05\x8CG\x02\u0381\u0382\x07%\x02\x02\u0382\u0383\x05V,\x02\u0383" +
		"\u0385\x03\x02\x02\x02\u0384\u037B\x03\x02\x02\x02\u0384\u037C\x03\x02" +
		"\x02\x02\u0384\u0380\x03\x02\x02\x02\u0385\xA5\x03\x02\x02\x02\u0386\u0388" +
		"\x07\n\x02\x02\u0387\u0389\x05\xE4s\x02\u0388\u0387\x03\x02\x02\x02\u0388" +
		"\u0389\x03\x02\x02\x02\u0389\u038A\x03\x02\x02\x02\u038A\u038B\x07\v\x02" +
		"\x02\u038B\xA7\x03\x02\x02\x02\u038C\u038E\bU\x01\x02\u038D\u038F\x05" +
		"n8\x02\u038E\u038D\x03\x02\x02\x02\u038E\u038F\x03\x02\x02\x02\u038F\u0390" +
		"\x03\x02\x02\x02\u0390\u0391\x07\x13\x02\x02\u0391\u0392\x05\xAAV\x02" +
		"\u0392\u0398\x03\x02\x02\x02\u0393\u0394\f\x03\x02\x02\u0394\u0395\x07" +
		"\x13\x02\x02\u0395\u0397\x05\xAAV\x02\u0396\u0393\x03\x02\x02\x02\u0397" +
		"\u039A\x03\x02\x02\x02\u0398\u0396\x03\x02\x02\x02\u0398\u0399\x03\x02" +
		"\x02\x02\u0399\xA9\x03\x02\x02\x02\u039A\u0398\x03\x02\x02\x02\u039B\u03A4" +
		"\x07\n\x02\x02\u039C\u03A1\x05\xACW\x02\u039D\u039E\x07\b\x02\x02\u039E" +
		"\u03A0\x05\xACW\x02\u039F\u039D\x03\x02\x02\x02\u03A0\u03A3\x03\x02\x02" +
		"\x02\u03A1\u039F\x03\x02\x02\x02\u03A1\u03A2\x03\x02\x02\x02\u03A2\u03A5" +
		"\x03\x02\x02\x02\u03A3\u03A1\x03\x02\x02\x02\u03A4\u039C\x03\x02\x02\x02" +
		"\u03A4\u03A5\x03\x02\x02\x02\u03A5\u03A6\x03\x02\x02\x02\u03A6\u03A7\x07" +
		"\v\x02\x02\u03A7\xAB\x03\x02\x02\x02\u03A8\u03AB\x05\xAEX\x02\u03A9\u03AB" +
		"\x05\xB0Y\x02\u03AA\u03A8\x03\x02\x02\x02\u03AA\u03A9\x03\x02\x02\x02" +
		"\u03AB\xAD\x03\x02\x02\x02\u03AC\u03AD\x05\xB2Z\x02\u03AD\u03AE\x07\x16" +
		"\x02\x02\u03AE\u03AF\x05V,\x02\u03AF\xAF\x03\x02\x02\x02\u03B0\u03B1\x05" +
		"\xB2Z\x02\u03B1\u03B2\x07\x17\x02\x02\u03B2\u03B3\x05V,\x02\u03B3\xB1" +
		"\x03\x02\x02\x02\u03B4\u03B5\x05V,\x02\u03B5\xB3\x03\x02\x02\x02\u03B6" +
		"\u03B8\b[\x01\x02\u03B7\u03B9\x05n8\x02\u03B8\u03B7\x03\x02\x02\x02\u03B8" +
		"\u03B9\x03\x02\x02\x02\u03B9\u03BA\x03\x02\x02\x02\u03BA\u03BB\x07\x13" +
		"\x02\x02\u03BB\u03BF\x05\x06\x04\x02\u03BC\u03BD\x07\x03\x02\x02\u03BD" +
		"\u03C0\x05\x06\x04\x02\u03BE\u03C0\x05\xB6\\\x02\u03BF\u03BC\x03\x02\x02" +
		"\x02\u03BF\u03BE\x03\x02\x02\x02\u03C0\u03CB\x03\x02\x02\x02\u03C1\u03C2" +
		"\f\x03\x02\x02\u03C2\u03C3\x07\x13\x02\x02\u03C3\u03C7\x05\x06\x04\x02" +
		"\u03C4\u03C5\x07\x03\x02\x02\u03C5\u03C8\x05\x06\x04\x02\u03C6\u03C8\x05" +
		"\xB6\\\x02\u03C7\u03C4\x03\x02\x02\x02\u03C7\u03C6\x03\x02\x02\x02\u03C8" +
		"\u03CA\x03\x02\x02\x02\u03C9\u03C1\x03\x02\x02\x02\u03CA\u03CD\x03\x02" +
		"\x02\x02\u03CB\u03C9\x03\x02\x02\x02\u03CB\u03CC\x03\x02\x02\x02\u03CC" +
		"\xB5\x03\x02\x02\x02\u03CD\u03CB\x03\x02\x02\x02\u03CE\u03D0\x07\n\x02" +
		"\x02\u03CF\u03D1\x05\xB8]\x02\u03D0\u03CF\x03\x02\x02\x02\u03D0\u03D1" +
		"\x03\x02\x02\x02\u03D1\u03D2\x03\x02\x02\x02\u03D2\u03D3\x07\v\x02\x02" +
		"\u03D3\xB7\x03\x02\x02\x02\u03D4\u03D9\x05\xBA^\x02\u03D5\u03D6\x07\b" +
		"\x02\x02\u03D6\u03D8\x05\xBA^\x02\u03D7\u03D5\x03\x02\x02\x02\u03D8\u03DB" +
		"\x03\x02\x02\x02\u03D9\u03D7\x03\x02\x02\x02\u03D9\u03DA\x03\x02\x02\x02" +
		"\u03DA\xB9\x03\x02\x02\x02\u03DB\u03D9\x03\x02\x02\x02\u03DC\u03DF\x05" +
		"\b\x05\x02\u03DD\u03DF\x05\x06\x04\x02\u03DE\u03DC\x03\x02\x02\x02\u03DE" +
		"\u03DD\x03\x02\x02\x02\u03DF\u03E0\x03\x02\x02\x02\u03E0\u03E1\x07\x1C" +
		"\x02\x02\u03E1\u03E2\x05V,\x02\u03E2\xBB\x03\x02\x02\x02\u03E3\u03E4\x05" +
		"l7\x02\u03E4\u03E5\x05\xE0q\x02\u03E5\xBD\x03\x02\x02\x02\u03E6\u03E7" +
		"\x07&\x02\x02\u03E7\u03E8\x05\xC0a\x02\u03E8\u03E9\x07!\x02\x02\u03E9" +
		"\xBF\x03\x02\x02\x02\u03EA\u03EF\x05\xC2b\x02\u03EB\u03EC\x07\f\x02\x02" +
		"\u03EC\u03EE\x05\xC2b\x02\u03ED\u03EB\x03\x02\x02\x02\u03EE\u03F1\x03" +
		"\x02\x02\x02\u03EF\u03ED\x03\x02\x02\x02\u03EF\u03F0\x03\x02\x02\x02\u03F0" +
		"\xC1\x03\x02\x02\x02\u03F1\u03EF\x03\x02\x02\x02\u03F2\u03F3\x05\xE8u" +
		"\x02\u03F3\u03F4\x05T+\x02\u03F4\xC3\x03\x02\x02\x02\u03F5\u03F6\x07\'" +
		"\x02\x02\u03F6\u03F7\x05V,\x02\u03F7\u03F8\x07(\x02\x02\u03F8\u03F9\x05" +
		"\xC6d\x02\u03F9\u03FA\x07!\x02\x02\u03FA\xC5\x03\x02\x02\x02\u03FB\u0400" +
		"\x05\xC8e\x02\u03FC\u03FD\x07\f\x02\x02\u03FD\u03FF\x05\xC8e\x02\u03FE" +
		"\u03FC\x03\x02\x02\x02\u03FF\u0402\x03\x02\x02\x02\u0400\u03FE\x03\x02" +
		"\x02\x02\u0400\u0401\x03\x02\x02\x02\u0401\xC7\x03\x02\x02\x02\u0402\u0400" +
		"\x03\x02\x02\x02\u0403\u0404\x05V,\x02\u0404\u0405\x05R*\x02\u0405\u0406" +
		"\x05T+\x02\u0406\xC9\x03\x02\x02\x02\u0407\u0408\x07)\x02\x02\u0408\u0409" +
		"\x05\xC6d\x02\u0409\u040A\x07!\x02\x02\u040A\u0419\x03\x02\x02\x02\u040B" +
		"\u040C\x07)\x02\x02\u040C\u040D\x07*\x02\x02\u040D\u040E\x05V,\x02\u040E" +
		"\u040F\x05T+\x02\u040F\u0410\x07!\x02\x02\u0410\u0419\x03\x02\x02\x02" +
		"\u0411\u0412\x07)\x02\x02\u0412\u0413\x05\xC6d\x02\u0413\u0414\x07*\x02" +
		"\x02\u0414\u0415\x05V,\x02\u0415\u0416\x05T+\x02\u0416\u0417\x07!\x02" +
		"\x02\u0417\u0419\x03\x02\x02\x02\u0418\u0407\x03\x02\x02\x02\u0418\u040B" +
		"\x03\x02\x02\x02\u0418\u0411\x03\x02\x02\x02\u0419\xCB\x03\x02\x02\x02" +
		"\u041A\u041B\x07\x14\x02\x02\u041B\u041C\x05\x06\x04\x02\u041C\u041D\x07" +
		"\"\x02\x02\u041D\u041E\x05\f\x07\x02\u041E\u042B\x03\x02\x02\x02\u041F" +
		"\u0420\x07\x14\x02\x02\u0420\u0421\x05\xCEh\x02\u0421\u0422\x07\x07\x02" +
		"\x02\u0422\u0423\x05\xCEh\x02\u0423\u0424\x07\"\x02\x02\u0424\u0425\x05" +
		"\xD0i\x02\u0425\u042B\x03\x02\x02\x02\u0426\u0427\x07\x14\x02\x02\u0427" +
		"\u0428\x05\xD2j\x02\u0428\u0429\x07!\x02\x02\u0429\u042B\x03\x02\x02\x02" +
		"\u042A\u041A\x03\x02\x02\x02\u042A\u041F\x03\x02\x02\x02\u042A\u0426\x03" +
		"\x02\x02\x02\u042B\xCD\x03\x02\x02\x02\u042C\u042F\x05\x06\x04\x02\u042D" +
		"\u042F\x05\b\x05\x02\u042E\u042C\x03\x02\x02\x02\u042E\u042D\x03\x02\x02" +
		"\x02\u042F\xCF\x03\x02\x02\x02\u0430\u0433\x05\f\x07\x02\u0431\u0433\x05" +
		"\b\x05\x02\u0432\u0430\x03\x02\x02\x02\u0432\u0431\x03\x02\x02\x02\u0433" +
		"\xD1\x03\x02\x02\x02\u0434\u0439\x05\xD4k\x02\u0435\u0436\x07\f\x02\x02" +
		"\u0436\u0438\x05\xD4k\x02\u0437\u0435\x03\x02\x02\x02\u0438\u043B\x03" +
		"\x02\x02\x02\u0439\u0437\x03\x02\x02\x02\u0439\u043A\x03\x02\x02\x02\u043A" +
		"\xD3\x03\x02\x02\x02\u043B\u0439\x03\x02\x02\x02\u043C\u043D\x05\xE2r" +
		"\x02\u043D\u043E\x05R*\x02\u043E\u043F\x05T+\x02\u043F\u0446\x03\x02\x02" +
		"\x02\u0440\u0441\x05\b\x05\x02\u0441\u0442\x05\xE2r\x02\u0442\u0443\x05" +
		"R*\x02\u0443\u0444\x05T+\x02\u0444\u0446\x03\x02\x02\x02\u0445\u043C\x03" +
		"\x02\x02\x02\u0445\u0440\x03\x02\x02\x02\u0446\xD5\x03\x02\x02\x02\u0447" +
		"\u0448\x07+\x02\x02\u0448\u044B\x05\xE4s\x02\u0449\u044A\x07(\x02\x02" +
		"\u044A\u044C\x05\xC6d\x02\u044B\u0449\x03\x02\x02\x02\u044B\u044C\x03" +
		"\x02\x02\x02\u044C\u044D\x03\x02\x02\x02\u044D\u044E\x05\xD8m\x02\u044E" +
		"\xD7\x03\x02\x02\x02\u044F\u0450\x07\x1B\x02\x02\u0450\u0451\x05\xDAn" +
		"\x02\u0451\u0452\x07!\x02\x02\u0452\u045E\x03\x02\x02\x02\u0453\u0454" +
		"\x07\x1B\x02\x02\u0454\u0455\x05\xDAn\x02\u0455\u0456\x07*\x02\x02\u0456" +
		"\u0457\x05\xE4s\x02\u0457\u0458\x07!\x02\x02\u0458\u045E\x03\x02\x02\x02" +
		"\u0459\u045A\x07*\x02\x02\u045A\u045B\x05\xE4s\x02\u045B\u045C\x07!\x02" +
		"\x02\u045C\u045E\x03\x02\x02\x02\u045D\u044F\x03\x02\x02\x02\u045D\u0453" +
		"\x03\x02\x02\x02\u045D\u0459\x03\x02\x02\x02\u045E\xD9\x03\x02\x02\x02" +
		"\u045F\u0464\x05\xDCo\x02\u0460\u0461\x07\f\x02\x02\u0461\u0463\x05\xDC" +
		"o\x02\u0462\u0460\x03\x02\x02\x02\u0463\u0466\x03\x02\x02\x02\u0464\u0462" +
		"\x03\x02\x02\x02\u0464\u0465\x03\x02\x02\x02\u0465\xDB\x03\x02\x02\x02" +
		"\u0466\u0464\x03\x02\x02\x02\u0467\u0468\x05V,\x02\u0468\u0469\x05R*\x02" +
		"\u0469\u046A\x05T+\x02\u046A\u0476\x03\x02\x02\x02\u046B\u046C\x05\xCE" +
		"h\x02\u046C\u046D\x07\x07\x02\x02\u046D\u046F\x03\x02\x02\x02\u046E\u046B" +
		"\x03\x02\x02\x02\u046E\u046F\x03\x02\x02\x02\u046F\u0470\x03\x02\x02\x02" +
		"\u0470\u0471\x05p9\x02\u0471\u0472\x05\xDEp\x02\u0472\u0473\x05R*\x02" +
		"\u0473\u0474\x05T+\x02\u0474\u0476\x03\x02\x02\x02\u0475\u0467\x03\x02" +
		"\x02\x02\u0475\u046E\x03\x02\x02\x02\u0476\xDD\x03\x02\x02\x02\u0477\u0478" +
		"\x07\x07\x02\x02\u0478\u047A\x05\b\x05\x02\u0479\u0477\x03\x02\x02\x02" +
		"\u0479\u047A\x03\x02\x02\x02\u047A\xDF\x03\x02\x02\x02\u047B\u047D\x07" +
		"\x05\x02\x02\u047C\u047E\x05\xE4s\x02\u047D\u047C\x03\x02\x02\x02\u047D" +
		"\u047E\x03\x02\x02\x02\u047E\u047F\x03\x02\x02\x02\u047F\u0480\x07\x06" +
		"\x02\x02\u0480\xE1\x03\x02\x02\x02\u0481\u0483\x07\x05\x02\x02\u0482\u0484" +
		"\x05\xE6t\x02\u0483\u0482\x03\x02\x02\x02\u0483\u0484\x03\x02\x02\x02" +
		"\u0484\u0485\x03\x02\x02\x02\u0485\u0486\x07\x06\x02\x02\u0486\xE3\x03" +
		"\x02\x02\x02\u0487\u048C\x05V,\x02\u0488\u0489\x07\b\x02\x02\u0489\u048B" +
		"\x05V,\x02\u048A\u0488\x03\x02\x02\x02\u048B\u048E\x03\x02\x02\x02\u048C" +
		"\u048A\x03\x02\x02\x02\u048C\u048D\x03\x02\x02\x02\u048D\xE5\x03\x02\x02" +
		"\x02\u048E\u048C\x03\x02\x02\x02\u048F\u0494\x05p9\x02\u0490\u0491\x07" +
		"\b\x02\x02\u0491\u0493\x05p9\x02\u0492\u0490\x03\x02\x02\x02\u0493\u0496" +
		"\x03\x02\x02\x02\u0494\u0492\x03\x02\x02\x02\u0494\u0495\x03\x02\x02\x02" +
		"\u0495\xE7\x03";
	private static readonly _serializedATNSegment2: string =
		"\x02\x02\x02\u0496\u0494\x03\x02\x02\x02\u0497\u049C\x05\xE4s\x02\u0498" +
		"\u0499\x07\f\x02\x02\u0499\u049B\x05\xE4s\x02\u049A\u0498\x03\x02\x02" +
		"\x02\u049B\u049E\x03\x02\x02\x02\u049C\u049A\x03\x02\x02\x02\u049C\u049D" +
		"\x03\x02\x02\x02\u049D\xE9\x03\x02\x02\x02\u049E\u049C\x03\x02\x02\x02" +
		"\u049F\u04A9\x05\x0E\b\x02\u04A0\u04A9\x05\f\x07\x02\u04A1\u04A9\x05\n" +
		"\x06\x02\u04A2\u04A9\x05\x06\x04\x02\u04A3\u04A5\x05\x10\t\x02\u04A4\u04A3" +
		"\x03\x02\x02\x02\u04A5\u04A6\x03\x02\x02\x02\u04A6\u04A4\x03\x02\x02\x02" +
		"\u04A6\u04A7\x03\x02\x02\x02\u04A7\u04A9\x03\x02\x02\x02\u04A8\u049F\x03" +
		"\x02\x02\x02\u04A8\u04A0\x03\x02\x02\x02\u04A8\u04A1\x03\x02\x02\x02\u04A8" +
		"\u04A2\x03\x02\x02\x02\u04A8\u04A4\x03\x02\x02\x02\u04A9\xEB\x03\x02\x02" +
		"\x02\u04AA\u04AB\t\x04\x02\x02\u04AB\xED\x03\x02\x02\x02\u04AC\u04AD\t" +
		"\x05\x02\x02\u04AD\xEF\x03\x02\x02\x02\u04AE\u04AF\t\x06\x02\x02\u04AF" +
		"\xF1\x03\x02\x02\x02\u04B0\u04B1\t\x07\x02\x02\u04B1\xF3\x03\x02\x02\x02" +
		"\u04B2\u04B3\t\b\x02\x02\u04B3\xF5\x03\x02\x02\x02c\xF9\xFF\u011F\u0129" +
		"\u0130\u013A\u014D\u0158\u015E\u0165\u0171\u0178\u017E\u0185\u018A\u0195" +
		"\u01A1\u01A5\u01F5\u01FD\u0201\u020C\u0218\u022F\u024A\u0251\u025D\u0265" +
		"\u026C\u0274\u027C\u0283\u028B\u0294\u029D\u02A4\u02A8\u02AD\u02B2\u02C8" +
		"\u02CD\u02D3\u02D9\u02E4\u02F0\u02F7\u02FB\u02FF\u030C\u0310\u031A\u0322" +
		"\u032A\u0335\u033D\u0344\u034C\u0352\u0356\u035D\u0363\u0378\u0384\u0388" +
		"\u038E\u0398\u03A1\u03A4\u03AA\u03B8\u03BF\u03C7\u03CB\u03D0\u03D9\u03DE" +
		"\u03EF\u0400\u0418\u042A\u042E\u0432\u0439\u0445\u044B\u045D\u0464\u046E" +
		"\u0475\u0479\u047D\u0483\u048C\u0494\u049C\u04A6\u04A8";
	public static readonly _serializedATN: string = Utils.join(
		[
			ErlangParser._serializedATNSegment0,
			ErlangParser._serializedATNSegment1,
			ErlangParser._serializedATNSegment2,
		],
		"",
	);
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!ErlangParser.__ATN) {
			ErlangParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(ErlangParser._serializedATN));
		}

		return ErlangParser.__ATN;
	}

}

export class FormsContext extends ParserRuleContext {
	public EOF(): TerminalNode { return this.getToken(ErlangParser.EOF, 0); }
	public form(): FormContext[];
	public form(i: number): FormContext;
	public form(i?: number): FormContext | FormContext[] {
		if (i === undefined) {
			return this.getRuleContexts(FormContext);
		} else {
			return this.getRuleContext(i, FormContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ErlangParser.RULE_forms; }
	// @Override
	public enterRule(listener: ErlangListener): void {
		if (listener.enterForms) {
			listener.enterForms(this);
		}
	}
	// @Override
	public exitRule(listener: ErlangListener): void {
		if (listener.exitForms) {
			listener.exitForms(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ErlangVisitor<Result>): Result {
		if (visitor.visitForms) {
			return visitor.visitForms(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FormContext extends ParserRuleContext {
	public attribute(): AttributeContext | undefined {
		return this.tryGetRuleContext(0, AttributeContext);
	}
	public function_(): Function_Context | undefined {
		return this.tryGetRuleContext(0, Function_Context);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ErlangParser.RULE_form; }
	// @Override
	public enterRule(listener: ErlangListener): void {
		if (listener.enterForm) {
			listener.enterForm(this);
		}
	}
	// @Override
	public exitRule(listener: ErlangListener): void {
		if (listener.exitForm) {
			listener.exitForm(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ErlangVisitor<Result>): Result {
		if (visitor.visitForm) {
			return visitor.visitForm(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TokAtomContext extends ParserRuleContext {
	public TokAtom(): TerminalNode { return this.getToken(ErlangParser.TokAtom, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ErlangParser.RULE_tokAtom; }
	// @Override
	public enterRule(listener: ErlangListener): void {
		if (listener.enterTokAtom) {
			listener.enterTokAtom(this);
		}
	}
	// @Override
	public exitRule(listener: ErlangListener): void {
		if (listener.exitTokAtom) {
			listener.exitTokAtom(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ErlangVisitor<Result>): Result {
		if (visitor.visitTokAtom) {
			return visitor.visitTokAtom(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TokVarContext extends ParserRuleContext {
	public TokVar(): TerminalNode { return this.getToken(ErlangParser.TokVar, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ErlangParser.RULE_tokVar; }
	// @Override
	public enterRule(listener: ErlangListener): void {
		if (listener.enterTokVar) {
			listener.enterTokVar(this);
		}
	}
	// @Override
	public exitRule(listener: ErlangListener): void {
		if (listener.exitTokVar) {
			listener.exitTokVar(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ErlangVisitor<Result>): Result {
		if (visitor.visitTokVar) {
			return visitor.visitTokVar(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TokFloatContext extends ParserRuleContext {
	public TokFloat(): TerminalNode { return this.getToken(ErlangParser.TokFloat, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ErlangParser.RULE_tokFloat; }
	// @Override
	public enterRule(listener: ErlangListener): void {
		if (listener.enterTokFloat) {
			listener.enterTokFloat(this);
		}
	}
	// @Override
	public exitRule(listener: ErlangListener): void {
		if (listener.exitTokFloat) {
			listener.exitTokFloat(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ErlangVisitor<Result>): Result {
		if (visitor.visitTokFloat) {
			return visitor.visitTokFloat(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TokIntegerContext extends ParserRuleContext {
	public TokInteger(): TerminalNode { return this.getToken(ErlangParser.TokInteger, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ErlangParser.RULE_tokInteger; }
	// @Override
	public enterRule(listener: ErlangListener): void {
		if (listener.enterTokInteger) {
			listener.enterTokInteger(this);
		}
	}
	// @Override
	public exitRule(listener: ErlangListener): void {
		if (listener.exitTokInteger) {
			listener.exitTokInteger(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ErlangVisitor<Result>): Result {
		if (visitor.visitTokInteger) {
			return visitor.visitTokInteger(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TokCharContext extends ParserRuleContext {
	public TokChar(): TerminalNode { return this.getToken(ErlangParser.TokChar, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ErlangParser.RULE_tokChar; }
	// @Override
	public enterRule(listener: ErlangListener): void {
		if (listener.enterTokChar) {
			listener.enterTokChar(this);
		}
	}
	// @Override
	public exitRule(listener: ErlangListener): void {
		if (listener.exitTokChar) {
			listener.exitTokChar(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ErlangVisitor<Result>): Result {
		if (visitor.visitTokChar) {
			return visitor.visitTokChar(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TokStringContext extends ParserRuleContext {
	public TokString(): TerminalNode { return this.getToken(ErlangParser.TokString, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ErlangParser.RULE_tokString; }
	// @Override
	public enterRule(listener: ErlangListener): void {
		if (listener.enterTokString) {
			listener.enterTokString(this);
		}
	}
	// @Override
	public exitRule(listener: ErlangListener): void {
		if (listener.exitTokString) {
			listener.exitTokString(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ErlangVisitor<Result>): Result {
		if (visitor.visitTokString) {
			return visitor.visitTokString(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AttributeContext extends ParserRuleContext {
	public tokAtom(): TokAtomContext | undefined {
		return this.tryGetRuleContext(0, TokAtomContext);
	}
	public attrVal(): AttrValContext | undefined {
		return this.tryGetRuleContext(0, AttrValContext);
	}
	public typedAttrVal(): TypedAttrValContext | undefined {
		return this.tryGetRuleContext(0, TypedAttrValContext);
	}
	public AttrName(): TerminalNode | undefined { return this.tryGetToken(ErlangParser.AttrName, 0); }
	public typeSpec(): TypeSpecContext | undefined {
		return this.tryGetRuleContext(0, TypeSpecContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ErlangParser.RULE_attribute; }
	// @Override
	public enterRule(listener: ErlangListener): void {
		if (listener.enterAttribute) {
			listener.enterAttribute(this);
		}
	}
	// @Override
	public exitRule(listener: ErlangListener): void {
		if (listener.exitAttribute) {
			listener.exitAttribute(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ErlangVisitor<Result>): Result {
		if (visitor.visitAttribute) {
			return visitor.visitAttribute(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeSpecContext extends ParserRuleContext {
	public specFun(): SpecFunContext {
		return this.getRuleContext(0, SpecFunContext);
	}
	public typeSigs(): TypeSigsContext {
		return this.getRuleContext(0, TypeSigsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ErlangParser.RULE_typeSpec; }
	// @Override
	public enterRule(listener: ErlangListener): void {
		if (listener.enterTypeSpec) {
			listener.enterTypeSpec(this);
		}
	}
	// @Override
	public exitRule(listener: ErlangListener): void {
		if (listener.exitTypeSpec) {
			listener.exitTypeSpec(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ErlangVisitor<Result>): Result {
		if (visitor.visitTypeSpec) {
			return visitor.visitTypeSpec(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SpecFunContext extends ParserRuleContext {
	public tokAtom(): TokAtomContext[];
	public tokAtom(i: number): TokAtomContext;
	public tokAtom(i?: number): TokAtomContext | TokAtomContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TokAtomContext);
		} else {
			return this.getRuleContext(i, TokAtomContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ErlangParser.RULE_specFun; }
	// @Override
	public enterRule(listener: ErlangListener): void {
		if (listener.enterSpecFun) {
			listener.enterSpecFun(this);
		}
	}
	// @Override
	public exitRule(listener: ErlangListener): void {
		if (listener.exitSpecFun) {
			listener.exitSpecFun(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ErlangVisitor<Result>): Result {
		if (visitor.visitSpecFun) {
			return visitor.visitSpecFun(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypedAttrValContext extends ParserRuleContext {
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	public typedRecordFields(): TypedRecordFieldsContext | undefined {
		return this.tryGetRuleContext(0, TypedRecordFieldsContext);
	}
	public topType(): TopTypeContext | undefined {
		return this.tryGetRuleContext(0, TopTypeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ErlangParser.RULE_typedAttrVal; }
	// @Override
	public enterRule(listener: ErlangListener): void {
		if (listener.enterTypedAttrVal) {
			listener.enterTypedAttrVal(this);
		}
	}
	// @Override
	public exitRule(listener: ErlangListener): void {
		if (listener.exitTypedAttrVal) {
			listener.exitTypedAttrVal(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ErlangVisitor<Result>): Result {
		if (visitor.visitTypedAttrVal) {
			return visitor.visitTypedAttrVal(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypedRecordFieldsContext extends ParserRuleContext {
	public typedExprs(): TypedExprsContext {
		return this.getRuleContext(0, TypedExprsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ErlangParser.RULE_typedRecordFields; }
	// @Override
	public enterRule(listener: ErlangListener): void {
		if (listener.enterTypedRecordFields) {
			listener.enterTypedRecordFields(this);
		}
	}
	// @Override
	public exitRule(listener: ErlangListener): void {
		if (listener.exitTypedRecordFields) {
			listener.exitTypedRecordFields(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ErlangVisitor<Result>): Result {
		if (visitor.visitTypedRecordFields) {
			return visitor.visitTypedRecordFields(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypedExprsContext extends ParserRuleContext {
	public typedExpr(): TypedExprContext | undefined {
		return this.tryGetRuleContext(0, TypedExprContext);
	}
	public typedExprs(): TypedExprsContext | undefined {
		return this.tryGetRuleContext(0, TypedExprsContext);
	}
	public expr(): ExprContext | undefined {
		return this.tryGetRuleContext(0, ExprContext);
	}
	public exprs(): ExprsContext | undefined {
		return this.tryGetRuleContext(0, ExprsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ErlangParser.RULE_typedExprs; }
	// @Override
	public enterRule(listener: ErlangListener): void {
		if (listener.enterTypedExprs) {
			listener.enterTypedExprs(this);
		}
	}
	// @Override
	public exitRule(listener: ErlangListener): void {
		if (listener.exitTypedExprs) {
			listener.exitTypedExprs(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ErlangVisitor<Result>): Result {
		if (visitor.visitTypedExprs) {
			return visitor.visitTypedExprs(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypedExprContext extends ParserRuleContext {
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	public topType(): TopTypeContext {
		return this.getRuleContext(0, TopTypeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ErlangParser.RULE_typedExpr; }
	// @Override
	public enterRule(listener: ErlangListener): void {
		if (listener.enterTypedExpr) {
			listener.enterTypedExpr(this);
		}
	}
	// @Override
	public exitRule(listener: ErlangListener): void {
		if (listener.exitTypedExpr) {
			listener.exitTypedExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ErlangVisitor<Result>): Result {
		if (visitor.visitTypedExpr) {
			return visitor.visitTypedExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeSigsContext extends ParserRuleContext {
	public typeSig(): TypeSigContext[];
	public typeSig(i: number): TypeSigContext;
	public typeSig(i?: number): TypeSigContext | TypeSigContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TypeSigContext);
		} else {
			return this.getRuleContext(i, TypeSigContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ErlangParser.RULE_typeSigs; }
	// @Override
	public enterRule(listener: ErlangListener): void {
		if (listener.enterTypeSigs) {
			listener.enterTypeSigs(this);
		}
	}
	// @Override
	public exitRule(listener: ErlangListener): void {
		if (listener.exitTypeSigs) {
			listener.exitTypeSigs(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ErlangVisitor<Result>): Result {
		if (visitor.visitTypeSigs) {
			return visitor.visitTypeSigs(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeSigContext extends ParserRuleContext {
	public funType(): FunTypeContext {
		return this.getRuleContext(0, FunTypeContext);
	}
	public typeGuards(): TypeGuardsContext | undefined {
		return this.tryGetRuleContext(0, TypeGuardsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ErlangParser.RULE_typeSig; }
	// @Override
	public enterRule(listener: ErlangListener): void {
		if (listener.enterTypeSig) {
			listener.enterTypeSig(this);
		}
	}
	// @Override
	public exitRule(listener: ErlangListener): void {
		if (listener.exitTypeSig) {
			listener.exitTypeSig(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ErlangVisitor<Result>): Result {
		if (visitor.visitTypeSig) {
			return visitor.visitTypeSig(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeGuardsContext extends ParserRuleContext {
	public typeGuard(): TypeGuardContext[];
	public typeGuard(i: number): TypeGuardContext;
	public typeGuard(i?: number): TypeGuardContext | TypeGuardContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TypeGuardContext);
		} else {
			return this.getRuleContext(i, TypeGuardContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ErlangParser.RULE_typeGuards; }
	// @Override
	public enterRule(listener: ErlangListener): void {
		if (listener.enterTypeGuards) {
			listener.enterTypeGuards(this);
		}
	}
	// @Override
	public exitRule(listener: ErlangListener): void {
		if (listener.exitTypeGuards) {
			listener.exitTypeGuards(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ErlangVisitor<Result>): Result {
		if (visitor.visitTypeGuards) {
			return visitor.visitTypeGuards(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeGuardContext extends ParserRuleContext {
	public tokAtom(): TokAtomContext | undefined {
		return this.tryGetRuleContext(0, TokAtomContext);
	}
	public topTypes(): TopTypesContext | undefined {
		return this.tryGetRuleContext(0, TopTypesContext);
	}
	public tokVar(): TokVarContext | undefined {
		return this.tryGetRuleContext(0, TokVarContext);
	}
	public topType(): TopTypeContext | undefined {
		return this.tryGetRuleContext(0, TopTypeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ErlangParser.RULE_typeGuard; }
	// @Override
	public enterRule(listener: ErlangListener): void {
		if (listener.enterTypeGuard) {
			listener.enterTypeGuard(this);
		}
	}
	// @Override
	public exitRule(listener: ErlangListener): void {
		if (listener.exitTypeGuard) {
			listener.exitTypeGuard(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ErlangVisitor<Result>): Result {
		if (visitor.visitTypeGuard) {
			return visitor.visitTypeGuard(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TopTypesContext extends ParserRuleContext {
	public topType(): TopTypeContext[];
	public topType(i: number): TopTypeContext;
	public topType(i?: number): TopTypeContext | TopTypeContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TopTypeContext);
		} else {
			return this.getRuleContext(i, TopTypeContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ErlangParser.RULE_topTypes; }
	// @Override
	public enterRule(listener: ErlangListener): void {
		if (listener.enterTopTypes) {
			listener.enterTopTypes(this);
		}
	}
	// @Override
	public exitRule(listener: ErlangListener): void {
		if (listener.exitTopTypes) {
			listener.exitTopTypes(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ErlangVisitor<Result>): Result {
		if (visitor.visitTopTypes) {
			return visitor.visitTopTypes(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TopTypeContext extends ParserRuleContext {
	public topType100(): TopType100Context {
		return this.getRuleContext(0, TopType100Context);
	}
	public tokVar(): TokVarContext | undefined {
		return this.tryGetRuleContext(0, TokVarContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ErlangParser.RULE_topType; }
	// @Override
	public enterRule(listener: ErlangListener): void {
		if (listener.enterTopType) {
			listener.enterTopType(this);
		}
	}
	// @Override
	public exitRule(listener: ErlangListener): void {
		if (listener.exitTopType) {
			listener.exitTopType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ErlangVisitor<Result>): Result {
		if (visitor.visitTopType) {
			return visitor.visitTopType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TopType100Context extends ParserRuleContext {
	public type200(): Type200Context {
		return this.getRuleContext(0, Type200Context);
	}
	public topType100(): TopType100Context | undefined {
		return this.tryGetRuleContext(0, TopType100Context);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ErlangParser.RULE_topType100; }
	// @Override
	public enterRule(listener: ErlangListener): void {
		if (listener.enterTopType100) {
			listener.enterTopType100(this);
		}
	}
	// @Override
	public exitRule(listener: ErlangListener): void {
		if (listener.exitTopType100) {
			listener.exitTopType100(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ErlangVisitor<Result>): Result {
		if (visitor.visitTopType100) {
			return visitor.visitTopType100(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Type200Context extends ParserRuleContext {
	public type300(): Type300Context[];
	public type300(i: number): Type300Context;
	public type300(i?: number): Type300Context | Type300Context[] {
		if (i === undefined) {
			return this.getRuleContexts(Type300Context);
		} else {
			return this.getRuleContext(i, Type300Context);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ErlangParser.RULE_type200; }
	// @Override
	public enterRule(listener: ErlangListener): void {
		if (listener.enterType200) {
			listener.enterType200(this);
		}
	}
	// @Override
	public exitRule(listener: ErlangListener): void {
		if (listener.exitType200) {
			listener.exitType200(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ErlangVisitor<Result>): Result {
		if (visitor.visitType200) {
			return visitor.visitType200(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Type300Context extends ParserRuleContext {
	public type300(): Type300Context | undefined {
		return this.tryGetRuleContext(0, Type300Context);
	}
	public addOp(): AddOpContext | undefined {
		return this.tryGetRuleContext(0, AddOpContext);
	}
	public type400(): Type400Context {
		return this.getRuleContext(0, Type400Context);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ErlangParser.RULE_type300; }
	// @Override
	public enterRule(listener: ErlangListener): void {
		if (listener.enterType300) {
			listener.enterType300(this);
		}
	}
	// @Override
	public exitRule(listener: ErlangListener): void {
		if (listener.exitType300) {
			listener.exitType300(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ErlangVisitor<Result>): Result {
		if (visitor.visitType300) {
			return visitor.visitType300(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Type400Context extends ParserRuleContext {
	public type400(): Type400Context | undefined {
		return this.tryGetRuleContext(0, Type400Context);
	}
	public multOp(): MultOpContext | undefined {
		return this.tryGetRuleContext(0, MultOpContext);
	}
	public type500(): Type500Context {
		return this.getRuleContext(0, Type500Context);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ErlangParser.RULE_type400; }
	// @Override
	public enterRule(listener: ErlangListener): void {
		if (listener.enterType400) {
			listener.enterType400(this);
		}
	}
	// @Override
	public exitRule(listener: ErlangListener): void {
		if (listener.exitType400) {
			listener.exitType400(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ErlangVisitor<Result>): Result {
		if (visitor.visitType400) {
			return visitor.visitType400(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Type500Context extends ParserRuleContext {
	public type_(): Type_Context {
		return this.getRuleContext(0, Type_Context);
	}
	public prefixOp(): PrefixOpContext | undefined {
		return this.tryGetRuleContext(0, PrefixOpContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ErlangParser.RULE_type500; }
	// @Override
	public enterRule(listener: ErlangListener): void {
		if (listener.enterType500) {
			listener.enterType500(this);
		}
	}
	// @Override
	public exitRule(listener: ErlangListener): void {
		if (listener.exitType500) {
			listener.exitType500(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ErlangVisitor<Result>): Result {
		if (visitor.visitType500) {
			return visitor.visitType500(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Type_Context extends ParserRuleContext {
	public topType(): TopTypeContext | undefined {
		return this.tryGetRuleContext(0, TopTypeContext);
	}
	public tokVar(): TokVarContext | undefined {
		return this.tryGetRuleContext(0, TokVarContext);
	}
	public tokAtom(): TokAtomContext[];
	public tokAtom(i: number): TokAtomContext;
	public tokAtom(i?: number): TokAtomContext | TokAtomContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TokAtomContext);
		} else {
			return this.getRuleContext(i, TokAtomContext);
		}
	}
	public topTypes(): TopTypesContext | undefined {
		return this.tryGetRuleContext(0, TopTypesContext);
	}
	public mapPairTypes(): MapPairTypesContext | undefined {
		return this.tryGetRuleContext(0, MapPairTypesContext);
	}
	public fieldTypes(): FieldTypesContext | undefined {
		return this.tryGetRuleContext(0, FieldTypesContext);
	}
	public binaryType(): BinaryTypeContext | undefined {
		return this.tryGetRuleContext(0, BinaryTypeContext);
	}
	public tokInteger(): TokIntegerContext | undefined {
		return this.tryGetRuleContext(0, TokIntegerContext);
	}
	public tokChar(): TokCharContext | undefined {
		return this.tryGetRuleContext(0, TokCharContext);
	}
	public funType100(): FunType100Context | undefined {
		return this.tryGetRuleContext(0, FunType100Context);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ErlangParser.RULE_type_; }
	// @Override
	public enterRule(listener: ErlangListener): void {
		if (listener.enterType_) {
			listener.enterType_(this);
		}
	}
	// @Override
	public exitRule(listener: ErlangListener): void {
		if (listener.exitType_) {
			listener.exitType_(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ErlangVisitor<Result>): Result {
		if (visitor.visitType_) {
			return visitor.visitType_(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FunType100Context extends ParserRuleContext {
	public topType(): TopTypeContext | undefined {
		return this.tryGetRuleContext(0, TopTypeContext);
	}
	public funType(): FunTypeContext | undefined {
		return this.tryGetRuleContext(0, FunTypeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ErlangParser.RULE_funType100; }
	// @Override
	public enterRule(listener: ErlangListener): void {
		if (listener.enterFunType100) {
			listener.enterFunType100(this);
		}
	}
	// @Override
	public exitRule(listener: ErlangListener): void {
		if (listener.exitFunType100) {
			listener.exitFunType100(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ErlangVisitor<Result>): Result {
		if (visitor.visitFunType100) {
			return visitor.visitFunType100(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FunTypeContext extends ParserRuleContext {
	public topType(): TopTypeContext {
		return this.getRuleContext(0, TopTypeContext);
	}
	public topTypes(): TopTypesContext | undefined {
		return this.tryGetRuleContext(0, TopTypesContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ErlangParser.RULE_funType; }
	// @Override
	public enterRule(listener: ErlangListener): void {
		if (listener.enterFunType) {
			listener.enterFunType(this);
		}
	}
	// @Override
	public exitRule(listener: ErlangListener): void {
		if (listener.exitFunType) {
			listener.exitFunType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ErlangVisitor<Result>): Result {
		if (visitor.visitFunType) {
			return visitor.visitFunType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MapPairTypesContext extends ParserRuleContext {
	public mapPairType(): MapPairTypeContext[];
	public mapPairType(i: number): MapPairTypeContext;
	public mapPairType(i?: number): MapPairTypeContext | MapPairTypeContext[] {
		if (i === undefined) {
			return this.getRuleContexts(MapPairTypeContext);
		} else {
			return this.getRuleContext(i, MapPairTypeContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ErlangParser.RULE_mapPairTypes; }
	// @Override
	public enterRule(listener: ErlangListener): void {
		if (listener.enterMapPairTypes) {
			listener.enterMapPairTypes(this);
		}
	}
	// @Override
	public exitRule(listener: ErlangListener): void {
		if (listener.exitMapPairTypes) {
			listener.exitMapPairTypes(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ErlangVisitor<Result>): Result {
		if (visitor.visitMapPairTypes) {
			return visitor.visitMapPairTypes(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MapPairTypeContext extends ParserRuleContext {
	public topType(): TopTypeContext[];
	public topType(i: number): TopTypeContext;
	public topType(i?: number): TopTypeContext | TopTypeContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TopTypeContext);
		} else {
			return this.getRuleContext(i, TopTypeContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ErlangParser.RULE_mapPairType; }
	// @Override
	public enterRule(listener: ErlangListener): void {
		if (listener.enterMapPairType) {
			listener.enterMapPairType(this);
		}
	}
	// @Override
	public exitRule(listener: ErlangListener): void {
		if (listener.exitMapPairType) {
			listener.exitMapPairType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ErlangVisitor<Result>): Result {
		if (visitor.visitMapPairType) {
			return visitor.visitMapPairType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FieldTypesContext extends ParserRuleContext {
	public fieldType(): FieldTypeContext[];
	public fieldType(i: number): FieldTypeContext;
	public fieldType(i?: number): FieldTypeContext | FieldTypeContext[] {
		if (i === undefined) {
			return this.getRuleContexts(FieldTypeContext);
		} else {
			return this.getRuleContext(i, FieldTypeContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ErlangParser.RULE_fieldTypes; }
	// @Override
	public enterRule(listener: ErlangListener): void {
		if (listener.enterFieldTypes) {
			listener.enterFieldTypes(this);
		}
	}
	// @Override
	public exitRule(listener: ErlangListener): void {
		if (listener.exitFieldTypes) {
			listener.exitFieldTypes(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ErlangVisitor<Result>): Result {
		if (visitor.visitFieldTypes) {
			return visitor.visitFieldTypes(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FieldTypeContext extends ParserRuleContext {
	public tokAtom(): TokAtomContext {
		return this.getRuleContext(0, TokAtomContext);
	}
	public topType(): TopTypeContext {
		return this.getRuleContext(0, TopTypeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ErlangParser.RULE_fieldType; }
	// @Override
	public enterRule(listener: ErlangListener): void {
		if (listener.enterFieldType) {
			listener.enterFieldType(this);
		}
	}
	// @Override
	public exitRule(listener: ErlangListener): void {
		if (listener.exitFieldType) {
			listener.exitFieldType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ErlangVisitor<Result>): Result {
		if (visitor.visitFieldType) {
			return visitor.visitFieldType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BinaryTypeContext extends ParserRuleContext {
	public binBaseType(): BinBaseTypeContext | undefined {
		return this.tryGetRuleContext(0, BinBaseTypeContext);
	}
	public binUnitType(): BinUnitTypeContext | undefined {
		return this.tryGetRuleContext(0, BinUnitTypeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ErlangParser.RULE_binaryType; }
	// @Override
	public enterRule(listener: ErlangListener): void {
		if (listener.enterBinaryType) {
			listener.enterBinaryType(this);
		}
	}
	// @Override
	public exitRule(listener: ErlangListener): void {
		if (listener.exitBinaryType) {
			listener.exitBinaryType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ErlangVisitor<Result>): Result {
		if (visitor.visitBinaryType) {
			return visitor.visitBinaryType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BinBaseTypeContext extends ParserRuleContext {
	public tokVar(): TokVarContext {
		return this.getRuleContext(0, TokVarContext);
	}
	public type_(): Type_Context {
		return this.getRuleContext(0, Type_Context);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ErlangParser.RULE_binBaseType; }
	// @Override
	public enterRule(listener: ErlangListener): void {
		if (listener.enterBinBaseType) {
			listener.enterBinBaseType(this);
		}
	}
	// @Override
	public exitRule(listener: ErlangListener): void {
		if (listener.exitBinBaseType) {
			listener.exitBinBaseType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ErlangVisitor<Result>): Result {
		if (visitor.visitBinBaseType) {
			return visitor.visitBinBaseType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BinUnitTypeContext extends ParserRuleContext {
	public tokVar(): TokVarContext[];
	public tokVar(i: number): TokVarContext;
	public tokVar(i?: number): TokVarContext | TokVarContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TokVarContext);
		} else {
			return this.getRuleContext(i, TokVarContext);
		}
	}
	public type_(): Type_Context {
		return this.getRuleContext(0, Type_Context);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ErlangParser.RULE_binUnitType; }
	// @Override
	public enterRule(listener: ErlangListener): void {
		if (listener.enterBinUnitType) {
			listener.enterBinUnitType(this);
		}
	}
	// @Override
	public exitRule(listener: ErlangListener): void {
		if (listener.exitBinUnitType) {
			listener.exitBinUnitType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ErlangVisitor<Result>): Result {
		if (visitor.visitBinUnitType) {
			return visitor.visitBinUnitType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AttrValContext extends ParserRuleContext {
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	public exprs(): ExprsContext | undefined {
		return this.tryGetRuleContext(0, ExprsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ErlangParser.RULE_attrVal; }
	// @Override
	public enterRule(listener: ErlangListener): void {
		if (listener.enterAttrVal) {
			listener.enterAttrVal(this);
		}
	}
	// @Override
	public exitRule(listener: ErlangListener): void {
		if (listener.exitAttrVal) {
			listener.exitAttrVal(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ErlangVisitor<Result>): Result {
		if (visitor.visitAttrVal) {
			return visitor.visitAttrVal(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Function_Context extends ParserRuleContext {
	public functionClause(): FunctionClauseContext[];
	public functionClause(i: number): FunctionClauseContext;
	public functionClause(i?: number): FunctionClauseContext | FunctionClauseContext[] {
		if (i === undefined) {
			return this.getRuleContexts(FunctionClauseContext);
		} else {
			return this.getRuleContext(i, FunctionClauseContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ErlangParser.RULE_function_; }
	// @Override
	public enterRule(listener: ErlangListener): void {
		if (listener.enterFunction_) {
			listener.enterFunction_(this);
		}
	}
	// @Override
	public exitRule(listener: ErlangListener): void {
		if (listener.exitFunction_) {
			listener.exitFunction_(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ErlangVisitor<Result>): Result {
		if (visitor.visitFunction_) {
			return visitor.visitFunction_(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FunctionClauseContext extends ParserRuleContext {
	public tokAtom(): TokAtomContext {
		return this.getRuleContext(0, TokAtomContext);
	}
	public clauseArgs(): ClauseArgsContext {
		return this.getRuleContext(0, ClauseArgsContext);
	}
	public clauseGuard(): ClauseGuardContext {
		return this.getRuleContext(0, ClauseGuardContext);
	}
	public clauseBody(): ClauseBodyContext {
		return this.getRuleContext(0, ClauseBodyContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ErlangParser.RULE_functionClause; }
	// @Override
	public enterRule(listener: ErlangListener): void {
		if (listener.enterFunctionClause) {
			listener.enterFunctionClause(this);
		}
	}
	// @Override
	public exitRule(listener: ErlangListener): void {
		if (listener.exitFunctionClause) {
			listener.exitFunctionClause(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ErlangVisitor<Result>): Result {
		if (visitor.visitFunctionClause) {
			return visitor.visitFunctionClause(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ClauseArgsContext extends ParserRuleContext {
	public patArgumentList(): PatArgumentListContext {
		return this.getRuleContext(0, PatArgumentListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ErlangParser.RULE_clauseArgs; }
	// @Override
	public enterRule(listener: ErlangListener): void {
		if (listener.enterClauseArgs) {
			listener.enterClauseArgs(this);
		}
	}
	// @Override
	public exitRule(listener: ErlangListener): void {
		if (listener.exitClauseArgs) {
			listener.exitClauseArgs(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ErlangVisitor<Result>): Result {
		if (visitor.visitClauseArgs) {
			return visitor.visitClauseArgs(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ClauseGuardContext extends ParserRuleContext {
	public guard_(): Guard_Context | undefined {
		return this.tryGetRuleContext(0, Guard_Context);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ErlangParser.RULE_clauseGuard; }
	// @Override
	public enterRule(listener: ErlangListener): void {
		if (listener.enterClauseGuard) {
			listener.enterClauseGuard(this);
		}
	}
	// @Override
	public exitRule(listener: ErlangListener): void {
		if (listener.exitClauseGuard) {
			listener.exitClauseGuard(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ErlangVisitor<Result>): Result {
		if (visitor.visitClauseGuard) {
			return visitor.visitClauseGuard(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ClauseBodyContext extends ParserRuleContext {
	public exprs(): ExprsContext {
		return this.getRuleContext(0, ExprsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ErlangParser.RULE_clauseBody; }
	// @Override
	public enterRule(listener: ErlangListener): void {
		if (listener.enterClauseBody) {
			listener.enterClauseBody(this);
		}
	}
	// @Override
	public exitRule(listener: ErlangListener): void {
		if (listener.exitClauseBody) {
			listener.exitClauseBody(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ErlangVisitor<Result>): Result {
		if (visitor.visitClauseBody) {
			return visitor.visitClauseBody(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExprContext extends ParserRuleContext {
	public expr(): ExprContext | undefined {
		return this.tryGetRuleContext(0, ExprContext);
	}
	public expr100(): Expr100Context | undefined {
		return this.tryGetRuleContext(0, Expr100Context);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ErlangParser.RULE_expr; }
	// @Override
	public enterRule(listener: ErlangListener): void {
		if (listener.enterExpr) {
			listener.enterExpr(this);
		}
	}
	// @Override
	public exitRule(listener: ErlangListener): void {
		if (listener.exitExpr) {
			listener.exitExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ErlangVisitor<Result>): Result {
		if (visitor.visitExpr) {
			return visitor.visitExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Expr100Context extends ParserRuleContext {
	public expr150(): Expr150Context[];
	public expr150(i: number): Expr150Context;
	public expr150(i?: number): Expr150Context | Expr150Context[] {
		if (i === undefined) {
			return this.getRuleContexts(Expr150Context);
		} else {
			return this.getRuleContext(i, Expr150Context);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ErlangParser.RULE_expr100; }
	// @Override
	public enterRule(listener: ErlangListener): void {
		if (listener.enterExpr100) {
			listener.enterExpr100(this);
		}
	}
	// @Override
	public exitRule(listener: ErlangListener): void {
		if (listener.exitExpr100) {
			listener.exitExpr100(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ErlangVisitor<Result>): Result {
		if (visitor.visitExpr100) {
			return visitor.visitExpr100(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Expr150Context extends ParserRuleContext {
	public expr160(): Expr160Context[];
	public expr160(i: number): Expr160Context;
	public expr160(i?: number): Expr160Context | Expr160Context[] {
		if (i === undefined) {
			return this.getRuleContexts(Expr160Context);
		} else {
			return this.getRuleContext(i, Expr160Context);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ErlangParser.RULE_expr150; }
	// @Override
	public enterRule(listener: ErlangListener): void {
		if (listener.enterExpr150) {
			listener.enterExpr150(this);
		}
	}
	// @Override
	public exitRule(listener: ErlangListener): void {
		if (listener.exitExpr150) {
			listener.exitExpr150(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ErlangVisitor<Result>): Result {
		if (visitor.visitExpr150) {
			return visitor.visitExpr150(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Expr160Context extends ParserRuleContext {
	public expr200(): Expr200Context[];
	public expr200(i: number): Expr200Context;
	public expr200(i?: number): Expr200Context | Expr200Context[] {
		if (i === undefined) {
			return this.getRuleContexts(Expr200Context);
		} else {
			return this.getRuleContext(i, Expr200Context);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ErlangParser.RULE_expr160; }
	// @Override
	public enterRule(listener: ErlangListener): void {
		if (listener.enterExpr160) {
			listener.enterExpr160(this);
		}
	}
	// @Override
	public exitRule(listener: ErlangListener): void {
		if (listener.exitExpr160) {
			listener.exitExpr160(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ErlangVisitor<Result>): Result {
		if (visitor.visitExpr160) {
			return visitor.visitExpr160(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Expr200Context extends ParserRuleContext {
	public expr300(): Expr300Context[];
	public expr300(i: number): Expr300Context;
	public expr300(i?: number): Expr300Context | Expr300Context[] {
		if (i === undefined) {
			return this.getRuleContexts(Expr300Context);
		} else {
			return this.getRuleContext(i, Expr300Context);
		}
	}
	public compOp(): CompOpContext | undefined {
		return this.tryGetRuleContext(0, CompOpContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ErlangParser.RULE_expr200; }
	// @Override
	public enterRule(listener: ErlangListener): void {
		if (listener.enterExpr200) {
			listener.enterExpr200(this);
		}
	}
	// @Override
	public exitRule(listener: ErlangListener): void {
		if (listener.exitExpr200) {
			listener.exitExpr200(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ErlangVisitor<Result>): Result {
		if (visitor.visitExpr200) {
			return visitor.visitExpr200(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Expr300Context extends ParserRuleContext {
	public expr400(): Expr400Context[];
	public expr400(i: number): Expr400Context;
	public expr400(i?: number): Expr400Context | Expr400Context[] {
		if (i === undefined) {
			return this.getRuleContexts(Expr400Context);
		} else {
			return this.getRuleContext(i, Expr400Context);
		}
	}
	public listOp(): ListOpContext[];
	public listOp(i: number): ListOpContext;
	public listOp(i?: number): ListOpContext | ListOpContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ListOpContext);
		} else {
			return this.getRuleContext(i, ListOpContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ErlangParser.RULE_expr300; }
	// @Override
	public enterRule(listener: ErlangListener): void {
		if (listener.enterExpr300) {
			listener.enterExpr300(this);
		}
	}
	// @Override
	public exitRule(listener: ErlangListener): void {
		if (listener.exitExpr300) {
			listener.exitExpr300(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ErlangVisitor<Result>): Result {
		if (visitor.visitExpr300) {
			return visitor.visitExpr300(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Expr400Context extends ParserRuleContext {
	public expr500(): Expr500Context[];
	public expr500(i: number): Expr500Context;
	public expr500(i?: number): Expr500Context | Expr500Context[] {
		if (i === undefined) {
			return this.getRuleContexts(Expr500Context);
		} else {
			return this.getRuleContext(i, Expr500Context);
		}
	}
	public addOp(): AddOpContext[];
	public addOp(i: number): AddOpContext;
	public addOp(i?: number): AddOpContext | AddOpContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AddOpContext);
		} else {
			return this.getRuleContext(i, AddOpContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ErlangParser.RULE_expr400; }
	// @Override
	public enterRule(listener: ErlangListener): void {
		if (listener.enterExpr400) {
			listener.enterExpr400(this);
		}
	}
	// @Override
	public exitRule(listener: ErlangListener): void {
		if (listener.exitExpr400) {
			listener.exitExpr400(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ErlangVisitor<Result>): Result {
		if (visitor.visitExpr400) {
			return visitor.visitExpr400(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Expr500Context extends ParserRuleContext {
	public expr600(): Expr600Context[];
	public expr600(i: number): Expr600Context;
	public expr600(i?: number): Expr600Context | Expr600Context[] {
		if (i === undefined) {
			return this.getRuleContexts(Expr600Context);
		} else {
			return this.getRuleContext(i, Expr600Context);
		}
	}
	public multOp(): MultOpContext[];
	public multOp(i: number): MultOpContext;
	public multOp(i?: number): MultOpContext | MultOpContext[] {
		if (i === undefined) {
			return this.getRuleContexts(MultOpContext);
		} else {
			return this.getRuleContext(i, MultOpContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ErlangParser.RULE_expr500; }
	// @Override
	public enterRule(listener: ErlangListener): void {
		if (listener.enterExpr500) {
			listener.enterExpr500(this);
		}
	}
	// @Override
	public exitRule(listener: ErlangListener): void {
		if (listener.exitExpr500) {
			listener.exitExpr500(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ErlangVisitor<Result>): Result {
		if (visitor.visitExpr500) {
			return visitor.visitExpr500(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Expr600Context extends ParserRuleContext {
	public prefixOp(): PrefixOpContext | undefined {
		return this.tryGetRuleContext(0, PrefixOpContext);
	}
	public expr600(): Expr600Context | undefined {
		return this.tryGetRuleContext(0, Expr600Context);
	}
	public expr650(): Expr650Context | undefined {
		return this.tryGetRuleContext(0, Expr650Context);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ErlangParser.RULE_expr600; }
	// @Override
	public enterRule(listener: ErlangListener): void {
		if (listener.enterExpr600) {
			listener.enterExpr600(this);
		}
	}
	// @Override
	public exitRule(listener: ErlangListener): void {
		if (listener.exitExpr600) {
			listener.exitExpr600(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ErlangVisitor<Result>): Result {
		if (visitor.visitExpr600) {
			return visitor.visitExpr600(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Expr650Context extends ParserRuleContext {
	public mapExpr(): MapExprContext | undefined {
		return this.tryGetRuleContext(0, MapExprContext);
	}
	public expr700(): Expr700Context | undefined {
		return this.tryGetRuleContext(0, Expr700Context);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ErlangParser.RULE_expr650; }
	// @Override
	public enterRule(listener: ErlangListener): void {
		if (listener.enterExpr650) {
			listener.enterExpr650(this);
		}
	}
	// @Override
	public exitRule(listener: ErlangListener): void {
		if (listener.exitExpr650) {
			listener.exitExpr650(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ErlangVisitor<Result>): Result {
		if (visitor.visitExpr650) {
			return visitor.visitExpr650(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Expr700Context extends ParserRuleContext {
	public functionCall(): FunctionCallContext | undefined {
		return this.tryGetRuleContext(0, FunctionCallContext);
	}
	public recordExpr(): RecordExprContext | undefined {
		return this.tryGetRuleContext(0, RecordExprContext);
	}
	public expr800(): Expr800Context | undefined {
		return this.tryGetRuleContext(0, Expr800Context);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ErlangParser.RULE_expr700; }
	// @Override
	public enterRule(listener: ErlangListener): void {
		if (listener.enterExpr700) {
			listener.enterExpr700(this);
		}
	}
	// @Override
	public exitRule(listener: ErlangListener): void {
		if (listener.exitExpr700) {
			listener.exitExpr700(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ErlangVisitor<Result>): Result {
		if (visitor.visitExpr700) {
			return visitor.visitExpr700(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Expr800Context extends ParserRuleContext {
	public exprMax(): ExprMaxContext[];
	public exprMax(i: number): ExprMaxContext;
	public exprMax(i?: number): ExprMaxContext | ExprMaxContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprMaxContext);
		} else {
			return this.getRuleContext(i, ExprMaxContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ErlangParser.RULE_expr800; }
	// @Override
	public enterRule(listener: ErlangListener): void {
		if (listener.enterExpr800) {
			listener.enterExpr800(this);
		}
	}
	// @Override
	public exitRule(listener: ErlangListener): void {
		if (listener.exitExpr800) {
			listener.exitExpr800(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ErlangVisitor<Result>): Result {
		if (visitor.visitExpr800) {
			return visitor.visitExpr800(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExprMaxContext extends ParserRuleContext {
	public tokVar(): TokVarContext | undefined {
		return this.tryGetRuleContext(0, TokVarContext);
	}
	public atomic(): AtomicContext | undefined {
		return this.tryGetRuleContext(0, AtomicContext);
	}
	public list_(): List_Context | undefined {
		return this.tryGetRuleContext(0, List_Context);
	}
	public binary(): BinaryContext | undefined {
		return this.tryGetRuleContext(0, BinaryContext);
	}
	public listComprehension(): ListComprehensionContext | undefined {
		return this.tryGetRuleContext(0, ListComprehensionContext);
	}
	public binaryComprehension(): BinaryComprehensionContext | undefined {
		return this.tryGetRuleContext(0, BinaryComprehensionContext);
	}
	public tuple_(): Tuple_Context | undefined {
		return this.tryGetRuleContext(0, Tuple_Context);
	}
	public expr(): ExprContext | undefined {
		return this.tryGetRuleContext(0, ExprContext);
	}
	public exprs(): ExprsContext | undefined {
		return this.tryGetRuleContext(0, ExprsContext);
	}
	public ifExpr(): IfExprContext | undefined {
		return this.tryGetRuleContext(0, IfExprContext);
	}
	public caseExpr(): CaseExprContext | undefined {
		return this.tryGetRuleContext(0, CaseExprContext);
	}
	public receiveExpr(): ReceiveExprContext | undefined {
		return this.tryGetRuleContext(0, ReceiveExprContext);
	}
	public funExpr(): FunExprContext | undefined {
		return this.tryGetRuleContext(0, FunExprContext);
	}
	public tryExpr(): TryExprContext | undefined {
		return this.tryGetRuleContext(0, TryExprContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ErlangParser.RULE_exprMax; }
	// @Override
	public enterRule(listener: ErlangListener): void {
		if (listener.enterExprMax) {
			listener.enterExprMax(this);
		}
	}
	// @Override
	public exitRule(listener: ErlangListener): void {
		if (listener.exitExprMax) {
			listener.exitExprMax(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ErlangVisitor<Result>): Result {
		if (visitor.visitExprMax) {
			return visitor.visitExprMax(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PatExprContext extends ParserRuleContext {
	public patExpr200(): PatExpr200Context {
		return this.getRuleContext(0, PatExpr200Context);
	}
	public patExpr(): PatExprContext | undefined {
		return this.tryGetRuleContext(0, PatExprContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ErlangParser.RULE_patExpr; }
	// @Override
	public enterRule(listener: ErlangListener): void {
		if (listener.enterPatExpr) {
			listener.enterPatExpr(this);
		}
	}
	// @Override
	public exitRule(listener: ErlangListener): void {
		if (listener.exitPatExpr) {
			listener.exitPatExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ErlangVisitor<Result>): Result {
		if (visitor.visitPatExpr) {
			return visitor.visitPatExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PatExpr200Context extends ParserRuleContext {
	public patExpr300(): PatExpr300Context[];
	public patExpr300(i: number): PatExpr300Context;
	public patExpr300(i?: number): PatExpr300Context | PatExpr300Context[] {
		if (i === undefined) {
			return this.getRuleContexts(PatExpr300Context);
		} else {
			return this.getRuleContext(i, PatExpr300Context);
		}
	}
	public compOp(): CompOpContext | undefined {
		return this.tryGetRuleContext(0, CompOpContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ErlangParser.RULE_patExpr200; }
	// @Override
	public enterRule(listener: ErlangListener): void {
		if (listener.enterPatExpr200) {
			listener.enterPatExpr200(this);
		}
	}
	// @Override
	public exitRule(listener: ErlangListener): void {
		if (listener.exitPatExpr200) {
			listener.exitPatExpr200(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ErlangVisitor<Result>): Result {
		if (visitor.visitPatExpr200) {
			return visitor.visitPatExpr200(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PatExpr300Context extends ParserRuleContext {
	public patExpr400(): PatExpr400Context {
		return this.getRuleContext(0, PatExpr400Context);
	}
	public listOp(): ListOpContext | undefined {
		return this.tryGetRuleContext(0, ListOpContext);
	}
	public patExpr300(): PatExpr300Context | undefined {
		return this.tryGetRuleContext(0, PatExpr300Context);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ErlangParser.RULE_patExpr300; }
	// @Override
	public enterRule(listener: ErlangListener): void {
		if (listener.enterPatExpr300) {
			listener.enterPatExpr300(this);
		}
	}
	// @Override
	public exitRule(listener: ErlangListener): void {
		if (listener.exitPatExpr300) {
			listener.exitPatExpr300(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ErlangVisitor<Result>): Result {
		if (visitor.visitPatExpr300) {
			return visitor.visitPatExpr300(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PatExpr400Context extends ParserRuleContext {
	public patExpr400(): PatExpr400Context | undefined {
		return this.tryGetRuleContext(0, PatExpr400Context);
	}
	public addOp(): AddOpContext | undefined {
		return this.tryGetRuleContext(0, AddOpContext);
	}
	public patExpr500(): PatExpr500Context {
		return this.getRuleContext(0, PatExpr500Context);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ErlangParser.RULE_patExpr400; }
	// @Override
	public enterRule(listener: ErlangListener): void {
		if (listener.enterPatExpr400) {
			listener.enterPatExpr400(this);
		}
	}
	// @Override
	public exitRule(listener: ErlangListener): void {
		if (listener.exitPatExpr400) {
			listener.exitPatExpr400(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ErlangVisitor<Result>): Result {
		if (visitor.visitPatExpr400) {
			return visitor.visitPatExpr400(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PatExpr500Context extends ParserRuleContext {
	public patExpr500(): PatExpr500Context | undefined {
		return this.tryGetRuleContext(0, PatExpr500Context);
	}
	public multOp(): MultOpContext | undefined {
		return this.tryGetRuleContext(0, MultOpContext);
	}
	public patExpr600(): PatExpr600Context {
		return this.getRuleContext(0, PatExpr600Context);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ErlangParser.RULE_patExpr500; }
	// @Override
	public enterRule(listener: ErlangListener): void {
		if (listener.enterPatExpr500) {
			listener.enterPatExpr500(this);
		}
	}
	// @Override
	public exitRule(listener: ErlangListener): void {
		if (listener.exitPatExpr500) {
			listener.exitPatExpr500(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ErlangVisitor<Result>): Result {
		if (visitor.visitPatExpr500) {
			return visitor.visitPatExpr500(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PatExpr600Context extends ParserRuleContext {
	public prefixOp(): PrefixOpContext | undefined {
		return this.tryGetRuleContext(0, PrefixOpContext);
	}
	public patExpr600(): PatExpr600Context | undefined {
		return this.tryGetRuleContext(0, PatExpr600Context);
	}
	public patExpr650(): PatExpr650Context | undefined {
		return this.tryGetRuleContext(0, PatExpr650Context);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ErlangParser.RULE_patExpr600; }
	// @Override
	public enterRule(listener: ErlangListener): void {
		if (listener.enterPatExpr600) {
			listener.enterPatExpr600(this);
		}
	}
	// @Override
	public exitRule(listener: ErlangListener): void {
		if (listener.exitPatExpr600) {
			listener.exitPatExpr600(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ErlangVisitor<Result>): Result {
		if (visitor.visitPatExpr600) {
			return visitor.visitPatExpr600(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PatExpr650Context extends ParserRuleContext {
	public mapPatExpr(): MapPatExprContext | undefined {
		return this.tryGetRuleContext(0, MapPatExprContext);
	}
	public patExpr700(): PatExpr700Context | undefined {
		return this.tryGetRuleContext(0, PatExpr700Context);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ErlangParser.RULE_patExpr650; }
	// @Override
	public enterRule(listener: ErlangListener): void {
		if (listener.enterPatExpr650) {
			listener.enterPatExpr650(this);
		}
	}
	// @Override
	public exitRule(listener: ErlangListener): void {
		if (listener.exitPatExpr650) {
			listener.exitPatExpr650(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ErlangVisitor<Result>): Result {
		if (visitor.visitPatExpr650) {
			return visitor.visitPatExpr650(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PatExpr700Context extends ParserRuleContext {
	public recordPatExpr(): RecordPatExprContext | undefined {
		return this.tryGetRuleContext(0, RecordPatExprContext);
	}
	public patExpr800(): PatExpr800Context | undefined {
		return this.tryGetRuleContext(0, PatExpr800Context);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ErlangParser.RULE_patExpr700; }
	// @Override
	public enterRule(listener: ErlangListener): void {
		if (listener.enterPatExpr700) {
			listener.enterPatExpr700(this);
		}
	}
	// @Override
	public exitRule(listener: ErlangListener): void {
		if (listener.exitPatExpr700) {
			listener.exitPatExpr700(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ErlangVisitor<Result>): Result {
		if (visitor.visitPatExpr700) {
			return visitor.visitPatExpr700(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PatExpr800Context extends ParserRuleContext {
	public patExprMax(): PatExprMaxContext {
		return this.getRuleContext(0, PatExprMaxContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ErlangParser.RULE_patExpr800; }
	// @Override
	public enterRule(listener: ErlangListener): void {
		if (listener.enterPatExpr800) {
			listener.enterPatExpr800(this);
		}
	}
	// @Override
	public exitRule(listener: ErlangListener): void {
		if (listener.exitPatExpr800) {
			listener.exitPatExpr800(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ErlangVisitor<Result>): Result {
		if (visitor.visitPatExpr800) {
			return visitor.visitPatExpr800(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PatExprMaxContext extends ParserRuleContext {
	public tokVar(): TokVarContext | undefined {
		return this.tryGetRuleContext(0, TokVarContext);
	}
	public atomic(): AtomicContext | undefined {
		return this.tryGetRuleContext(0, AtomicContext);
	}
	public list_(): List_Context | undefined {
		return this.tryGetRuleContext(0, List_Context);
	}
	public binary(): BinaryContext | undefined {
		return this.tryGetRuleContext(0, BinaryContext);
	}
	public tuple_(): Tuple_Context | undefined {
		return this.tryGetRuleContext(0, Tuple_Context);
	}
	public patExpr(): PatExprContext | undefined {
		return this.tryGetRuleContext(0, PatExprContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ErlangParser.RULE_patExprMax; }
	// @Override
	public enterRule(listener: ErlangListener): void {
		if (listener.enterPatExprMax) {
			listener.enterPatExprMax(this);
		}
	}
	// @Override
	public exitRule(listener: ErlangListener): void {
		if (listener.exitPatExprMax) {
			listener.exitPatExprMax(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ErlangVisitor<Result>): Result {
		if (visitor.visitPatExprMax) {
			return visitor.visitPatExprMax(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MapPatExprContext extends ParserRuleContext {
	public mapTuple(): MapTupleContext {
		return this.getRuleContext(0, MapTupleContext);
	}
	public patExprMax(): PatExprMaxContext | undefined {
		return this.tryGetRuleContext(0, PatExprMaxContext);
	}
	public mapPatExpr(): MapPatExprContext | undefined {
		return this.tryGetRuleContext(0, MapPatExprContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ErlangParser.RULE_mapPatExpr; }
	// @Override
	public enterRule(listener: ErlangListener): void {
		if (listener.enterMapPatExpr) {
			listener.enterMapPatExpr(this);
		}
	}
	// @Override
	public exitRule(listener: ErlangListener): void {
		if (listener.exitMapPatExpr) {
			listener.exitMapPatExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ErlangVisitor<Result>): Result {
		if (visitor.visitMapPatExpr) {
			return visitor.visitMapPatExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class RecordPatExprContext extends ParserRuleContext {
	public tokAtom(): TokAtomContext[];
	public tokAtom(i: number): TokAtomContext;
	public tokAtom(i?: number): TokAtomContext | TokAtomContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TokAtomContext);
		} else {
			return this.getRuleContext(i, TokAtomContext);
		}
	}
	public recordTuple(): RecordTupleContext | undefined {
		return this.tryGetRuleContext(0, RecordTupleContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ErlangParser.RULE_recordPatExpr; }
	// @Override
	public enterRule(listener: ErlangListener): void {
		if (listener.enterRecordPatExpr) {
			listener.enterRecordPatExpr(this);
		}
	}
	// @Override
	public exitRule(listener: ErlangListener): void {
		if (listener.exitRecordPatExpr) {
			listener.exitRecordPatExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ErlangVisitor<Result>): Result {
		if (visitor.visitRecordPatExpr) {
			return visitor.visitRecordPatExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class List_Context extends ParserRuleContext {
	public expr(): ExprContext | undefined {
		return this.tryGetRuleContext(0, ExprContext);
	}
	public tail(): TailContext | undefined {
		return this.tryGetRuleContext(0, TailContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ErlangParser.RULE_list_; }
	// @Override
	public enterRule(listener: ErlangListener): void {
		if (listener.enterList_) {
			listener.enterList_(this);
		}
	}
	// @Override
	public exitRule(listener: ErlangListener): void {
		if (listener.exitList_) {
			listener.exitList_(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ErlangVisitor<Result>): Result {
		if (visitor.visitList_) {
			return visitor.visitList_(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TailContext extends ParserRuleContext {
	public expr(): ExprContext | undefined {
		return this.tryGetRuleContext(0, ExprContext);
	}
	public tail(): TailContext | undefined {
		return this.tryGetRuleContext(0, TailContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ErlangParser.RULE_tail; }
	// @Override
	public enterRule(listener: ErlangListener): void {
		if (listener.enterTail) {
			listener.enterTail(this);
		}
	}
	// @Override
	public exitRule(listener: ErlangListener): void {
		if (listener.exitTail) {
			listener.exitTail(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ErlangVisitor<Result>): Result {
		if (visitor.visitTail) {
			return visitor.visitTail(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BinaryContext extends ParserRuleContext {
	public binElements(): BinElementsContext | undefined {
		return this.tryGetRuleContext(0, BinElementsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ErlangParser.RULE_binary; }
	// @Override
	public enterRule(listener: ErlangListener): void {
		if (listener.enterBinary) {
			listener.enterBinary(this);
		}
	}
	// @Override
	public exitRule(listener: ErlangListener): void {
		if (listener.exitBinary) {
			listener.exitBinary(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ErlangVisitor<Result>): Result {
		if (visitor.visitBinary) {
			return visitor.visitBinary(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BinElementsContext extends ParserRuleContext {
	public binElement(): BinElementContext[];
	public binElement(i: number): BinElementContext;
	public binElement(i?: number): BinElementContext | BinElementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(BinElementContext);
		} else {
			return this.getRuleContext(i, BinElementContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ErlangParser.RULE_binElements; }
	// @Override
	public enterRule(listener: ErlangListener): void {
		if (listener.enterBinElements) {
			listener.enterBinElements(this);
		}
	}
	// @Override
	public exitRule(listener: ErlangListener): void {
		if (listener.exitBinElements) {
			listener.exitBinElements(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ErlangVisitor<Result>): Result {
		if (visitor.visitBinElements) {
			return visitor.visitBinElements(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BinElementContext extends ParserRuleContext {
	public bitExpr(): BitExprContext {
		return this.getRuleContext(0, BitExprContext);
	}
	public optBitSizeExpr(): OptBitSizeExprContext {
		return this.getRuleContext(0, OptBitSizeExprContext);
	}
	public optBitTypeList(): OptBitTypeListContext {
		return this.getRuleContext(0, OptBitTypeListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ErlangParser.RULE_binElement; }
	// @Override
	public enterRule(listener: ErlangListener): void {
		if (listener.enterBinElement) {
			listener.enterBinElement(this);
		}
	}
	// @Override
	public exitRule(listener: ErlangListener): void {
		if (listener.exitBinElement) {
			listener.exitBinElement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ErlangVisitor<Result>): Result {
		if (visitor.visitBinElement) {
			return visitor.visitBinElement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BitExprContext extends ParserRuleContext {
	public exprMax(): ExprMaxContext {
		return this.getRuleContext(0, ExprMaxContext);
	}
	public prefixOp(): PrefixOpContext | undefined {
		return this.tryGetRuleContext(0, PrefixOpContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ErlangParser.RULE_bitExpr; }
	// @Override
	public enterRule(listener: ErlangListener): void {
		if (listener.enterBitExpr) {
			listener.enterBitExpr(this);
		}
	}
	// @Override
	public exitRule(listener: ErlangListener): void {
		if (listener.exitBitExpr) {
			listener.exitBitExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ErlangVisitor<Result>): Result {
		if (visitor.visitBitExpr) {
			return visitor.visitBitExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OptBitSizeExprContext extends ParserRuleContext {
	public bitSizeExpr(): BitSizeExprContext | undefined {
		return this.tryGetRuleContext(0, BitSizeExprContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ErlangParser.RULE_optBitSizeExpr; }
	// @Override
	public enterRule(listener: ErlangListener): void {
		if (listener.enterOptBitSizeExpr) {
			listener.enterOptBitSizeExpr(this);
		}
	}
	// @Override
	public exitRule(listener: ErlangListener): void {
		if (listener.exitOptBitSizeExpr) {
			listener.exitOptBitSizeExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ErlangVisitor<Result>): Result {
		if (visitor.visitOptBitSizeExpr) {
			return visitor.visitOptBitSizeExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OptBitTypeListContext extends ParserRuleContext {
	public bitTypeList(): BitTypeListContext | undefined {
		return this.tryGetRuleContext(0, BitTypeListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ErlangParser.RULE_optBitTypeList; }
	// @Override
	public enterRule(listener: ErlangListener): void {
		if (listener.enterOptBitTypeList) {
			listener.enterOptBitTypeList(this);
		}
	}
	// @Override
	public exitRule(listener: ErlangListener): void {
		if (listener.exitOptBitTypeList) {
			listener.exitOptBitTypeList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ErlangVisitor<Result>): Result {
		if (visitor.visitOptBitTypeList) {
			return visitor.visitOptBitTypeList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BitTypeListContext extends ParserRuleContext {
	public bitType(): BitTypeContext[];
	public bitType(i: number): BitTypeContext;
	public bitType(i?: number): BitTypeContext | BitTypeContext[] {
		if (i === undefined) {
			return this.getRuleContexts(BitTypeContext);
		} else {
			return this.getRuleContext(i, BitTypeContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ErlangParser.RULE_bitTypeList; }
	// @Override
	public enterRule(listener: ErlangListener): void {
		if (listener.enterBitTypeList) {
			listener.enterBitTypeList(this);
		}
	}
	// @Override
	public exitRule(listener: ErlangListener): void {
		if (listener.exitBitTypeList) {
			listener.exitBitTypeList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ErlangVisitor<Result>): Result {
		if (visitor.visitBitTypeList) {
			return visitor.visitBitTypeList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BitTypeContext extends ParserRuleContext {
	public tokAtom(): TokAtomContext {
		return this.getRuleContext(0, TokAtomContext);
	}
	public tokInteger(): TokIntegerContext | undefined {
		return this.tryGetRuleContext(0, TokIntegerContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ErlangParser.RULE_bitType; }
	// @Override
	public enterRule(listener: ErlangListener): void {
		if (listener.enterBitType) {
			listener.enterBitType(this);
		}
	}
	// @Override
	public exitRule(listener: ErlangListener): void {
		if (listener.exitBitType) {
			listener.exitBitType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ErlangVisitor<Result>): Result {
		if (visitor.visitBitType) {
			return visitor.visitBitType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BitSizeExprContext extends ParserRuleContext {
	public exprMax(): ExprMaxContext {
		return this.getRuleContext(0, ExprMaxContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ErlangParser.RULE_bitSizeExpr; }
	// @Override
	public enterRule(listener: ErlangListener): void {
		if (listener.enterBitSizeExpr) {
			listener.enterBitSizeExpr(this);
		}
	}
	// @Override
	public exitRule(listener: ErlangListener): void {
		if (listener.exitBitSizeExpr) {
			listener.exitBitSizeExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ErlangVisitor<Result>): Result {
		if (visitor.visitBitSizeExpr) {
			return visitor.visitBitSizeExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ListComprehensionContext extends ParserRuleContext {
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	public lcExprs(): LcExprsContext {
		return this.getRuleContext(0, LcExprsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ErlangParser.RULE_listComprehension; }
	// @Override
	public enterRule(listener: ErlangListener): void {
		if (listener.enterListComprehension) {
			listener.enterListComprehension(this);
		}
	}
	// @Override
	public exitRule(listener: ErlangListener): void {
		if (listener.exitListComprehension) {
			listener.exitListComprehension(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ErlangVisitor<Result>): Result {
		if (visitor.visitListComprehension) {
			return visitor.visitListComprehension(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BinaryComprehensionContext extends ParserRuleContext {
	public exprMax(): ExprMaxContext {
		return this.getRuleContext(0, ExprMaxContext);
	}
	public lcExprs(): LcExprsContext {
		return this.getRuleContext(0, LcExprsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ErlangParser.RULE_binaryComprehension; }
	// @Override
	public enterRule(listener: ErlangListener): void {
		if (listener.enterBinaryComprehension) {
			listener.enterBinaryComprehension(this);
		}
	}
	// @Override
	public exitRule(listener: ErlangListener): void {
		if (listener.exitBinaryComprehension) {
			listener.exitBinaryComprehension(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ErlangVisitor<Result>): Result {
		if (visitor.visitBinaryComprehension) {
			return visitor.visitBinaryComprehension(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LcExprsContext extends ParserRuleContext {
	public lcExpr(): LcExprContext[];
	public lcExpr(i: number): LcExprContext;
	public lcExpr(i?: number): LcExprContext | LcExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(LcExprContext);
		} else {
			return this.getRuleContext(i, LcExprContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ErlangParser.RULE_lcExprs; }
	// @Override
	public enterRule(listener: ErlangListener): void {
		if (listener.enterLcExprs) {
			listener.enterLcExprs(this);
		}
	}
	// @Override
	public exitRule(listener: ErlangListener): void {
		if (listener.exitLcExprs) {
			listener.exitLcExprs(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ErlangVisitor<Result>): Result {
		if (visitor.visitLcExprs) {
			return visitor.visitLcExprs(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LcExprContext extends ParserRuleContext {
	public expr(): ExprContext[];
	public expr(i: number): ExprContext;
	public expr(i?: number): ExprContext | ExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprContext);
		} else {
			return this.getRuleContext(i, ExprContext);
		}
	}
	public binary(): BinaryContext | undefined {
		return this.tryGetRuleContext(0, BinaryContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ErlangParser.RULE_lcExpr; }
	// @Override
	public enterRule(listener: ErlangListener): void {
		if (listener.enterLcExpr) {
			listener.enterLcExpr(this);
		}
	}
	// @Override
	public exitRule(listener: ErlangListener): void {
		if (listener.exitLcExpr) {
			listener.exitLcExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ErlangVisitor<Result>): Result {
		if (visitor.visitLcExpr) {
			return visitor.visitLcExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Tuple_Context extends ParserRuleContext {
	public exprs(): ExprsContext | undefined {
		return this.tryGetRuleContext(0, ExprsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ErlangParser.RULE_tuple_; }
	// @Override
	public enterRule(listener: ErlangListener): void {
		if (listener.enterTuple_) {
			listener.enterTuple_(this);
		}
	}
	// @Override
	public exitRule(listener: ErlangListener): void {
		if (listener.exitTuple_) {
			listener.exitTuple_(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ErlangVisitor<Result>): Result {
		if (visitor.visitTuple_) {
			return visitor.visitTuple_(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MapExprContext extends ParserRuleContext {
	public mapTuple(): MapTupleContext {
		return this.getRuleContext(0, MapTupleContext);
	}
	public exprMax(): ExprMaxContext | undefined {
		return this.tryGetRuleContext(0, ExprMaxContext);
	}
	public mapExpr(): MapExprContext | undefined {
		return this.tryGetRuleContext(0, MapExprContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ErlangParser.RULE_mapExpr; }
	// @Override
	public enterRule(listener: ErlangListener): void {
		if (listener.enterMapExpr) {
			listener.enterMapExpr(this);
		}
	}
	// @Override
	public exitRule(listener: ErlangListener): void {
		if (listener.exitMapExpr) {
			listener.exitMapExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ErlangVisitor<Result>): Result {
		if (visitor.visitMapExpr) {
			return visitor.visitMapExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MapTupleContext extends ParserRuleContext {
	public mapField(): MapFieldContext[];
	public mapField(i: number): MapFieldContext;
	public mapField(i?: number): MapFieldContext | MapFieldContext[] {
		if (i === undefined) {
			return this.getRuleContexts(MapFieldContext);
		} else {
			return this.getRuleContext(i, MapFieldContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ErlangParser.RULE_mapTuple; }
	// @Override
	public enterRule(listener: ErlangListener): void {
		if (listener.enterMapTuple) {
			listener.enterMapTuple(this);
		}
	}
	// @Override
	public exitRule(listener: ErlangListener): void {
		if (listener.exitMapTuple) {
			listener.exitMapTuple(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ErlangVisitor<Result>): Result {
		if (visitor.visitMapTuple) {
			return visitor.visitMapTuple(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MapFieldContext extends ParserRuleContext {
	public mapFieldAssoc(): MapFieldAssocContext | undefined {
		return this.tryGetRuleContext(0, MapFieldAssocContext);
	}
	public mapFieldExact(): MapFieldExactContext | undefined {
		return this.tryGetRuleContext(0, MapFieldExactContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ErlangParser.RULE_mapField; }
	// @Override
	public enterRule(listener: ErlangListener): void {
		if (listener.enterMapField) {
			listener.enterMapField(this);
		}
	}
	// @Override
	public exitRule(listener: ErlangListener): void {
		if (listener.exitMapField) {
			listener.exitMapField(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ErlangVisitor<Result>): Result {
		if (visitor.visitMapField) {
			return visitor.visitMapField(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MapFieldAssocContext extends ParserRuleContext {
	public mapKey(): MapKeyContext {
		return this.getRuleContext(0, MapKeyContext);
	}
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ErlangParser.RULE_mapFieldAssoc; }
	// @Override
	public enterRule(listener: ErlangListener): void {
		if (listener.enterMapFieldAssoc) {
			listener.enterMapFieldAssoc(this);
		}
	}
	// @Override
	public exitRule(listener: ErlangListener): void {
		if (listener.exitMapFieldAssoc) {
			listener.exitMapFieldAssoc(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ErlangVisitor<Result>): Result {
		if (visitor.visitMapFieldAssoc) {
			return visitor.visitMapFieldAssoc(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MapFieldExactContext extends ParserRuleContext {
	public mapKey(): MapKeyContext {
		return this.getRuleContext(0, MapKeyContext);
	}
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ErlangParser.RULE_mapFieldExact; }
	// @Override
	public enterRule(listener: ErlangListener): void {
		if (listener.enterMapFieldExact) {
			listener.enterMapFieldExact(this);
		}
	}
	// @Override
	public exitRule(listener: ErlangListener): void {
		if (listener.exitMapFieldExact) {
			listener.exitMapFieldExact(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ErlangVisitor<Result>): Result {
		if (visitor.visitMapFieldExact) {
			return visitor.visitMapFieldExact(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MapKeyContext extends ParserRuleContext {
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ErlangParser.RULE_mapKey; }
	// @Override
	public enterRule(listener: ErlangListener): void {
		if (listener.enterMapKey) {
			listener.enterMapKey(this);
		}
	}
	// @Override
	public exitRule(listener: ErlangListener): void {
		if (listener.exitMapKey) {
			listener.exitMapKey(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ErlangVisitor<Result>): Result {
		if (visitor.visitMapKey) {
			return visitor.visitMapKey(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class RecordExprContext extends ParserRuleContext {
	public tokAtom(): TokAtomContext[];
	public tokAtom(i: number): TokAtomContext;
	public tokAtom(i?: number): TokAtomContext | TokAtomContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TokAtomContext);
		} else {
			return this.getRuleContext(i, TokAtomContext);
		}
	}
	public recordTuple(): RecordTupleContext | undefined {
		return this.tryGetRuleContext(0, RecordTupleContext);
	}
	public exprMax(): ExprMaxContext | undefined {
		return this.tryGetRuleContext(0, ExprMaxContext);
	}
	public recordExpr(): RecordExprContext | undefined {
		return this.tryGetRuleContext(0, RecordExprContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ErlangParser.RULE_recordExpr; }
	// @Override
	public enterRule(listener: ErlangListener): void {
		if (listener.enterRecordExpr) {
			listener.enterRecordExpr(this);
		}
	}
	// @Override
	public exitRule(listener: ErlangListener): void {
		if (listener.exitRecordExpr) {
			listener.exitRecordExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ErlangVisitor<Result>): Result {
		if (visitor.visitRecordExpr) {
			return visitor.visitRecordExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class RecordTupleContext extends ParserRuleContext {
	public recordFields(): RecordFieldsContext | undefined {
		return this.tryGetRuleContext(0, RecordFieldsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ErlangParser.RULE_recordTuple; }
	// @Override
	public enterRule(listener: ErlangListener): void {
		if (listener.enterRecordTuple) {
			listener.enterRecordTuple(this);
		}
	}
	// @Override
	public exitRule(listener: ErlangListener): void {
		if (listener.exitRecordTuple) {
			listener.exitRecordTuple(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ErlangVisitor<Result>): Result {
		if (visitor.visitRecordTuple) {
			return visitor.visitRecordTuple(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class RecordFieldsContext extends ParserRuleContext {
	public recordField(): RecordFieldContext[];
	public recordField(i: number): RecordFieldContext;
	public recordField(i?: number): RecordFieldContext | RecordFieldContext[] {
		if (i === undefined) {
			return this.getRuleContexts(RecordFieldContext);
		} else {
			return this.getRuleContext(i, RecordFieldContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ErlangParser.RULE_recordFields; }
	// @Override
	public enterRule(listener: ErlangListener): void {
		if (listener.enterRecordFields) {
			listener.enterRecordFields(this);
		}
	}
	// @Override
	public exitRule(listener: ErlangListener): void {
		if (listener.exitRecordFields) {
			listener.exitRecordFields(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ErlangVisitor<Result>): Result {
		if (visitor.visitRecordFields) {
			return visitor.visitRecordFields(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class RecordFieldContext extends ParserRuleContext {
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	public tokVar(): TokVarContext | undefined {
		return this.tryGetRuleContext(0, TokVarContext);
	}
	public tokAtom(): TokAtomContext | undefined {
		return this.tryGetRuleContext(0, TokAtomContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ErlangParser.RULE_recordField; }
	// @Override
	public enterRule(listener: ErlangListener): void {
		if (listener.enterRecordField) {
			listener.enterRecordField(this);
		}
	}
	// @Override
	public exitRule(listener: ErlangListener): void {
		if (listener.exitRecordField) {
			listener.exitRecordField(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ErlangVisitor<Result>): Result {
		if (visitor.visitRecordField) {
			return visitor.visitRecordField(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FunctionCallContext extends ParserRuleContext {
	public expr800(): Expr800Context {
		return this.getRuleContext(0, Expr800Context);
	}
	public argumentList(): ArgumentListContext {
		return this.getRuleContext(0, ArgumentListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ErlangParser.RULE_functionCall; }
	// @Override
	public enterRule(listener: ErlangListener): void {
		if (listener.enterFunctionCall) {
			listener.enterFunctionCall(this);
		}
	}
	// @Override
	public exitRule(listener: ErlangListener): void {
		if (listener.exitFunctionCall) {
			listener.exitFunctionCall(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ErlangVisitor<Result>): Result {
		if (visitor.visitFunctionCall) {
			return visitor.visitFunctionCall(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IfExprContext extends ParserRuleContext {
	public ifClauses(): IfClausesContext {
		return this.getRuleContext(0, IfClausesContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ErlangParser.RULE_ifExpr; }
	// @Override
	public enterRule(listener: ErlangListener): void {
		if (listener.enterIfExpr) {
			listener.enterIfExpr(this);
		}
	}
	// @Override
	public exitRule(listener: ErlangListener): void {
		if (listener.exitIfExpr) {
			listener.exitIfExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ErlangVisitor<Result>): Result {
		if (visitor.visitIfExpr) {
			return visitor.visitIfExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IfClausesContext extends ParserRuleContext {
	public ifClause(): IfClauseContext[];
	public ifClause(i: number): IfClauseContext;
	public ifClause(i?: number): IfClauseContext | IfClauseContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IfClauseContext);
		} else {
			return this.getRuleContext(i, IfClauseContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ErlangParser.RULE_ifClauses; }
	// @Override
	public enterRule(listener: ErlangListener): void {
		if (listener.enterIfClauses) {
			listener.enterIfClauses(this);
		}
	}
	// @Override
	public exitRule(listener: ErlangListener): void {
		if (listener.exitIfClauses) {
			listener.exitIfClauses(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ErlangVisitor<Result>): Result {
		if (visitor.visitIfClauses) {
			return visitor.visitIfClauses(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IfClauseContext extends ParserRuleContext {
	public guard_(): Guard_Context {
		return this.getRuleContext(0, Guard_Context);
	}
	public clauseBody(): ClauseBodyContext {
		return this.getRuleContext(0, ClauseBodyContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ErlangParser.RULE_ifClause; }
	// @Override
	public enterRule(listener: ErlangListener): void {
		if (listener.enterIfClause) {
			listener.enterIfClause(this);
		}
	}
	// @Override
	public exitRule(listener: ErlangListener): void {
		if (listener.exitIfClause) {
			listener.exitIfClause(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ErlangVisitor<Result>): Result {
		if (visitor.visitIfClause) {
			return visitor.visitIfClause(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CaseExprContext extends ParserRuleContext {
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	public crClauses(): CrClausesContext {
		return this.getRuleContext(0, CrClausesContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ErlangParser.RULE_caseExpr; }
	// @Override
	public enterRule(listener: ErlangListener): void {
		if (listener.enterCaseExpr) {
			listener.enterCaseExpr(this);
		}
	}
	// @Override
	public exitRule(listener: ErlangListener): void {
		if (listener.exitCaseExpr) {
			listener.exitCaseExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ErlangVisitor<Result>): Result {
		if (visitor.visitCaseExpr) {
			return visitor.visitCaseExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CrClausesContext extends ParserRuleContext {
	public crClause(): CrClauseContext[];
	public crClause(i: number): CrClauseContext;
	public crClause(i?: number): CrClauseContext | CrClauseContext[] {
		if (i === undefined) {
			return this.getRuleContexts(CrClauseContext);
		} else {
			return this.getRuleContext(i, CrClauseContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ErlangParser.RULE_crClauses; }
	// @Override
	public enterRule(listener: ErlangListener): void {
		if (listener.enterCrClauses) {
			listener.enterCrClauses(this);
		}
	}
	// @Override
	public exitRule(listener: ErlangListener): void {
		if (listener.exitCrClauses) {
			listener.exitCrClauses(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ErlangVisitor<Result>): Result {
		if (visitor.visitCrClauses) {
			return visitor.visitCrClauses(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CrClauseContext extends ParserRuleContext {
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	public clauseGuard(): ClauseGuardContext {
		return this.getRuleContext(0, ClauseGuardContext);
	}
	public clauseBody(): ClauseBodyContext {
		return this.getRuleContext(0, ClauseBodyContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ErlangParser.RULE_crClause; }
	// @Override
	public enterRule(listener: ErlangListener): void {
		if (listener.enterCrClause) {
			listener.enterCrClause(this);
		}
	}
	// @Override
	public exitRule(listener: ErlangListener): void {
		if (listener.exitCrClause) {
			listener.exitCrClause(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ErlangVisitor<Result>): Result {
		if (visitor.visitCrClause) {
			return visitor.visitCrClause(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ReceiveExprContext extends ParserRuleContext {
	public crClauses(): CrClausesContext | undefined {
		return this.tryGetRuleContext(0, CrClausesContext);
	}
	public expr(): ExprContext | undefined {
		return this.tryGetRuleContext(0, ExprContext);
	}
	public clauseBody(): ClauseBodyContext | undefined {
		return this.tryGetRuleContext(0, ClauseBodyContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ErlangParser.RULE_receiveExpr; }
	// @Override
	public enterRule(listener: ErlangListener): void {
		if (listener.enterReceiveExpr) {
			listener.enterReceiveExpr(this);
		}
	}
	// @Override
	public exitRule(listener: ErlangListener): void {
		if (listener.exitReceiveExpr) {
			listener.exitReceiveExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ErlangVisitor<Result>): Result {
		if (visitor.visitReceiveExpr) {
			return visitor.visitReceiveExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FunExprContext extends ParserRuleContext {
	public tokAtom(): TokAtomContext | undefined {
		return this.tryGetRuleContext(0, TokAtomContext);
	}
	public tokInteger(): TokIntegerContext | undefined {
		return this.tryGetRuleContext(0, TokIntegerContext);
	}
	public atomOrVar(): AtomOrVarContext[];
	public atomOrVar(i: number): AtomOrVarContext;
	public atomOrVar(i?: number): AtomOrVarContext | AtomOrVarContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AtomOrVarContext);
		} else {
			return this.getRuleContext(i, AtomOrVarContext);
		}
	}
	public integerOrVar(): IntegerOrVarContext | undefined {
		return this.tryGetRuleContext(0, IntegerOrVarContext);
	}
	public funClauses(): FunClausesContext | undefined {
		return this.tryGetRuleContext(0, FunClausesContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ErlangParser.RULE_funExpr; }
	// @Override
	public enterRule(listener: ErlangListener): void {
		if (listener.enterFunExpr) {
			listener.enterFunExpr(this);
		}
	}
	// @Override
	public exitRule(listener: ErlangListener): void {
		if (listener.exitFunExpr) {
			listener.exitFunExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ErlangVisitor<Result>): Result {
		if (visitor.visitFunExpr) {
			return visitor.visitFunExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AtomOrVarContext extends ParserRuleContext {
	public tokAtom(): TokAtomContext | undefined {
		return this.tryGetRuleContext(0, TokAtomContext);
	}
	public tokVar(): TokVarContext | undefined {
		return this.tryGetRuleContext(0, TokVarContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ErlangParser.RULE_atomOrVar; }
	// @Override
	public enterRule(listener: ErlangListener): void {
		if (listener.enterAtomOrVar) {
			listener.enterAtomOrVar(this);
		}
	}
	// @Override
	public exitRule(listener: ErlangListener): void {
		if (listener.exitAtomOrVar) {
			listener.exitAtomOrVar(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ErlangVisitor<Result>): Result {
		if (visitor.visitAtomOrVar) {
			return visitor.visitAtomOrVar(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IntegerOrVarContext extends ParserRuleContext {
	public tokInteger(): TokIntegerContext | undefined {
		return this.tryGetRuleContext(0, TokIntegerContext);
	}
	public tokVar(): TokVarContext | undefined {
		return this.tryGetRuleContext(0, TokVarContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ErlangParser.RULE_integerOrVar; }
	// @Override
	public enterRule(listener: ErlangListener): void {
		if (listener.enterIntegerOrVar) {
			listener.enterIntegerOrVar(this);
		}
	}
	// @Override
	public exitRule(listener: ErlangListener): void {
		if (listener.exitIntegerOrVar) {
			listener.exitIntegerOrVar(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ErlangVisitor<Result>): Result {
		if (visitor.visitIntegerOrVar) {
			return visitor.visitIntegerOrVar(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FunClausesContext extends ParserRuleContext {
	public funClause(): FunClauseContext[];
	public funClause(i: number): FunClauseContext;
	public funClause(i?: number): FunClauseContext | FunClauseContext[] {
		if (i === undefined) {
			return this.getRuleContexts(FunClauseContext);
		} else {
			return this.getRuleContext(i, FunClauseContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ErlangParser.RULE_funClauses; }
	// @Override
	public enterRule(listener: ErlangListener): void {
		if (listener.enterFunClauses) {
			listener.enterFunClauses(this);
		}
	}
	// @Override
	public exitRule(listener: ErlangListener): void {
		if (listener.exitFunClauses) {
			listener.exitFunClauses(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ErlangVisitor<Result>): Result {
		if (visitor.visitFunClauses) {
			return visitor.visitFunClauses(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FunClauseContext extends ParserRuleContext {
	public patArgumentList(): PatArgumentListContext {
		return this.getRuleContext(0, PatArgumentListContext);
	}
	public clauseGuard(): ClauseGuardContext {
		return this.getRuleContext(0, ClauseGuardContext);
	}
	public clauseBody(): ClauseBodyContext {
		return this.getRuleContext(0, ClauseBodyContext);
	}
	public tokVar(): TokVarContext | undefined {
		return this.tryGetRuleContext(0, TokVarContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ErlangParser.RULE_funClause; }
	// @Override
	public enterRule(listener: ErlangListener): void {
		if (listener.enterFunClause) {
			listener.enterFunClause(this);
		}
	}
	// @Override
	public exitRule(listener: ErlangListener): void {
		if (listener.exitFunClause) {
			listener.exitFunClause(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ErlangVisitor<Result>): Result {
		if (visitor.visitFunClause) {
			return visitor.visitFunClause(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TryExprContext extends ParserRuleContext {
	public exprs(): ExprsContext {
		return this.getRuleContext(0, ExprsContext);
	}
	public tryCatch(): TryCatchContext {
		return this.getRuleContext(0, TryCatchContext);
	}
	public crClauses(): CrClausesContext | undefined {
		return this.tryGetRuleContext(0, CrClausesContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ErlangParser.RULE_tryExpr; }
	// @Override
	public enterRule(listener: ErlangListener): void {
		if (listener.enterTryExpr) {
			listener.enterTryExpr(this);
		}
	}
	// @Override
	public exitRule(listener: ErlangListener): void {
		if (listener.exitTryExpr) {
			listener.exitTryExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ErlangVisitor<Result>): Result {
		if (visitor.visitTryExpr) {
			return visitor.visitTryExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TryCatchContext extends ParserRuleContext {
	public tryClauses(): TryClausesContext | undefined {
		return this.tryGetRuleContext(0, TryClausesContext);
	}
	public exprs(): ExprsContext | undefined {
		return this.tryGetRuleContext(0, ExprsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ErlangParser.RULE_tryCatch; }
	// @Override
	public enterRule(listener: ErlangListener): void {
		if (listener.enterTryCatch) {
			listener.enterTryCatch(this);
		}
	}
	// @Override
	public exitRule(listener: ErlangListener): void {
		if (listener.exitTryCatch) {
			listener.exitTryCatch(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ErlangVisitor<Result>): Result {
		if (visitor.visitTryCatch) {
			return visitor.visitTryCatch(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TryClausesContext extends ParserRuleContext {
	public tryClause(): TryClauseContext[];
	public tryClause(i: number): TryClauseContext;
	public tryClause(i?: number): TryClauseContext | TryClauseContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TryClauseContext);
		} else {
			return this.getRuleContext(i, TryClauseContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ErlangParser.RULE_tryClauses; }
	// @Override
	public enterRule(listener: ErlangListener): void {
		if (listener.enterTryClauses) {
			listener.enterTryClauses(this);
		}
	}
	// @Override
	public exitRule(listener: ErlangListener): void {
		if (listener.exitTryClauses) {
			listener.exitTryClauses(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ErlangVisitor<Result>): Result {
		if (visitor.visitTryClauses) {
			return visitor.visitTryClauses(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TryClauseContext extends ParserRuleContext {
	public expr(): ExprContext | undefined {
		return this.tryGetRuleContext(0, ExprContext);
	}
	public clauseGuard(): ClauseGuardContext {
		return this.getRuleContext(0, ClauseGuardContext);
	}
	public clauseBody(): ClauseBodyContext {
		return this.getRuleContext(0, ClauseBodyContext);
	}
	public patExpr(): PatExprContext | undefined {
		return this.tryGetRuleContext(0, PatExprContext);
	}
	public tryOptStackTrace(): TryOptStackTraceContext | undefined {
		return this.tryGetRuleContext(0, TryOptStackTraceContext);
	}
	public atomOrVar(): AtomOrVarContext | undefined {
		return this.tryGetRuleContext(0, AtomOrVarContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ErlangParser.RULE_tryClause; }
	// @Override
	public enterRule(listener: ErlangListener): void {
		if (listener.enterTryClause) {
			listener.enterTryClause(this);
		}
	}
	// @Override
	public exitRule(listener: ErlangListener): void {
		if (listener.exitTryClause) {
			listener.exitTryClause(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ErlangVisitor<Result>): Result {
		if (visitor.visitTryClause) {
			return visitor.visitTryClause(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TryOptStackTraceContext extends ParserRuleContext {
	public tokVar(): TokVarContext | undefined {
		return this.tryGetRuleContext(0, TokVarContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ErlangParser.RULE_tryOptStackTrace; }
	// @Override
	public enterRule(listener: ErlangListener): void {
		if (listener.enterTryOptStackTrace) {
			listener.enterTryOptStackTrace(this);
		}
	}
	// @Override
	public exitRule(listener: ErlangListener): void {
		if (listener.exitTryOptStackTrace) {
			listener.exitTryOptStackTrace(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ErlangVisitor<Result>): Result {
		if (visitor.visitTryOptStackTrace) {
			return visitor.visitTryOptStackTrace(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ArgumentListContext extends ParserRuleContext {
	public exprs(): ExprsContext | undefined {
		return this.tryGetRuleContext(0, ExprsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ErlangParser.RULE_argumentList; }
	// @Override
	public enterRule(listener: ErlangListener): void {
		if (listener.enterArgumentList) {
			listener.enterArgumentList(this);
		}
	}
	// @Override
	public exitRule(listener: ErlangListener): void {
		if (listener.exitArgumentList) {
			listener.exitArgumentList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ErlangVisitor<Result>): Result {
		if (visitor.visitArgumentList) {
			return visitor.visitArgumentList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PatArgumentListContext extends ParserRuleContext {
	public patExprs(): PatExprsContext | undefined {
		return this.tryGetRuleContext(0, PatExprsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ErlangParser.RULE_patArgumentList; }
	// @Override
	public enterRule(listener: ErlangListener): void {
		if (listener.enterPatArgumentList) {
			listener.enterPatArgumentList(this);
		}
	}
	// @Override
	public exitRule(listener: ErlangListener): void {
		if (listener.exitPatArgumentList) {
			listener.exitPatArgumentList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ErlangVisitor<Result>): Result {
		if (visitor.visitPatArgumentList) {
			return visitor.visitPatArgumentList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExprsContext extends ParserRuleContext {
	public expr(): ExprContext[];
	public expr(i: number): ExprContext;
	public expr(i?: number): ExprContext | ExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprContext);
		} else {
			return this.getRuleContext(i, ExprContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ErlangParser.RULE_exprs; }
	// @Override
	public enterRule(listener: ErlangListener): void {
		if (listener.enterExprs) {
			listener.enterExprs(this);
		}
	}
	// @Override
	public exitRule(listener: ErlangListener): void {
		if (listener.exitExprs) {
			listener.exitExprs(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ErlangVisitor<Result>): Result {
		if (visitor.visitExprs) {
			return visitor.visitExprs(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PatExprsContext extends ParserRuleContext {
	public patExpr(): PatExprContext[];
	public patExpr(i: number): PatExprContext;
	public patExpr(i?: number): PatExprContext | PatExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(PatExprContext);
		} else {
			return this.getRuleContext(i, PatExprContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ErlangParser.RULE_patExprs; }
	// @Override
	public enterRule(listener: ErlangListener): void {
		if (listener.enterPatExprs) {
			listener.enterPatExprs(this);
		}
	}
	// @Override
	public exitRule(listener: ErlangListener): void {
		if (listener.exitPatExprs) {
			listener.exitPatExprs(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ErlangVisitor<Result>): Result {
		if (visitor.visitPatExprs) {
			return visitor.visitPatExprs(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Guard_Context extends ParserRuleContext {
	public exprs(): ExprsContext[];
	public exprs(i: number): ExprsContext;
	public exprs(i?: number): ExprsContext | ExprsContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprsContext);
		} else {
			return this.getRuleContext(i, ExprsContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ErlangParser.RULE_guard_; }
	// @Override
	public enterRule(listener: ErlangListener): void {
		if (listener.enterGuard_) {
			listener.enterGuard_(this);
		}
	}
	// @Override
	public exitRule(listener: ErlangListener): void {
		if (listener.exitGuard_) {
			listener.exitGuard_(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ErlangVisitor<Result>): Result {
		if (visitor.visitGuard_) {
			return visitor.visitGuard_(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AtomicContext extends ParserRuleContext {
	public tokChar(): TokCharContext | undefined {
		return this.tryGetRuleContext(0, TokCharContext);
	}
	public tokInteger(): TokIntegerContext | undefined {
		return this.tryGetRuleContext(0, TokIntegerContext);
	}
	public tokFloat(): TokFloatContext | undefined {
		return this.tryGetRuleContext(0, TokFloatContext);
	}
	public tokAtom(): TokAtomContext | undefined {
		return this.tryGetRuleContext(0, TokAtomContext);
	}
	public tokString(): TokStringContext[];
	public tokString(i: number): TokStringContext;
	public tokString(i?: number): TokStringContext | TokStringContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TokStringContext);
		} else {
			return this.getRuleContext(i, TokStringContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ErlangParser.RULE_atomic; }
	// @Override
	public enterRule(listener: ErlangListener): void {
		if (listener.enterAtomic) {
			listener.enterAtomic(this);
		}
	}
	// @Override
	public exitRule(listener: ErlangListener): void {
		if (listener.exitAtomic) {
			listener.exitAtomic(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ErlangVisitor<Result>): Result {
		if (visitor.visitAtomic) {
			return visitor.visitAtomic(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PrefixOpContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ErlangParser.RULE_prefixOp; }
	// @Override
	public enterRule(listener: ErlangListener): void {
		if (listener.enterPrefixOp) {
			listener.enterPrefixOp(this);
		}
	}
	// @Override
	public exitRule(listener: ErlangListener): void {
		if (listener.exitPrefixOp) {
			listener.exitPrefixOp(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ErlangVisitor<Result>): Result {
		if (visitor.visitPrefixOp) {
			return visitor.visitPrefixOp(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MultOpContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ErlangParser.RULE_multOp; }
	// @Override
	public enterRule(listener: ErlangListener): void {
		if (listener.enterMultOp) {
			listener.enterMultOp(this);
		}
	}
	// @Override
	public exitRule(listener: ErlangListener): void {
		if (listener.exitMultOp) {
			listener.exitMultOp(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ErlangVisitor<Result>): Result {
		if (visitor.visitMultOp) {
			return visitor.visitMultOp(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AddOpContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ErlangParser.RULE_addOp; }
	// @Override
	public enterRule(listener: ErlangListener): void {
		if (listener.enterAddOp) {
			listener.enterAddOp(this);
		}
	}
	// @Override
	public exitRule(listener: ErlangListener): void {
		if (listener.exitAddOp) {
			listener.exitAddOp(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ErlangVisitor<Result>): Result {
		if (visitor.visitAddOp) {
			return visitor.visitAddOp(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ListOpContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ErlangParser.RULE_listOp; }
	// @Override
	public enterRule(listener: ErlangListener): void {
		if (listener.enterListOp) {
			listener.enterListOp(this);
		}
	}
	// @Override
	public exitRule(listener: ErlangListener): void {
		if (listener.exitListOp) {
			listener.exitListOp(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ErlangVisitor<Result>): Result {
		if (visitor.visitListOp) {
			return visitor.visitListOp(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CompOpContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ErlangParser.RULE_compOp; }
	// @Override
	public enterRule(listener: ErlangListener): void {
		if (listener.enterCompOp) {
			listener.enterCompOp(this);
		}
	}
	// @Override
	public exitRule(listener: ErlangListener): void {
		if (listener.exitCompOp) {
			listener.exitCompOp(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ErlangVisitor<Result>): Result {
		if (visitor.visitCompOp) {
			return visitor.visitCompOp(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


