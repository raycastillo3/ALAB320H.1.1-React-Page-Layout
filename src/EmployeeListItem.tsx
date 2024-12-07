export default function EmployeeListItem(props: any) {
  return (
    <div className="employeeListItems">
      <div className="profilecard">
        <div className="avatar">
          <img src={props.img} alt={props.alt} />
        </div>
        <div className="information">
          <h3>{props.name}</h3>
          <p>{props.title}</p>
        </div>
      </div>
    </div>
  );
}
