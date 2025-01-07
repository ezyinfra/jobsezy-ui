'use client'

import React, { useState } from "react";
import axios from "axios";

const CreateJobs = () => {
  const [formData, setFormData] = useState({
    company_name: "",
    job_role: "",
    experience: "",
    job_description: "",
    career_page_url: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${BACKEND_URL}/createjobs`, formData ,     {   
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.status === 200) {
        console.log("Job created successfully!");
        setFormData({
          company_name: "",
          job_role: "",
          experience: "",
          job_description: "",
          career_page_url: "",
        });
      } else {
        console.log("Failed to create job. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      console.log("An error occurred. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex mt-10 items-center justify-center">
      <div className="w-full max-w-3xl bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-2xl mt-10 font-bold text-gray-800 mb-6">
          Create a New Job
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Company Name */}
          <div>
            <label
              htmlFor="company_name"
              className="block text-gray-700 font-medium mb-2"
            >
              Company Name
            </label>
            <input
              type="text"
              id="company_name"
              name="company_name"
              value={formData.company_name}
              onChange={handleChange}
              placeholder="Enter company name"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-orange-500 focus:outline-none"
              required
            />
          </div>
          {/* Job Role */}
          <div>
            <label
              htmlFor="job_role"
              className="block text-gray-700 font-medium mb-2"
            >
              Job Role
            </label>
            <input
              type="text"
              id="job_role"
              name="job_role"
              value={formData.job_role}
              onChange={handleChange}
              placeholder="Enter job role"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-orange-500 focus:outline-none"
              required
            />
          </div>
          {/* Experience */}
          <div>
            <label
              htmlFor="experience"
              className="block text-gray-700 font-medium mb-2"
            >
              Experience
            </label>
            <input
              type="text"
              id="experience"
              name="experience"
              value={formData.experience}
              onChange={handleChange}
              placeholder="Enter required experience (e.g., 2-4 years)"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-orange-500 focus:outline-none"
              required
            />
          </div>
          {/* Job Description */}
          <div>
            <label
              htmlFor="job_description"
              className="block text-gray-700 font-medium mb-2"
            >
              Job Description
            </label>
            <textarea
              id="job_description"
              name="job_description"
              value={formData.job_description}
              onChange={handleChange}
              placeholder="Enter a detailed job description"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-orange-500 focus:outline-none"
              rows="5"
            ></textarea>
          </div>
          {/* Career Page URL */}
          <div>
            <label
              htmlFor="career_page_url"
              className="block text-gray-700 font-medium mb-2"
            >
              Career Page URL
            </label>
            <input
              type="url"
              id="career_page_url"
              name="career_page_url"
              value={formData.career_page_url}
              onChange={handleChange}
              placeholder="Enter the career page URL"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-orange-500 focus:outline-none"
            />
          </div>
          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full bg-orange-500 text-white py-2 px-4 rounded-lg hover:bg-orange-600 focus:ring focus:ring-orange-300 focus:outline-none"
            >
              Create Job
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateJobs;
