const SalesTable = ({ items, loading }) => {
  if (loading) {
    return (
      <div className="table-section">
        <p className="no-results">Loading sales data…</p>
      </div>
    );
  }

  if (!items.length) {
    return (
      <div className="table-section">
        <p className="no-results">
          No results found. Try adjusting filters or search.
        </p>
      </div>
    );
  }

  return (
    <div className="table-section">
      <table>
        <thead>
          <tr>
            <th>Customer</th>
            <th>Phone</th>
            <th>Region</th>
            <th>Category</th>
            <th>Qty</th>
            <th>Total</th>
            <th>Discount</th>
            <th>Payment</th>
          </tr>
        </thead>

        <tbody>
          {items.map((row) => (
            <tr key={row.transactionId}>
              <td>{row.customerName}</td>
              <td title={row.phoneNumber}>
                {row.phoneNumber}
              </td>
              <td>{row.customerRegion}</td>
              <td>{row.productCategory}</td>
              <td>{row.quantity}</td>
              <td>₹{row.totalAmount.toLocaleString()}</td>
              <td>{row.discount}%</td>
              <td>{row.paymentMethod}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SalesTable;
