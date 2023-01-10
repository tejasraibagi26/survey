import { Link } from "react-router-dom";
import "./dashboard.css";

const Dashboard = () => {
  return (
    <section id="dashboard">
      <div className="container">
        <div className="spacing"></div>
        <div className="topbar">
          <div className="left">
            <h1 className="title">Surveys</h1>
          </div>
          <div className="right">
            <Link to="/new" className="btn btn-primary btn-flex btn-center">
              Create Survey
            </Link>
          </div>
        </div>
        <div className="spacing"></div>
        <div className="surveys">
          <div className="card">
            <div className="card-header">
              <h1 className="title">Survey Title</h1>
            </div>
            <div className="card-body">
              <p className="description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
                quod, voluptatum, quia, voluptas quas voluptates quibusdam
              </p>
            </div>
            <div className="card-footer">
              <div className="btn btn-primary btn-flex btn-center">
                View Survey
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-header">
              <h1 className="title">Survey Title</h1>
            </div>
            <div className="card-body">
              <p className="description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
                quod, voluptatum, quia, voluptas quas voluptates
              </p>
            </div>
            <div className="card-footer">
              <div className="btn btn-primary btn-flex btn-center">
                View Survey
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-header">
              <h1 className="title">Survey Title</h1>
            </div>
            <div className="card-body">
              <p className="description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
                quod, voluptatum, quia, voluptas quas voluptates quibusdam
              </p>
            </div>
            <div className="card-footer">
              <div className="btn btn-primary btn-flex btn-center">
                View Survey
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-header">
              <h1 className="title">Survey Title</h1>
            </div>
            <div className="card-body">
              <p className="description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
                quod, voluptatum, quia, voluptas quas voluptates quibusdam
              </p>
            </div>
            <div className="card-footer">
              <div className="btn btn-primary btn-flex btn-center">
                View Survey
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-header">
              <h1 className="title">Survey Title</h1>
            </div>
            <div className="card-body">
              <p className="description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
                quod, voluptatum, quia, voluptas quas voluptates quibusdam
              </p>
            </div>
            <div className="card-footer">
              <div className="btn btn-primary btn-flex btn-center">
                View Survey
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-header">
              <h1 className="title">Survey Title</h1>
            </div>
            <div className="card-body">
              <p className="description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
                quod, voluptatum, quia, voluptas quas voluptates quibusdam
              </p>
            </div>
            <div className="card-footer">
              <div className="btn btn-primary btn-flex btn-center">
                View Survey
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
