type Cond1<
	ABracket extends [any, any, any],
	Else,
> = (
	ABracket extends [infer AType, infer AOther, infer ATrue] ? (
		AType extends AOther ? ATrue : (
		Else)) :
		never)

type Cond2<
	ABracket extends [any, any, any],
	BBracket extends [any, any, any],
	Else,
> = (
	ABracket extends [infer AType, infer AOther, infer ATrue] ? (
	BBracket extends [infer BType, infer BOther, infer BTrue] ? (
		AType extends AOther ? ATrue : (
		BType extends BOther ? BTrue : (
		Else))) :
		never) :
		never)

type Cond3<
	ABracket extends [any, any, any],
	BBracket extends [any, any, any],
	CBracket extends [any, any, any],
	Else,
> = (
	ABracket extends [infer AType, infer AOther, infer ATrue] ? (
	BBracket extends [infer BType, infer BOther, infer BTrue] ? (
	CBracket extends [infer CType, infer COther, infer CTrue] ? (
		AType extends AOther ? ATrue : (
		BType extends BOther ? BTrue : (
		CType extends COther ? CTrue : (
		Else)))) :
		never) :
		never) :
		never)

type Cond4<
	ABracket extends [any, any, any],
	BBracket extends [any, any, any],
	CBracket extends [any, any, any],
	DBracket extends [any, any, any],
	Else,
> = (
	ABracket extends [infer AType, infer AOther, infer ATrue] ? (
	BBracket extends [infer BType, infer BOther, infer BTrue] ? (
	CBracket extends [infer CType, infer COther, infer CTrue] ? (
	DBracket extends [infer DType, infer DOther, infer DTrue] ? (
		AType extends AOther ? ATrue : (
		BType extends BOther ? BTrue : (
		CType extends COther ? CTrue : (
		DType extends DOther ? DTrue : (
		Else))))) :
		never) :
		never) :
		never) :
		never)

export type { Cond1, Cond2, Cond3, Cond4 }