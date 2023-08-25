import User from "./User";

interface Artist extends User {
    imgUri: string;
    description: string;
}

export default Artist;