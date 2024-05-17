import React, {useState} from 'react';
import '../../style/committee.css'

const Committees = () => {

    const [expandedSections, setExpandedSections] = useState({});

    const toggleSection = (index) => {
        setExpandedSections((prev) => ({
        ...prev,
        [index]: !prev[index]
        }));
    };

    const committeeData = [
        {
          title: "Organizing Committee",
          members: [
            "Prof. Dr. Ummul Khair Fatema - Dean Faculty of Textile Chemical Engineering and Organizing Chair ICTSE 2024",
            "Prof. Dr. Md. Zulhash Uddin - Head Department of Wet Process Engineering",
            "Prof. Dr. Mohammad Forhad Hossain - Head Department of Dyes and Chemical Engineering",
            "Kawser Parveen Chowdhury - Associate Professor Department of Wet Process Engineering",
            "Rasheda Begum Dina - Associate Professor Department of Wet Process Engineering",
            "Dr. Imana Shahrin Tania - Associate Professor Department of Wet Process Engineering",
            "Dr. Md. Reajul Islam - Associate Professor and Head Department of Yarn Engineering",
            "Humayra Akhter Himu - Assistant Professor and Head Department of Environmental Science and Engineering",
            "Tabassum Ferdous - Assistant Professor Department of Wet Process Engineering",
            "Tania Akther - Lecturer Department of Wet Process Engineering",
            "Md. Morshedul Haque - Lecturer Department of Environmental Science and Engineering",
            "Dr. Mohammad Abbas Uddin - Assistant Professor Department of Dyes and Chemical Engineering and Conference Secretary ICTSE 2024"
          ]
        },
        {
          title: "Technical Committee",
          members: [
            "Dr. Shekh Md. Mamun Kabir - Associate Professor Department of Wet Process Engineering",
            "Dr. A T M Faiz Ahmed - Associate Professor and Head Department of Fabric Engineering",
            "Dr. Mahmuda Akter - Associate Professor and Head Department of Apparel Engineering",
            "Dr. Md. Mahbubor Rahman - Associate Professor and Head Department of Textile Fashion and Design",
            "Dr. Hasina Akter - Associate Professor and Head Department of Physics",
            "Dr. Emdad Sarker - Associate Professor Department of Fabric Engineering",
            "Dr. Md. Syduzzaman - Associate Professor Department of Textile Engineering Management",
            "Dr. Lamya Zahir - Associate Professor Department of Apparel Engineering",
            "Dr. Md. Rashedul Islam - Assistant Professor Department of Wet Process Engineering",
            "Dr. Ahmed Jalal Uddin - Assistant Professor Department of Yarn Engineering",
            "Dr. Sultana Bedoura - Assistant Professor Department of Dyes and Chemical Engineering",
            "Md. Refat Hossain - Lecturer Department of Environmental Science and Engineering",
            "Md. Morshedul Haque - Lecturer Department of Environmental Science and Engineering"
          ]
        },
        {
          title: "Conference Proceedings Printing and Publication Committee",
          members: [
            "Prof. Dr. Kaniz Farhana - Department of Apparel Engineering",
            "Prof. Dr. Md. Samiul Islam Chowdhury - Head Department of Chemistry",
            "Dr. Md. Rashedul Islam - Assistant Professor Department of Wet Process Engineering",
            "Emran Hossain - Assistant Professor Department of Wet Process Engineering",
            "Nusrat Jahan - Assistant Professor Department of Dyes and Chemical Engineering",
            "Tania Akther - Lecturer Department of Wet Process Engineering",
            "Md. Refat Hossain - Lecturer Department of Environmental Science and Engineering",
            "Md. Morshedul Haque - Lecturer Department of Environmental Science and Engineering",
            "Sk. Mohammad Raafi - Lecturer Department of Wet Process Engineering"
          ]
        },
        {
          title: "IT Support and Registration Committee",
          members: [
            "Dr. Mohammad Abbas Uddin - Assistant Professor Department of Dyes and Chemical Engineering",
            "Humayra Akhter Himu - Assistant Professor and Head Department of Environmental Science and Engineering",
            "Kazi Sirajul Islam - Assistant Professor Department of Dyes and Chemical Engineering",
            "Md. Motakabbir Hasan - Assistant Professor Department of Wet Process Engineering",
            "Sk. Mohammad Raafi - Lecturer Department of Wet Process Engineering",
            "Md. Shohag Babu - Lecturer Department of Wet Process Engineering",
            "Md. Ashifur Rahman - Programmer ICT Cell"
          ]
        },
        {
          title: "Program and Event Management Committee",
          members: [
            "Dr. Mohammad Abbas Uddin - Assistant Professor Department of Dyes and Chemical Engineering",
            "Humayra Akhter Himu - Assistant Professor and Head Department of Environmental Science and Engineering",
            "Tabassum Ferdous - Assistant Professor Department of Wet Process Engineering",
            "Rifat Jahan - Assistant Professor Department of Wet Process Engineering",
            "Md. Abul Kalam Azad - Lecturer Department of Dyes and Chemical Engineering",
          ]
        },
        {
          title: "Budget Preparation and Management Committee",
          members: [
            "Dr. Mohammad Abbas Uddin - Assistant Professor Department of Dyes and Chemical Engineering",
            "Humayra Akhter Himu - Assistant Professor and Head Department of Environmental Science and Engineering",
            "Rifat Jahan - Assistant Professor Department of Wet Process Engineering",
            "Md. Abul Kalam Azad - Lecturer Department of Dyes and Chemical Engineering",
            "Sk. Mohammad Raafi - Lecturer Department of Wet Process Engineering",
          ]
        }
      ];

      return (
        <div className="committee-grid">
            {committeeData.map((committee, index) => {
                const isExpanded = expandedSections[index];
                return (
                <div key={index} className="committee-section">
                    <h2 className="committee-title">{committee.title}</h2>
                    <ul className={`committee-members ${isExpanded ? 'expanded' : 'collapsed'}`}>
                    {committee.members.map((member, memberIndex) => (
                        <li key={memberIndex} className="committee-member">{member}</li>
                    ))}
                    </ul>
                    {committee.members.length > 4 && (
                    <button className="see-more-button" onClick={() => toggleSection(index)}>
                        {isExpanded ? 'See Less' : 'See More'}
                    </button>
                    )}
                </div>
                );
            })}
        </div>
      );
};

export default Committees;