
import React, { useState } from 'react';
import Dashboard from './components/Dashboard';
import WorkflowForm from './components/WorkflowForm';
import { Note } from './types';

const App: React.FC = () => {
  const [selectedNote, setSelectedNote] = useState<Note | null>(null);

  const handleRowClick = (note: Note) => {
    setSelectedNote(note);
  };

  const handleClose = () => {
    setSelectedNote(null);
  };

  return (
    <div className="min-h-screen">
      {selectedNote ? (
        <WorkflowForm note={selectedNote} onClose={handleClose} />
      ) : (
        <Dashboard onRowClick={handleRowClick} />
      )}
    </div>
  );
};

export default App;
