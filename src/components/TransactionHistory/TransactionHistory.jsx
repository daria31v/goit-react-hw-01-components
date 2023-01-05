import PropTypes from 'prop-types';
import transactions from 'Data/transactions.json';

export const TransactionHistory = (items = { transactions }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody>
        {transactions.map(transactions => (
          <tr key={transactions.id}>
            <th>{transactions.type}</th>
            <th>{transactions.amount}</th>
            <th>{transactions.currency}</th>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.objectOf(PropTypes.string).isRequired,
}.isRequired;

