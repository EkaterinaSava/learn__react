import { useCallback, useState } from 'react';

function createMappedState(mapper) {
  return function(initialValue) {
    const [value, setValue] = useState(mapper(initialValue));

    const setMappedValue = useCallback((newValue) => {
      setValue(mapper(newValue));
    }, []);

    return [value, setMappedValue];
  }
}

const useLowercaseState = createMappedState((newValue) => {
  return newValue?.toLowerCase();
});

const useUppercaseState = createMappedState((newValue) => {
  return newValue?.toUpperCase();
});

const useTrimmedState = createMappedState((newValue) => {
  return newValue?.trim();
});

function Field({ label, value, setValue }) {
  return (
    <div style={{ margin: 10 }}>
      <span style={{ marginRight: 16 }}>{label}</span>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
}

export function HooksFactory() {
  const [lowercase, setLowercase] = useLowercaseState('SOME VaLuE');
  const [uppercase, setUppercase] = useUppercaseState('some value');
  const [trimmed, setTrimmed] = useTrimmedState('   SOMEValue     ');

  return (
    <>
      <h2>Hooks Factory</h2>
      <Field
        label="Lower case only:"
        value={lowercase}
        setValue={setLowercase}
      />
       <Field
        label="Upper case only:"
        value={uppercase}
        setValue={setUppercase}
      />
       <Field
        label="No spaces here:"
        value={trimmed}
        setValue={setTrimmed}
      />
    </>
  );
}