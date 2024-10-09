import React from 'react';
import { Card, CardHeader } from './ui/card';

interface Class {
  time: string;
  title: string;
}

interface Day {
  day: string;
  classes: Class[];
}

const schedule: Day[] = [
  {
    day: 'Poniedziałek',
    classes: [
      { time: '18:00', title: 'MMA' },
      { time: '19:30', title: 'Boks' },
    ],
  },
  {
    day: 'Wtorek',
    classes: [
      { time: '17:00', title: 'Zajęcia dla dzieci' },
      { time: '19:00', title: 'Sambo' },
    ],
  },
  {
    day: 'Środa',
    classes: [
      { time: '18:00', title: 'MMA' },
      { time: '19:30', title: 'Boks' },
    ],
  },
  {
    day: 'Czwartek',
    classes: [
      { time: '17:00', title: 'Zajęcia dla dzieci' },
      { time: '19:00', title: 'Sambo' },
    ],
  },
  {
    day: 'Piątek',
    classes: [
      { time: '18:00', title: 'MMA' },
      { time: '19:30', title: 'Boks' },
    ],
  },
  {
    day: 'Sobota',
    classes: [
      { time: '10:00', title: 'Sparing' },
      { time: '12:00', title: 'Zajęcia otwarte' },
    ],
  },
  {
    day: 'Niedziela',
    classes: [
      { time: '10:00', title: 'Sparing' },
      { time: '12:00', title: 'Zajęcia otwarte' },
    ],
  },
];

const Schedule: React.FC = () => {
  return (
    <div className="p-2">
      <Card>
        <CardHeader>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 bg">
        {schedule.map((day, index) => (
          <div key={index} className="border rounded-lg p-4 bg-secondary">
            <h2 className="text-xl font-semibold  text-center mb-7">{day.day}</h2>
            {day.classes.length > 0 ? (
              day.classes.map((classItem, idx) => (
                <div key={idx} className="flex justify-between py-1">
                  <span>{classItem.time}</span>
                  <span>{classItem.title}</span>
                </div>
              ))
            ) : (
              <p className="text-gray-500">Brak zajęć</p>
            )}
          </div>
        ))}
      </div>
        </CardHeader>
      </Card>
    </div>
  );
};

export default Schedule;
