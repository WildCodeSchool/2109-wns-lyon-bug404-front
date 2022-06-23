import format from 'date-fns/format';

const DueDate = ({ date }: { date: Date }): JSX.Element => {
  console.log(date);
  return (
    <div className="flex flex-row justify-center justify-items-center">
      <svg
        className="w-6 h-6 stroke-secondary-100"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
        />
      </svg>
      <p className="text-sm m-auto">
        {' '}
        From: {format(new Date(date), 'PP')} - To:{' '}
        {format(new Date(date), 'PP')}
      </p>
    </div>
  );
};

export default DueDate;
