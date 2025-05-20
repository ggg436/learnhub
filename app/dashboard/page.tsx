import { BookOpen, Clock, GraduationCap } from 'lucide-react';
import { auth, currentUser } from '@clerk/nextjs';
import { redirect } from 'next/navigation';

export default async function Dashboard() {
  const { userId } = auth();
  const user = await currentUser();
  
  if (!userId) {
    redirect('/sign-in');
  }

  const firstName = user?.firstName || 'User';

  const courses = [
    { title: "Advanced React", progress: 65, duration: "8h 20m", lessons: 24 },
    { title: "UI/UX Fundamentals", progress: 40, duration: "5h 45m", lessons: 18 },
    { title: "Node.js Backend", progress: 85, duration: "12h 10m", lessons: 32 },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Main Content */}
      <main className="p-8">
        <div className="max-w-7xl mx-auto">
          <header className="flex justify-between items-center mb-8">
            <div>
              <h1 className="text-2xl font-bold dark:text-white">Welcome back, {firstName}!</h1>
              <p className="text-gray-600 dark:text-gray-400">Your learning progress</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="h-10 w-10 rounded-full bg-blue-500 flex items-center justify-center text-white">
                {firstName.charAt(0)}
              </div>
            </div>
          </header>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-lg">
                  <BookOpen className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <p className="text-gray-500 dark:text-gray-400 text-sm">Active Courses</p>
                  <p className="text-2xl font-bold dark:text-white">3</p>
                </div>
              </div>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-green-100 dark:bg-green-900 rounded-lg">
                  <Clock className="w-6 h-6 text-green-600 dark:text-green-400" />
                </div>
                <div>
                  <p className="text-gray-500 dark:text-gray-400 text-sm">Learning Hours</p>
                  <p className="text-2xl font-bold dark:text-white">26.5h</p>
                </div>
              </div>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-purple-100 dark:bg-purple-900 rounded-lg">
                  <GraduationCap className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                </div>
                <div>
                  <p className="text-gray-500 dark:text-gray-400 text-sm">Completed</p>
                  <p className="text-2xl font-bold dark:text-white">12</p>
                </div>
              </div>
            </div>
          </div>

          {/* Course Progress Section */}
          <section className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold dark:text-white">Your Courses</h2>
              <button className="text-blue-600 dark:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-700 px-4 py-2 rounded-lg">
                View All
              </button>
            </div>
            
            <div className="space-y-6">
              {courses.map((course, index) => (
                <div key={index} className="border-b dark:border-gray-700 pb-6 last:border-0">
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <h3 className="font-semibold mb-2 dark:text-white">{course.title}</h3>
                      <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
                        <span className="flex items-center gap-1">
                          <Clock className="w-4 h-4" /> {course.duration}
                        </span>
                        <span className="flex items-center gap-1">
                          <BookOpen className="w-4 h-4" /> {course.lessons} lessons
                        </span>
                      </div>
                    </div>
                    <span className="text-sm font-medium text-blue-600 dark:text-blue-400">
                      {course.progress}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 mt-4">
                    <div 
                      className="bg-blue-500 h-2 rounded-full" 
                      style={{ width: `${course.progress}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
} 