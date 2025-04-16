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
    { name: "Tháng 1", value: 400000 },
    { name: "Tháng 2", value: 180000 },
    { name: "Tháng 3", value: 320000 },
    { name: "Tháng 4", value: 780000 },
    { name: "Tháng 5", value: 100000 },
    { name: "Tháng 6", value: 420000 },
    { name: "Tháng 7", value: 580000 },
    { name: "Tháng 8", value: 200000 },
    { name: "Tháng 9", value: 300000 },
    { name: "Tháng 10", value: 450000 },
    { name: "Tháng 11", value: 430000 },
    { name: "Tháng 12", value: 680000 },
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