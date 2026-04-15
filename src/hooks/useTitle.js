import { useEffect } from "react";

export const useTitle = (title) => {
  useEffect(()=>{
    document.title=`${title} / Shooping Mate`
  },[title])
  return null;
}
