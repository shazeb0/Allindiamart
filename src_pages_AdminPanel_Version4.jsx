import React, { useState } from "react";
function AdminPanel() {
  const [importFile, setImportFile] = useState(null);
  const handleFileChange = (e) => setImportFile(e.target.files[0]);
  const handleImport = () => {
    // TODO: Add Flipkart/Excel import logic here
    alert("Import feature coming soon!");
  };
  return (
    <div className="p-8">
      <h2 className="text-xl font-bold mb-4">Admin Panel</h2>
      <input type="file" accept=".csv,.xlsx" onChange={handleFileChange} />
      <button onClick={handleImport} className="ml-4 bg-green-500 px-3 py-1 text-white rounded">Import</button>
      <div className="mt-6">Flipkart/Excel Product Import, Orders, Users here.</div>
    </div>
  );
}
export default AdminPanel;