import Link from 'next/link';
import { ArrowLeft, Trophy, MessageCircle, ThumbsUp, Award } from 'lucide-react';

// Mock data for demonstration
const topUsers = [
  { username: 'code_master', karma: 9850, posts: 124, comments: 432, joinedDays: 365 },
  { username: 'web_guru', karma: 8720, posts: 98, comments: 621, joinedDays: 245 },
  { username: 'data_scientist', karma: 7680, posts: 87, comments: 342, joinedDays: 180 },
  { username: 'ui_magician', karma: 6540, posts: 76, comments: 254, joinedDays: 210 },
  { username: 'tech_writer', karma: 5430, posts: 65, comments: 187, joinedDays: 150 },
  { username: 'backend_dev', karma: 4980, posts: 54, comments: 231, joinedDays: 120 },
  { username: 'js_ninja', karma: 4320, posts: 43, comments: 176, joinedDays: 90 },
  { username: 'css_wizard', karma: 3760, posts: 38, comments: 142, joinedDays: 75 },
  { username: 'system_architect', karma: 3250, posts: 32, comments: 118, joinedDays: 60 },
  { username: 'mobile_expert', karma: 2840, posts: 27, comments: 96, joinedDays: 45 },
];

export default function LeaderboardPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-24">
      <div className="mb-8">
        <Link href="/community" className="flex items-center gap-2 text-blue-600 hover:underline">
          <ArrowLeft className="h-4 w-4" />
          Back to Community
        </Link>
      </div>

      <div className="flex items-center gap-4 mb-8">
        <Trophy className="h-10 w-10 text-yellow-500" />
        <h1 className="text-3xl font-bold dark:text-white">Community Leaderboard</h1>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm overflow-hidden">
        <div className="grid grid-cols-12 bg-gray-100 dark:bg-gray-900 p-4 text-gray-700 dark:text-gray-300 font-medium">
          <div className="col-span-1 text-center">#</div>
          <div className="col-span-5">User</div>
          <div className="col-span-2 text-center">Karma</div>
          <div className="col-span-2 text-center">Posts</div>
          <div className="col-span-2 text-center">Comments</div>
        </div>

        {topUsers.map((user, index) => (
          <div 
            key={index} 
            className={`grid grid-cols-12 p-4 items-center border-b dark:border-gray-700 ${
              index < 3 ? 'bg-blue-50 dark:bg-blue-900/20' : ''
            }`}
          >
            <div className="col-span-1 text-center font-bold">
              {index === 0 && <Trophy className="h-5 w-5 text-yellow-500 mx-auto" />}
              {index === 1 && <Trophy className="h-5 w-5 text-gray-400 mx-auto" />}
              {index === 2 && <Trophy className="h-5 w-5 text-amber-700 mx-auto" />}
              {index > 2 && <span className="text-gray-500 dark:text-gray-400">{index + 1}</span>}
            </div>

            <div className="col-span-5">
              <div className="flex items-center gap-3">
                <div className={`h-10 w-10 rounded-full flex items-center justify-center text-white ${
                  index < 3 ? 'bg-blue-600' : 'bg-gray-600'
                }`}>
                  {user.username.charAt(0).toUpperCase()}
                </div>
                <div>
                  <Link href={`/community/user/${user.username}`} className="font-medium dark:text-white hover:text-blue-600">
                    {user.username}
                  </Link>
                  <p className="text-xs text-gray-500 dark:text-gray-400">Member for {user.joinedDays} days</p>
                </div>
              </div>
            </div>

            <div className="col-span-2 text-center font-semibold dark:text-white">
              {user.karma.toLocaleString()}
              <div className="text-xs text-gray-500 dark:text-gray-400 font-normal">points</div>
            </div>

            <div className="col-span-2 text-center">
              <div className="flex items-center justify-center gap-1">
                <MessageCircle className="h-4 w-4 text-gray-500 dark:text-gray-400" />
                <span className="dark:text-white">{user.posts}</span>
              </div>
            </div>

            <div className="col-span-2 text-center">
              <div className="flex items-center justify-center gap-1">
                <ThumbsUp className="h-4 w-4 text-gray-500 dark:text-gray-400" />
                <span className="dark:text-white">{user.comments}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-bold dark:text-white mb-6 flex items-center gap-2">
          <Award className="h-6 w-6 text-blue-600" />
          How to Earn Karma
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: 'Post Upvotes', description: 'Earn 10 points when your posts receive upvotes' },
            { title: 'Comment Upvotes', description: 'Earn 5 points when your comments are upvoted' },
            { title: 'Accepted Answers', description: 'Earn 15 points when your answer is marked as best' },
            { title: 'Daily Activity', description: 'Earn 5 points for logging in and participating daily' },
          ].map((item, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold dark:text-white mb-2">{item.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 