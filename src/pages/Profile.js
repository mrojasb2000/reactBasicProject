import { useState, useEffect } from 'react';

function Profile({ userName }) {
    const [loading, setLoading] = useState(false);
    const [profile, setProfile] = useState({});

    useEffect(() => {
        async function fetchData() {
            const url = `https://api.github.com/users/${userName}`;
            const profile = await fetch(url);
            const result = await profile.json();
            if (result) {
                console.log('result: ', result);
                setProfile(result);
                setLoading(false);
            }
        }
        fetchData();
    }, [userName]);

    return (
        <div>
            <h2>About me</h2>
            {loading ? (<span>Loading...</span>): (<ul></ul>)}
        </div>
    );
}

export default Profile;