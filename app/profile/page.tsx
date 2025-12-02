"use client";

import React from 'react';
import Link from 'next/link';
import { User, ArrowLeft } from 'lucide-react';

const ProfilePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-purple-700 to-pink-600 p-4 md:p-8">
      <div className="max-w-4xl mx-auto bg-gradient-to-b from-purple-900/40 to-black/60 rounded-3xl overflow-hidden shadow-2xl backdrop-blur-sm border border-purple-400/30">
        
        {/* Header */}
        <div className="relative bg-gradient-to-br from-purple-700 via-purple-800 to-purple-900 p-8 pb-6" style={{
          backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '20px 20px'
        }}>
          <Link 
            href="/"
            className="absolute top-4 left-4 bg-white/20 backdrop-blur-sm rounded-full p-2 hover:bg-white/30 transition-all"
          >
            <ArrowLeft className="w-6 h-6 text-white" />
          </Link>

          {/* Desktop icon */}
          <div className="hidden md:block absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full p-2">
            <div className="w-12 h-12 bg-purple-300 rounded-full flex items-center justify-center">
              <User className="w-8 h-8 text-purple-900" />
            </div>
          </div>
          {/* Mobile icon */}
          <div className="md:hidden flex justify-end mb-2">
            <div className="w-10 h-10 bg-purple-300 rounded-full flex items-center justify-center">
              <User className="w-6 h-6 text-purple-900" />
            </div>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-black text-white mb-2 tracking-wider" style={{
            textShadow: '4px 4px 0px rgba(0,0,0,0.3)'
          }}>
            MY PROFILE
          </h1>
        </div>

        {/* Navigation */}
        <div className="flex flex-wrap gap-2 sm:gap-4 px-4 sm:px-8 py-3 sm:py-4 border-b border-purple-400/30">
          <Link 
            href="/"
            className="px-4 py-2 rounded-lg transition-all text-purple-300 hover:bg-purple-800/50"
          >
            Home
          </Link>
          <Link 
            href="/profile"
            className="px-4 py-2 rounded-lg transition-all bg-purple-600 text-white"
          >
            Profile
          </Link>
          <Link 
            href="/about"
            className="px-4 py-2 rounded-lg transition-all text-purple-300 hover:bg-purple-800/50"
          >
            About
          </Link>
        </div>

        {/* Profile Content */}
        <div className="p-8">
          <div className="grid md:grid-cols-2 gap-6">
            
            {/* Personal Information */}
            <div className="bg-gradient-to-br from-purple-800/50 to-purple-900/50 rounded-2xl p-6 border border-purple-400/30 backdrop-blur-sm">
              <h3 className="text-2xl font-bold text-white mb-4">Personal Information</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="bg-pink-400 rounded-lg px-3 py-1 text-white text-sm font-semibold min-w-[120px]">
                    Full Name
                  </div>
                  <span className="text-white">: Stelamae Sumalinog</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-pink-400 rounded-lg px-3 py-1 text-white text-sm font-semibold min-w-[120px]">
                    Nickname
                  </div>
                  <span className="text-white">: Telay</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-pink-400 rounded-lg px-3 py-1 text-white text-sm font-semibold min-w-[120px]">
                    Date of Birth
                  </div>
                  <span className="text-white">: November 17, 2004</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-pink-400 rounded-lg px-3 py-1 text-white text-sm font-semibold min-w-[120px]">
                    Age
                  </div>
                  <span className="text-white">: 21 years old</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-pink-400 rounded-lg px-3 py-1 text-white text-sm font-semibold min-w-[120px]">
                    Gender
                  </div>
                  <span className="text-white">: Woman</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-pink-400 rounded-lg px-3 py-1 text-white text-sm font-semibold min-w-[120px]">
                    Religion
                  </div>
                  <span className="text-white">: Catholic</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-pink-400 rounded-lg px-3 py-1 text-white text-sm font-semibold min-w-[120px]">
                    Citizenship
                  </div>
                  <span className="text-white">: Filipino</span>
                </div>
              </div>
            </div>

            {/* Address & Education */}
            <div className="bg-gradient-to-br from-purple-800/50 to-purple-900/50 rounded-2xl p-6 border border-purple-400/30 backdrop-blur-sm">
              <h3 className="text-2xl font-bold text-white mb-4">Address & Education</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="bg-pink-400 rounded-lg px-3 py-1 text-white text-sm font-semibold min-w-[120px]">
                    Address
                  </div>
                  <span className="text-white">: Poblacion, Cordova, Cebu</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-pink-400 rounded-lg px-3 py-1 text-white text-sm font-semibold min-w-[120px]">
                    School
                  </div>
                  <span className="text-white">: Cordova Public College (CPC)</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-pink-400 rounded-lg px-3 py-1 text-white text-sm font-semibold min-w-[120px]">
                    Course
                  </div>
                  <span className="text-white">: Bachelor of Science in Information Technology</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-pink-400 rounded-lg px-3 py-1 text-white text-sm font-semibold min-w-[120px]">
                    Year Level
                  </div>
                  <span className="text-white">: 3rd Year</span>
                </div>
              </div>
            </div>

          </div>

          {/* Bio Section */}
          <div className="mt-6 bg-gradient-to-br from-purple-800/50 to-purple-900/50 rounded-2xl p-6 border border-purple-400/30 backdrop-blur-sm">
            <h3 className="text-2xl font-bold text-white mb-4">About Me</h3>
            <p className="text-purple-200 leading-relaxed">
              Hi! I'm Stelamae Sumalinog, but you can call me Telay. I'm currently a 3rd-year student at Cordova Public College, 
              pursuing a degree in Information Technology. I have a passion for web development, graphic design, and creating 
              innovative digital solutions. In my free time, I enjoy exploring new technologies and working on personal projects 
              that challenge my skills and creativity.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ProfilePage;