import React from 'react';
import { useObserverValue } from 'react-observing';

import { IProperty } from '../../interfaces';
import { TypeOfValues } from '../../enums';
import { FieldsTree } from './FieldsTree';
import * as Inputs from './inputs';


interface FieldProps {
  field: IProperty;
}
export const Field: React.FC<FieldProps> = ({ field }) => {
  const type = useObserverValue(field.type);


  switch (type) {
    case TypeOfValues.viewOnly:
      return <Inputs.InputViewOnly {...field} />;

    case TypeOfValues.string:
      return <Inputs.SimpleString {...field} />;

    case TypeOfValues.colorPicker:
      return <Inputs.InputColorPicker {...field} />;

    case TypeOfValues.boolean:
      return <Inputs.InputSwitch {...field} />;

    case TypeOfValues.number:
      return <Inputs.InputSimpleNumber {...field} />;

    case TypeOfValues.binary:
      return <Inputs.InputImportFile {...field} />;

    case TypeOfValues.bigString:
      return <Inputs.InputBigString {...field} />;

    case TypeOfValues.fullBigString:
      return <Inputs.InputFullBigString {...field} />;

    case TypeOfValues.selection:
      return <Inputs.InputSelection {...field} />;

    case TypeOfValues.yesNoSelection:
      return <Inputs.InputSelectionYesNo {...field} />;

    case TypeOfValues.expression:
      return <Inputs.InputExpression {...field} />;

    case TypeOfValues.assign:
      return <Inputs.Assign {...field} />;

    case TypeOfValues.inputMultiTags:
      return <Inputs.InputMultiTags {...field} />;

    case TypeOfValues.stringWithSuggestions:
      return <Inputs.InputSimpleStringWithSuggestions {...field} />;

    case TypeOfValues.optionList:
      return <Inputs.InputOptionList {...field} />;

    case TypeOfValues.stringList:
      return <Inputs.InputStringList {...field} />;

    case TypeOfValues.multiAssign:
      return <Inputs.InputMultiAssign {...field} />;

    case TypeOfValues.multiExpression:
      return <Inputs.InputMultiExpression {...field} />;

    case TypeOfValues.fieldsTree:
      return <FieldsTree {...field} />;

    case TypeOfValues.hidden:
      return null;

    default:
      return null;
  }
}
