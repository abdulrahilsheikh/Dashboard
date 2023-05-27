type DashboardStatsCardType = {
  count: number;
  type: string;
  icon: string;
  label: string;
  percent: number;
};

export const DashboardStatsCard = ({
  count,
  type,
  icon,
  label,
  percent,
}: DashboardStatsCardType) => {
  const statsType: any = {
    increase: (
      <div>
        <div className="mt-1 text-sm flex items-center gap-1 text-green-600">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
            />
          </svg>
          <div>{percent}%</div>
        </div>
      </div>
    ),
    decrease: (
      <div>
        <div className="mt-1 text-sm flex items-center gap-1  text-red-600">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6"
            />
          </svg>
          <div>{percent}%</div>
        </div>
      </div>
    ),
  };
  return (
    <div className="h-94 p-4  rounded-lg shadow-md border-gray-100 bg-white text-black">
      <div className="flex flex-col items-start h-full">
        <div>
          <span className="rounded-full aspect-square w-12 flex items-center justify-center bg-blue-100  text-blue-600">
            <i className={`${icon} text-xl`}></i>
          </span>
        </div>
        <div className="mt-auto flex gap-4 items-center">
          <div className="font-semibold text-xl">{count}</div>
          {statsType[type]}
        </div>
        <div className="text-sm text-slate-400">{label}</div>
      </div>
    </div>
  );
};
