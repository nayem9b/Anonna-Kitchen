import React from "react";

const MyReviewsTable = () => {
  return (
    <div>
      <tr>
        <td class='sticky inset-y-0 left-0 bg-white px-4 py-2'>
          <label class='sr-only' for='Row1'>
            Row 1
          </label>

          <input
            class='h-5 w-5 rounded border-gray-200'
            type='checkbox'
            id='Row1'
          />
        </td>
        <td class='whitespace-nowrap px-4 py-2 font-medium text-gray-900'>
          #00001
        </td>
        <td class='whitespace-nowrap px-4 py-2 text-gray-700'>
          John Frusciante
        </td>
        <td class='whitespace-nowrap px-4 py-2 text-gray-700'>john@rhcp.com</td>
        <td class='whitespace-nowrap px-4 py-2 text-gray-700'>$783.23</td>
        <td class='whitespace-nowrap px-4 py-2'>
          <strong class='rounded bg-red-100 px-3 py-1.5 text-xs font-medium text-red-700'>
            Cancelled
          </strong>
        </td>
      </tr>
    </div>
  );
};

export default MyReviewsTable;
