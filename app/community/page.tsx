import Link from 'next/link';
import { Flame, Clock, ThumbsUp, MessageCircle } from 'lucide-react';

// Mock data for demonstration
const posts = [
  {
    id: 1,
    title: 'Best resources for learning TypeScript?',
    content: 'I\'m looking for comprehensive TypeScript tutorials that cover advanced topics like generics and utility types.',
    author: 'js_master',
    votes: 245,
    comments: 38,
    category: 'Programming',
    timestamp: '2h ago'
  },
  {
    id: 2,
    title: 'How do you stay productive during long coding sessions?',
    content: 'I find myself getting distracted after a few hours of coding. Any tips from professional developers?',
    author: 'dev_productivity',
    votes: 183,
    comments: 52,
    category: 'Productivity',
    timestamp: '5h ago'
  },
  {
    id: 3,
    title: 'What are the best practices for responsive web design in 2025?',
    content: 'With new devices and screen sizes, what approaches are you using to ensure your websites are responsive?',
    author: 'web_designer',
    votes: 127,
    comments: 24,
    category: 'Web Design',
    timestamp: '8h ago'
  }
];

// Categories for the sidebar
const categories = [
  { name: 'Programming', count: 2453 },
  { name: 'Web Design', count: 1876 },
  { name: 'Data Science', count: 1534 },
  { name: 'UX/UI', count: 1298 },
  { name: 'DevOps', count: 987 },
  { name: 'Machine Learning', count: 823 },
  { name: 'Career Advice', count: 745 }
];

export default function CommunityPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-24">
      <h1 className="text-3xl font-bold dark:text-white mb-8">Community Forum</h1>
      
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="w-full lg:w-3/4">
          {/* Post creation card */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 mb-8">
            <h2 className="text-xl font-semibold dark:text-white mb-4">Create a Post</h2>
            <div className="flex items-center gap-4">
              <input 
                type="text" 
                placeholder="What do you want to ask or share?" 
                className="flex-1 bg-gray-100 dark:bg-gray-700 border-none rounded-lg px-4 py-3 dark:text-white"
              />
              <Link href="/community/new" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                Create Post
              </Link>
            </div>
          </div>

          {/* Filter tabs */}
          <div className="flex items-center gap-6 mb-6">
            <button className="flex items-center gap-2 text-blue-600 font-medium pb-2 border-b-2 border-blue-600">
              <Flame className="h-5 w-5" /> Popular
            </button>
            <button className="flex items-center gap-2 text-gray-600 dark:text-gray-400 font-medium pb-2 hover:text-blue-600">
              <Clock className="h-5 w-5" /> Recent
            </button>
          </div>

          {/* Post list */}
          <div className="space-y-6">
            {posts.map(post => (
              <div key={post.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
                <div className="flex gap-4">
                  {/* Vote buttons */}
                  <div className="flex flex-col items-center">
                    <button className="text-gray-400 hover:text-blue-600">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                      </svg>
                    </button>
                    <span className="font-medium my-1 dark:text-white">{post.votes}</span>
                    <button className="text-gray-400 hover:text-red-600">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-2">
                      <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded-full text-xs">
                        {post.category}
                      </span>
                      <span>Posted by {post.author} • {post.timestamp}</span>
                    </div>
                    <Link href={`/community/post/${post.id}`} className="block">
                      <h3 className="text-xl font-semibold dark:text-white mb-2 hover:text-blue-600">{post.title}</h3>
                    </Link>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">{post.content}</p>
                    
                    <div className="flex items-center gap-6">
                      <Link href={`/community/post/${post.id}`} className="flex items-center gap-2 text-gray-500 dark:text-gray-400 hover:text-blue-600">
                        <MessageCircle className="h-5 w-5" />
                        {post.comments} Comments
                      </Link>
                      <button className="flex items-center gap-2 text-gray-500 dark:text-gray-400 hover:text-blue-600">
                        <ThumbsUp className="h-5 w-5" />
                        Save
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Sidebar */}
        <div className="w-full lg:w-1/4 space-y-6">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
            <h2 className="text-xl font-semibold dark:text-white mb-4">Categories</h2>
            <ul className="space-y-2">
              {categories.map((category, index) => (
                <li key={index}>
                  <Link href={`/community/category/${category.name.toLowerCase().replace(/\s+/g, '-')}`} className="flex justify-between items-center py-2 hover:text-blue-600 dark:text-gray-200">
                    {category.name}
                    <span className="bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 px-2 py-1 rounded-full text-xs">
                      {category.count}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
            <h2 className="text-xl font-semibold dark:text-white mb-4">Top Contributors</h2>
            <ul className="space-y-4">
              {['code_master', 'web_guru', 'data_scientist', 'ui_magician', 'tech_writer'].map((user, index) => (
                <li key={index} className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-blue-500 flex items-center justify-center text-white">
                    {user.charAt(0).toUpperCase()}
                  </div>
                  <div>
                    <Link href={`/community/user/${user}`} className="font-medium dark:text-white hover:text-blue-600">{user}</Link>
                    <p className="text-xs text-gray-500 dark:text-gray-400">{1000 - (index * 150)} karma</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
            <h2 className="text-xl font-semibold dark:text-white mb-4">Community Rules</h2>
            <ul className="space-y-2 list-disc list-inside text-gray-600 dark:text-gray-300">
              <li>Be respectful and constructive</li>
              <li>No spam or self-promotion</li>
              <li>Use descriptive, helpful titles</li>
              <li>Search before posting</li>
              <li>Format code properly</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
} 