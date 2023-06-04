import { Link } from "react-router-dom";
import { IoMdSettings } from 'react-icons/io';
import { BsFileCode } from 'react-icons/bs';

function Home() {

  return (
    <section className="home">
      <div className="welcome">
        <h1>Fetch API</h1>
        <h1>CRUD Operations</h1>
      </div>
      <div className="home-img">
        <div className="left">
          💻
          <div className="r req1">
            <BsFileCode />
            <div className="r req2"><h6>Request</h6></div>
          </div>
        </div>


        <div className="right">
          <div className="box">
            <div className="r res1">
              {`{ JSON }`}
              <div className="r res2"><h6>Response</h6></div>
            </div>
            <h4>API</h4>
            <div className="rotate"><IoMdSettings /></div>
          </div>
          🖥
        </div>
      </div>

      <Link to="/todos">
        <button className="btn">Get Started</button>
      </Link>

    </section>
  )
}

export default Home;