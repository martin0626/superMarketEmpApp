type PlanT = {
    title: string,
    color: string,
    price: string,
    kids: string,
    details: string [],
}


export default function Pricing(){
 const plans: PlanT[] = [
    {
      title: "Classic",
      color: "#6759ef",
      price: "$255",
      kids: "2–6 kids",
      details: [
        "2 hours",
        "2 animators",
        "Food is not included",
        "Active games",
      ],
    },
    {
      title: "Deluxe",
      color: "#ff6b6b",
      price: "$400",
      kids: "6–10 kids",
      details: [
        "3 hours",
        "Favorite heroes",
        "Food is not included",
        "Multi-level quests",
      ],
    },
    {
      title: "Ultimate",
      color: "#f9b233",
      price: "$645",
      kids: "2–24 kids",
      details: [
        "4 hours",
        "Celebrities’ participation",
        "Catering is included",
        "Individual scripts",
      ],
    },
  ];

  return (
    <section className="pricing">
      <div className="pricing-container">
        <div className="pricing-header">
          <h2 className="pricing-title">Pricing</h2>
          <p className="pricing-subtitle">
            Our managers will be happy to help you select the right package.
          </p>

          <div className="pricing-tabs">
            <span className="active">Monday – Friday</span>
            <span>Saturday, Sunday & Holidays</span>
          </div>
        </div>

        <div className="pricing-cards">
          {plans.map((plan) => (
            <div key={plan.title} className="pricing-card">
              <div
                className="pricing-icon"
                style={{ backgroundColor: plan.color }}
              >
                🎈
              </div>
              <h3 className="pricing-name">{plan.title}</h3>
              <p
                className="pricing-price"
                style={{ color: plan.color }}
              >
                {plan.price}
              </p>
              <p className="pricing-kids">{plan.kids}</p>

              <ul className="pricing-details">
                {plan.details.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>

              <button
                className="pricing-btn"
                style={{
                  backgroundColor: plan.color,
                  boxShadow: `0 0.3rem 0.7rem rgba(0,0,0,0.15)`,
                }}
              >
                Select Plan
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};