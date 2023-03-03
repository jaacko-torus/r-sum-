import { Cond1, Cond2, Cond3, Cond4 } from "./Cond"

type Switch1<
	T,
	ABracket extends [any, any],
	Else,
> = (
	ABracket extends [infer AOther, infer ATrue] ? (
		Cond1<[T, AOther, ATrue], Else>) :
		never)

type Switch2<
	T,
	ABracket extends [any, any],
	BBracket extends [any, any],
	Else,
> = (
	ABracket extends [infer AOther, infer ATrue] ? (
	BBracket extends [infer BOther, infer BTrue] ? (
		Cond2<
			[T, AOther, ATrue],
			[T, BOther, BTrue],
			Else>) :
		never) :
		never)

type Switch3<
	T,
	ABracket extends [any, any],
	BBracket extends [any, any],
	CBracket extends [any, any],
	Else,
> = (
	ABracket extends [infer AOther, infer ATrue] ? (
	BBracket extends [infer BOther, infer BTrue] ? (
	CBracket extends [infer COther, infer CTrue] ? (
		Cond3<
			[T, AOther, ATrue],
			[T, BOther, BTrue],
			[T, COther, CTrue],
			Else>) :
		never) :
		never) :
		never)

type Switch4<
	T,
	ABracket extends [any, any],
	BBracket extends [any, any],
	CBracket extends [any, any],
	DBracket extends [any, any],
	Else,
> = (
	ABracket extends [infer AOther, infer ATrue] ? (
	BBracket extends [infer BOther, infer BTrue] ? (
	CBracket extends [infer COther, infer CTrue] ? (
	DBracket extends [infer DOther, infer DTrue] ? (
		Cond4<
			[T, AOther, ATrue],
			[T, BOther, BTrue],
			[T, COther, CTrue],
			[T, DOther, DTrue],
			Else>) :
		never) :
		never) :
		never) :
		never)

export type { Switch1, Switch2, Switch3, Switch4 }