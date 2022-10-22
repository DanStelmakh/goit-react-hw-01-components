import PropTypes from 'prop-types';
import {
  Table,
  TH,
  TD,
} from 'components/TransactionHistory/TransactionHistory.styled';
export default function TransactionHistory({ transactions }) {
  return (
    <Table>
      <thead>
        <tr>
          <TH>Type</TH>
          <TH>Amount</TH>
          <TH>Currency</TH>
        </tr>
      </thead>

      <tbody>
        {transactions.map(transaction => (
          <tr key={transaction.id}>
            <TD>{transaction.type}</TD>
            <TD>{transaction.amount}</TD>
            <TD>{transaction.currency}</TD>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

TransactionHistory.protoTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
