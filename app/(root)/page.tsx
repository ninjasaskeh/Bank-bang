import HeaderBox from "@/components/HeaderBox";
import RightSidebar from "@/components/RightSidebar";
import TotalBalanceBox from "@/components/TotalBalanceBox";
import React from "react";

const Home = () => {
  const loggedin = {
    firstName: "Arief",
    lastName: "Maizaki",
    email: "ariefmaizaki@gmail.com",
  };
  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
            type="greeting"
            title="Welcome"
            user={loggedin?.firstName || "Guest"}
            subtext="Access and manage your account effectively."
          />

          <TotalBalanceBox
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={1250.35}
          />
        </header>
        RECENT TRANSACTIONS
      </div>
      <RightSidebar
        user={loggedin}
        tra={[]}
        banks={[{ currentBalance: 123.5 }, { currentBalance: 300.5 }]}
      />
    </section>
  );
};

export default Home;
