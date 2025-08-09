export default function Card({ title, value, trend, trendIcon: TrendIcon, trendColor }) {
  return (
    <div className="rounded-lg bg-white p-6 shadow-lg dark:bg-gray-800">
      <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">
        {title}
      </h3>
      <div className="mt-2 flex items-center justify-between">
        <p className="text-2xl font-semibold text-gray-900 dark:text-white">
          ${value.toLocaleString()}
        </p>
        <div className={`flex items-center ${trendColor}`}>
          <TrendIcon className="mr-1 h-4 w-4" />
          <span>{trend}%</span>
        </div>
      </div>
    </div>
  );
}
