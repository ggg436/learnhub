'use client';

import { useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function CreatePostPage() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [category, setCategory] = useState('');

  const categories = [
    'Programming',
    'Web Design',
    'Data Science',
    'UX/UI',
    'DevOps',
    'Machine Learning',
    'Career Advice',
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // In a real app, you would send this data to your backend API
    console.log({ title, content, category });
    
    // Redirect to the community page after successful submission
    // In a real app, you would use navigation to the new post
    alert('Post created successfully!');
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-24">
      <div className="mb-8">
        <Link href="/community" className="flex items-center gap-2 text-blue-600 hover:underline">
          <ArrowLeft className="h-4 w-4" />
          Back to Community
        </Link>
      </div>
      
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-8">
        <h1 className="text-2xl font-bold dark:text-white mb-6">Create a New Post</h1>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="title" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Title
            </label>
            <input 
              id="title"
              type="text" 
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Be specific and concise" 
              className="w-full bg-gray-100 dark:bg-gray-700 border-none rounded-lg px-4 py-3 dark:text-white"
              required
            />
          </div>
          
          <div>
            <label htmlFor="category" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Category
            </label>
            <select 
              id="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full bg-gray-100 dark:bg-gray-700 border-none rounded-lg px-4 py-3 dark:text-white"
              required
            >
              <option value="">Select a category</option>
              {categories.map((cat, index) => (
                <option key={index} value={cat}>{cat}</option>
              ))}
            </select>
          </div>
          
          <div>
            <label htmlFor="content" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Content
            </label>
            <textarea 
              id="content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="Provide all the details needed for others to understand and respond to your post" 
              className="w-full bg-gray-100 dark:bg-gray-700 border-none rounded-lg px-4 py-3 min-h-[200px] dark:text-white"
              required
            ></textarea>
          </div>
          
          <div className="pt-4">
            <div className="flex justify-end gap-4">
              <Link href="/community" className="px-6 py-3 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                Cancel
              </Link>
              <button 
                type="submit" 
                className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Publish Post
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
} 