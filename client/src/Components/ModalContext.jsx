import { createContext, useState } from "react";

const ModalContext = createContext();

export const ModalProvider = ({ children }) => {
	const [showModal, setShowModal] = useState(true);

	return (
		<ModalContext.Provider value={{ showModal, setShowModal }}>
			{children}
		</ModalContext.Provider>
	);
};

export default ModalContext;
