'use client'

import React, { useState, useEffect } from "react";
import axios from "axios";

const Jobs = () => {
  const [jobs, setJobs] = useState([]);
  const [selectedJob, setSelectedJob] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

  // Fetch jobs from the backend
  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await axios.get(`${BACKEND_URL}/jobslist`);
        console.log('response data : ' , response.data)
        setJobs(response.data);
      } catch (error) {
        console.error("Error fetching jobs:", error);
      }
    };

    fetchJobs();
  }, []);

  const openModal = (job) => {
    setSelectedJob(job);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedJob(null);
    setIsModalOpen(false);
  };

  return (
    <div className="mt-20 p-5">
      <h2 className="text-center text-2xl font-bold mb-10">
        Your Eazy Partner for Finding Jobs
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {jobs.map((job) => (
          <div
            key={job.id}
            className="bg-gradient-to-r from-orange-300 via-orange-300 to-orange-200 hover:bg-gradient-to-l hover:from-orange-400 hover:via-orange-300 hover:to-orange-200 shadow-lg rounded-lg p-5 cursor-pointer transition hover:scale-105"
            onClick={() => openModal(job)}
          >
            <h3 className="text-lg font-semibold">{job.job_role}</h3>
            <p className="text-gray-600">{job.company_name}</p>
            <p className="text-sm text-gray-500 mt-2">{job.experience} years exp required</p>
          </div>
        ))}
      </div>

      {/* Modal */}
      {isModalOpen && selectedJob && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg w-11/12 md:w-2/3 lg:w-1/3 p-6">
            <h2 className="text-xl font-bold mb-4">{selectedJob.job_role}</h2>
            <p className="text-gray-700 mb-2">
              <strong>Company:</strong> {selectedJob.company_name}
            </p>
            <p className="text-gray-700 mb-2">
              <strong>Experience:</strong> {selectedJob.experience}
            </p>
            <p className="text-gray-700 mb-4">
              <strong>Job Description:</strong> {selectedJob.job_description}
            </p>
            <a
              href={selectedJob.career_page_url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              View Career Page
            </a>
            <div className="mt-5 text-right">
              <button
                onClick={closeModal}
                className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Jobs;
