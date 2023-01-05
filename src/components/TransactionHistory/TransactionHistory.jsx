import PropTypes from 'prop-types';
import transactions from 'Data/transactions.json';
import { TransactionCard, TransactionColumTr, TransactionColumTh, TransactionColumTd, HeadlineTransactionCard } from './TransactionHistory.styled';

export const TransactionHistory = (items = { transactions }) => {
  return (
    <TransactionCard>
      <HeadlineTransactionCard>
        <TransactionColumTr>
          <TransactionColumTh>Type</TransactionColumTh>
          <TransactionColumTh>Amount</TransactionColumTh>
          <TransactionColumTh>Currency</TransactionColumTh>
        </TransactionColumTr>
      </HeadlineTransactionCard>
      <tbody>
        {transactions.map(transactions => (
          <TransactionColumTr key={transactions.id}>
            <TransactionColumTd>{transactions.type}</TransactionColumTd>
            <TransactionColumTd>{transactions.amount}</TransactionColumTd>
            <TransactionColumTd>{transactions.currency}</TransactionColumTd>
          </TransactionColumTr>
        ))}
      </tbody>
    </TransactionCard>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.objectOf(PropTypes.string).isRequired,
}.isRequired;

