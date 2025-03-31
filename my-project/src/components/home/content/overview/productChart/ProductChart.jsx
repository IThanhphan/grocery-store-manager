import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const ProductChart = () => {
  const data = [
    { name: "Thuốc Marl đỏ", value: 5250000 },
    { name: "Thuốc craven loại nhỏ", value: 4624000 },
    { name: "Thuốc Marl đỏ", value: 5250000 },
    { name: "Thuốc craven loại nhỏ", value: 4624000 },
    { name: "Thuốc Marl đỏ", value: 5250000 },
    { name: "Thuốc craven loại nhỏ", value: 4624000 },
    { name: "Thuốc Marl đỏ", value: 5250000 },
    { name: "Thuốc craven loại nhỏ", value: 4624000 },
    { name: "Thuốc Marl đỏ", value: 5250000 },
    { name: "Thuốc craven loại nhỏ", value: 4624000 },
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

export default ProductChart;
