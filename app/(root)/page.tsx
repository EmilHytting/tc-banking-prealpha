import HeaderBox from "@/components/HeaderBox";
import TotalBalanceBox from "@/components/TotalBalanceBox";
import React from "react";

const Dashboard = () => {
  const loggedIn = { firstName: "Admin" };

  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
            type="greeting"
            title="Velommen"
            user={loggedIn?.firstName || "Guest"}
            subtext="Få adgang til og administrer din konto og dine transaktioner effektivt."
          />

          <TotalBalanceBox accounts={[]} totalBanks={1} />
        </header>
      </div>
    </section>
  );
};

export default Dashboard;
