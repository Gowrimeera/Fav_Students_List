import React from 'react';

function StudentList({ students, onAddToFavorites }) {
    return (
        <div className="bg-blue-100 min-h-screen p-4">
            <h2 className="text-2xl font-semibold mb-4">Students</h2>
            <ul className="space-y-2">
                {students.map((student, index) => (
                    <li key={index} className="flex justify-between items-center p-4 border rounded shadow hover:bg-gray-200">
                        <span className="text-lg">{student}</span>
                        <button 
                            onClick={() => onAddToFavorites(student)} 
                            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
                        >
                            Add to Favorites
                        </button>
                    </li>
                ))}
            </ul>
        </div>

    );
}
export default StudentList