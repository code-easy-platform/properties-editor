import { IObservable, observe, set, useObserverValue } from 'react-observing';
import { VscTrash } from 'react-icons/vsc';

import { newEmptyProperty } from '../../helpers';
import { IProperty } from '../../interfaces';
import { TypeOfValues } from '../../enums';
import { InputExpression } from './inputs';
import { Field } from './Field';


export type TFieldsTreeValue = {
  root: IObservable<IProperty>;
  fields: IObservable<IProperty[]>;
}

interface IFieldsTreeProps extends IProperty<TFieldsTreeValue> { }
export const FieldsTree = ({ value }: IFieldsTreeProps) => {
  const { root, fields } = useObserverValue(value);

  const fieldsValue = useObserverValue(fields);
  const rootValue = useObserverValue(root);


  function handleAdd() {
    set(fields, fields => [
      ...fields,
      newEmptyProperty({
        value: observe(''),
        type: observe(TypeOfValues.expression),
        name: observe(`Param ${fields.length}`),
      }),
    ])
  }

  function handleRemove(id = '') {
    set(fields, fields => [
      ...fields
        .filter(field => field.id.value !== id)
        .map((field, index) => {
          set(field.name, `Param ${index}`)
          return field;
        }),
    ])
  }


  return (
    <div className='border rounded -m-0.5 pt-0.5 p-1'>
      <Field field={rootValue} />

      <div className='pl-2'>
        {fieldsValue.map(field => (
          <div className='flex' key={field.id.value}>
            <InputExpression
              {...field}
              dividerPositionX={24}
            />

            <button onClick={() => handleRemove(field.id.value)} className='p-0 w-6 flex items-center justify-center'>
              <VscTrash size={14} />
            </button>
          </div>
        ))}
      </div>

      <button className='text-sm text-secondary w-full' onClick={handleAdd}>
        + Add
      </button>
    </div>
  );
};
