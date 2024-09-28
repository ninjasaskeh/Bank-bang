import HeaderBox from "@/components/HeaderBox";
import RightSidebar from "@/components/RightSidebar";
import TotalBalanceBox from "@/components/TotalBalanceBox";
import React from "react";
import { getLoggedInUser } from "@/lib/actions/user.actions";

const Home = async () => {
  const loggedin = await getLoggedInUser();
  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
            type="greeting"
            title="Welcome"
            user={loggedin?.name || "Guest"}
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
