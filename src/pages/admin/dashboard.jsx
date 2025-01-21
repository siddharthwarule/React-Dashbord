import React, { useState, useEffect } from "react";
import Sidenav from "../../Sidenav";
import BarAnimation from "./graph/Bar";
import Product from "../../components/product";
import CommunityFeedback from "./graph/feedback";

export default function Home() {
  const [purchases, setPurchases] = useState(null);
  const [revenue, setRevenue] = useState(null);
  const [refunds, setRefunds] = useState(null);

  useEffect(() => {
    const fetchData1 = async () => {
      try {
        const response = await fetch("http://3.227.101.169:8020/api/v1/sample_assignment_api_1/", {
          headers: {
            Authorization: "Basic " + btoa("trial:assignment123"),
          },
        });
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const responseData = await response.json();
        setPurchases(responseData.purchases);
        setRevenue(responseData.revenue);
        setRefunds(responseData.refunds);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData1();
  }, []);

  return (
    <div className="min-h-screen flex bg-gray-100">
      <Sidenav />
      <main className="flex-grow p-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-4xl font-bold text-gray-800">Dashboard</h1>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <p className="text-gray-500">Total Users</p>
              <p className="text-2xl font-bold text-gray-700">{purchases ||200}</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <p className="text-gray-500">Active Users</p>
              <p className="text-2xl font-bold text-gray-700">{revenue ||150}</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <p className="text-gray-500">Total Themes</p>
              <p className="text-2xl font-bold text-gray-700">{refunds || 4}</p>
            </div>
          </div>

          {/* Graph Section */}
          <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
            <p className="text-xl font-semibold mb-4">Comparison</p>
            <BarAnimation />
          </div>

          {/* Product Section */}
          <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
            <Product />
          </div>

          {/* Feedback Section */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <CommunityFeedback />
          </div>
        </div>
      </main>
    </div>
  );
}
