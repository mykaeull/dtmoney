import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global";
import Modal from "react-modal";
import { useState } from "react";
import { NewTransactionModal } from "./components/NewTransactionModal";
import { TransactionsProvider } from "./hooks/useTransactions";

Modal.setAppElement("#root");

export function App() {
  const [isNewTransictionModalOpen, setIsNewTransictionModalOpen] =
    useState(false);

  function handleOpenNewTransictionModal() {
    setIsNewTransictionModalOpen(true);
  }

  function handleCloseNewTransictionModal() {
    setIsNewTransictionModalOpen(false);
  }

  return (
    <>
      <TransactionsProvider>
        <Header handleOpenNewTransictionModal={handleOpenNewTransictionModal} />
        <Dashboard />
        <NewTransactionModal
          isNewTransictionModalOpen={isNewTransictionModalOpen}
          handleCloseNewTransictionModal={handleCloseNewTransictionModal}
        />
        <GlobalStyle />
      </TransactionsProvider>
    </>
  );
}

export default App;
