import React from "react";
import { useParams } from "react-router-dom";
// import "./index.css";
import "./DetailedPlansPage.css";

const plansData = [
  {
    id: 1,
    name: "Starter Plan",
    image: "r1.png",
    description:
      "Ideal for basic needs like charging phones and small lights. A great starter plan for people looking to dip their toes into solar energy.",
    powerCapacity: "500W",
    duration: "5 hours for 5 phones",
    appliances: [
      { name: "Phone Charger", quantity: 5, power: "10W" },
      { name: "LED Lights", quantity: 4, power: "20W" },
    ],
    cost: {
      solarAppliances: "$500",
      installation: "$150",
    },
    totalCost: "$650",
  },
  {
    id: 2,
    name: "Home Plan",
    image: "r2.png",
    description:
      "Power for basic household appliances like fans, small TVs, and lights. Perfect for daily home needs.",
    powerCapacity: "2kW",
    duration: "4 hours for a fan, TV, and lights.",
    appliances: [
      { name: "Fan", quantity: 2, power: "75W" },
      { name: "LED TV", quantity: 1, power: "100W" },
      { name: "LED Lights", quantity: 6, power: "20W" },
    ],
    cost: {
      solarAppliances: "$1,200",
      installation: "$300",
    },
    totalCost: "$1,500",
  },
  {
    id: 3,
    name: "Business Plan",
    image: "r3.png",
    description:
      "Supports medium businesses with energy for computers, lighting, and other equipment. A balanced plan for office setups.",
    powerCapacity: "5kW",
    duration: "6 hours for computers, lighting, and other office equipment.",
    appliances: [
      { name: "Desktop Computer", quantity: 5, power: "250W" },
      { name: "Office Lighting", quantity: 10, power: "50W" },
      { name: "Fan", quantity: 3, power: "75W" },
    ],
    cost: {
      solarAppliances: "$2,500",
      installation: "$500",
    },
    totalCost: "$3,000",
  },
  {
    id: 4,
    name: "Premium Plan",
    image: "r1.png",
    description:
      "Designed for high power demands in offices or large homes, supporting multiple high-energy appliances.",
    powerCapacity: "10kW",
    duration: "10 hours for multiple appliances and devices.",
    appliances: [
      { name: "Air Conditioner", quantity: 2, power: "1000W" },
      { name: "Refrigerator", quantity: 2, power: "500W" },
      { name: "LED TV", quantity: 3, power: "100W" },
      { name: "Lights", quantity: 12, power: "20W" },
    ],
    cost: {
      solarAppliances: "$5,000",
      installation: "$1,000",
    },
    totalCost: "$6,000",
  },
];

const DetailedPlansPage = () => {
  const { id } = useParams(); // Gets the plan ID from the URL
  const plan = plansData.find((plan) => plan.id === parseInt(id));

  return (
    <div className="detailed-plans-page paddings wrapper">
      <div className="innerWidth">
        <div className="plan-header flexColCenter">
          <h1 className="primaryText">{plan.name}</h1>
          <img src={plan.image} alt={plan.name} className="plan-image" />
        </div>

        <div className="plan-details">
          <h3 className="orangeText">Plan Overview</h3>
          <p className="secondaryText">{plan.description}</p>
          <p className="powerCapacity">
            <strong>Power Capacity: </strong> {plan.powerCapacity}
          </p>
          <p className="duration">
            <strong>Estimated Duration: </strong> {plan.duration}
          </p>
        </div>

        <div className="appliance-details">
          <h3 className="orangeText">Included Appliances</h3>
          <ul>
            {plan.appliances.map((appliance, index) => (
              <li key={index} className="appliance-item">
                <strong>{appliance.name}</strong> x{appliance.quantity} (
                {appliance.power} each)
              </li>
            ))}
          </ul>
        </div>

        <div className="cost-details">
          <h3 className="orangeText">Cost Breakdown</h3>
          <p>
            <strong>Solar Appliances: </strong> {plan.cost.solarAppliances}
          </p>
          <p>
            <strong>Installation: </strong> {plan.cost.installation}
          </p>
          <p className="total-cost">
            <strong>Total Estimated Cost: </strong> {plan.totalCost}
          </p>
        </div>

        <span
          className="dppbutton"
          onClick={() => (window.location.href = "/contact")}
        >
          Contact Us for More Details
        </span>
      </div>
    </div>
  );
};

export default DetailedPlansPage;
