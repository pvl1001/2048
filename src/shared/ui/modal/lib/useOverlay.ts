import {useState} from 'react';
import {useNavigateModal} from "shared/lib/hooks";


export type UseModalProps = {
    visible: boolean
    onClose: () => void
    onOpen: () => void
}

export function useOverlay(): UseModalProps {
    const {closeModal} = useNavigateModal();
    const [visible, setVisible] = useState(false);

    function onOpen() {
        setVisible(true);
    }

    // useEffect(() => {
    //     function keydownHandler(e: KeyboardEvent) {
    //         if (e.key === 'Escape') closeModal();
    //     }
    //
    //     document.addEventListener('keydown', keydownHandler);
    //     return () => {
    //         document.removeEventListener('keydown', keydownHandler);
    //     };
    // }, []);

    return {visible, onClose: closeModal, onOpen};
}

