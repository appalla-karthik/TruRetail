const SummaryCards = ({ items }) => {
  const totalQuantity = items.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  const totalRevenue = items.reduce(
    (sum, item) => sum + item.totalAmount,
    0
  );

  const avgDiscount =
    items.length === 0
      ? 0
      : Math.round(
          items.reduce((sum, item) => sum + item.discount, 0) /
            items.length
        );

  return (
    <div className="summary-section">
      <div className="summary-card">
        <h4>Total Quantity</h4>
        <p>{totalQuantity}</p>
      </div>

      <div className="summary-card">
        <h4>Total Revenue</h4>
        <p>₹{totalRevenue.toLocaleString()}</p>
      </div>

      <div className="summary-card">
        <h4>Avg Discount</h4>
        <p>{avgDiscount}%</p>
      </div>
    </div>
  );
};

export default SummaryCards;
