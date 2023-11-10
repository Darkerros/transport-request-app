

export type FieldsetValuesChange<Values extends Object> = <Key extends keyof Values> (inputName: Key, value: (Values[Key])) => void
export type FieldsetValuesChangeWithIndex<Values extends Object> = <Key extends keyof Values> (index: number, inputName: Key, value: (Values[Key])) => void
