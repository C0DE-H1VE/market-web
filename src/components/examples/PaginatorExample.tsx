"use client";

import { useState } from "react";
import Paginator from "../Paginator";

export default function PaginatorExample() {
	const [currentPage, setCurrentPage] = useState(1);
	const [totalPages, setTotalPages] = useState(10);

	const handlePageChange = (page: number) => {
		setCurrentPage(page);
		console.log("Página atual:", page);
	};

	return (
		<div className="p-6 border rounded-lg bg-white shadow-sm space-y-6">
			<h3 className="text-xl font-semibold text-gray-800">
				📄 Sistema de Paginação
			</h3>

			{/* Controles para testar */}
			<div className="space-y-4">
				<div>
					<label
						className="block text-sm font-medium text-gray-700 mb-2"
						htmlFor="total-pages"
					>
						Total de Páginas:
					</label>
					<input
						name="total-pages"
						type="number"
						min="1"
						max="100"
						value={totalPages}
						onChange={(e) => {
							const newTotal = +e.target.value || 1;
							setTotalPages(newTotal);
							if (currentPage > newTotal) {
								setCurrentPage(1);
							}
						}}
						className="w-24 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
					/>
				</div>

				<div>
					<label
						className="block text-sm font-medium text-gray-700 mb-2"
						htmlFor="current-page"
					>
						Página Inicial:
					</label>
					<input
						name="current-page"
						type="number"
						min="1"
						max={totalPages}
						value={currentPage}
						onChange={(e) => {
							const newPage = +e.target.value || 1;
							if (newPage >= 1 && newPage <= totalPages) {
								setCurrentPage(newPage);
							}
						}}
						className="w-24 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
					/>
				</div>

				<div className="text-sm text-gray-600 bg-gray-50 p-3 rounded-md">
					<p>
						<strong>Página atual:</strong> {currentPage} de {totalPages}
					</p>
					<p>
						<strong>Comportamento atual:</strong>
					</p>
					<div className="mt-2 text-xs space-y-1">
						{totalPages <= 5 && (
							<p>• ≤5 páginas: Mostra todas (← 1 2 3 4 5 →)</p>
						)}
						{totalPages === 6 && (
							<p>• 6 páginas: Uma reticência (← 1 2 3 4 ... 6 →)</p>
						)}
						{totalPages > 6 && currentPage <= 3 && (
							<p>• Início: ← 1 2 3 ... {totalPages} →</p>
						)}
						{totalPages > 6 &&
							currentPage > 3 &&
							currentPage < totalPages - 2 && (
								<p>
									• Meio: ← 1 ... {currentPage} ... {totalPages} → (7 elementos)
								</p>
							)}
						{totalPages > 6 && currentPage >= totalPages - 2 && (
							<p>
								• Fim: ← 1 ... {totalPages - 2} {totalPages - 1} {totalPages} →
							</p>
						)}
					</div>
				</div>
			</div>

			{/* Paginador */}
			<div className="flex flex-col items-center space-y-4">
				<Paginator
					totalPages={totalPages}
					initialPage={currentPage}
					onPageChange={handlePageChange}
				/>

				{/* Simulação de conteúdo */}
				<div className="w-full p-4 bg-blue-50 rounded-md text-center">
					<p className="text-blue-800 font-medium">
						Conteúdo da Página {currentPage}
					</p>
					<p className="text-blue-600 text-sm mt-1">
						Aqui seria exibido o conteúdo correspondente à página atual
					</p>
				</div>
			</div>

			{/* Exemplos de comportamento */}
			<div className="border-t pt-4">
				<h4 className="text-lg font-medium text-gray-800 mb-3">
					📋 Casos de Teste
				</h4>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
					<div className="space-y-2">
						<button
							type="button"
							onClick={() => {
								setTotalPages(3);
								setCurrentPage(2);
							}}
							className="block w-full text-left px-3 py-2 bg-blue-50 hover:bg-blue-100 rounded border"
						>
							<strong>3 páginas, página 2:</strong>
							<br />
							<code className="text-xs">← 1 [2] 3 →</code>
						</button>
						<button
							type="button"
							onClick={() => {
								setTotalPages(6);
								setCurrentPage(5);
							}}
							className="block w-full text-left px-3 py-2 bg-green-50 hover:bg-green-100 rounded border"
						>
							<strong>6 páginas, página 5:</strong>
							<br />
							<code className="text-xs">← 1 ... 3 4 [5] 6 →</code>
						</button>
					</div>
					<div className="space-y-2">
						<button
							type="button"
							onClick={() => {
								setTotalPages(10);
								setCurrentPage(5);
							}}
							className="block w-full text-left px-3 py-2 bg-yellow-50 hover:bg-yellow-100 rounded border"
						>
							<strong>10 páginas, página 5:</strong>
							<br />
							<code className="text-xs">← 1 ... [5] ... 10 →</code>
						</button>
						<button
							type="button"
							onClick={() => {
								setTotalPages(15);
								setCurrentPage(2);
							}}
							className="block w-full text-left px-3 py-2 bg-purple-50 hover:bg-purple-100 rounded border"
						>
							<strong>15 páginas, página 2:</strong>
							<br />
							<code className="text-xs">← 1 [2] 3 ... 15 →</code>
						</button>
					</div>
				</div>

				<div className="mt-4 p-3 bg-gray-100 rounded text-xs">
					<strong>🎯 Regra dos 7 elementos máximos:</strong>
					<p>
						← (1) + ... (1) + página atual (1) + ... (1) + última (1) + → = 7
						elementos
					</p>
				</div>
			</div>
		</div>
	);
}
