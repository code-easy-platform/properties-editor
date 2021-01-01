import { observe } from "react-observing";

import { IItem, IProperty, ISuggestion, TypeOfValues } from "./properties-editor";

type TOptional<T> = { [k in keyof T]?: T[k] };

const newPropertie = (value: TOptional<IProperty>): IProperty => {
  return {
    value: value.value || observe(''),
    id: value.id || observe(undefined),
    name: value.name || observe(undefined),
    group: value.group || observe(undefined),
    suggestions: value.suggestions || observe([]),
    type: value.type || observe(TypeOfValues.assign),
    information: value.information || observe(undefined),
    fileMaxSize: value.fileMaxSize || observe(undefined),
    propertieType: value.propertieType || observe('text'),
    nameSuggestions: value.nameSuggestions || observe([]),
    nameHasError: value.nameHasError || observe(undefined),
    valueHasError: value.valueHasError || observe(undefined),
    focusOnRender: value.focusOnRender || observe(undefined),
    nameHasWarning: value.nameHasWarning || observe(undefined),
    valueHasWarning: value.valueHasWarning || observe(undefined),
    editNameDisabled: value.editNameDisabled || observe(undefined),
    editValueDisabled: value.editValueDisabled || observe(undefined),
    onPickerNameClick: value.onPickerNameClick || observe((e) => console.log('Name', e)),
    onPickerValueClick: value.onPickerValueClick || observe((e) => console.log('Value', e)),
  };
};

const name = observe('Nome que pode ser editado');
const subname = observe(undefined);

