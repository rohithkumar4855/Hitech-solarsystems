import { useState } from "react";
import { motion } from "framer-motion";

export default function RoiCalculator() {
  const [bill, setBill] = useState(3000);

  // Simple logic (can be adjusted)
  const systemSize = (bill / 1000).toFixed(1); // kW
  const cost = Math.round(Number(systemSize) * 65000);
  const subsidy = Math.min(78000, cost * 0.4);
  const finalCost = cost - subsidy;
  const savingsYearly = bill * 12 * 0.9;
  const roiYears = (finalCost / savingsYearly).toFixed(1);

  return (
    <section className="py-24 bg-sky-900 border-t border-white/5">
      <div className="max-w-5xl mx-auto px-6 text-center">

        <h2 className="font-bebas text-6xl mb-6">
          SOLAR <span className="text-sun">ROI CALCULATOR</span>
        </h2>

        <p className="text-slate-400 mb-10">
          Estimate your savings and investment in seconds.
        </p>

        {/* Input */}
        <div className="mb-10">
          <input
            type="range"
            min="500"
            max="50000"
            value={bill}
            onChange={(e) => setBill(Number(e.target.value))}
            className="w-full"
          />
          <p className="mt-4 text-white text-xl">
            Monthly Bill: ₹{bill}
          </p>
        </div>

        {/* Results */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="grid md:grid-cols-2 gap-6 text-left"
        >
          <Card label="System Size" value={`${systemSize} kW`} />
          <Card label="Installation Cost" value={`₹${cost}`} />
          <Card label="Govt Subsidy" value={`₹${subsidy}`} />
          <Card label="Final Cost" value={`₹${finalCost}`} />
          <Card label="Yearly Savings" value={`₹${savingsYearly}`} />
          <Card label="Return (ROI)" value={`${roiYears} Years`} />
        </motion.div>

      </div>
    </section>
  );
}

const Card = ({ label, value }: any) => (
  <div className="p-6 bg-sky-800/40 rounded-2xl border border-white/5">
    <p className="text-slate-400 text-sm">{label}</p>
    <h3 className="text-2xl font-bold text-sun">{value}</h3>
  </div>
);