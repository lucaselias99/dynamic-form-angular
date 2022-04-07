export interface Option {
  value: string;
  text: string;
}

export interface Fieldset {
  name: string;
  type: string;
  label: string;
  ordem: number;
  id: number;
  options?: Option[];
}
