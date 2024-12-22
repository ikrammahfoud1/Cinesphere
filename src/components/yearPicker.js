import React, { useEffect, useState } from "react";

const YearPicker = ({ setSelectedYear, selectedYear, disabled }) => {
  const currentYear = new Date().getFullYear();

  const handleYearChange = (e) => {
    // Ensure that the value is a valid number
    const year = e.target.value;
    if (year <= currentYear) {
      setSelectedYear(year);
    }
  };
  useEffect(() => {
    disabled && setSelectedYear("");
  }, [disabled]);
  return (
    <div className="flex flex-col items-center justify-center space-y-4">
      <input
        disabled={disabled}
        placeholder="Année"
        type="number"
        id="year"
        value={selectedYear}
        onChange={handleYearChange}
        min="1900"
        max={currentYear}
        className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none w-36 disabled:bg-gray-200 "
      />
    </div>
  );
};

export default YearPicker;
