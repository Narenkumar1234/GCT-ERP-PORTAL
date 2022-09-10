import './App.css'


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar, faClipboardList, faGear, faRectangleList, faUserGraduate, faUserGroup } from '@fortawesome/free-solid-svg-icons';

const staff = <FontAwesomeIcon icon={faUserGroup} />;
const students = <FontAwesomeIcon icon={faUserGraduate} />;
const calendar = <FontAwesomeIcon icon={faCalendar} />;
const Syllabus = <FontAwesomeIcon icon={faClipboardList}/>
const settings = <FontAwesomeIcon icon={faGear} />;
const examination = <FontAwesomeIcon icon={faRectangleList} />;


function LeftPanel(){
    return (
      <>
        <div className="grid grid-rows-5 text-gray-500">
          <div className="row-span-1"></div>
          <div className="row-span-3 space-y-10 container1">
            <div>
              <span>{staff}</span>
              <p className="inline-block pl-1">Staff</p>
            </div>
            <div>
              <span>{students}</span>
              <p className="inline-block pl-1">Students</p>
            </div>
            <div>
              <span>{calendar}</span>
              <p className="inline-block pl-1">Calendar</p>
            </div>
            <div>
              <span>{Syllabus}</span>
              <p className="inline-block pl-1">Syllabus</p>
            </div>
            <div>
              <span>{examination}</span>
              <p className="inline-block pl-1">Examination</p>
            </div>
            <div>
              <span>{settings}</span>
              <p className="inline-block pl-1">Settings</p>
            </div>
          </div>
          <div className="row-span-1"></div>
        </div>
      </>
    );
}

export default LeftPanel;