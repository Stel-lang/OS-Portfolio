"use client";

import React from 'react';
import Link from 'next/link';
import { User, ArrowLeft, Code, Palette, Camera, Book } from 'lucide-react';

const AboutPage = () => {
  const skills = [
    { name: 'Web Development', icon: Code, level: 85, color: 'bg-blue-500' },
    { name: 'Graphic Design', icon: Palette, level: 90, color: 'bg-pink-500' },
    { name: 'Photography', icon: Camera, level: 75, color: 'bg-purple-500' },
    { name: 'Content Creation', icon: Book, level: 80, color: 'bg-cyan-500' },
  ];

  const interests = [
    'Web Design & Development',
    'Graphic Design',
    'Photography',
    'Video Editing',
    'Digital Art',
    'Technology',
  ];

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
            ABOUT ME
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
            className="px-4 py-2 rounded-lg transition-all text-purple-300 hover:bg-purple-800/50"
          >
            Profile
          </Link>
          <Link 
            href="/about"
            className="px-4 py-2 rounded-lg transition-all bg-purple-600 text-white"
          >
            About
          </Link>
        </div>

        {/* About Content */}
        <div className="p-8 space-y-6">
          
          {/* Introduction */}
          <div className="bg-gradient-to-br from-purple-800/50 to-purple-900/50 rounded-2xl p-6 border border-purple-400/30 backdrop-blur-sm">
            <h3 className="text-2xl font-bold text-white mb-4">Who Am I?</h3>
            <p className="text-purple-200 leading-relaxed mb-4">
              Hello! I'm Stelamae Sumalinog, a passionate and creative student from Cordova Public College. 
              I have a deep interest in technology, design, and visual storytelling. My journey in the digital 
              world started with a curiosity about how things work, and it has grown into a genuine passion 
              for creating beautiful and functional digital experiences.
            </p>
            <p className="text-purple-200 leading-relaxed">
              I believe that technology and creativity go hand in hand. Whether it's coding a website, designing 
              graphics, or capturing moments through photography, I always strive to blend technical skills with 
              artistic vision to create something meaningful and impactful.
            </p>
          </div>

          {/* Skills */}
          <div className="bg-gradient-to-br from-purple-800/50 to-purple-900/50 rounded-2xl p-6 border border-purple-400/30 backdrop-blur-sm">
            <h3 className="text-2xl font-bold text-white mb-4">My Skills</h3>
            <div className="space-y-4">
              {skills.map((skill, index) => (
                <div key={index}>
                  <div className="flex items-center gap-3 mb-2">
                    <skill.icon className="w-5 h-5 text-pink-400" />
                    <span className="text-white font-semibold">{skill.name}</span>
                    <span className="ml-auto text-purple-300">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-purple-900/50 rounded-full h-2.5">
                    <div 
                      className={`${skill.color} h-2.5 rounded-full transition-all duration-1000`}
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Interests & Hobbies */}
          <div className="grid md:grid-cols-2 gap-6">
            
            <div className="bg-gradient-to-br from-purple-800/50 to-purple-900/50 rounded-2xl p-6 border border-purple-400/30 backdrop-blur-sm">
              <h3 className="text-2xl font-bold text-white mb-4">Interests</h3>
              <div className="flex flex-wrap gap-2">
                {interests.map((interest, index) => (
                  <span 
                    key={index}
                    className="bg-pink-500/30 text-pink-200 px-4 py-2 rounded-full text-sm border border-pink-400/50"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-800/50 to-purple-900/50 rounded-2xl p-6 border border-purple-400/30 backdrop-blur-sm">
              <h3 className="text-2xl font-bold text-white mb-4">Goals</h3>
              <ul className="space-y-2 text-purple-200">
                <li className="flex items-start gap-2">
                  <span className="text-pink-400 mt-1">✓</span>
                  <span>Become a professional web developer</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-pink-400 mt-1">✓</span>
                  <span>Master modern design tools and frameworks</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-pink-400 mt-1">✓</span>
                  <span>Build impactful digital projects</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-pink-400 mt-1">✓</span>
                  <span>Continuously learn and grow</span>
                </li>
              </ul>
            </div>

          </div>

          {/* Philosophy */}
          <div className="bg-gradient-to-br from-purple-800/50 to-purple-900/50 rounded-2xl p-6 border border-purple-400/30 backdrop-blur-sm">
            <h3 className="text-2xl font-bold text-white mb-4">My Philosophy</h3>
            <blockquote className="text-purple-200 italic text-lg border-l-4 border-pink-400 pl-4">
              "Creativity is intelligence having fun. Every project is an opportunity to learn, grow, and create 
              something that makes a difference."
            </blockquote>
          </div>

        </div>

      </div>
    </div>
  );
};

export default AboutPage;