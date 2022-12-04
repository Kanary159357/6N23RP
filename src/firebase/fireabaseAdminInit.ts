import { initializeApp, cert, applicationDefault } from 'firebase-admin/app';
import { getApps, } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
const privateKey = `-----BEGIN PRIVATE KEY-----
MIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQC/vw85n5x4Els7
HgpN0+o4iRwyFOhEh8/pI3tnTjfSxGy8uyPv9it28fJBze6gP8AFKnMCiHJJDK2C
PH5a1T2tBrUouOpEYk65C2ugfEvolNonmGDo55Gr1gsANMwZlTOfQplmXYCTj1/S
UURuZUjKabn0cV8boFDaXo1VrYM/XZgytSIUed9X2Vh4uMA+u5x1m6sxytmXSiMF
VJq0paeSZIT9Sb8cAlM7KlKw7iD7Pt2ES/eo2jcgOH31hBYDq6aeyHaFNwVTCpCN
oIpxsG4qUNOYuI3Pb6Ah+knScFY2vE86rhLk+J7Z6ymwZHxbU4feIZsJ88dWgQOh
CoXNE8ZnAgMBAAECggEAIgzVsU/sw03PMaJWBhgZwcxnW2VnEbRkcWxBn8i+FQmY
nbNF4HkAovC4KoNdWsu3V7OAFPUSBnLf5P7FGXBAsZc9WGvt/hLPFAE5LZilCjpU
uy9OFk35CmDKN1Eo5Wofbqqu/wSfrpSJWZng4xHNaVR5FzWCxC8l7IFZ69sSMZAo
ZJR4oiEFDkajc2G2L5avElkk4NcRdrZxE2nMp7AErTowl8ZTTopVDp6TQWq4jymW
PT3t2lIu3GowM387gCvJna0YXhM/KE7lllKwP+/Xch6cUaeUwMut3vZAnLAxMmVW
/raii9MIVxNhHmCUOU43d7y57TM7+K2Zn91F2B7ZkQKBgQDv8PMp8/KT55LmZ62m
l/z+qg6yEjM9t4zG8yVNY8jaKvBRLKO3sWVIRiucW71VAMCQ86/6+h+gjGLxFy/9
9ns7MXR2AA1ZqN1M0HThKdJUry5EN5LbjCJj8+XIALEcS5SwDfoM2pNFTdRhMefE
wqnGCC4ISZEEy9Cwqyk2Ey/zrQKBgQDMlFvrwGjeb/lUlxxmN0oErIfBQGmsM1R7
qWqPZ+aEWNQza3yQIVPj01kIxwDM0SLOG8IPxTV7HLhH5KHPH3ZUmydvcmLKmilw
f3DwXGkiMU/odgvoMOccW74zW4/Y8XpjNbrnJZflIyA80a+mFt8mDf7Mj513RTAe
k1u1aMAE4wKBgQDAJ+JFdeWOR8XgmaV7JntpY72zJFo/EfE/H1h/WututTaSe8J9
iScIs5GXfezp11lgfJgx0gBkLinK1HwN0kishhWzrqUCafcY3lTMQhb81PKjlTIa
e2bLT3d1LgCpHWpteDQJ+T46IXN1h2cKr68RNlnPL0NhaOyvn9O4R7N+XQKBgHtr
3fDiyeG4iCFicP2xyXP8aoJKS/ZZmVRppyIROt8JgCvtYt7JXIUMEqDa/j6SxX62
/GLrRRKbBwpIgt4kSw1L9YSk67jzPKDkIczA06SPP3gtD43rQuK27o6pZKUrOfz0
g2fEJFlW0bIfhuqazdF1jAz5b7RvB1LK7/8HzSClAoGAS1Asx2AZyJ4o1dF2F5Dv
TTXDJ+vSis1DlSXvGwfc2TdHASuv6nO3JclvM9LHx2sj1AJ2vCgdYuFhKUfVIYII
LdF5CgfNvAPCdPpWwM/9bkjUoOlQkAeQlx97aCx5wDcalvay36jEI3Dvq/Hqs0Me
zX3Uu1BzMpUE00JHF/pBie0=
-----END PRIVATE KEY-----
`;
const clientEmail = "firebase-adminsdk-exmzg@tekken-info.iam.gserviceaccount.com";
const projectId = "1:482493151012:web:cc3227418248134488a5b1";

if (!privateKey || !clientEmail || !projectId) {
    console.log(
        `Failed to load Firebase credentials. Follow the instructions in the README to set your Firebase credentials inside environment variables.`
    );
}
const defaultAppConfig = {
    credential: cert({
        "projectId": import.meta.env.PROJECT_ID,
        "privateKey": import.meta.env.PRIVATE_KEY,
        "clientEmail": import.meta.env.CLIENT_EMAIL,
    }
    ),
    databaseURL: "https://tekken-info-default-rtdb.firebaseio.com",
};
if (!getApps().length) initializeApp(defaultAppConfig);
export const serverDB = getFirestore();
