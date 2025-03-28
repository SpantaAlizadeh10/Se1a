import UserCard from "@/components/UserCard";

const AdminPage = () => {
  return(
  <div className="p-4 flex gap-4 flex-col md:flex-row">
    {/* LEFT */}
    <div className="w-full lg:w-2/3">
    {/* USER CARDS */}
    <div className=" flex gap-4 justify-between flex-wrap">
      <UserCard type="student" />
      <UserCard type="teacher" />
      <UserCard type="parent" />
      <UserCard type="staff" />
    </div>

    
    {/* middle charts */}
    <div className=" flex gap-4 flex-col lg:flex-row">
    
    {/* count chart */}
      <div className="w-full lg:w-1/3 h-[450px]"></div>
  
    {/* attendance chart */}
      <div className="w-full lg:w-2/3 h-[450px]"></div>

    </div>
   
    {/* bottom charts */}
    <div className=""></div>
    
    </div>

    {/* RIGHT */}
    <div className="w-full lg:w-1/3">R</div>


  </div>
  ) 
}

export default AdminPage
