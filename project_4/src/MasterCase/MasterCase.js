import { useEffect, useState } from 'react';
import { ConsoleViewer } from '../ConsoleViewer/ConsoleViewer';
import './MasterCase.css';

export function MasterCase({ content }) {
  const [caseId, setCaseId] = useState('');
  const selectedCase = caseId ? content[caseId] : null;
  const Detail = selectedCase?.component;
  const entries = Object.entries(content);

  useEffect(() => {
    document.title = content[caseId]?.name ?? 'React Hooks in details';
  }, [caseId, content]);

  return (
    <div className="container">
      <div className="master-left">
        {entries.map(([key, value]) => {
          const isSelected = caseId === key;
          const className = `master-button ${isSelected ? 'selected' : null}`;

          return (
            <div key={key}>
              <button className={className} onClick={() => setCaseId(key)}>
                {value.name}
              </button>
            </div>
          )
        })}
      </div>
      <div className="master-right">
        <div className="detail">{Detail ? <Detail /> : null}</div>
        <div className="bottom"><ConsoleViewer/></div>
      </div>
    </div>
  );
}