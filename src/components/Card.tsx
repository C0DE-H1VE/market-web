interface ICardProps {
	children: React.ReactNode;
}

export default function Card({ children }: ICardProps) {
	return <div>{children}</div>;
}
