// @flow

declare type Field = {
  label: string,
  key: string,
  listOptions: {
    canList: boolean,
  },
  position: number,
  presentation: string,
  restrictions: {
    max: number,
    min: number,
    enums: Array<string>,
    required: boolean,
  },
  fields: Array<Field>,
};

export type Schema = {
  resource: string,
  fields: Array<Field>,
};
