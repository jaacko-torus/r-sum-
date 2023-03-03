export type AddPartial<BaseType, Keys extends keyof BaseType> = Omit<BaseType, Keys> & Partial<Pick<BaseType, Keys>>
export type AddRequired<BaseType, Keys extends keyof BaseType> = Omit<BaseType, Keys> & Required<Pick<BaseType, Keys>>
