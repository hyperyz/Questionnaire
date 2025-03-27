import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { updateCurrentCom } from "@/store/comsSlice";
import { useEffect } from "react";

function useChangeCurrentCom() {
    const dispatch = useDispatch()
    const location = useLocation()
    const comName = location.pathname.split("/").pop();
    useEffect(() => {
        dispatch(updateCurrentCom(comName as string));
    }, [])
}

export default useChangeCurrentCom;