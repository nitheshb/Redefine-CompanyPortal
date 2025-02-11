//import Announcements from "@/components/Announcements";
//import AttendanceChart from "@/components/AttendanceChart";
//import CountChart from "@/components/CountChart";
//import EventCalendar from "@/components/EventCalendar";
//import FinanceChart from "@/components/FinanceChart";
//import UserCard from "@/components/UserCard";
import CountChart from "./A_SalesModule/Reports/CountChart";
import FinanceChart from "./FinanceChart";
import UserCard from "./UserCard";
import AttendanceChart from "./AttendanceChart";
import EventCalendar from "./EventCalendar";
import Announcements from "./Announcements";

const AdminPage = () => {
  return (
    <div className="py-4 px-2 flex gap-4 flex-col lg:flex-col md:flex-row mt-2  rounded-xl">
      {/* LEFT */}
      <div className="w-full lg:w-2/3 md:w-3/3 flex flex-col gap-8">
        {/* USER CARDS */}
        <div className="flex gap-4 justify-between flex-wrap">
        <UserCard type="Active Events" count="09"/>
                      <UserCard type="Stalls" count="110" />
                      <UserCard type="Exhibitors" count="100" />
                      <UserCard type="Expected Visitors" count="10,000" />
        </div>
        {/* MIDDLE CHARTS */}
        <div className="flex gap-4 flex-col lg:flex-row">
          {/* COUNT CHART */}
          <div className="w-full lg:w-1/3 h-[450px]">
            <CountChart />
          </div>
          {/* ATTENDANCE CHART */}
          <div className="w-full lg:w-2/3 h-[450px]">
            <AttendanceChart />
          </div>
        </div>
        {/* BOTTOM CHART */}
        <div className="w-full h-[500px]">
          <FinanceChart />
        </div>
      </div>
      {/* RIGHT */}
      <div className="w-full lg:w-1/3 flex flex-col gap-8">
        <EventCalendar />
        <Announcements/>
      </div>
    </div>
  );
};

export default AdminPage;
