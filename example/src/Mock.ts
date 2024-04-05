import { observe } from "react-observing";

import { IProperty, TypeOfValues, newEmptyProperty } from "properties-editor/src";


export const PROPERTIES: IProperty[] = [
  newEmptyProperty({
    id: observe('10'),
    name: observe('Hidden'),
    type: observe(TypeOfValues.hidden),
    value: observe('My name to hidden'),
    information: observe('Hidden, used just for show some information'),
  }),
  newEmptyProperty({
    id: observe('11'),
    name: observe('View only'),
    type: observe(TypeOfValues.viewOnly),
    value: observe('My name to view only'),
    information: observe('View only, used just for show some information'),
  }),
  newEmptyProperty({
    value: observe('name'),
    id: observe('12'),
    group: observe('Simple'),
    name: observe('Simple string'),
    type: observe(TypeOfValues.string),
    information: observe('Input simple string, allow you type any string'),
  }),
  newEmptyProperty({
    value: observe('name'),
    id: observe('121'),
    group: observe('Simple'),
    name: observe('Simple string with suggestions'),
    type: observe(TypeOfValues.stringWithSuggestions),
    information: observe('Input simple string with suggestions, allow you type any string'),
  }),
  newEmptyProperty({
    id: observe('13'),
    value: observe(false),
    name: observe('Boolean'),
    group: observe('Simple'),
    type: observe(TypeOfValues.boolean),
    information: observe('Input switch, allow you toggle between true or false'),
  }),
  newEmptyProperty({
    id: observe('14.1'),
    value: observe(0),
    name: observe('Number'),
    group: observe('Simple'),
    type: observe(TypeOfValues.number),
    information: observe('Input simple number, allow you type any number'),
  }),
  newEmptyProperty({
    id: observe('14'),
    value: observe('#fff000'),
    name: observe('Color'),
    group: observe('Simple'),
    type: observe(TypeOfValues.colorPicker),
    information: observe('Input color picker, allow you select a hex color'),
  }),
  newEmptyProperty({
    id: observe('15'),
    value: observe(null),
    name: observe('Binary'),
    group: observe('Simple'),
    type: observe(TypeOfValues.binary),
    typeOfFilesToAccept: observe(['.png', '.jpg']),
    information: observe('Input binary, allow you import your files from your device'),
  }),
  newEmptyProperty({
    id: observe('16'),
    group: observe('Simple'),
    name: observe('Big string'),
    value: observe('My big string'),
    type: observe(TypeOfValues.bigString),
    information: observe('Input big string, allow you write a big string with many lines'),
  }),
  newEmptyProperty({
    id: observe('17'),
    group: observe('Simple'),
    value: observe('My full big string'),
    type: observe(TypeOfValues.fullBigString),
    information: observe('Input big string, allow you write a big string with many lines and not show the input label'),
  }),
  newEmptyProperty({
    value: observe('subName'),
    id: observe('18'),
    name: observe('Combo'),
    group: observe('Simple'),
    type: observe(TypeOfValues.selection),
    information: observe('Input selection, allow you select one of suggestions'),
  }),
  newEmptyProperty({
    id: observe('19'),
    value: observe(true),
    group: observe('Simple'),
    name: observe('Combo Yes/No'),
    type: observe(TypeOfValues.yesNoSelection),
    information: observe('Input selection yes/no, allow you toggle between "yes" and "no". The output is boolean'),
  }),
  newEmptyProperty({
    id: observe('20'),
    group: observe('Advanced'),
    name: observe('Classes'),
    value: observe(['teste1', 'teste2']),
    type: observe(TypeOfValues.inputMultiTags),
    information: observe('Input expression, allow you type expressions and conditions'),
  }),
  newEmptyProperty({
    id: observe('21'),
    group: observe('Advanced'),
    name: observe('Expression'),
    value: observe('tesstetes'),
    type: observe(TypeOfValues.expression),
    information: observe('Input expression, allow you type expressions and conditions'),
  }),
  newEmptyProperty({
    id: observe('22'),
    group: observe('Advanced'),
    value: observe('tesstetes'),
    name: observe('Expression suggests'),
    type: observe(TypeOfValues.expression),
    information: observe('Input expression, allow you type expressions and conditions and suggestion'),
  }),
  newEmptyProperty({
    id: observe('23'),
    name: observe('Name'),
    value: observe('My name'),
    group: observe('Advanced'),
    propertyType: observe('name'),
    editNameDisabled: observe(false),
    editValueDisabled: observe(false),
    type: observe(TypeOfValues.assign),
    information: observe('Minha infromação de teste'),
  }),
];