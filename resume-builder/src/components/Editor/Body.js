import React, { useState ,useRef} from 'react'
import ReactToPrint from 'react-to-print'
import { ArrowDown } from 'react-feather'
import InputDetails from './InputDetail';
import styles from'./body.module.css';
import Resume from './ResumeTemplate';

function Body() {
    const colors = ["#239ce2", "#48bb78", "#0bc5ea", "#a0aec0", "#ed8936"];
    const sections = {
      basicInfo: "Basic Info",
      workExp: "Work Experience",
      project: "Projects",
      education: "Education",
      achievement: "Achievements",
      summary: "Summary",
      other: "Other",
    };
    const resumeRef = useRef();
  
    const [activeColor, setActiveColor] = useState(colors[0]);
    const [resumeInformation, setResumeInformation] = useState({
      [sections.basicInfo]: {
        id: sections.basicInfo,
        sectionTitle: sections.basicInfo,
        detail: {},
      },
      [sections.workExp]: {
        id: sections.workExp,
        sectionTitle: sections.workExp,
        details: [],
      },
      [sections.project]: {
        id: sections.project,
        sectionTitle: sections.project,
        details: [],
      },
      [sections.education]: {
        id: sections.education,
        sectionTitle: sections.education,
        details: [],
      },
      [sections.achievement]: {
        id: sections.achievement,
        sectionTitle: sections.achievement,
        points: [],
      },
      [sections.summary]: {
        id: sections.summary,
        sectionTitle: sections.summary,
        detail: "",
      },
      [sections.other]: {
        id: sections.other,
        sectionTitle: sections.other,
        detail: "",
      },
    });
  
    return (
      <div className={styles.container}>
        <div className={styles.main}>
        <div className={styles.toolbar}>
          <div className={styles.colors}>
            {colors.map((item) => (
              <span
                key={item}
                style={{ backgroundColor: item }}
                className={`${styles.color} ${
                  activeColor === item ? styles.active : ""
                }`}
                onClick={() => setActiveColor(item)}
              />
            ))}
          </div>
        </div>
          <InputDetails
            sections={sections}
            information={resumeInformation}
            setInformation={setResumeInformation}
          />
          <div className={styles.print}>
            <ReactToPrint
                trigger={() => {
                return (
                    <button>
                    Download <ArrowDown />
                    </button>
                );
                }}
                content={() => resumeRef.current}
            />
          </div>
            
        </div>
          <Resume
            ref={resumeRef}
            sections={sections}
            information={resumeInformation}
            activeColor={activeColor}
          />
      </div>
    );
  }

export default Body