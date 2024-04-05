import ReactDOM from 'react-dom/client';
import { observe } from 'react-observing';

import { PropertiesEditor } from 'properties-editor/src';

import { PROPERTIES } from './Mock';
import './styles.css';


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <div>
    Teste

    <PropertiesEditor
      properties={observe(PROPERTIES)}
    />
  </div>
);
