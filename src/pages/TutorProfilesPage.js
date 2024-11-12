import React, { useState } from 'react';
import './TutorProfilesPage.css';

const tutors = [
  {
    name: 'John Doe',
    subjects: ['Math', 'Physics'],
    availability: 'Mon-Fri, 9 AM - 5 PM',
    photo: '/path/to/john-photo.jpg',
  },
  {
    name: 'Jane Smith',
    subjects: ['Chemistry', 'Biology'],
    availability: 'Tue-Sat, 10 AM - 4 PM',
    photo: '/path/to/jane-photo.jpg',
  },
  {
    name: 'Emily Clark',
    subjects: ['English', 'History'],
    availability: 'Mon-Wed, 8 AM - 12 PM',
    photo: '/path/to/emily-photo.jpg',
  },
  // Add more tutors as needed
];

const TutorsPage = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredTutors = tutors.filter(tutor =>
    tutor.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="tutors-page">
      <section className="tutors-header">
        <h1>Find a Tutor</h1>
        <input
          type="text"
          className="search-bar"
          placeholder="Search tutors by name"
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
        />
      </section>

      <section className="tutors-list">
        {filteredTutors.map((tutor, index) => (
          <div key={index} className="tutor-card">
            <img src={tutor.photo} alt={tutor.name} className="tutor-photo" />
            <h3 className="tutor-name">{tutor.name}</h3>
            <p className="tutor-subjects">
              Subjects: {tutor.subjects.join(', ')}
            </p>
            <p className="tutor-availability">Availability: {tutor.availability}</p>
            <button className="contact-button">Contact</button>
          </div>
        ))}
      </section>
    </div>
  );
};

export default TutorsPage;
