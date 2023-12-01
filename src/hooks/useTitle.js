import { useEffect } from "react";

const useTitle = title =>{
    useEffect(()=>{
        document.title = `Kidszone - ${title}`;
    },[title])
};

export default useTitle