import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const RevenueChart = () => {
  const data = [
    { name: "01", value: 400000 },
    { name: "02", value: 180000 },
    { name: "03", value: 320000 },
    { name: "04", value: 780000 },
    { name: "05", value: 100000 },
    { name: "06", value: 420000 },
    { name: "07", value: 580000 },
    { name: "08", value: 200000 },
    { name: "09", value: 300000 },
    { name: "10", value: 450000 },
    { name: "11", value: 430000 },
    { name: "12", value: 680000 },
  ];
  return (
    <ResponsiveContainer width="100%" height={400}>
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis tickFormatter={(value) => `${value / 1000}k`} />
        <Tooltip />
        <Bar dataKey="value" fill="#0070f4" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default RevenueChart;