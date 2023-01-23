function CostDate(props) {
  const year = props.date.toLocaleString('en-En', {month: "long"});
  const month = props.date.getFullYear();
  const day = props.date.toLocaleString('en-En', {day: "2-digit"});

  return (
    <div className="cost-item__date">
      <div className="cost-item__date-year">{year}</div>
      <div className="cost-item__date-month">{month}</div>
      <div className="cost-item__date-day">{day}</div>
    </div>
  )
}

export default CostDate;