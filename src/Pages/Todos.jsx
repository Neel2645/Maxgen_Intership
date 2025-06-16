import { useState } from "react";

function App() {
  const [formData, setFormData] = useState({ id: "", name: "", surname: "", age: "" });
  const [data, setData] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError("");
  };

  const handleSave = () => {
    const { id, name, surname, age } = formData;
    if (!id || !name || !surname || !age) {
      setError("⚠️ Please fill all input fields!");
      return;
    }

    if (editIndex !== null) {
      const updatedData = [...data];
      updatedData[editIndex] = formData;
      setData(updatedData);
      setEditIndex(null);
    } else {
      setData([...data, formData]);
    }

    setFormData({ id: "", name: "", surname: "", age: "" });
    setError("");
  };

  const handleClear = () => {
    setFormData({ id: "", name: "", surname: "", age: "" });
    setEditIndex(null);
    setError("");
  };

  const handleEdit = (index) => {
    setFormData(data[index]);
    setEditIndex(index);
    setError("");
  };

  const handleRemove = (index) => {
    const updatedData = data.filter((_, i) => i !== index);
    setData(updatedData);
    handleClear();
  };

  const handleCleartablerecord = () => {
    setData([]);
  };

  return (
    <div className="p-4 max-w-6xl mx-auto min-h-screen bg-gray-50">
      <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">User Form with Table</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-4">
        <input
          name="id"
          placeholder="ID"
          value={formData.id}
          onChange={handleChange}
          className="border p-2 rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <input
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          className="border p-2 rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <input
          name="surname"
          placeholder="Surname"
          value={formData.surname}
          onChange={handleChange}
          className="border p-2 rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <input
          name="age"
          placeholder="Age"
          value={formData.age}
          onChange={handleChange}
          className="border p-2 rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>

      {error && <p className="text-red-600 font-medium mb-4">{error}</p>}

      <div className="flex flex-wrap gap-4 mb-6">
        <button
          onClick={handleSave}
          className="bg-blue-500 hover:bg-blue-600 text-white px-5 py-2 rounded shadow-md transition"
        >
          Save
        </button>
        <button
          onClick={handleClear}
          className="bg-green-500 hover:bg-green-600 text-white px-5 py-2 rounded shadow-md transition"
        >
          Clear Input
        </button>
        <button
          onClick={handleCleartablerecord}
          className="bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded shadow-md transition"
        >
          Clear Table
        </button>
      </div>

      <div className="overflow-x-auto shadow-lg rounded border">
        <table className="w-full table-auto">
          <thead>
            <tr className="bg-blue-100 text-blue-900 font-semibold">
              <th className="border px-4 py-2">ID</th>
              <th className="border px-4 py-2">Name</th>
              <th className="border px-4 py-2">Surname</th>
              <th className="border px-4 py-2">Age</th>
              <th className="border px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {data.length !== 0 ? (
              data.map((item, index) => (
                <tr key={index} className="text-center bg-white hover:bg-gray-50">
                  <td className="border px-4 py-2">{item.id}</td>
                  <td className="border px-4 py-2">{item.name}</td>
                  <td className="border px-4 py-2">{item.surname}</td>
                  <td className="border px-4 py-2">{item.age}</td>
                  <td className="border px-4 py-2 flex justify-center gap-2 py-2 flex-wrap">
                    <button
                      onClick={() => handleEdit(index)}
                      className="bg-yellow-400 hover:bg-yellow-500 px-4 py-1 rounded text-white"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleRemove(index)}
                      className="bg-red-500 hover:bg-red-600 px-4 py-1 rounded text-white"
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="text-center py-6 text-gray-500">
                  No data available
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
