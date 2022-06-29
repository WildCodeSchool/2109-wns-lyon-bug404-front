import React from 'react';
import { TeamMemberInterface } from '../../../../interfaces/TeamMemberInterface';

const colors = [
  'rgba(252,91,86,.4)',
  'rgba(18,157,164,.4)',
  'rgba(243,204,103,.4)'
];

const TeamList = ({ teamMember }: { teamMember: TeamMemberInterface }) => {
  const getColor = (letter: string) => {
    const index = letter.charCodeAt(0) % 3;
    if (index <= colors.length) {
      return colors[index];
    } else {
      return colors[0];
    }
  };
  return (
    <div className="flex flex-row items-center rounded-md m-2 cursor-pointer hover:bg-gray-200 p-1 justify-between ">
      <div className="flex flex-row items-center ">
        <div
          style={{
            backgroundColor: `${getColor(
              teamMember.firstName.toUpperCase().charAt(0)
            )}`
          }}
          className="bg-opacity-50 text-sm rounded-full w-10 h-10 p-2 flex flex-row items-center justify-center font-semibold"
        >
          {teamMember.firstName.toUpperCase().charAt(0) +
            teamMember.familyName.toUpperCase().charAt(0)}
        </div>
        <div className="text-xs  ml-2">
          {teamMember.firstName} {teamMember.familyName.toUpperCase()}
        </div>
      </div>
      <svg
        className="w-6 h-6 hover:stroke-red-700 "
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    </div>
  );
};

export default TeamList;
