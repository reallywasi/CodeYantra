// CodeEditor.jsx
import React from 'react';
import MonacoEditor from '@monaco-editor/react';

const CodeEditor = ({ value, onChange, language = 'cpp', theme = 'light' }) => {
  return (
    <div className="bg-gray-100 p-4 rounded-lg shadow-md">
      <MonacoEditor
        height="500px"
        language={language}
        value={value}
        theme={theme}
        onChange={onChange}
        options={{
          minimap: { enabled: false },
          scrollBeyondLastLine: false,
          automaticLayout: true,
          fontSize: 14,
        }}
        className="rounded-md"
      />
    </div>
  );
};

export default CodeEditor;
