import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Keyboard } from 'lucide-react';

const MONTH_NAMES = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];

const SHORT_MONTHS = [
  'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
  'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
];

const DAYS_HEADER = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];

function isSameDate(d1, d2) {
  if (!d1 || !d2) return false;
  return d1.year === d2.year && d1.month === d2.month && d1.day === d2.day;
}

function isDateBefore(d1, d2) {
  if (!d1 || !d2) return false;
  const t1 = new Date(d1.year, d1.month, d1.day).getTime();
  const t2 = new Date(d2.year, d2.month, d2.day).getTime();
  return t1 < t2;
}

function isDateBetween(target, d1, d2) {
  if (!target || !d1 || !d2) return false;
  const t = new Date(target.year, target.month, target.day).getTime();
  const t1 = new Date(d1.year, d1.month, d1.day).getTime();
  const t2 = new Date(d2.year, d2.month, d2.day).getTime();
  const min = Math.min(t1, t2);
  const max = Math.max(t1, t2);
  return t > min && t < max;
}

export default function CalendarSection({ locationName = "Candolim" }) {
  // Default to October 2026 (month 9) & November 2026 (month 10)
  const [currentYear, setCurrentYear] = useState(2026);
  const [currentMonth, setCurrentMonth] = useState(9); // 0-indexed: 9 = October

  // Default selection: Oct 18, 2026 to Oct 23, 2026
  const [startDate, setStartDate] = useState({ year: 2026, month: 9, day: 18 });
  const [endDate, setEndDate] = useState({ year: 2026, month: 9, day: 23 });

  const handlePrevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(prev => prev - 1);
    } else {
      setCurrentMonth(prev => prev - 1);
    }
  };

  const handleNextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(prev => prev + 1);
    } else {
      setCurrentMonth(prev => prev + 1);
    }
  };

  const handleDateClick = (year, month, day) => {
    const clicked = { year, month, day };

    if (!startDate || (startDate && endDate)) {
      setStartDate(clicked);
      setEndDate(null);
    } else if (startDate && !endDate) {
      if (isDateBefore(clicked, startDate)) {
        setStartDate(clicked);
      } else if (isSameDate(clicked, startDate)) {
        setStartDate(null);
      } else {
        setEndDate(clicked);
      }
    }
  };

  const handleClearDates = () => {
    setStartDate(null);
    setEndDate(null);
  };

  let nightCount = 0;
  if (startDate && endDate) {
    const t1 = new Date(startDate.year, startDate.month, startDate.day).getTime();
    const t2 = new Date(endDate.year, endDate.month, endDate.day).getTime();
    nightCount = Math.round(Math.abs(t2 - t1) / (1000 * 60 * 60 * 24));
  }

  let subtitleString = "Add your travel dates for exact pricing";
  if (startDate && endDate) {
    subtitleString = `${startDate.day} ${SHORT_MONTHS[startDate.month]} ${startDate.year} - ${endDate.day} ${SHORT_MONTHS[endDate.month]} ${endDate.year}`;
  } else if (startDate) {
    subtitleString = `${startDate.day} ${SHORT_MONTHS[startDate.month]} ${startDate.year} - Select checkout date`;
  }

  const nextMonthYear = currentMonth === 11 ? currentYear + 1 : currentYear;
  const nextMonthIndex = currentMonth === 11 ? 0 : currentMonth + 1;

  const renderMonthGrid = (year, month) => {
    const firstDayIndex = new Date(year, month, 1).getDay();
    const totalDays = new Date(year, month + 1, 0).getDate();

    const blanks = Array.from({ length: firstDayIndex });
    const days = Array.from({ length: totalDays }, (_, i) => i + 1);

    return (
      <div className="calendar-month">
        <div className="calendar-month-title">
          {MONTH_NAMES[month]} {year}
        </div>

        <div className="calendar-days-header">
          {DAYS_HEADER.map((d, idx) => (
            <div key={idx} className="calendar-header-day">{d}</div>
          ))}
        </div>

        <div className="calendar-days-grid">
          {blanks.map((_, idx) => (
            <div key={`blank-${idx}`} className="calendar-day-cell empty" />
          ))}

          {days.map(day => {
            const dateObj = { year, month, day };
            const isStart = isSameDate(dateObj, startDate);
            const isEnd = isSameDate(dateObj, endDate);
            const isInRange = isDateBetween(dateObj, startDate, endDate);

            let cellClass = 'calendar-day-cell';
            if (isStart && endDate) cellClass += ' range-start';
            else if (isStart) cellClass += ' range-single';
            if (isEnd) cellClass += ' range-end';
            if (isInRange) cellClass += ' range-middle';

            let btnClass = 'calendar-day-btn';
            if (isStart || isEnd) btnClass += ' active-endpoint';

            return (
              <div key={day} className={cellClass}>
                <button
                  className={btnClass}
                  onClick={() => handleDateClick(year, month, day)}
                >
                  {day}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  return (
    <div id="calendar-section" className="calendar-container">
      {/* Header Info */}
      <div className="calendar-header-info">
        <h3 className="calendar-title">
          {nightCount > 0 ? `${nightCount} nights in ${locationName}` : "Select check-in date"}
        </h3>
        <div className="calendar-subtitle">{subtitleString}</div>
      </div>

      {/* Dual Month Calendar Display */}
      <div className="calendar-wrapper">
        <button className="calendar-nav-btn prev" onClick={handlePrevMonth} aria-label="Previous month">
          <ChevronLeft size={18} />
        </button>

        <div className="calendar-dual-months">
          {renderMonthGrid(currentYear, currentMonth)}
          {renderMonthGrid(nextMonthYear, nextMonthIndex)}
        </div>

        <button className="calendar-nav-btn next" onClick={handleNextMonth} aria-label="Next month">
          <ChevronRight size={18} />
        </button>
      </div>

      {/* Footer Controls */}
      <div className="calendar-footer">
        <button className="calendar-keyboard-btn" aria-label="Keyboard shortcuts">
          <Keyboard size={18} />
        </button>

        <button className="calendar-clear-btn" onClick={handleClearDates}>
          Clear dates
        </button>
      </div>
    </div>
  );
}
