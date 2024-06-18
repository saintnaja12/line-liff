declare module '@line/liff' {
    export interface Liff {
      getAccessToken(): unknown;
      login(): unknown;
      init: (config: { liffId: string }) => Promise<void>;
      getProfile: () => Promise<{ userId: string; displayName: string; pictureUrl: string; statusMessage: string }>;
      // เพิ่ม methods อื่น ๆ ที่คุณต้องการใช้งาน
    }
    const liff: Liff;
    export default liff;
}
