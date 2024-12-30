        // Enhanced JavaScript with smooth animations
        function addFadeInAnimation() {
            const elements = document.querySelectorAll('.agent-card, .countdown-item, .calendar');
            elements.forEach((el, index) => {
                el.style.opacity = '0';
                setTimeout(() => {
                    el.classList.add('fade-in');
                }, index * 100);
            });
        }

        function getGreeting(hours) {
            if (hours < 12) return ["Good Morning", "🌅"];
            if (hours < 17) return ["Good Afternoon", "☀️"];
            if (hours < 21) return ["Good Evening", "🌆"];
            return ["Good Night", "🌙"];
        }

        function generateCalendar(date) {
            const firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
            const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);
            const startPadding = firstDay.getDay();
            const monthLength = lastDay.getDate();

            const calendarGrid = document.getElementById('calendar-grid');
            calendarGrid.innerHTML = '';

            // Add empty cells for padding with smooth transitions
            for (let i = 0; i < startPadding; i++) {
                const emptyDay = document.createElement('div');
                emptyDay.className = 'calendar-day fade-in';
                emptyDay.style.animationDelay = `${i * 50}ms`;
                calendarGrid.appendChild(emptyDay);
            }

            // Add days with staggered animation
            for (let i = 1; i <= monthLength; i++) {
                const dayEl = document.createElement('div');
                dayEl.className = 'calendar-day fade-in';
                if (i === date.getDate()) {
                    dayEl.className += ' today';
                }
                dayEl.textContent = i;
                dayEl.style.animationDelay = `${(i + startPadding) * 50}ms`;
                calendarGrid.appendChild(dayEl);
            }
        }

        function updateTimeComponents() {
            const now = new Date();
            const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

            // Smooth updates for time components
            const updateElement = (id, newContent) => {
                const element = document.getElementById(id);
                if (element.textContent !== newContent) {
                    element.style.opacity = '0';
                    setTimeout(() => {
                        element.textContent = newContent;
                        element.style.opacity = '1';
                    }, 200);
                }
            };

            updateElement('current-day', now.toLocaleDateString('en-US', {
                weekday: 'long',
                month: 'long',
                day: 'numeric'
            }));

            const [greetingText, greetingEmoji] = getGreeting(now.getHours());
            updateElement('greeting', `${greetingText} ${greetingEmoji}`);

            // Update weekday strip with smooth transitions
            const weekdaysContainer = document.getElementById('weekdays');
            weekdaysContainer.innerHTML = days.map((day, index) =>
                `<div class="weekday ${day === days[now.getDay()] ? 'active' : ''}"
                      style="animation-delay: ${index * 50}ms">
                    ${day.slice(0, 3)}
                </div>`
            ).join('');

            // Update calendar with smooth transitions
            updateElement('calendar-month', now.toLocaleDateString('en-US', {
                month: 'long',
                year: 'numeric'
            }));
            generateCalendar(now);

            // Smooth countdown updates
            function getTimeUntil(target) {
                const diff = target - now;
                const hours = Math.floor(diff / (1000 * 60 * 60));
                const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
                return `${hours}h ${minutes}m`;
            }

            const endOfDay = new Date(now);
            endOfDay.setHours(23, 59, 59, 999);
            updateElement('day-countdown', getTimeUntil(endOfDay));

            const endOfWeek = new Date(now);
            endOfWeek.setDate(now.getDate() + (6 - now.getDay()));
            endOfWeek.setHours(23, 59, 59, 999);
            updateElement('week-countdown', getTimeUntil(endOfWeek));

            const endOfMonth = new Date(now.getFullYear(), now.getMonth() + 1, 0, 23, 59, 59, 999);
            updateElement('month-countdown', getTimeUntil(endOfMonth));
        }

        // Initialize
        document.addEventListener('DOMContentLoaded', () => {
            updateTimeComponents();
            addFadeInAnimation();
            setInterval(updateTimeComponents, 60000);
        });
