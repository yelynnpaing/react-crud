import React from 'react';
import './App.css';
import Footer from './Coponent/Footer';
import FormInput from './Coponent/FormInput';
import List from './Coponent/List';
import {DataProvider} from './Coponent/DataProvider';

const App = () => {
  return (
    <DataProvider>
      <div className='app'>
          <h1>To Do List</h1>
          <FormInput/>
          <List/>
          <Footer/>
      </div>
    </DataProvider>
  )
}

export default App