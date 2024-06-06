import { FaPlus } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";


export default function AssignmentControl() {
    return (
      <div id="wd-assignments-controls" className="text-nowrap d-flex p-0 m-5 justify-content-between">
        <div style={{ position: 'relative', width: '600px' }}>
                <CiSearch style={{ position: 'absolute', left: '10px', top: '50%', transform: 'translateY(-50%)' }} />
                <input type="text" id="wd-search-assignments"
                    className="form-control pl-5" placeholder="Search..." style={{ paddingLeft: "40px"}}/>
            </div>

        <div>
        <button id="wd-add-assignment-btn" className="btn btn-lg bg-secondary me-1">
            <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
            Group
          </button>

          <button id="wd-add-assignment-btn" className="btn btn-lg btn-danger me-1">
            <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
            Assignment
          </button>


        </div>
      </div>
    );
  }
