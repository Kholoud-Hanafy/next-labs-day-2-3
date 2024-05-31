import UserTable from "./userTable";


export default function Users({searchParams}) {
    return (
     <> 
      {/* {searchParams.orderBy} */}
    <UserTable sortBy={searchParams.orderBy}></UserTable>
                           
                           
      </>
    );
  }
  