import React from 'react';
//import logo from './logo.svg';
import './App.css';

// Import Components
import { Header } from './componants/Header';
import { Balance } from './componants/Balance';
import { IncomeExpenses } from './componants/IncomeEXpenses';
import { TransactionList } from './componants/TransactionList';
import { AddTransaction } from './componants/AddTransaction';
import { GlobalProvider } from './context/GlobalState';

function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpenses />
        <TransactionList />
        <AddTransaction />
      </div>
    </GlobalProvider>
  );
}

export default App;