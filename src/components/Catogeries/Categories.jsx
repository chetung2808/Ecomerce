import React from "react";
import "./Categories.scss";
import { Link } from "react-router-dom";

const Categories = () => {
  return (
    <div className="categories">
      <div className="col">
        <div className="row">
          <img
            src="https://hrchannels.com/uptalent/attachments/images/20211129/083646562_sales-la-gi-1.png"
            alt=""
          />
          <button>
            <Link className="link" to="/products/1">
              Sale
            </Link>
          </button>
        </div>
       
      </div>
      <div className="col">
        <div className="row">
          {" "}
          <img
            src="https://i.pinimg.com/736x/3d/ea/c4/3deac48a72c2750647c97141d8fe57c4--selection-action-figures.jpg"
            alt=""
          />
          <button>
            <Link to="/products/1" className="link">
              Figure
            </Link>
          </button>
        </div>
      </div>
      <div className="col col-l">
        <div className="row">
          <div className="col">
            <div className="row">
              <img
                src="https://cf.shopee.vn/file/sg-11134201-22090-eupfu4ehh3hv07"
                alt=""
              />
              <button>
                <Link to="/products/1" className="link">
                  Dx
                </Link>
              </button>
            </div>
          </div>
          <div className="col">
            <div className="row">
              {" "}
              <img
                src="https://cf.shopee.vn/file/fe7850a85480936e51dec24e8f070563"
                alt=""
              />
              <button>
                <Link to="/products/1" className="link">
                  Gundam
                </Link>
              </button>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Categories;