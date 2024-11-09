import React, { useState } from 'react';
import { Menu, X, ChevronDown, Github, Twitter, Linkedin } from 'lucide-react';

const navigation = [
  { name: 'Inicio', href: '/' },
  { name: 'Servicios', href: '/services' },
  { name: 'Productos', href: '/products' },
  {
    name: 'Recursos',
    href: '#',
    children: [
      { name: 'Documentación', href: '/docs' },
      { name: 'Guías', href: '/guides' },
      { name: 'Blog', href: '/blog' },
    ],
  },
  { name: 'Contacto', href: '/contact' },
];

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const toggleDropdown = (name: string) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <nav
          className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
          aria-label="Top">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <div className="flex items-center">
              <a href="/" className="flex items-center">
                <span className="text-2xl font-bold text-gray-900">
                  PuertoChenta
                </span>
              </a>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex md:items-center md:space-x-6">
              {navigation.map((item) => (
                <div key={item.name} className="relative">
                  {item.children ? (
                    <div>
                      <button
                        onClick={() => toggleDropdown(item.name)}
                        className="flex items-center text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium">
                        {item.name}
                        <ChevronDown className="ml-1 h-4 w-4" />
                      </button>
                      {openDropdown === item.name && (
                        <div className="absolute z-10 mt-2 w-48 rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5">
                          {item.children.map((child) => (
                            <a
                              key={child.name}
                              href={child.href}
                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                              {child.name}
                            </a>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <a
                      href={item.href}
                      className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium">
                      {item.name}
                    </a>
                  )}
                </div>
              ))}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                <span className="sr-only">Abrir menú</span>
                {isMobileMenuOpen ? (
                  <X className="block h-6 w-6" />
                ) : (
                  <Menu className="block h-6 w-6" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMobileMenuOpen && (
            <div className="md:hidden py-4">
              {navigation.map((item) => (
                <div key={item.name}>
                  {item.children ? (
                    <div>
                      <button
                        onClick={() => toggleDropdown(item.name)}
                        className="flex w-full items-center justify-between text-gray-600 hover:text-gray-900 px-3 py-2 text-base font-medium">
                        {item.name}
                        <ChevronDown className="ml-1 h-4 w-4" />
                      </button>
                      {openDropdown === item.name && (
                        <div className="bg-gray-50 px-4 py-2">
                          {item.children.map((child) => (
                            <a
                              key={child.name}
                              href={child.href}
                              className="block px-3 py-2 text-base text-gray-600 hover:text-gray-900">
                              {child.name}
                            </a>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <a
                      href={item.href}
                      className="block text-gray-600 hover:text-gray-900 px-3 py-2 text-base font-medium">
                      {item.name}
                    </a>
                  )}
                </div>
              ))}
            </div>
          )}
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex-grow">{children}</main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="col-span-1 md:col-span-2">
              <h3 className="text-lg font-semibold text-gray-900">
                PuertoChenta
              </h3>
              <p className="mt-4 text-base text-gray-600 max-w-md">
                Creando soluciones innovadoras para el futuro digital.
                Especializados en desarrollo web, aplicaciones móviles y
                consultoría tecnológica.
              </p>
              <div className="mt-6 flex space-x-6">
                <a href="#" className="text-gray-400 hover:text-gray-500">
                  <Github className="h-6 w-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-gray-500">
                  <Twitter className="h-6 w-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-gray-500">
                  <Linkedin className="h-6 w-6" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">
                Enlaces Rápidos
              </h3>
              <ul className="mt-4 space-y-4">
                <li>
                  <a
                    href="#"
                    className="text-base text-gray-600 hover:text-gray-900">
                    Acerca de
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-base text-gray-600 hover:text-gray-900">
                    Servicios
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-base text-gray-600 hover:text-gray-900">
                    Contacto
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-base text-gray-600 hover:text-gray-900">
                    Blog
                  </a>
                </li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">
                Legal
              </h3>
              <ul className="mt-4 space-y-4">
                <li>
                  <a
                    href="#"
                    className="text-base text-gray-600 hover:text-gray-900">
                    Privacidad
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-base text-gray-600 hover:text-gray-900">
                    Términos
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-base text-gray-600 hover:text-gray-900">
                    Cookies
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 border-t border-gray-200 pt-8">
            <p className="text-base text-gray-400 text-center">
              © {new Date().getFullYear()} PuertoChenta. Todos los derechos
              reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
