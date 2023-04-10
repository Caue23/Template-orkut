import {useContext} from "react";
import { AuthContext } from "../contexts/authCaontext";

export default function useAuth() {
    return useContext(AuthContext);
}