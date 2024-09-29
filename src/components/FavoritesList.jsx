import React from 'react';

function FavoritesList({ favorites, onRemoveFromFavorites }) {
    return (
        <div className="bg-yellow-100 min-h-screen p-4">
            <h2 className="text-2xl font-semibold mb-4">Favorite Students</h2>
            <ul className="space-y-2">
                {favorites.map((student, index) => (
                    <li key={index} className="flex justify-between items-center p-4 border rounded shadow hover:bg-gray-200">
                        <span className="text-lg">{student}</span>
                        <button 
                            onClick={() => onRemoveFromFavorites(student)} 
                            className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600"
                        >
                            Remove
                        </button>
                    </li>
                ))}
            </ul>
        </div>

    );
}
export default FavoritesList