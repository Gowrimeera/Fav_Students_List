import { useState } from "react";
import {BrowserRouter, Route, Routes,Link} from 'react-router-dom';
import StudentList from "./components/StudentsList";
import FavoritesList from "./components/FavoritesList";

function App() {
    const [students, setStudents] = useState(['Alice', 'Bob', 'Charlie','Sree','Ravi','Mohan']);
    const [favorites, setFavorites] = useState([]);
  
    // Add student to favorites
    const addToFavorites = (student) => {
      setFavorites([...favorites, student]);
      setStudents(students.filter((s) => s !== student));
    };
  
    // Remove student from favorites
    const removeFromFavorites = (student) => {
      setStudents([...students, student]);
      setFavorites(favorites.filter((s) => s !== student));
    };
  
    return (
        <BrowserRouter>
            <div className="min-h-screen bg-gradient-to-r from-blue-200 to-yellow-200 p-4">
                <div className="max-w-4xl mx-auto p-4">
                <div className="flex justify-between mb-6">
                    <Link to="/" className="text-blue-500 hover:underline font-bold">List of Students</Link>
                    <Link to="/favorites" className="text-blue-500 hover:underline font-bold">Go to Favorites</Link>
                </div>

                <Routes>
                    <Route
                        path="/"
                        element={<StudentList students={students} onAddToFavorites={addToFavorites} />}
                    />
                    <Route
                        path="/favorites"
                        element={<FavoritesList favorites={favorites} onRemoveFromFavorites={removeFromFavorites} />}
                    />
                </Routes>
                </div>
            </div>
        </BrowserRouter>
    
  );
}

export default App;
