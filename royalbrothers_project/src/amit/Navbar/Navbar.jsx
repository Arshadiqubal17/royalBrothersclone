import { Text, Button } from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import React, { useState,useEffect, useContext } from "react";
// import ctx from "../Context/ApiContext";
import { ctx } from "../Context/ApiContext";
import "./Navbar.css"
import DrawerExample from "../Sidebar/Sidebar";
export default function Nav() {

    // const {access} = useContext(ctx)
    const navigate = useNavigate()
  // useEffect(()=>{
  //     // const name = JSON.parse(localStorage.getItem("name"))
  //     const token = JSON.parse(localStorage.getItem("email"))
  // const location = JSON.parse(localStorage.getItem("name"))
  //     setToken(token);
  //     // setName(name);
  //     // console.log(name)
  // },[])
  // const name = JSON.parse(localStorage.getItem("name"))
  // const location = JSON.parse(localStorage.getItem("name"))
    const [token,setToken] = useState("")
    // const [name,setName] = useState("")
  return (
    <div>
      <div>
        <p id="navrow1">
        Our delay policy has been changed  <a href="/">Know more</a></p>
      <div id="navrow2"
        style={{
          display: "flex",
          flexDirection: "column",
          backgroundColor: "white",
        }}
      >
        <div
          style={{
            textAlign: "right",
            width: "100%",
            margin: "5px 0 5px 0",
            borderBottom: "0.1px solid lightgrey",
          }}
        >
          <div style={{ display: "flex", flexDirection: "row", float: "right" ,marginTop:"-15px",padding:'4px'}}>
            <div><img height="14px"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoSvmnm5Xat2eUJ2qZijUrweZS0pueSDBHnQ&usqp=CAU"
              alt="call"
            ></img></div>
            <Text margin="-1px 5px">+919368155634 / +919507524066</Text>
            <Text margin="-1px 8px">|</Text>
            <Link to="/Home"> <div style={{ marginRight:"6px", textDecoration:"none",color:"black"}}>
              Chat Now
            </div></Link>
          </div>
        </div>
        <div id="nav3">
          <div id="drawlogo">
            <DrawerExample />
            <Link to="/Home">
              
              <img
                style={{ height: "57px" }}
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4v-lbnpyvlbyFviW3Sb_-DFRQDZWNkpHtwA&usqp=CAU"
                alt="logo"
              />
            </Link>
          </div>
          <div id="navpagecont">
            <div>
              <Link to="/tarrif" className="navlink">
                <Text  >
                  Tariff
                </Text>
              </Link>
            </div>
            <div>
              <Link to="/store" className="navlink">
                
                <Text   >
                  Store
                </Text>
              </Link>
            </div>
            <div id="whatnew">
              <Link to="/what's new" className="navlink">
                
                <Text >
                  What's New?
                </Text>
                
                </Link>
              <img
                style={{ height: "15px",fontWeight:"500px", marginTop: "2px", marginLeft: "10px" }}
                src="https://cdn-icons-png.flaticon.com/128/318/318426.png"
                alt="arrow"
              ></img>
            </div>
            <div>
              <Link to="/offers" className="navlink">
                <Text >
                  Offers
                </Text>
              </Link>
            </div >
            <div id="partner"
              
            >
              <Link to="/partner with us" className="navlink">
               
                <Text>Partner With us</Text> 
                
              </Link>
              <img
               style={{ height: "15px",fontWeight:"500px", marginTop: "2px", marginLeft: "10px" }}
               src="https://cdn-icons-png.flaticon.com/128/318/318426.png"
               alt="arrow"
              ></img>
            </div>
          </div>
          <div>
            <Link to="/" style ={{textDecoration:"none"}}>
           <div id="location">
              <img
               style={{ height: "70%",  margin:"5px 0 0 10px",backgroundColor:"#f1b826",borderRadius:"50%" }}
                src="https://img.icons8.com/ios/1x/place-marker--v2.png"
                alt="location"
              ></img>
              <Text style={{
                fontSize:"15px",
                fontWeight:"500",
                margin:"10px 0 0 18px",
                }}
              >
                Agra
              </Text>
              <img
                style={{
                  height: "15px",
                  marginTop: "10px",
                  marginLeft: "13%",
                }}
                src="https://cdn-icons-png.flaticon.com/128/318/318426.png"
                alt="arrow"
              ></img>
            </div></Link>
          </div>
          <div id="logsign">
          {/* <div style={{marginLeft:"30px", marginRight:"10px", width:"200px",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between"}}>*/}
        {/* {access ?  */}
        {/* // <> */}
        {/* <Button height="45px" width="180px" backgroundColor="transparent" border="1px solid #FDB065">{"hii"}</Button>
        : */}
            <Link to='/login'> <Button height="35px" width="90px" backgroundColor="transparent" borderRadius="8px" >
               Login
           </Button></Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
           <Link to='/Signup'> <Button height="35px" width="90px" backgroundColor="#FDB605" borderRadius="8px">
    
              
              Sign up
            </Button></Link>
            
            
            
          </div>
        
        </div>
       </div>
      </div>
    </div>
  );
}

{/* <div style={{marginLeft:"30px", marginRight:"10px", width:"200px",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between"}}>
        {token===""?
        <>
            <Button height="50px" width="90px" backgroundColor="transparent">Login</Button>
            <Button height="50px" width="90px" backgroundColor="#FDB605"> Sign up</Button>
            </>
            : */}