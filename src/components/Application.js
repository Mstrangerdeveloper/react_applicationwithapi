import React,{useState}  from 'react';




const  Application = () => {
    
  const [user, setUser] = useState({
    name: "", title: "", first: "", last: "", email: "",
  });
  
  let name, value;
  
      const handleInputs = (e) => {
          console.log(e);
          name = e.target.name;
          value = e.target.value;
          
          setUser({...user, [name]:value});
      }
    
      const PostData = async (e) => {
        e.preventDefault();

        const { title, first, last, email} = user;

        const res = await fetch("/https://randomuser.me/api", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
              title, first, last, email
            })
        });
       

      
        const data = await res.json();

        if (data.status === 422 || !data) {
          window.alert("INvalid Registration");
          console.log("INvalid Registration");
      } else {
           window.alert(" Registration Successfull");
          console.log("Successfull Registration");
}
 }
      

     
    return (
        <>
            <section className="signup">
                <div className="container mt-5">
                    <div className="signup-content">
                        <div className="signup-form">
                            <h2 className="form-title">React Application Page</h2>
                            <form method='POST' className="register-form" id="register-form">
                                
                                <div className="form-group">
                                    <label htmlFor="title">
                                        <i className="zmdi zmdi-account material-icons-name"></i>
                                    </label>
                                    <input type="title" name="title" id="title" autocomplete="off"
                                    value={user.title}
                                    onChange={handleInputs}
                                        placeholder="Your title"
                                    />
                                </div>

                                 <div className="form-group">
                                    <label htmlFor="first">
                                        <i className="zmdi zmdi-email material-icons-name"></i>
                                    </label>
                                    <input type="first" name="first" id="first" autoComplete="off"
                                        value={user.first}
                                        onChange={handleInputs}
                                        placeholder="Your first"
                                    />
                                </div>

                                 <div className="form-group">
                                    <label htmlFor="last">
                                        <i className="zmdi zmdi-phone-in-talk material-icons-name"></i>
                                    </label>
                                    <input type="last" name="last" id="phone" autoComplete="off"
                                        value={user.last}
                                        onChange={handleInputs}
                                        placeholder="Your last"
                                    />
                                </div>

                                 <div className="form-group">
                                    <label htmlFor="email">
                                        <i className="zmdi zmdi-slideshow material-icons-name"></i>
                                    </label>
                                    <input type="email" name="email" id="email" autoComplete="off"
                                        value={user.email}
                                        onChange={handleInputs}
                                        placeholder="Your email"
                                    />
                                </div>
                             <div className="form-group form-button">
                                    <input type="submit" name="signup" id="signup" className="form-submit"
                                        value="register" onClick={PostData}
                                     />
                                </div>

                            </form>
                        </div>
                         </div>
                </div>
           </section>
        </>
    )
}

export default Application;
