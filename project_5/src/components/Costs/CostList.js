import CostItem from "./CostItem";

const CostList = (props) => {
  if (props.costs.length === 0) {
    return (
      <p className="card costs__no-results">No expenses this year</p>
    );
  }

  return (
    <div className="cost-list">
      {props.costs.map((cost) => (
        <CostItem
          key={cost.id}
          date={cost.date}
          name={cost.name}
          price={cost.price}
        />
      ))}
    </div>
  )
};

export default CostList;