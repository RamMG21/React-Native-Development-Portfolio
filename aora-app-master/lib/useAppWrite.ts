import { useEffect, useState } from "react";
import { Alert } from "react-native";
import { Models } from "react-native-appwrite";


const useAppWrite = (fn: () => Promise<Models.Document[]>) => {
    const [data, setData] = useState<unknown[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    const fetchData = async () => {
        setIsLoading(true);

        try {
            const response = await fn();

            setData(response);
        } catch (error) {
            Alert.alert('Error', (error as Error).message)
        } finally {
            setIsLoading(false);
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    const refetch = () => fetchData();

    return { data, refetch, isLoading }
}

export default useAppWrite;