import { ReactNode } from "react";

type Props = {
	children: ReactNode;
};

const Button = ({ children }: Props) => {
	return <div className="btn btn-primary w-100">{children}</div>;
};

export default Button;
