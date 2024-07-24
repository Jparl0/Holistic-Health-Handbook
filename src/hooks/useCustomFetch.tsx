import { useCallback, useContext } from "react";
import { AppContext } from "../utils/context";



export default function useCustomFetch () {
    const {cache} = useContext(AppContext)

    const fetchWithCache = useCallback(
        async <TData, TParams extends array = array>(
            endpoint: string
        ): Promise<TData | null> => (
            return
        )
            
    )
    []
}