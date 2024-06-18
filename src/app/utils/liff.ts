import liff from '@line/liff';

export const initLiff = async () => {
    try {
        await liff.init({
            liffId: process.env.NEXT_PUBLIC_LIFF_ID as string
        });
    } catch (error) {
        console.error('LIFF initialization failed', error);
    }
};
