import HeaderBox from "@/components/HeaderBox";
import React from "react";

const Dashboard = () => {
  const loggedIn = { firstName: "Admin" };

  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
            type="greeting"
            title="Welcome"
            user={loggedIn?.firstName || "Guest"}
            subtext="Acces and manage your account and transactions efficiently"
          />
        </header>
      </div>
    </section>
  );
};

export default Dashboard;
