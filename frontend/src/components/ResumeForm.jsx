import React from 'react';
import { useState } from 'react';
import FormInput from './FormInput';

const ResumeForm = () => {
  const [formData, setFormData] = useState({
    personalInfo: {
      name: '',
      email: '',
      phone: '',
      linkedIn: '',
    },
    experiences: [
      {
        title: '',
        company: '',
        startDate: '',
        endDate: '',
        responsibilities: '',
      },
    ],
    education: {
      school: '',
      degree: '',
      graduationYear: '',
    },
    skills: '',
    achievements: '',
  });

  const handleChange = (section, field, value, index = null) => {
    setFormData((prev) => {
      if (index !== null) {
        const newSection = [...prev[section]];
        newSection[index] = { ...newSection[index], [field]: value };
        return { ...prev, [section]: newSection };
      }
      return {
        ...prev,
        [section]: {
          ...prev[section],
          [field]: value,
        },
      };
    });
  };

  const addExperience = () => {
    setFormData((prev) => ({
      ...prev,
      experiences: [
        ...prev.experiences,
        {
          title: '',
          company: '',
          startDate: '',
          endDate: '',
          responsibilities: '',
        },
      ],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // TODO: Send to AI API
  };

  return (
    <form onSubmit={handleSubmit} className='max-w-2xl mx-auto p-6'>
      <div className='mb-8'>
        <h2 className='text-2xl font-bold mb-4'>
          Personal Information
        </h2>
        <FormInput
          label='Full Name'
          name='name'
          value={formData.personalInfo.name}
          onChange={(e) =>
            handleChange('personalInfo', 'name', e.target.value)
          }
          required
        />
        <FormInput
          label='Email'
          name='email'
          type='email'
          value={formData.personalInfo.email}
          onChange={(e) =>
            handleChange('personalInfo', 'email', e.target.value)
          }
          required
        />
        <FormInput
          label='Phone'
          name='phone'
          value={formData.personalInfo.phone}
          onChange={(e) =>
            handleChange('personalInfo', 'phone', e.target.value)
          }
        />
        <FormInput
          label='LinkedIn URL'
          name='linkedIn'
          value={formData.personalInfo.linkedIn}
          onChange={(e) =>
            handleChange('personalInfo', 'linkedIn', e.target.value)
          }
        />
      </div>

      <div className='mb-8'>
        <h2 className='text-2xl font-bold mb-4'>Work Experience</h2>
        {formData.experiences.map((exp, index) => (
          <div key={index} className='mb-6 p-4 border rounded'>
            <FormInput
              label='Job Title'
              name={`title-${index}`}
              value={exp.title}
              onChange={(e) =>
                handleChange(
                  'experiences',
                  'title',
                  e.target.value,
                  index
                )
              }
              required
            />
            <FormInput
              label='Company'
              name={`company-${index}`}
              value={exp.company}
              onChange={(e) =>
                handleChange(
                  'experiences',
                  'company',
                  e.target.value,
                  index
                )
              }
              required
            />
            <div className='grid grid-cols-2 gap-4'>
              <FormInput
                label='Start Date'
                name={`startDate-${index}`}
                type='date'
                value={exp.startDate}
                onChange={(e) =>
                  handleChange(
                    'experiences',
                    'startDate',
                    e.target.value,
                    index
                  )
                }
              />
              <FormInput
                label='End Date'
                name={`endDate-${index}`}
                type='date'
                value={exp.endDate}
                onChange={(e) =>
                  handleChange(
                    'experiences',
                    'endDate',
                    e.target.value,
                    index
                  )
                }
              />
            </div>
            <div className='mb-4'>
              <label className='block text-gray-700 text-sm font-bold mb-2'>
                Responsibilities
              </label>
              <textarea
                className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                value={exp.responsibilities}
                onChange={(e) =>
                  handleChange(
                    'experiences',
                    'responsibilities',
                    e.target.value,
                    index
                  )
                }
                rows='4'
              />
            </div>
          </div>
        ))}
        <button
          type='button'
          onClick={addExperience}
          className='bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600'
        >
          Add More Experience
        </button>
      </div>

      <div className='mb-8'>
        <h2 className='text-2xl font-bold mb-4'>Education</h2>
        <FormInput
          label='School'
          name='school'
          value={formData.education.school}
          onChange={(e) =>
            handleChange('education', 'school', e.target.value)
          }
          required
        />
        <FormInput
          label='Degree'
          name='degree'
          value={formData.education.degree}
          onChange={(e) =>
            handleChange('education', 'degree', e.target.value)
          }
          required
        />
        <FormInput
          label='Graduation Year'
          name='graduationYear'
          type='number'
          value={formData.education.graduationYear}
          onChange={(e) =>
            handleChange(
              'education',
              'graduationYear',
              e.target.value
            )
          }
          required
        />
      </div>

      <div className='mb-8'>
        <h2 className='text-2xl font-bold mb-4'>
          Skills & Achievements
        </h2>
        <div className='mb-4'>
          <label className='block text-gray-700 text-sm font-bold mb-2'>
            Skills
          </label>
          <textarea
            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
            value={formData.skills}
            onChange={(e) =>
              setFormData((prev) => ({
                ...prev,
                skills: e.target.value,
              }))
            }
            rows='4'
            placeholder='List your skills, separated by commas'
          />
        </div>
        <div className='mb-4'>
          <label className='block text-gray-700 text-sm font-bold mb-2'>
            Achievements
          </label>
          <textarea
            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
            value={formData.achievements}
            onChange={(e) =>
              setFormData((prev) => ({
                ...prev,
                achievements: e.target.value,
              }))
            }
            rows='4'
            placeholder='List your notable achievements'
          />
        </div>
      </div>

      <button
        type='submit'
        className='bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600'
      >
        Generate Resume
      </button>
    </form>
  );
};

export default ResumeForm;
