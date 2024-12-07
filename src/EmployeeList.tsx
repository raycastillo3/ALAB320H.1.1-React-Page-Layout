import EmployeeListItem from "./EmployeeListItem"
export default function EmployeeList () {
    return (
        <div className="employeeList"> 
        <EmployeeListItem img={"https://www.w3schools.com/howto/img_avatar.png"} alt={"James King"} name={"James King"} title={"President and CEO"}/>
        <EmployeeListItem img={"https://www.w3schools.com/howto/img_avatar2.png"} alt={"Julie Taylor"} name={"Julie Taylor"} title={"VP of Marketing"}/>
        </div>
    )
}


    
     

