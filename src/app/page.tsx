import Image from "next/image";
import Counter from "@/components/examples/Counter";
import PaginatorExample from "@/components/examples/PaginatorExample";
import UserLogin from "@/components/examples/UserLogin";
import Sidebar from "@/components/Sidebar";

export default function Home() {
	return (
		<div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
			<main className="flex flex-col gap-8 row-start-2 items-center sm:items-start max-w-4xl">
				<div className="text-center sm:text-left">
					<h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
						Market Web
					</h1>
					<p className="text-lg text-gray-600 mb-8">
						Stack de desenvolvimento com Next.js, TypeScript, Tailwind CSS e
						Zustand
					</p>
				</div>

				<Sidebar />

				<div className="grid gap-6 md:grid-cols-2 w-full">
					<div className="p-6 border rounded-lg bg-white shadow-sm">
						<h3 className="text-xl font-semibold mb-4 text-gray-800">
							🚀 Stack Configurada
						</h3>
						<ul className="space-y-2 text-sm">
							<li className="flex items-center gap-2">
								<span className="text-green-500">✓</span>
								Next.js 15 (App Router)
							</li>
							<li className="flex items-center gap-2">
								<span className="text-green-500">✓</span>
								TypeScript
							</li>
							<li className="flex items-center gap-2">
								<span className="text-green-500">✓</span>
								Tailwind CSS
							</li>
							<li className="flex items-center gap-2">
								<span className="text-green-500">✓</span>
								Zustand (State Management)
							</li>
							<li className="flex items-center gap-2">
								<span className="text-green-500">✓</span>
								Import Aliases (@/*)
							</li>
						</ul>
					</div>

					<Counter />
				</div>

				<div className="grid gap-6 md:grid-cols-2 w-full">
					<UserLogin />
					<PaginatorExample />
				</div>

				<div className="w-full p-6 border rounded-lg bg-gray-50">
					<h3 className="text-xl font-semibold mb-4 text-gray-800">
						📁 Estrutura do Projeto
					</h3>
					<div className="font-mono text-sm space-y-1 text-gray-600">
						<div>src/</div>
						<div className="ml-4">app/ - App Router (páginas)</div>
						<div className="ml-4">components/ - Componentes reutilizáveis</div>
						<div className="ml-4">stores/ - Stores do Zustand</div>
						<div className="ml-4">types/ - Tipos TypeScript</div>
					</div>
				</div>

				<div className="flex gap-4 items-center flex-col sm:flex-row">
					<a
						className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
						href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
						target="_blank"
						rel="noopener noreferrer"
					>
						<Image
							className="dark:invert"
							src="/vercel.svg"
							alt="Vercel logomark"
							width={20}
							height={20}
						/>
						Deploy now
					</a>
					<a
						className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
						href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
						target="_blank"
						rel="noopener noreferrer"
					>
						Read our docs
					</a>
				</div>
			</main>
			<footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
				<a
					className="flex items-center gap-2 hover:underline hover:underline-offset-4"
					href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
					target="_blank"
					rel="noopener noreferrer"
				>
					<Image
						aria-hidden
						src="/file.svg"
						alt="File icon"
						width={16}
						height={16}
					/>
					Learn
				</a>
				<a
					className="flex items-center gap-2 hover:underline hover:underline-offset-4"
					href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
					target="_blank"
					rel="noopener noreferrer"
				>
					<Image
						aria-hidden
						src="/window.svg"
						alt="Window icon"
						width={16}
						height={16}
					/>
					Examples
				</a>
				<a
					className="flex items-center gap-2 hover:underline hover:underline-offset-4"
					href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
					target="_blank"
					rel="noopener noreferrer"
				>
					<Image
						aria-hidden
						src="/globe.svg"
						alt="Globe icon"
						width={16}
						height={16}
					/>
					Go to nextjs.org →
				</a>
			</footer>
		</div>
	);
}
