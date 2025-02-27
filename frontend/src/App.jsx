import React from 'react';
import ResumeForm from './components/ResumeForm';

function App() {
  return (
    <div className='min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12'>
      <div className='relative py-3 sm:max-w-xl sm:mx-auto'>
        <h1 className='text-4xl font-bold text-center mb-8'>
          AI Resume Generator
        </h1>
        <ResumeForm />
      </div>
    </div>
  );
}

export default App;
