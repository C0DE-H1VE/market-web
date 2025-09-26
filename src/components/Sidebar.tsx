"use client";
import Button from "./Button";

export default function Sidebar() {
	const items = [
		{
			key: "dashboard",
			label: "Painel",
			link: "#",
			cbFunction: null,
		},
		{
			key: "comprar",
			label: "Comprar",
			link: "#",
			cbFunction: null,
		},
		{
			key: "minhas-compras",
			label: "Minhas compras",
			link: "#",
			cbFunction: null,
		},
		{
			key: "meus-pagamentos",
			label: "Meus pagamentos",
			link: "#",
			cbFunction: null,
		},
		{
			key: "pagar",
			label: "Pagar",
			link: "#",
			cbFunction: null,
		},
		{
			key: "lista-de-produtos",
			label: "Lista de produtos",
			link: "#",
			cbFunction: null,
		},
		{
			key: "movimentacoes",
			label: "Movimentações",
			link: "#",
			cbFunction: null,
		},
		{
			key: "sugestoes",
			label: "Sugestões",
			link: "#",
			cbFunction: null,
		},
		{
			key: "relatorio",
			label: "Relatório",
			link: "#",
			cbFunction: null,
		},
		{
			key: "configuracoes",
			label: "Configurações",
			link: "#",
			cbFunction: null,
		},
		{
			key: "sair",
			label: "Sair",
			link: "#",
			cbFunction: () => console.log("logout"),
		},
	];
	return (
		<nav>
			<ul>
				{items.map((item) => (
					<li key={item.key}>
						<Button
							label={item.label}
							href={item.link}
							as={item.cbFunction ? "button" : "a"}
							onClick={item.cbFunction ? item.cbFunction : undefined}
						>
							{item.label}
						</Button>
					</li>
				))}
			</ul>
		</nav>
	);
}
