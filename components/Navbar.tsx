'use client';
import Link from 'next/link';
import { BookOpen, User, GraduationCap, MessagesSquare, Flame, Bell, Search, Trophy, Users, Plus } from 'lucide-react';
import { UserButton, useUser } from '@clerk/nextjs';

export default function Navbar() {
  const { isSignedIn } = useUser();

  return (
    <nav className="fixed top-0 w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-100 dark:border-gray-800 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2">
            <GraduationCap className="h-8 w-8 text-blue-600 dark:text-blue-400" />
            <span className="text-xl font-semibold dark:text-white">EduMaster</span>
          </Link>

          <div className="flex items-center gap-6">
            {/* Search Bar */}
            <div className="hidden md:flex items-center bg-gray-100 dark:bg-gray-800 rounded-lg px-4 py-2 w-64">
              <Search className="h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search community..."
                className="ml-2 bg-transparent outline-none w-full text-sm dark:text-gray-200"
              />
            </div>

            {/* Community Navigation */}
            <div className="flex items-center gap-4">
              <Link href="/community" className="flex items-center gap-1 text-gray-600 dark:text-gray-300 hover:text-blue-600">
                <Flame className="h-5 w-5" />
                <span className="hidden md:block">Popular</span>
              </Link>
              <Link href="/community/new" className="flex items-center gap-1 text-gray-600 dark:text-gray-300 hover:text-blue-600">
                <Plus className="h-5 w-5" />
                <span className="hidden md:block">Create</span>
              </Link>
              <Link href="/community/leaderboard" className="flex items-center gap-1 text-gray-600 dark:text-gray-300 hover:text-blue-600">
                <Trophy className="h-5 w-5" />
                <span className="hidden md:block">Leaderboard</span>
              </Link>
            </div>
          </div>

          <div className="flex items-center gap-6">
            <Link href="/courses" className="hidden md:flex items-center gap-1 text-gray-600 dark:text-gray-300 hover:text-blue-600">
              <BookOpen className="h-5 w-5" /> Courses
            </Link>
            
            <button className="text-gray-600 dark:text-gray-300 hover:text-blue-600">
              <Bell className="h-5 w-5" />
            </button>
            {isSignedIn ? (
              <div className="flex items-center gap-4">
                <Link href="/dashboard" className="flex items-center gap-1 text-gray-600 dark:text-gray-300 hover:text-blue-600">
                  <User className="h-5 w-5" /> Dashboard
                </Link>
                <UserButton afterSignOutUrl="/" />
              </div>
            ) : (
              <div className="flex items-center gap-4">
                <Link href="/sign-in" className="text-gray-600 dark:text-gray-300 hover:text-blue-600">
                  Sign In
                </Link>
                <Link href="/sign-up" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                  Sign Up
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
} 