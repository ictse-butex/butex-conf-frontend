import React from 'react';

const ImportantLinks = () => {

    var style1 = "mb-3 text-gray-500 dark:text-gray-400 underline dark:hover:text-blue-600 hover:text-blue-700 hover:no-underline"
    var style2 = "mb-3 text-gray-500 dark:text-gray-400  dark:hover:text-blue-600 hover:text-blue-700 hover:no-underline"
    const links = [
        {
            "text": "Click here to download Flyer",
            "className": style1,
            "link": "https://www.butex.edu.bd/wp-content/uploads/2024/01/connf-24.jpeg"
        },
        {
            "text": "Click here to download Full Paper Template",
            "className": style1,
            "link": "https://www.butex.edu.bd/wp-content/uploads/2024/01/ICTSE_2024_full_paper_template.docx"
        },
        {
            "text": "Click here to download Poster Template 1 (Size A0)",
            "className": style1,
            "link": "https://www.butex.edu.bd/wp-content/uploads/2024/02/Poster-Template_ICTSE-2024-BUTEX-1.pptx"
        },
        {
            "text": "Click here to download Poster Template 2 (Size A0)",
            "className": style1,
            "link": "https://www.butex.edu.bd/wp-content/uploads/2024/02/Poster-Template_ICTSE-2024-BUTEX-2.pptx"
        },
        {
            "text": "Click here to submit the Abstract electronically",
            "className": style1,
            "link": "https://www.butex.edu.bd/wp-content/uploads/2024/02/Poster-Template_ICTSE-2024-BUTEX-3.pptx"
        },
        {
            "text": "Click here to download Abstract template",
            "className": style1,
            "link": "https://www.butex.edu.bd/wp-content/uploads/2023/12/ICTSE-2024_Abstract_template.doc"
        }
    ] 

    return (
        <div className='text-center space-y-4 m-10 '>
            {links.map((link) => {
                return <p>
                    <a href={link.link} className={link.className} download={true}>{link.text}</a>
                </p>
            })}
        </div>
    );
};

export default ImportantLinks;