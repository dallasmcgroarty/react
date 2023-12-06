import Modal from "../components/Modal";
import Button from "../components/Button";
import { useState } from 'react';

function ModalPage() {
    const [showModal, setShowModal] = useState(false);

    const handleClick = () => {
        setShowModal(true);
    }

    const handleClose = () => {
        setShowModal(false);
    }

    const actionBar = <div>
        <Button onClick={handleClose} primary>Close</Button>
    </div>;

    const modal = <Modal onClose={handleClose} actionBar={actionBar}>
        <p>Here is a sentence.</p>
    </Modal>

    return (
        <div>
            <Button onClick={handleClick} primary>Open Modal</Button>
            {showModal && modal}

            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sem mauris, dapibus aliquam elementum a, iaculis ac ipsum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nunc ut interdum metus. Suspendisse fermentum sapien nisl, at dapibus velit scelerisque sit amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam dolor nunc, lacinia ac porttitor in, vulputate at leo. Suspendisse nec consequat tellus. Nunc varius commodo quam id laoreet. Integer ex lectus, finibus sit amet consequat sed, sodales ac diam.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sem mauris, dapibus aliquam elementum a, iaculis ac ipsum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nunc ut interdum metus. Suspendisse fermentum sapien nisl, at dapibus velit scelerisque sit amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam dolor nunc, lacinia ac porttitor in, vulputate at leo. Suspendisse nec consequat tellus. Nunc varius commodo quam id laoreet. Integer ex lectus, finibus sit amet consequat sed, sodales ac diam.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sem mauris, dapibus aliquam elementum a, iaculis ac ipsum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nunc ut interdum metus. Suspendisse fermentum sapien nisl, at dapibus velit scelerisque sit amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam dolor nunc, lacinia ac porttitor in, vulputate at leo. Suspendisse nec consequat tellus. Nunc varius commodo quam id laoreet. Integer ex lectus, finibus sit amet consequat sed, sodales ac diam.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sem mauris, dapibus aliquam elementum a, iaculis ac ipsum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nunc ut interdum metus. Suspendisse fermentum sapien nisl, at dapibus velit scelerisque sit amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam dolor nunc, lacinia ac porttitor in, vulputate at leo. Suspendisse nec consequat tellus. Nunc varius commodo quam id laoreet. Integer ex lectus, finibus sit amet consequat sed, sodales ac diam.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sem mauris, dapibus aliquam elementum a, iaculis ac ipsum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nunc ut interdum metus. Suspendisse fermentum sapien nisl, at dapibus velit scelerisque sit amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam dolor nunc, lacinia ac porttitor in, vulputate at leo. Suspendisse nec consequat tellus. Nunc varius commodo quam id laoreet. Integer ex lectus, finibus sit amet consequat sed, sodales ac diam.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sem mauris, dapibus aliquam elementum a, iaculis ac ipsum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nunc ut interdum metus. Suspendisse fermentum sapien nisl, at dapibus velit scelerisque sit amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam dolor nunc, lacinia ac porttitor in, vulputate at leo. Suspendisse nec consequat tellus. Nunc varius commodo quam id laoreet. Integer ex lectus, finibus sit amet consequat sed, sodales ac diam.</p>
        
        </div>
    )
}

export default ModalPage;