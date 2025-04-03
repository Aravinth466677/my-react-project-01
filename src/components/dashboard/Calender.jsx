import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css"; // Import default styles
import "../../style/calender.css";
import profile_pic from "../../icons/unsplash_X6Uj51n5CE8.png";

function MyApp() {
  const [selectedDate, setSelectedDate] = useState(new Date());

 
  const profiles = [
    {
      id: 1,
      name: "Aravinth Viswanathan",
      designation: "Product Manager",
      birthDate: { month: 1, day: 15 }, // February 15
      profilePic: profile_pic,
    },
    {
      id: 2,
      name: "John Doe",
      designation: "Software Engineer",
      birthDate: { month: 6, day: 10 }, // July 10
      profilePic: profile_pic,
    },
    {
      id: 3,
      name: "Jane Smith",
      designation: "UI/UX Designer",
      birthDate: { month: 3, day: 25 }, // April 25
      profilePic: profile_pic,
    },
  ];

  const selectedMonth = selectedDate.getMonth();
  const selectedDay = selectedDate.getDate();

  
  const visibleProfiles = profiles.filter(
    (profile) =>
      profile.birthDate.month > selectedMonth ||
      (profile.birthDate.month === selectedMonth &&
        profile.birthDate.day >= selectedDay)
  );

  return (
    <div className="calendar-container">
      <h1>Calendar</h1>

      <div className="custom-calendar">
        <Calendar onChange={setSelectedDate} value={selectedDate} />
      </div>

      <hr />

      <div className="birthcal">
        <h2>Birthday Calendar</h2>

        <div className="profile">
          {visibleProfiles.length > 0 ? (
            visibleProfiles.map((profile) => (
              <div className="protfolio" key={profile.id}>
                <img src={profile.profilePic} alt="profile_pic" />
                <h6>{profile.name}</h6>
                <p>{profile.designation}</p>
                <p>
                  {profile.birthDate.day} / {profile.birthDate.month + 1}
                </p>
              </div>
            ))
          ) : (
            <p>No upcoming birthdays!</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default MyApp;
