import React from "react";
import "./About.css"
export const About = () => {
  return (
    <>
      
        <div className="card bg-primary-subtle justify-content-left align-items-left">
          <div className="card-body">
            <h2 id="head">About DONT BE HUNGRY</h2>
            <p className="para">
            Cooking is a passionate job that allows people to turn an ordinary meal into a tempting and mesmerizing one and there are a number of people who take up this art as a hobby or make it their profession. Especially during the initial Covid19 phase when the entire world was locked up in their homes, the one thing they genuinely bonded over was cooking and this is why for the first two months there were a plethora was food pictures being shared by people who loved to spend the lockdown exploring their culinary skills.
            </p>
            <form>
                <h3 className='text-center'>Any Questions...</h3>
                <div className='mb-3'>
                    <label htmlFor='text'>Name</label>
                    <input type='text' placeholder='Enter your name' className='form-control' name='text'/>
                    </div>
                    <div className='mb-3'>
                    <label htmlFor='text'>Your Consern</label>
                    <input type='text' placeholder='Enter your consern' className='form-control' name='text'/>
                </div>
                <div>
                    <input type='checkbox' className='custom-control custom-checkbox'/>
                    <lable htmlFor="checkbox" className="ms-1">Remember me</lable>
                </div>
              
            </form>
          </div>
          <div className="card-footer d-grid">
          <button type="submit" className="btn btn-primary mb-4">Submit</button>
          </div>
        </div>
    
    </>
  );
};
export default About;