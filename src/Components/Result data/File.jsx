import React, { useEffect, useState } from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";

// Simulate fetch (you can replace this with a real API call)
const fetchMembershipData = async () => {
  // Simulated fetch response
  return [
    {
      id: 1,
      name: "Basic",
      price: "$20/month"
    },
    {
      id: 2,
      name: "Standard",
      price: "$35/month"
    },
    {
      id: 3,
      name: "Premium",
      price: "$60/month"
    },
    {
      id: 4,
      name: "Annual VIP",
      price: "$600/year"
    }
  ];
};

const MembershipLineChart = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      const jsonData = await fetchMembershipData();

      // Convert price strings to numbers (monthly equivalent)
      const chartData = jsonData.map(item => {
        const isYearly = item.price.includes("/year");
        const rawPrice = parseFloat(item.price.replace(/[^0-9.]/g, ""));
        const monthlyPrice = isYearly ? rawPrice / 12 : rawPrice;

        return {
          name: item.name,
          price: monthlyPrice
        };
      });

      setData(chartData);
    };

    loadData();
  }, []);

  return (
    <LineChart width={400} height={400} data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Line type="monotone" dataKey="price" stroke="#8884d8" />
    </LineChart>
  );
};

export default MembershipLineChart;