export const Item: IItem = {
  name: name,
  id: observe('T'),
  subname: subname,
  properties: [
    newPropertie({
      id: observe('10'),
      name: observe('Hidden'),
      type: observe(TypeOfValues.hidden),
      value: observe('My name to hidden'),
      information: observe('Hidden, used just for show some information'),
    }),
    newPropertie({
      id: observe('11'),
      name: observe('View only'),
      type: observe(TypeOfValues.viewOnly),
      value: observe('My name to view only'),
      information: observe('View only, used just for show some information'),
    }),
    newPropertie({
      value: name,
      id: observe('12'),
      group: observe('Simple'),
      name: observe('Simple string'),
      type: observe(TypeOfValues.string),
      information: observe('Input simple string, allow you type any string'),
    }),
    newPropertie({
      id: observe('13'),
      value: observe(false),
      name: observe('Boolean'),
      group: observe('Simple'),
      type: observe(TypeOfValues.boolean),
      information: observe('Input switch, allow you toggle between true or false'),
    }),
    newPropertie({
      id: observe('14'),
      value: observe(0),
      name: observe('Number'),
      group: observe('Simple'),
      type: observe(TypeOfValues.number),
      information: observe('Input simple number, allow you type any number'),
    }),
    newPropertie({
      id: observe('15'),
      value: observe(null),
      name: observe('Binary'),
      group: observe('Simple'),
      type: observe(TypeOfValues.binary),
      information: observe('Input binary, allow you import your files from your device'),
    }),
    newPropertie({
      id: observe('16'),
      group: observe('Simple'),
      name: observe('Big string'),
      value: observe('My big string'),
      type: observe(TypeOfValues.bigstring),
      information: observe('Input big string, allow you write a big string with many lines'),
    }),
    newPropertie({
      id: observe('17'),
      group: observe('Simple'),
      value: observe('My full big string'),
      type: observe(TypeOfValues.fullBigString),
      information: observe('Input big string, allow you write a big string with many lines and not show the input label'),
    }),
    newPropertie({
      value: subname,
      id: observe('18'),
      name: observe('Combo'),
      group: observe('Simple'),
      type: observe(TypeOfValues.selection),
      information: observe('Input selection, allow you select one of suggestions'),
      suggestions: observe<ISuggestion<string | number>[]>([
        {
          label: observe('Opção sugerida'),
          description: observe(''),
          disabled: observe(false),
          value: observe('opts1'),
          name: observe('opts1'),
        },
        {
          label: observe('Opção sugerida 1'),
          description: observe(''),
          disabled: observe(false),
          value: observe('opts2'),
          name: observe('opts2'),
        },
        {
          description: observe('Minha description'),
          label: observe('Opção sugerida 2'),
          disabled: observe(false),
          value: observe('opts3'),
          name: observe('opts3'),
        },
        {
          description: observe('Minha description'),
          label: observe('Opção sugerida disable'),
          disabled: observe(true),
          value: observe('opts4'),
          name: observe('opts4'),
        }
      ]),
    }),
    newPropertie({
      id: observe('19'),
      value: observe(true),
      group: observe('Simple'),
      name: observe('Combo Yes/No'),
      type: observe(TypeOfValues.yesNoSelection),
      information: observe('Input selection yes/no, allow you toggle between "yes" and "no". The output is boolean'),
    }),
    newPropertie({
      id: observe('20'),
      group: observe('Advanced'),
      name: observe('Expression'),
      value: observe('tesstetes'),
      type: observe(TypeOfValues.expression),
      onPickerValueClick: observe((e) => console.log('Value', e)),
      information: observe('Input expression, allow you type expressions and conditions'),
    }),
    newPropertie({
      id: observe('21'),
      group: observe('Advanced'),
      value: observe('tesstetes'),
      name: observe('Expression suggests'),
      type: observe(TypeOfValues.expression),
      onPickerValueClick: observe((e) => console.log('Value', e)),
      information: observe('Input expression, allow you type expressions and conditions and suggestion'),
      suggestions: observe<ISuggestion<string | number>[]>([
        {
          label: observe('Opção sugerida'),
          description: observe(''),
          disabled: observe(false),
          value: observe('opts1'),
          name: observe('opts1'),
        },
        {
          label: observe('Opção.Sugerida.Sugerida.Sugerida'),
          value: observe('Opção.Sugerida.Sugerida.Sugerida'),
          name: observe('Opção.Sugerida.Sugerida.Sugerida'),
          description: observe(''),
          disabled: observe(false),
        },
        {
          description: observe('Minha description'),
          label: observe('Opção.Sugerida.Sugerida.Sugerida.Sugerida.Sugerida.Sugerida.Sugerida.Sugerida.Sugerida.Sugerida.Sugerida.Sugerida.Sugerida.Sugerida.Sugerida.Sugerida.Sugerida.Sugerida.Sugerida'),
          disabled: observe(false),
          value: observe('opts3'),
          name: observe('opts3'),
        },
        {
          description: observe('Minha description'),
          label: observe('Opção sugerida disabled'),
          disabled: observe(true),
          value: observe('opts4'),
          name: observe('opts4'),
        },
      ]),
    }),
    newPropertie({
      id: observe('22'),
      name: observe('Name'),
      value: observe('My name'),
      group: observe('Advanced'),
      propertieType: observe('name'),
      editNameDisabled: observe(false),
      editValueDisabled: observe(false),
      type: observe(TypeOfValues.assign),
      information: observe('Minha infromação de teste'),
      onPickerNameClick: observe((e) => console.log('Name', e)),
      onPickerValueClick: observe((e) => console.log('Value', e)),
      nameSuggestions: observe<ISuggestion<string | number>[]>([
        {
          label: observe('Param1'),
          description: observe(''),
          disabled: observe(false),
          value: observe('Param1'),
          name: observe('Param1'),
        },
        {
          label: observe('Param2'),
          description: observe(''),
          disabled: observe(false),
          value: observe('Param2'),
          name: observe('Param2'),
        },
        {
          label: observe('Param3'),
          description: observe(''),
          disabled: observe(false),
          value: observe('Param3'),
          name: observe('Param3'),
        },
        {
          label: observe('Param4 disable'),
          description: observe(''),
          disabled: observe(true),
          value: observe('Param4'),
          name: observe('Param4'),
        }
      ]),
      suggestions: observe<ISuggestion<string | number>[]>([
        {
          label: observe('Opção sugerida'),
          description: observe(''),
          disabled: observe(false),
          value: observe('opts1'),
          name: observe('opts1'),
        },
        {
          label: observe('Opção sugerida 1'),
          description: observe(''),
          disabled: observe(false),
          value: observe('opts2'),
          name: observe('opts2'),
        },
        {
          label: observe('Opção sugerida 2'),
          description: observe(''),
          disabled: observe(false),
          value: observe('opts3'),
          name: observe('opts3'),
        },
        {
          label: observe('Opção sugerida disable'),
          description: observe(''),
          disabled: observe(true),
          value: observe('opts4'),
          name: observe('opts4'),
        }
      ]),
    }),
  ]
};
