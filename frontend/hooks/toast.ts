import { useToast } from '@chakra-ui/react';

interface IToastData {
    status?: 'success' | 'error' | 'warning' | 'info' | 'loading';
    duration?: number;
    title: string;
    description?: string;
}
export function useThemedToast() {
    const toast = useToast();

    return function(data: IToastData) {
        toast({
            position: 'top-right',
            status: data.status || 'info',
            variant: 'left-accent',
            duration: data.duration || 3000,
            isClosable: false,
            title: data.title,
            description: data.description
        });
    }
}