import SearchBar from "./SearchBar"
import EmployeeList from "./EmployeeList";
import Header from "./Header";
export default function HomePage (){
    return (
        <div className="homepage">
        <Header/>
        <SearchBar/>
        <EmployeeList/>
        </div>
    )
} 