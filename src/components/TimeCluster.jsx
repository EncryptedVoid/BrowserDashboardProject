import React, { useState, useEffect } from 'react';

const TimeCluster = () => {
  // State for current time
  const [time, setTime] = useState(new Date());
  const [colorScheme, setColorScheme] = useState({
    primary: 'rgb(59, 130, 246)',
    secondary: 'rgb(139, 92, 246)',
    background: 'rgba(15, 23, 42, 0.15)',
  });

  // Update time every second
  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
      updateColorScheme(new Date());
    }, 1000);

    // Initial color scheme
    updateColorScheme(time);

    // Cleanup on unmount
    return () => clearInterval(timer);
  }, []);

  // Update color scheme based on time of day
  const updateColorScheme = (date) => {
    const hour = date.getHours();

    if (hour >= 5 && hour < 12) {
      // Morning - warm orange/yellow
      setColorScheme({
        primary: 'rgb(249, 115, 22)',
        secondary: 'rgb(234, 179, 8)',
        background: 'rgba(26, 32, 44, 0.15)',
      });
    } else if (hour >= 12 && hour < 17) {
      // Afternoon - vibrant blue
      setColorScheme({
        primary: 'rgb(14, 165, 233)',
        secondary: 'rgb(59, 130, 246)',
        background: 'rgba(15, 23, 42, 0.15)',
      });
    } else if (hour >= 17 && hour < 20) {
      // Evening - purple/pink
      setColorScheme({
        primary: 'rgb(139, 92, 246)',
        secondary: 'rgb(217, 70, 239)',
        background: 'rgba(17, 24, 39, 0.15)',
      });
    } else {
      // Night - dark blue/teal
      setColorScheme({
        primary: 'rgb(20, 184, 166)',
        secondary: 'rgb(6, 95, 70)',
        background: 'rgba(5, 10, 24, 0.15)',
      });
    }
  };

  // Get emoji based on time of day
  const getTimeEmoji = () => {
    const hour = time.getHours();

    if (hour === 0 || hour === 23) return '🌙'; // Midnight
    if (hour >= 1 && hour < 5) return '🌃'; // Late night
    if (hour >= 5 && hour < 12) return '🌅'; // Morning
    if (hour >= 12 && hour < 17) return '☀️'; // Afternoon
    if (hour >= 17 && hour < 20) return '🌆'; // Evening
    return '🌙'; // Night
  };

  // Format functions
  const formatTime24h = (date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false });
  };

  const formatDate = (date) => {
    return date.toLocaleDateString([], { weekday: 'long', month: 'long', day: 'numeric' });
  };

  const formatSeconds = (date) => {
    return date.getSeconds().toString().padStart(2, '0');
  };

  const formatTimezone = (date) => {
    return date.toLocaleTimeString([], { timeZoneName: 'short' }).split(' ')[1];
  };

  // Calculate time remaining
  const calculateTimeRemaining = (targetDate) => {
    const diff = targetDate - time;
    if (diff <= 0) return '00:00:00';

    const hours = Math.floor(diff / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  // Calculate end of day
  const endOfDay = () => {
    const end = new Date(time);
    end.setHours(23, 59, 59, 999);
    return calculateTimeRemaining(end);
  };

  // Calculate end of week
  const endOfWeek = () => {
    const end = new Date(time);
    end.setDate(end.getDate() + (6 - end.getDay()));
    end.setHours(23, 59, 59, 999);
    return calculateTimeRemaining(end);
  };

  // Calculate end of month
  const endOfMonth = () => {
    const end = new Date(time);
    end.setMonth(end.getMonth() + 1, 0);
    end.setHours(23, 59, 59, 999);
    return calculateTimeRemaining(end);
  };

  // Calculate end of year
  const endOfYear = () => {
    const end = new Date(time);
    end.setMonth(11, 31);
    end.setHours(23, 59, 59, 999);
    return calculateTimeRemaining(end);
  };

  // Generate calendar data for current month
  const generateCalendar = () => {
    const year = time.getFullYear();
    const month = time.getMonth();
    const currentDay = time.getDate();

    const firstDayOfMonth = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    const calendar = [];
    let dayCounter = 1;

    // Create weeks
    for (let week = 0; week < 6; week++) {
      const days = [];

      // Create days for each week
      for (let day = 0; day < 7; day++) {
        if ((week === 0 && day < firstDayOfMonth) || dayCounter > daysInMonth) {
          days.push(null);
        } else {
          const isPast = dayCounter < currentDay;
          const isToday = dayCounter === currentDay;
          days.push({ day: dayCounter, isPast, isToday });
          dayCounter++;
        }
      }

      calendar.push(days);

      // If we've covered all days, break
      if (dayCounter > daysInMonth) break;
    }

    return calendar;
  };

  const calendar = generateCalendar();

  return (
    <div className="flex items-center justify-center">
      <div className="flex gap-4">
        {/* Time Display Cluster */}
        <div
          className="relative p-6 rounded-xl overflow-hidden"
          style={{
            width: '38.2vw',
            backgroundColor: colorScheme.background,
            backdropFilter: 'blur(10px)',
            boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.3), 0 4px 6px -4px rgba(0, 0, 0, 0.2)'
          }}
        >
          {/* Grid layout using golden ratio */}
          <div className="grid grid-cols-5 gap-4" style={{ gridTemplateColumns: '1fr 0.618fr 1fr 0.618fr 1fr' }}>
            {/* Time emoji and display */}
            <div className="col-span-5 flex items-center justify-center mb-4">
              <span className="text-4xl mr-4">{getTimeEmoji()}</span>
              <div className="text-5xl font-light text-white tracking-wide transition-all duration-500 ease-in-out">
                {formatTime24h(time)}
              </div>
            </div>

            {/* Date display */}
            <div className="col-span-3 transition-all duration-300">
              <div className="text-xl text-gray-200 font-medium">
                {formatDate(time)}
              </div>
            </div>

            {/* Timezone */}
            <div className="col-span-2 text-right">
              <div className="text-lg text-gray-300">
                {formatTimezone(time)}
              </div>
            </div>

            {/* Countdowns */}
            <div className="col-span-5 grid grid-cols-2 gap-4">
              <div className="bg-gray-800 bg-opacity-30 p-3 rounded-lg">
                <div className="flex justify-between items-center">
                  <div className="text-xs text-gray-400">End of Day</div>
                  <div className="text-xs text-gray-400">{endOfDay()}</div>
                </div>
                <div className="w-full bg-gray-800 bg-opacity-50 h-2 mt-2 rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full transition-all duration-200 ease-out"
                    style={{
                      width: `${(time.getHours() * 3600 + time.getMinutes() * 60 + time.getSeconds()) / 86400 * 100}%`,
                      background: `linear-gradient(to right, ${colorScheme.primary}, ${colorScheme.secondary})`
                    }}
                  ></div>
                </div>
              </div>
              <div className="bg-gray-800 bg-opacity-30 p-3 rounded-lg">
                <div className="flex justify-between items-center">
                  <div className="text-xs text-gray-400">End of Week</div>
                  <div className="text-xs text-gray-400">{endOfWeek()}</div>
                </div>
                <div className="w-full bg-gray-800 bg-opacity-50 h-2 mt-2 rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full transition-all duration-200 ease-out"
                    style={{
                      width: `${time.getDay() / 7 * 100}%`,
                      background: `linear-gradient(to right, ${colorScheme.primary}, ${colorScheme.secondary})`
                    }}
                  ></div>
                </div>
              </div>
              <div className="bg-gray-800 bg-opacity-30 p-3 rounded-lg">
                <div className="flex justify-between items-center">
                  <div className="text-xs text-gray-400">End of Month</div>
                  <div className="text-xs text-gray-400">{endOfMonth()}</div>
                </div>
                <div className="w-full bg-gray-800 bg-opacity-50 h-2 mt-2 rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full transition-all duration-200 ease-out"
                    style={{
                      width: `${(time.getDate() - 1) / (new Date(time.getFullYear(), time.getMonth() + 1, 0).getDate()) * 100}%`,
                      background: `linear-gradient(to right, ${colorScheme.primary}, ${colorScheme.secondary})`
                    }}
                  ></div>
                </div>
              </div>
              <div className="bg-gray-800 bg-opacity-30 p-3 rounded-lg">
                <div className="flex justify-between items-center">
                  <div className="text-xs text-gray-400">End of Year</div>
                  <div className="text-xs text-gray-400">{endOfYear()}</div>
                </div>
                <div className="w-full bg-gray-800 bg-opacity-50 h-2 mt-2 rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full transition-all duration-200 ease-out"
                    style={{
                      width: `${time.getMonth() / 12 * 100}%`,
                      background: `linear-gradient(to right, ${colorScheme.primary}, ${colorScheme.secondary})`
                    }}
                  ></div>
                </div>
              </div>
            </div>
          </div>

          {/* Decorative elements using golden ratio */}
          <div
            className="absolute -top-16 -right-16 w-32 h-32 rounded-full opacity-20"
            style={{
              background: `radial-gradient(circle, ${colorScheme.primary}, ${colorScheme.secondary})`,
              filter: 'blur(25px)'
            }}
          ></div>
          <div
            className="absolute -bottom-10 -left-10 w-20 h-20 rounded-full opacity-20"
            style={{
              background: `radial-gradient(circle, ${colorScheme.secondary}, ${colorScheme.primary})`,
              filter: 'blur(20px)'
            }}
          ></div>
        </div>

        {/* Calendar */}
        <div
          className="relative p-6 rounded-xl overflow-hidden"
          style={{
            width: '23.6vw', // Golden ratio of the time display width
            backgroundColor: colorScheme.background,
            backdropFilter: 'blur(10px)',
            boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.3), 0 4px 6px -4px rgba(0, 0, 0, 0.2)'
          }}
        >
          <div className="mb-4">
            <h2 className="text-xl text-white font-medium">
              {time.toLocaleDateString([], { month: 'long', year: 'numeric' })}
            </h2>
          </div>

          {/* Calendar grid */}
          <div className="grid grid-cols-7 gap-1 text-center">
            {/* Weekday headers */}
            {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map((day, index) => (
              <div key={`header-${index}`} className="text-gray-400 text-xs font-medium py-1">{day}</div>
            ))}

            {/* Calendar days */}
            {calendar.map((week, weekIndex) => (
              week.map((day, dayIndex) => (
                <div
                  key={`day-${weekIndex}-${dayIndex}`}
                  className={`aspect-square flex items-center justify-center text-sm rounded-full ${
                    day ? (
                      day.isToday
                        ? 'text-white font-bold'
                        : day.isPast
                          ? 'text-gray-500'
                          : 'text-gray-300'
                    ) : 'text-transparent'
                  }`}
                  style={
                    day?.isToday
                      ? {
                          background: `linear-gradient(135deg, ${colorScheme.primary}, ${colorScheme.secondary})`,
                        }
                      : {}
                  }
                >
                  {day ? (
                    <>
                      {day.isToday ? (
                        <span className="relative">
                          {day.day}
                          <span className="absolute -top-3 -right-3 text-xs">🔥</span>
                        </span>
                      ) : day.isPast ? (
                        <span className="relative">
                          {day.day}
                          <span className="absolute top-0 left-0 w-full h-full flex items-center justify-center text-gray-400 font-bold text-lg">X</span>
                        </span>
                      ) : (
                        day.day
                      )}
                    </>
                  ) : null}
                </div>
              ))
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimeCluster;