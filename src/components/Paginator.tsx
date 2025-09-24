'use client'

import { useState, useEffect } from 'react'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline'

interface PaginatorProps {
  totalPages: number
  initialPage?: number
  onPageChange: (page: number) => void
}

export default function Paginator({ totalPages, initialPage = 1, onPageChange }: PaginatorProps) {
  const [currentPage, setCurrentPage] = useState(initialPage)

  useEffect(() => {
    setCurrentPage(initialPage)
  }, [initialPage])

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages && page !== currentPage) {
      setCurrentPage(page)
      onPageChange(page)
    }
  }

  const renderPageNumbers = () => {
    const pages = []
    
    // Caso especial: menos de 6 páginas - mostrar todas
    if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(
          <button
            key={i}
            onClick={() => handlePageChange(i)}
            className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
              i === currentPage
                ? 'bg-blue-600 text-white'
                : 'text-gray-700 hover:bg-gray-100 border border-gray-300'
            }`}
          >
            {i}
          </button>
        )
      }
      return pages
    }

    // Caso com 6 ou mais páginas
    // Sempre mostrar primeira página
    pages.push(
      <button
        key={1}
        onClick={() => handlePageChange(1)}
        className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
          1 === currentPage
            ? 'bg-blue-600 text-white'
            : 'text-gray-700 hover:bg-gray-100 border border-gray-300'
        }`}
      >
        1
      </button>
    )

    // Lógica para reticências e páginas do meio
    if (totalPages === 6) {
      // Caso especial com 6 páginas
      if (currentPage <= 3) {
        // Página atual é 1, 2 ou 3: mostrar 1, 2, 3, 4, ..., 6
        for (let i = 2; i <= 4; i++) {
          pages.push(
            <button
              key={i}
              onClick={() => handlePageChange(i)}
              className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                i === currentPage
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-700 hover:bg-gray-100 border border-gray-300'
              }`}
            >
              {i}
            </button>
          )
        }
        pages.push(
          <span key="ellipsis-end" className="px-3 py-2 text-sm text-gray-500">
            ...
          </span>
        )
      } else {
        // Página atual é 4, 5 ou 6: mostrar 1, ..., 3, 4, 5, 6
        pages.push(
          <span key="ellipsis-start" className="px-3 py-2 text-sm text-gray-500">
            ...
          </span>
        )
        for (let i = 3; i <= 5; i++) {
          pages.push(
            <button
              key={i}
              onClick={() => handlePageChange(i)}
              className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                i === currentPage
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-700 hover:bg-gray-100 border border-gray-300'
              }`}
            >
              {i}
            </button>
          )
        }
      }
    } else {
      // Mais de 6 páginas - lógica completa
      if (currentPage <= 3) {
        // Páginas iniciais: 1, 2, 3, ..., última
        for (let i = 2; i <= 3; i++) {
          pages.push(
            <button
              key={i}
              onClick={() => handlePageChange(i)}
              className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                i === currentPage
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-700 hover:bg-gray-100 border border-gray-300'
              }`}
            >
              {i}
            </button>
          )
        }
        pages.push(
          <span key="ellipsis-end" className="px-3 py-2 text-sm text-gray-500">
            ...
          </span>
        )
      } else if (currentPage >= totalPages - 2) {
        // Páginas finais: 1, ..., antepenúltima, penúltima, última
        pages.push(
          <span key="ellipsis-start" className="px-3 py-2 text-sm text-gray-500">
            ...
          </span>
        )
        for (let i = totalPages - 2; i <= totalPages - 1; i++) {
          pages.push(
            <button
              key={i}
              onClick={() => handlePageChange(i)}
              className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                i === currentPage
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-700 hover:bg-gray-100 border border-gray-300'
              }`}
            >
              {i}
            </button>
          )
        }
      } else {
        // Páginas do meio: 1, ..., atual, ..., última
        pages.push(
          <span key="ellipsis-start" className="px-3 py-2 text-sm text-gray-500">
            ...
          </span>
        )
        
        pages.push(
          <button
            key={currentPage}
            onClick={() => handlePageChange(currentPage)}
            className="px-3 py-2 text-sm font-medium rounded-md transition-colors bg-blue-600 text-white"
          >
            {currentPage}
          </button>
        )
        
        pages.push(
          <span key="ellipsis-end" className="px-3 py-2 text-sm text-gray-500">
            ...
          </span>
        )
      }
    }

    // Sempre mostrar última página (se não for a primeira)
    if (totalPages > 1) {
      pages.push(
        <button
          key={totalPages}
          onClick={() => handlePageChange(totalPages)}
          className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
            totalPages === currentPage
              ? 'bg-blue-600 text-white'
              : 'text-gray-700 hover:bg-gray-100 border border-gray-300'
          }`}
        >
          {totalPages}
        </button>
      )
    }

    return pages
  }

  if (totalPages <= 1) {
    return null // Não mostra paginador se há apenas 1 página ou menos
  }

  return (
    <nav className="flex items-center justify-center space-x-1" aria-label="Pagination">
      {/* Botão Anterior */}
      <button
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={`p-2 rounded-md transition-colors ${
          currentPage === 1
            ? 'text-gray-400 cursor-not-allowed'
            : 'text-gray-700 hover:bg-gray-100'
        }`}
        aria-label="Página anterior"
      >
        <ChevronLeftIcon className="h-5 w-5" />
      </button>

      {/* Números das páginas */}
      {renderPageNumbers()}

      {/* Botão Próximo */}
      <button
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={`p-2 rounded-md transition-colors ${
          currentPage === totalPages
            ? 'text-gray-400 cursor-not-allowed'
            : 'text-gray-700 hover:bg-gray-100'
        }`}
        aria-label="Próxima página"
      >
        <ChevronRightIcon className="h-5 w-5" />
      </button>
    </nav>
  )
}
