import React from 'react'

import '../style/product.css'

import StarIcon from '@mui/icons-material/Star';

export default function Product() {
  return (
<div className="p-5">
  <p className="text-xl font-semibold mb-4">Top Themes</p>  
  <table className="min-w-full table-auto border-collapse bg-white shadow-md rounded-lg overflow-hidden">
    <thead className="bg-gray-200">
      <tr>
        
        <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">Theme Name</th>
        <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">Theme Type</th>
        <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">Language</th>
        <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">Description</th>
        <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">Rating</th>
      </tr>
    </thead>
    <tbody>
      <tr className="border-b hover:bg-gray-50">
       
        <td className="px-4 py-2 text-sm text-gray-700">Political 1</td>
        <td className="px-4 py-2 text-sm text-gray-700">Political</td>
        <td className="px-4 py-2 text-sm text-gray-700">Marathi</td>
        <td className="px-4 py-2 text-sm text-gray-700">A political-themed digital card for campaign or rally invitations.</td>
        <td className="px-4 py-2 text-sm text-gray-700">4.5 <span className="text-yellow-400">★</span></td>
      </tr>
      <tr className="border-b hover:bg-gray-50">
       
        <td className="px-4 py-2 text-sm text-gray-700">Political 2</td>
        <td className="px-4 py-2 text-sm text-gray-700">Political</td>
        <td className="px-4 py-2 text-sm text-gray-700">English</td>
        <td className="px-4 py-2 text-sm text-gray-700">A formal political theme for official announcements and messages.</td>
        <td className="px-4 py-2 text-sm text-gray-700">4.7 <span className="text-yellow-400">★</span></td>
      </tr>
      <tr className="border-b hover:bg-gray-50">
        
        <td className="px-4 py-2 text-sm text-gray-700">Personal 1</td>
        <td className="px-4 py-2 text-sm text-gray-700">Personal</td>
        <td className="px-4 py-2 text-sm text-gray-700">Marathi</td>
        <td className="px-4 py-2 text-sm text-gray-700">A personal-themed card for birthdays, celebrations, or casual greetings.</td>
        <td className="px-4 py-2 text-sm text-gray-700">4.8 <span className="text-yellow-400">★</span></td>
      </tr>
      <tr className="border-b hover:bg-gray-50">
        
        <td className="px-4 py-2 text-sm text-gray-700">Personal 2</td>
        <td className="px-4 py-2 text-sm text-gray-700">Personal</td>
        <td className="px-4 py-2 text-sm text-gray-700">English</td>
        <td className="px-4 py-2 text-sm text-gray-700">A warm and welcoming personal card for any occasion like anniversaries or personal milestones.</td>
        <td className="px-4 py-2 text-sm text-gray-700">4.6 <span className="text-yellow-400">★</span></td>
      </tr>
      <tr className="border-b hover:bg-gray-50">
 
        <td className="px-4 py-2 text-sm text-gray-700">Political 3</td>
        <td className="px-4 py-2 text-sm text-gray-700">Political</td>
        <td className="px-4 py-2 text-sm text-gray-700">Marathi</td>
        <td className="px-4 py-2 text-sm text-gray-700">A modern political card design for event invitations and political campaigns.</td>
        <td className="px-4 py-2 text-sm text-gray-700">4.9 <span className="text-yellow-400">★</span></td>
      </tr>
    </tbody>
  </table>
</div>
    
  )
}
