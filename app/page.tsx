"use client";

import React, { useState } from 'react';
import { User, Mail, Phone, Instagram, ExternalLink, Download } from 'lucide-react';

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState('profile');

  const PROJECT_LINK_1 = "https://7-evelyn-gilt.vercel.app/";
  const PROJECT_IMAGE_SRC_1 = "/images/7evelyn.jpg";
  const PROJECT_LINK_2 = "https://sjf-nonpreemptive.vercel.app/";
  const PROJECT_IMAGE_SRC_2 = "/images/cpu.jpg";
  const INSTAGRAM_LINK = "https://www.instagram.com/istel4y/";
  
  // Updated Profile Picture Source
  const PROFILE_PICTURE_SRC = "/images/s.jpg"; 


  const renderContent = () => {
    if (activeTab === 'profile') {
      return (
        <div className="p-8 flex items-center justify-center min-h-[500px]">
          
          <div className="bg-gradient-to-br from-purple-800/50 to-purple-900/50 rounded-2xl p-6 border border-purple-400/30 backdrop-blur-sm max-w-lg w-full">
            <h3 className="text-2xl font-bold text-white mb-4">My Profile :</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="bg-pink-400 rounded-lg px-3 py-1 text-white text-sm font-semibold min-w-[100px] text-center">
                  Name
                </div>
                <span className="text-white">: Stelamae Sumalinog</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-pink-400 rounded-lg px-3 py-1 text-white text-sm font-semibold min-w-[100px] text-center">
                  Date of Birth
                </div>
                <span className="text-white">: November 17, 2004</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-pink-400 rounded-lg px-3 py-1 text-white text-sm font-semibold min-w-[100px] text-center">
                  Gender
                </div>
                <span className="text-white">: Woman</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-pink-400 rounded-lg px-3 py-1 text-white text-sm font-semibold min-w-[100px] text-center">
                  Address
                </div>
                <span className="text-white">: Poblacion, Cordova, Cebu</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-pink-400 rounded-lg px-3 py-1 text-white text-sm font-semibold min-w-[100px] text-center">
                  Religion
                </div>
                <span className="text-white">: Catholic</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-pink-400 rounded-lg px-3 py-1 text-white text-sm font-semibold min-w-[100px] text-center">
                  Citizenship
                </div>
                <span className="text-white">: Filipino</span>
              </div>
            </div>
          </div>
                
        </div>
      );
    } 
    
    if (activeTab === 'project') {
      return (
        <div className="p-8">
          <h3 className="text-3xl font-bold text-white mb-6 text-center">My Projects</h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            
            {/* Project 1 - 7/Evelyn */}
            <div className="bg-gradient-to-br from-purple-800/50 to-purple-900/50 rounded-2xl p-6 border border-purple-400/30 backdrop-blur-sm text-center">
              <h4 className="text-xl font-bold text-pink-400 mb-3">7 / Evelyn E-commerce</h4>
              <p className="text-purple-300 mb-4 text-sm">
                An e-commerce website project showcasing modern web design.
              </p>
              <a 
                href={PROJECT_LINK_1} 
                target="_blank" 
                rel="noopener noreferrer"
                className="block w-full rounded-xl overflow-hidden shadow-lg hover:shadow-pink-500/50 transition-all transform hover:scale-105 duration-300 border-4 border-pink-500 cursor-pointer"
              >
                <img 
                  src={PROJECT_IMAGE_SRC_1}
                  alt="7 / Evelyn E-commerce Project" 
                  className="w-full h-48 object-cover"
                />
              </a>
              <a 
                href={PROJECT_LINK_1} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 mt-4 px-6 py-2 bg-gradient-to-r from-pink-500 to-red-500 text-white font-bold text-sm rounded-full shadow-xl hover:shadow-pink-500/50 transition-all transform hover:scale-105"
              >
                <ExternalLink className="w-4 h-4" />
                Visit Site
              </a>
            </div>

            {/* Project 2 - CPU Scheduler */}
            <div className="bg-gradient-to-br from-purple-800/50 to-purple-900/50 rounded-2xl p-6 border border-purple-400/30 backdrop-blur-sm text-center">
              <h4 className="text-xl font-bold text-pink-400 mb-3">SJF CPU Scheduler</h4>
              <p className="text-purple-300 mb-4 text-sm">
                A CPU scheduling simulator using Shortest Job First algorithm.
              </p>
              <a 
                href={PROJECT_LINK_2} 
                target="_blank" 
                rel="noopener noreferrer"
                className="block w-full rounded-xl overflow-hidden shadow-lg hover:shadow-pink-500/50 transition-all transform hover:scale-105 duration-300 border-4 border-pink-500 cursor-pointer"
              >
                <img 
                  src={PROJECT_IMAGE_SRC_2}
                  alt="SJF Non-Preemptive CPU Scheduler Project" 
                  className="w-full h-48 object-cover"
                />
              </a>
              <a 
                href={PROJECT_LINK_2} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 mt-4 px-6 py-2 bg-gradient-to-r from-pink-500 to-red-500 text-white font-bold text-sm rounded-full shadow-xl hover:shadow-pink-500/50 transition-all transform hover:scale-105"
              >
                <ExternalLink className="w-4 h-4" />
                Visit Site
              </a>
            </div>

          </div>
        </div>
      );
    }

    if (activeTab === 'resume') {
        return (
            <div className="p-8">
                <div className="bg-gradient-to-br from-purple-800/50 to-purple-900/50 rounded-2xl p-6 border border-purple-400/30 backdrop-blur-sm text-white">
                    <h3 className="text-3xl font-bold text-pink-400 mb-6 border-b border-pink-400/50 pb-2">Professional Resume Outline</h3>
                    
                    <div className="mb-8">
                        <h4 className="text-xl font-semibold mb-3 text-purple-200">Education</h4>
                        <div className="relative pl-6 border-l-2 border-pink-500 space-y-4">
                            <div className="absolute w-3 h-3 bg-pink-500 rounded-full -left-[7px] top-1"></div>
                            <div>
                                <p className="font-bold text-lg">College of Computing and Communications</p>
                                <p className="text-sm text-purple-300">Cordova Public College (CPC) | 2022 - Present</p>
                                <p className="text-sm mt-1">
                                    Currently pursuing a degree in Information Technology, focusing on web development and database management.
                                </p>
                            </div>
                            <div className="absolute w-3 h-3 bg-pink-500 rounded-full -left-[7px] top-[90px]"></div>
                            <div>
                                <p className="font-bold text-lg">Senior High School (ICT Strand)</p>
                                <p className="text-sm text-purple-300">Benthel Asia School Of Technology Inc. | 2018 - 2020</p>
                                <p className="text-sm mt-1">
                                    Graduated with honors and now building my skills as an IT student.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="mb-8">
                        <h4 className="text-xl font-semibold mb-4 text-purple-200 border-b border-pink-400/50 pb-2">Key Skills</h4>
                        <div className="flex flex-wrap gap-3">
                            <span className="bg-pink-500/80 text-white px-3 py-1 rounded-full text-sm shadow-md">Web Development (HTML/CSS/JS)</span>
                            <span className="bg-pink-500/80 text-white px-3 py-1 rounded-full text-sm shadow-md">React.js (Basic)</span>
                            <span className="bg-pink-500/80 text-white px-3 py-1 rounded-full text-sm shadow-md">Tailwind CSS</span>
                            <span className="bg-pink-500/80 text-white px-3 py-1 rounded-full text-sm shadow-md">MySQL & Database Management</span>
                            <span className="bg-pink-500/80 text-white px-3 py-1 rounded-full text-sm shadow-md">Problem Solving</span>
                            <span className="bg-pink-500/80 text-white px-3 py-1 rounded-full text-sm shadow-md">Team Collaboration</span>
                        </div>
                    </div>

                    <div className="text-center pt-4 border-t border-purple-400/30">
                        <p className="text-purple-300">
                            Download my complete CV using the button above for full details on experience and achievements.
                        </p>
                    </div>
                </div>
            </div>
        );
    }

    if (activeTab === 'about') {
        return (
            <div className="p-8">
                <div className="bg-gradient-to-br from-purple-800/50 to-purple-900/50 rounded-2xl p-6 border border-purple-400/30 backdrop-blur-sm text-white">
                    <h3 className="text-3xl font-bold text-pink-400 mb-4 border-b border-pink-400/50 pb-2">About Me</h3>
                    
                    <p className="text-purple-200 leading-relaxed mb-6">
                        I am an IT student who enjoys learning new technologies and improving through hands-on practice.
                    </p>
                    
                    <h4 className="text-xl font-semibold mb-3 text-purple-200">Interests & Goals</h4>
                    <ul className="list-none space-y-2 text-purple-300">
                        <li className="flex items-start">
                            <span className="text-pink-400 mr-2 text-lg">•</span>
                            Mastering modern JavaScript frameworks like React for dynamic application development.
                        </li>
                        <li className="flex items-start">
                            <span className="text-pink-400 mr-2 text-lg">•</span>
                            Exploring UI/UX principles to ensure accessibility and great user experience in my projects.
                        </li>
                        <li className="flex items-start">
                            <span className="text-pink-400 mr-2 text-lg">•</span>
                            Contributing to open-source projects and collaborating with fellow developers.
                        </li>
                        <li className="flex items-start">
                            <span className="text-pink-400 mr-2 text-lg">•</span>
                            Enjoying reading, watching movies, and digital art in my free time.
                        </li>
                    </ul>
                </div>
            </div>
        );
    }

    if (activeTab === 'contact') {
        return (
            <div className="p-8">
                <div className="max-w-md mx-auto bg-gradient-to-br from-purple-800/50 to-purple-900/50 rounded-2xl p-8 border border-purple-400/30 backdrop-blur-sm text-center">
                    <h3 className="text-3xl font-bold text-white mb-6">Get In Touch</h3>
                    <p className="text-purple-300 mb-6">
                        I'm excited to connect! Please feel free to reach out to me via the methods below.
                    </p>
                    <div className="space-y-4 text-left">
                        <div className="flex items-center gap-4 text-white p-3 bg-purple-700/50 rounded-lg">
                          <Phone className="w-6 h-6 text-pink-400" />
                          <span>09993548625</span>
                        </div>
                        
                        <a 
                          href="mailto:sumalinogstelamae@gmail.com" 
                          className="flex items-center gap-4 text-white p-3 bg-purple-700/50 rounded-lg transition-colors hover:bg-purple-600"
                        >
                          <Mail className="w-6 h-6 text-pink-400" />
                          <span>sumalinogstelamae@gmail.com</span>
                        </a>

                        <a 
                          href={INSTAGRAM_LINK} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="flex items-center gap-4 text-white p-3 bg-purple-700/50 rounded-lg transition-colors hover:bg-purple-600"
                        >
                          <Instagram className="w-6 h-6 text-pink-400" />
                          <span>@istel4y</span>
                        </a>
                    </div>
                </div>
            </div>
        );
    }

    return null;
  };


  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-purple-700 to-pink-600 p-4 md:p-8">
      <div className="max-w-4xl mx-auto bg-gradient-to-b from-purple-900/40 to-black/60 rounded-3xl overflow-hidden shadow-2xl backdrop-blur-sm border border-purple-400/30">
        
        <div className="relative bg-gradient-to-br from-purple-700 via-purple-800 to-purple-900 p-8 pb-6" style={{
          backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '20px 20px'
        }}>
          {/* Desktop avatar */}
          <div className="hidden md:block absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full p-3 md:p-4 border-4 border-pink-400/50">
            <img
              src={PROFILE_PICTURE_SRC} 
              alt="Stelamae Sumalinog Profile Picture"
              className="w-20 h-20 md:w-28 md:h-28 object-cover rounded-full"
            />
          </div>
          {/* Mobile avatar */}
          <div className="md:hidden flex justify-end">
            <div className="inline-flex bg-white/20 backdrop-blur-sm rounded-full p-2 border-2 border-pink-400/50">
              <img
                src={PROFILE_PICTURE_SRC}
                alt="Stelamae Sumalinog Profile Picture"
                className="w-16 h-16 object-cover rounded-full"
              />
            </div>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-2 tracking-wider" style={{
            textShadow: '4px 4px 0px rgba(0,0,0,0.3)'
          }}>
            PORTFOLIO
          </h1>
          
          <div className="mt-6">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-2">
              Hi!, I'm Stelamae Sumalinog
            </h2>
            <p className="text-sm text-purple-200 leading-relaxed max-w-md">
              Let me introduce myself, my name is Stelamae. I used to be called by the name Telay. I am a student from CPC.
            </p>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 sm:gap-4 px-4 sm:px-8 py-3 sm:py-4 border-b border-purple-400/30">
          <button 
            onClick={() => setActiveTab('resume')}
            className={`px-4 py-2 rounded-lg transition-all ${activeTab === 'resume' ? 'bg-purple-600 text-white' : 'text-purple-300 hover:bg-purple-800/50'}`}
          >
            Resume
          </button>
          <button 
            onClick={() => setActiveTab('profile')}
            className={`px-4 py-2 rounded-lg transition-all ${activeTab === 'profile' ? 'bg-purple-600 text-white' : 'text-purple-300 hover:bg-purple-800/50'}`}
          >
            Profile
          </button>
          <button 
            onClick={() => setActiveTab('project')}
            className={`px-4 py-2 rounded-lg transition-all ${activeTab === 'project' ? 'bg-purple-600 text-white' : 'text-purple-300 hover:bg-purple-800/50'}`}
          >
            Projects
          </button>
          <button 
            onClick={() => setActiveTab('about')}
            className={`px-4 py-2 rounded-lg transition-all ${activeTab === 'about' ? 'bg-purple-600 text-white' : 'text-purple-300 hover:bg-purple-800/50'}`}
          >
            About
          </button>
          <button 
            onClick={() => setActiveTab('contact')}
            className={`px-4 py-2 rounded-lg transition-all ${activeTab === 'contact' ? 'bg-purple-600 text-white' : 'text-purple-300 hover:bg-purple-800/50'}`}
          >
            Contact
          </button>
          
          {/* UPDATED DOWNLOAD BUTTON */}
          <a 
            href="/Stelay.pdf"
            download="Stelay.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto sm:ml-auto px-6 py-2 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-full text-sm font-semibold hover:shadow-lg transition-all flex items-center justify-center gap-2"
          >
            <Download className="w-4 h-4"/>
            Download CV
          </a>
        </div>

        {renderContent()}

      </div>
    </div>
  );
};

export default Portfolio;