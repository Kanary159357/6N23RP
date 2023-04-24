import { initializeApp, cert } from "firebase-admin/app";
import { getApps } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";
import { getAuth } from "firebase-admin/auth";

const defaultAppConfig = {
  credential: cert({
    projectId: "tekken-info",
    privateKey:
      "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQCssspkKHE+bPcN\nR0Zr+yt40HQLPfLLX+YTK/BxabqURdAvXkQMgXiO8vQFe1mnbdmBgIodsMqyc4DC\nb3guxBq2uyUldYExSbMOpij16ADZ801wY5awusUGjn+N0zQ32K6UkTRGq4GOPN5B\nNi23XQNC5G7D7OOKucXPY/rekw+j3QpumCc1zzMbvjydp79AZ6C3A996ms1aupUH\n4vbI1p6JmjfwBdEI6b0sd3/qEcRqo6z3BtCuH4IJ9M/r8L431ygGCcqptY5R8p37\nLZj2GSc4wY6yprqORNleAAhALMOGcXcV82cqoqc014TwvY3ENZxbQQkvcsb7SSTI\nQ/KNJ0XTAgMBAAECggEADmmvfXNonBKg/bE0nd9s7dzLyoJliHac732rx/NQeH5p\nFQLzf+2wP5HkLq7wOQpwbB/rpvWxvPnpxZBjAdgo+JYe0AUB/riNYowYgAlYRNhK\n3rXZBi/YMKdk2tPFGGITk9+YcstueQ34aI3ae+Kd2o/Q9LYI+XNuoFPSRJAWbpDp\nR7H/AYl4F9SdEKX3WchMCWI/FJN5ZMgRAG8K6qfWIKb6+2BxEwDwX4JT03zaVT2J\ndb32M+SL4XTvufigExfhUXhXXrl60h4DRHUtwdqRgxk1qX4m9sMfomrR6uJv2AT8\nJNX+OxKl2WJMYLEK58OJDuYBH357ihFwhWIxbyRKgQKBgQDmQ1zD6Zl/YWN2Fw3C\nLl3k+WmdoLtNiAaoswBzkQ4FxrixM6m2Y5HQHql/mlOylHl1LtJP4UbUl0qF5VQD\n2Yvq2QpB+EEFDWTaCkKLo75PhdYokkINV+vlO+uVT5G4ec1rig/t/zzLDqqc/1ux\nAt00MpjEgdX+vDbx6h1FaRlrgQKBgQDAAEyCU+8LN0R6UKJF6Sua8fzOjiPWBqKF\nmDY0+Vt1JKbNmvHP7Jp9DU3JXv4Ve6Zt1CrdJz0VurTnw1ZCy3H/ZnGg72KhlBVR\nbxtkPLE6PTHODC6kar3YwBKDqb/qMb3lsIfNdlag6nf+Dwl3bnTZaBk7LUSllbtH\nEooNSTrrUwKBgAoYH+PyxKjh4xNVNWQy1ijoiim/1xYyBWC14CowzLWSHZyfECyP\ntt+xyGpwoISun5h0ggHAdXNyYnD2ObWlfs2/0AROVsNa7/XjB0HJ3tjrnBTRPJYL\nKas18kDsaQ32QPwa5FHho4+fR/lz9FgRMRNNuIa8zl3JcHswcTIOxm+BAoGBAKMo\nnduyj9SsJpj6pKtcNh35vaeZyoI6KSn16zqhHEMz3juijBLxMWdLQur4ulpvNULn\npXVBvvsUKl8487jXQgyTdcQZKWu9d1A4ZsKLgN/I2OYMHCbEPohO0Gzqd5gApSrn\nFMBY68za8xUGmjjPuKR3fdl34noD/52p937K2DLZAoGBANc1jCGJ8trgKcpUXHJ0\nAVyElBuKrokt+HgGjwpwAuPfRkJspIRjasS0jJh+QrZ0inbPm1WvN3hOini6nF02\nGaUVPzWoHGIVohNkI5uLz7VJrw/hG/1GsO7+hW4PRtpOYgw+fxKTBjM4QSffxo9j\nvCGVTcgdJ18WbN0dVzMk1FJf\n-----END PRIVATE KEY-----\n",
    clientEmail: process.env.CLIENT_EMAIL,
  }),
  databaseURL: "https://tekken-info-default-rtdb.firebaseio.com",
};
if (!getApps().length) initializeApp(defaultAppConfig);
export const serverDB = getFirestore();
export const verifyAdmin = (token: string) => getAuth().verifyIdToken(token);
