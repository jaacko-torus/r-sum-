import { Switch1, Switch2, Switch3, Switch4 } from "./Switch"

type MapSwitch1<
	T,
	ABracket extends [any, any],
> = (
	ABracket extends [infer AOther, infer ATrue] ? (
		Switch1<T, [AOther, ATrue], never>) :
		never)

type MapSwitch2<
	T,
	ABracket extends [any, any],
	BBracket extends [any, any],
> = (
	ABracket extends [infer AOther, infer ATrue] ? (
	BBracket extends [infer BOther, infer BTrue] ? (
		Switch2<
			T,
			[AOther, ATrue],
			[BOther, BTrue],
			never>) :
		never) :
		never)
	
type MapSwitch3<
	T,
	ABracket extends [any, any],
	BBracket extends [any, any],
	CBracket extends [any, any],
> = (
	ABracket extends [infer AOther, infer ATrue] ? (
	BBracket extends [infer BOther, infer BTrue] ? (
	CBracket extends [infer COther, infer CTrue] ? (
		Switch3<
			T,
			[AOther, ATrue],
			[BOther, BTrue],
			[COther, CTrue],
			never>) :
		never) :
		never) :
		never)

type MapSwitch4<
	T,
	ABracket extends [any, any],
	BBracket extends [any, any],
	CBracket extends [any, any],
	DBracket extends [any, any],
> = (
	ABracket extends [infer AOther, infer ATrue] ? (
	BBracket extends [infer BOther, infer BTrue] ? (
	CBracket extends [infer COther, infer CTrue] ? (
	DBracket extends [infer DOther, infer DTrue] ? (
		Switch4<
			T,
			[AOther, ATrue],
			[BOther, BTrue],
			[COther, CTrue],
			[DOther, DTrue],
			never>) :
		never) :
		never) :
		never) :
		never)

export type { MapSwitch1, MapSwitch2, MapSwitch3, MapSwitch4 }