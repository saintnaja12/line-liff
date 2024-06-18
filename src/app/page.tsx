"use client"
import { useEffect, useState } from 'react';
import liff from '@line/liff';
import { initLiff } from './utils/liff';

const UserProfile = () => {
    const [profile, setProfile] = useState<{
        displayName: string;
        pictureUrl: string; statusMessage: string
    } | null>(null);

    useEffect(() => {
        const initializeLiff = async () => {
            await initLiff();
            console.log(liff);
            if (liff.getAccessToken()) {
                const userProfile = await liff.getProfile();
                setProfile({
                    displayName: userProfile.displayName,
                    pictureUrl: userProfile.pictureUrl,
                    statusMessage: userProfile.statusMessage,
                });
            } else {
                liff.login();
            }
        };
        initializeLiff();
    }, []);

    return (
        <div>
        {profile ? (
            <div>
                {/* <h1>Welcome, {profile.displayName}</h1>
                <img src={profile.pictureUrl} alt={profile.displayName} />
                <p>{profile.statusMessage}</p> */}
                <p>GO!!!</p>
            </div>
        ) : (
            <p>Loading...</p>
        )}
        </div>
    );
};

export default UserProfile;
