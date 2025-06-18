import { useEffect, useState } from "react";
import axios from "axios";

const Axios = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios
      .get("https://www.themealdb.com/api/json/v1/1/categories.php")
      .then((res) => setCategories(res.data.categories))
      .catch((err) => console.error("Error fetching categories:", err));
  }, []);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-center">Meal Categories</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {categories.map((category) => (
          <div
            key={category.idCategory}
            className="bg-white rounded-2xl shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300"
          >
            <img
              src={category.strCategoryThumb}
              alt={category.strCategory}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold">{category.strCategory}</h2>
              <p className="text-gray-600 text-sm mt-2 line-clamp-3">
                {category.strCategoryDescription}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Axios;
