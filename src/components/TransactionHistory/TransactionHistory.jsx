import PropTypes from 'prop-types';
import transactions from 'Data/transactions.json';
import {
  TransactionCard, TransactionColumTh,
  TransactionColumTd, HeadlineTransactionCard, BodyTransactionCard
} from './TransactionHistory.styled';

export const TransactionHistory = (items = { transactions }) => {
  return (
    <TransactionCard>
      <HeadlineTransactionCard>
        <tr>
          <TransactionColumTh>Type</TransactionColumTh>
          <TransactionColumTh>Amount</TransactionColumTh>
          <TransactionColumTh>Currency</TransactionColumTh>
        </tr>
      </HeadlineTransactionCard>
      <BodyTransactionCard>
        {transactions.map(transactions => (
          <tr key={transactions.id}>
            <TransactionColumTd>{transactions.type}</TransactionColumTd>
            <TransactionColumTd>{transactions.amount}</TransactionColumTd>
            <TransactionColumTd>{transactions.currency}</TransactionColumTd>
          </tr>
        ))}
      </BodyTransactionCard>
    </TransactionCard>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.objectOf(PropTypes.string).isRequired,
}.isRequired;

