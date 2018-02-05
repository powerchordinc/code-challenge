// @flow

declare type Field = {
  // when the field is displayed in the UI, the label is used
  label: string,
  // a unique string for the field
  key: string,
  // the position is used to know what order the fields are displayed in
  position: number,
  // presentation represents the component to use
  presentation: string,
};

export type Schema = {
  resource: string,
  fields: Array<Field>,
};
