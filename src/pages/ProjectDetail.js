import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function Project({ userName }) {
    const [loading, setLoading] = useState(false);
    const [project, setProject] = useState([]);
    const { name } = useParams();

    useEffect(() => {
        async function fetchData(){
            const project = await fetch('');
            const result = project.json();
            if (result) {
                setProject(result);
                setLoading(true);
            }
        }
        if (userName && name) {
            fetchData();
        }
    }, [userName, name]);

    return (
        <div className='Project-container'>
            <h2>Project: {project.name}</h2>
            {loading ? (
                <span>Loading...</span>
            ):(
                <div></div>
            )}
        </div>
    );
}

export default Project;