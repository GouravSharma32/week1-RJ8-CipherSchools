// import React from "react";
import React, { userState } from "react";
import Test from  "./Test";
import UserDetails from "./userDetails";

const AllUserList = () => {

// class AllUserList extends React.Component {
    const [state, setState] = useState({
        name: "Gourav Sharma",
    });

        // allusers = [    
    let allUsers = [
      { name: "Gourav", email: "Gourav@email.com",phoneNumber: "+91-9723319069"},
      { name: "Jatin", email: "jatin@email.com", phoneNumber: "+91-7869503121"},
      { name: "nilanjan", email: "nilanjan@email.com", phoneNumber: "+91-6598743212"},
    ];

    // let array = [
    //     <UserDetails user ={allUsers[0]} />,
    //     <UserDetails user ={allUsers[1]} />,
    //     <UserDetails user ={allUsers[2]} />,
    // ];

    // let array = allUsers.map((user,index) => (
    //     <UserDetails user={user} key={index} />
    // ));

    // return <div>{array}</div>;

    // render() {
    //     setTimeout(() => {
    //         this.setState({ name: "Gourav Sharma"});
    //     }, 15000);
    // }

    return (
        <div>
            <Test name = {state.name} />
            {allUsers.map((user, index) => (
                {/* {this.allusers.map((user, index) => ( */}
                <UserDetails key={index} user={user} />
            ))}
        </div>
    );
 };
            export default AllUserList;

    // return (
    //     <div>
    //         <UserDetails user ={allUsers[0]} />
    //         <UserDetails user ={allUsers[1]} />
    //         <UserDetails user ={allUsers[2]} />
    //     </div>
    // );
// };

// import React, { useState } from "react";
// import UserDetails from "./userDetails";

// const AllUserList = () => {
//     // let xyz = useState(); // xyz is an array which contains 2 things, xyz[0], is state and xyz(1) is setter function
//     const [state, setState] = useState({ name: "Gourav Sharma"});

//     return <h1>The name is {state.name}</h1>;
// };

// export default AllUserList;
